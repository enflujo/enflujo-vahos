#version 300 es

precision highp float;

uniform sampler2D u_imagen;
in vec2 v_coordenadaTextura;

out vec4 color;

void main() {
  color = texture(u_imagen, v_coordenadaTextura);
}
