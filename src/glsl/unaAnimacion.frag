#version 300 es
#pragma vscode_glsllint_stage: frag

precision mediump float;
uniform mediump sampler2DArray uTextura;
in vec2 vCoordTextura;
in float vIndiceFotograma;
out vec4 fotograma;

void main() {
  fotograma = texture(uTextura, vec3(vCoordTextura, vIndiceFotograma));
}
