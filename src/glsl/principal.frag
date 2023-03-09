#version 300 es

precision mediump float;

uniform sampler2D uImagen;
in vec2 v_coordenadaTextura;

out vec4 color;

void main() {
  color = texture(uImagen, v_coordenadaTextura);
}
