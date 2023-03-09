#version 300 es

layout(location = 0) in vec4 aPosicion;
layout(location = 1) in vec2 aTextura;

out vec2 vCoordenadaTextura;

void main() {
  vCoordenadaTextura = aTextura;
  gl_Position = aPosicion;
}
