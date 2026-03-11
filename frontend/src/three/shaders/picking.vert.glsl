// Picking Vertex Shader
// Per 02b §6.6: passthrough position for ID-encoded rendering

attribute vec3 displacement;
uniform float u_deform_scale;

void main() {
  vec3 deformed = position + u_deform_scale * displacement;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(deformed, 1.0);
}
