#version 300 es
#pragma vscode_glsllint_stage: vert

in vec2 aPosicion;
in vec2 aCoordTextura;
in float aIndiceFotograma;
uniform vec2 uResolucionPantalla;
// uniform vec2 uResolucionFotograma;

out vec2 vCoordTextura;
out float vIndiceFotograma;

void main() {
  // vec2 posicionFotograma = aPosicion / uResolucionFotograma;

  // Convertir de pixeles a -1.0 -> 1.0
  vec2 espacioWebGL = aPosicion / uResolucionPantalla * 2.0 - 1.0;

  // espacioWebGL * vec2(1, -1) invierte el Y para que sea igual a lo que uno hace en otros programas donde 0 esta arriba y no abajo.
  gl_Position = vec4(espacioWebGL * vec2(1, -1), 0, 1);

  vIndiceFotograma = aIndiceFotograma;
  vCoordTextura = aCoordTextura;
}
