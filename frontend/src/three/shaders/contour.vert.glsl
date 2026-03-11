// Contour Vertex Shader
// Per 02b §6.2: position = base_position + u_scale * displacement

attribute vec3 displacement;
attribute float scalarValue;

uniform float u_deform_scale;

varying float v_scalar;
varying vec3 v_normal;
varying vec3 v_position;

void main() {
  vec3 deformed = position + u_deform_scale * displacement;
  v_scalar = scalarValue;
  v_normal = normalize(normalMatrix * normal);
  v_position = (modelViewMatrix * vec4(deformed, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(deformed, 1.0);
}
