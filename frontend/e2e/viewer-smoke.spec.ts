import { expect, test, type Page, type Route } from '@playwright/test';

const MODEL_ID = 'e2e-model';

const metadataResponse = {
    metadata: {
        source_filename: 'bracket.vtu',
        file_format: 'vtu',
        format_version: '1.0',
        solver_name: 'CalculiX',
        solver_version: '2.20',
        title: 'Bracket Demo',
        unit_system: {
            length: 'mm',
            force: 'N',
            time: 's',
            temperature: 'C',
            declared_system: 'SI',
        },
        coordinate_system: 'global',
    },
    warnings: [],
};

const treeResponse = {
    id: 'assembly-root',
    name: 'Assembly',
    type: 'assembly',
    children: [
        {
            id: 'part-bracket',
            name: 'Bracket',
            type: 'part',
            children: [],
        },
    ],
};

const fieldsResponse = [
    {
        id: 'temperature',
        name: 'Temperature',
        location: 'nodal',
        n_components: 1,
        n_timesteps: 1,
        timesteps: [{ step_index: 0, time_value: 0 }],
        provenance: {
            source_field_name: 'Temperature',
            source_location: 'nodal',
            extrapolation_applied: false,
            averaging_applied: false,
            averaging_method: null,
            coordinate_system: 'global',
            warnings: [],
        },
    },
    {
        id: 'displacement',
        name: 'Displacement',
        location: 'nodal',
        n_components: 3,
        n_timesteps: 1,
        timesteps: [{ step_index: 0, time_value: 0 }],
        provenance: {
            source_field_name: 'Displacement',
            source_location: 'nodal',
            extrapolation_applied: false,
            averaging_applied: false,
            averaging_method: null,
            coordinate_system: 'global',
            warnings: [],
        },
    },
];

const nodes = new Float64Array([
    0, 0, 0,
    1, 0, 0,
    0, 1, 0,
    0, 0, 1,
]);

const surfaceIndices = new Int32Array([
    0, 1, 2,
    0, 1, 3,
    0, 2, 3,
    1, 2, 3,
]);

const surfaceNormals = new Float32Array([
    0.577, 0.577, 0.577,
    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 0.0, 1.0,
]);

const surfaceElementMap = new Int32Array([0, 1, 2, 3]);

const temperatureValues = new Float64Array([20, 40, 60, 80]);
const displacementValues = new Float64Array([
    0.0, 0.0, 0.0,
    0.05, 0.0, 0.0,
    0.0, 0.05, 0.0,
    0.0, 0.0, 0.05,
]);

test('uploads a model and boots into the viewer', async ({ page }, testInfo) => {
    await mockSuccessfulApi(page);

    await page.goto('/');
    await page.locator('input[type="file"]').setInputFiles({
        name: 'bracket.vtu',
        mimeType: 'application/octet-stream',
        buffer: Buffer.from('<VTKFile/>'),
    });

    await expect(page.locator('.tree-node', { hasText: 'Bracket' })).toBeVisible();
    await expect(page.getByLabel('Result field')).toBeVisible();
    await expect(page.getByLabel('Deformation field')).toBeVisible();

    await page.getByLabel('Deformation field').selectOption('displacement');
    const deformedButton = page.getByRole('button', { name: 'deformed', exact: true });
    await expect(deformedButton).toBeEnabled();
    await deformedButton.click();
    await expect(deformedButton).toHaveClass(/toolbar__btn--active/);

    const bracketNode = page.locator('.tree-node', { hasText: 'Bracket' });
    await page.getByTitle('Hide').first().click();
    await expect(bracketNode).toHaveClass(/tree-node--hidden/);

    await page.screenshot({
        path: testInfo.outputPath('viewer-ready.png'),
        fullPage: true,
    });
});

