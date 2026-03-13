// Contour Fragment Shader
// Per 02b §6.4: LUT sample, NaN → grey, above/below range colors

uniform sampler2D u_lut;
uniform float u_min;
uniform float u_max;
uniform bool u_use_flat_shading;
uniform vec4 u_nan_color;
uniform vec4 u_above_color;
uniform vec4 u_below_color;

varying float v_scalar;
varying vec3 v_normal;
varying vec3 v_position;

void main() {
  // NaN check: NaN != NaN
  if (v_scalar != v_scalar) {
    gl_FragColor = u_nan_color;
    return;
  }

  float range = u_max - u_min;
  float t;

  if (range <= 0.0) {
    t = 0.5;
  } else {
    t = (v_scalar - u_min) / range;
  }

  // Below/above range clamping
  if (t < 0.0) {
    gl_FragColor = u_below_color;
    return;
  }
  if (t > 1.0) {
    gl_FragColor = u_above_color;
    return;
  }

  // Sample LUT texture
  vec4 color = texture2D(u_lut, vec2(t, 0.5));

  // Basic directional lighting
  vec3 shadedNormal = normalize(v_normal);
  if (u_use_flat_shading) {
    shadedNormal = normalize(cross(dFdx(v_position), dFdy(v_position)));
    if (!gl_FrontFacing) {
      shadedNormal *= -1.0;
    }
  }
  vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
  float diffuse = max(dot(shadedNormal, lightDir), 0.0);
  float ambient = 0.3;
  float lighting = ambient + (1.0 - ambient) * diffuse;

  gl_FragColor = vec4(color.rgb * lighting, color.a);
}
