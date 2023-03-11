#version 300 es

in vec4 aPosicion;
in vec2 aCoordsTextura;

out vec2 vCoordenadaTextura;

void main() {
  vCoordenadaTextura = aCoordsTextura;
  gl_Position = aPosicion;
}