test('shows upload failures in the sidebar', async ({ page }, testInfo) => {
    await page.route('**/api/v1/models/upload', async (route) => {
        await route.fulfill({
            status: 500,
            contentType: 'text/plain',
            body: 'Upload failed for test fixture',
        });
    });

    await page.goto('/');
    await page.locator('input[type="file"]').setInputFiles({
        name: 'broken.vtu',
        mimeType: 'application/octet-stream',
        buffer: Buffer.from('<broken/>'),
    });

    await expect(page.getByText('Error', { exact: true })).toBeVisible();
    await expect(page.getByText('Upload failed for test fixture')).toBeVisible();

    await page.screenshot({
        path: testInfo.outputPath('upload-error.png'),
        fullPage: true,
    });
});

async function mockSuccessfulApi(page: Page): Promise<void> {
    await page.route('**/api/v1/models/upload', async (route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({ model_id: MODEL_ID }),
        });
    });

    await page.route(`**/api/v1/models/${MODEL_ID}/status`, async (route) => {
        await fulfillJson(route, {
            status: 'ready',
            warnings_count: 0,
        });
    });

    await page.route(`**/api/v1/models/${MODEL_ID}/metadata`, async (route) => {
        await fulfillJson(route, metadataResponse);
    });

    await page.route(`**/api/v1/models/${MODEL_ID}/tree`, async (route) => {
        await fulfillJson(route, treeResponse);
    });

    await page.route(`**/api/v1/models/${MODEL_ID}/fields`, async (route) => {
        await fulfillJson(route, fieldsResponse);
    });

    await page.route(`**/api/v1/models/${MODEL_ID}/sets`, async (route) => {
        await fulfillJson(route, []);
    });

    await page.route(`**/api/v1/models/${MODEL_ID}/nodes`, async (route) => {
        await fulfillBinary(route, Buffer.from(nodes.buffer), {
            'X-Array-Dtype': 'float64',
            'X-Array-Shape': JSON.stringify([4, 3]),
            'X-Array-ByteOrder': 'little',
        });
    });

    await page.route(`**/api/v1/models/${MODEL_ID}/surfaces`, async (route) => {
        const indicesBuffer = Buffer.from(surfaceIndices.buffer);
        const normalsBuffer = Buffer.from(surfaceNormals.buffer);
        const mapBuffer = Buffer.from(surfaceElementMap.buffer);
        const body = Buffer.concat([indicesBuffer, normalsBuffer, mapBuffer]);

        await fulfillBinary(route, body, {
            'X-Array-Dtype': 'mixed',
            'X-Array-Shape': JSON.stringify({
                indices: [surfaceIndices.length],
                normals: [surfaceNormals.length],
                map: [surfaceElementMap.length],
            }),
            'X-Array-ByteOrder': 'little',
            'X-Buffer-Offsets': JSON.stringify({
                indices: [0, indicesBuffer.length],
                normals: [indicesBuffer.length, indicesBuffer.length + normalsBuffer.length],
                map: [
                    indicesBuffer.length + normalsBuffer.length,
                    indicesBuffer.length + normalsBuffer.length + mapBuffer.length,
                ],
            }),
        });
    });

    await page.route(`**/api/v1/models/${MODEL_ID}/fields/temperature/data?step=0`, async (route) => {
        await fulfillBinary(route, Buffer.from(temperatureValues.buffer), {
            'X-Array-Dtype': 'float64',
            'X-Array-Shape': JSON.stringify([temperatureValues.length]),
            'X-Array-ByteOrder': 'little',
        });
    });

    await page.route(`**/api/v1/models/${MODEL_ID}/fields/displacement/data?step=0`, async (route) => {
        await fulfillBinary(route, Buffer.from(displacementValues.buffer), {
            'X-Array-Dtype': 'float64',
            'X-Array-Shape': JSON.stringify([4, 3]),
            'X-Array-ByteOrder': 'little',
        });
    });
}

async function fulfillJson(route: Route, body: unknown): Promise<void> {
    await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(body),
    });
}

async function fulfillBinary(
    route: Route,
    body: Buffer,
    headers: Record<string, string>,
): Promise<void> {
    await route.fulfill({
        status: 200,
        body,
        headers: {
            'Content-Type': 'application/octet-stream',
            ...headers,
        },
    });
}
