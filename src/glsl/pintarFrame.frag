#version 300 es

precision mediump float;

uniform sampler2D uImagen;
in vec2 vCoordenadaTextura;

out vec4 fotograma;

void main() {
  fotograma = texture(uImagen, vCoordenadaTextura);
}
