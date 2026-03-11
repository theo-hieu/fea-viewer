// Picking Fragment Shader
// Per 02b §6.6: encode 24-bit ID as RGB

uniform vec3 u_pickColor;

void main() {
  gl_FragColor = vec4(u_pickColor, 1.0);
}
