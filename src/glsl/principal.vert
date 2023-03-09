#version 300 es

in vec2 a_posicion;
in vec2 a_textura;
uniform vec2 u_resolucion;
out vec2 v_coordenadaTextura;

void main() {
  // Convertir de pixeles a 0.0 -> 1.0
  vec2 ceroAUno = a_posicion / u_resolucion;

  // convertir de 0.0 -> 1.0 a 0.0 -> 2.0
  vec2 ceroADos = ceroAUno * 2.0;

  // convertir de 0.0 -> 2.0 a -1.0 -> 1.0
  vec2 espacioWebGL = ceroADos - 1.0;

  // espacioWebGL * vec2(1, -1) invierte el Y para que sea igual a lo que uno hace en otros programas donde 0 esta arriba y no abajo.
  gl_Position = vec4(espacioWebGL * vec2(1, -1), 0, 1);
  v_coordenadaTextura = a_textura;
}
