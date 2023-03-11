import './scss/estilos.scss';
// import principalFrag from './glsl/principal.frag';
// import principalVert from './glsl/principal.vert';
import pintarFotogramaV from './glsl/pintarFrame.vert';
import pintarFotogramaF from './glsl/pintarFrame.frag';
import datos from './datos';
import { crearPrograma, crearRectangulo, crearShader } from './utilidades/webgl';

const lienzo = <HTMLCanvasElement>document.getElementById('lienzo');
const gl = <WebGL2RenderingContext>lienzo.getContext('webgl2');
const datosImagen = datos.montañaPajaro;
if (!gl) {
  throw new Error('Este explorador no funciona con WebGL 2');
}

console.log(datosImagen);

const fondo1 = new Image();
fondo1.onload = inicio;
fondo1.src = datosImagen.fuente;
let dims = { alto: 0, ancho: 0 };

function actualizarDimensiones() {
  lienzo.width = dims.ancho = window.innerWidth;
  lienzo.height = dims.alto = window.innerHeight;
}

function inicio() {
  const programa = crearPrograma(gl, pintarFotogramaV, pintarFotogramaF);

  if (!programa) return;
  actualizarDimensiones();
  gl.viewport(0, 0, dims.ancho, dims.alto);

  gl.useProgram(programa);

  const datosPosicionesFotoframas = new Float32Array(datosImagen.vertices);

  const datosPosiciones = new Float32Array([
    -1, -1, 0, 1, 1, 1, 1, 0, -1, 1, 0, 0, -1, -1, 0, 1, 1, -1, 1, 1, 1, 1, 1, 0,
  ]);

  const datosVertices = new Float32Array([-1, 1, 1, 1, -1, -1, -1, -1, 1, -1, 1, 1]);
  const datosPosicionPantalla = new Float32Array([-1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1]);
  // debería estar en un solo buffer, pero para seguir el ejemplo los pongo aparte
  const datosTexturas = new Float32Array([0, 0, 1, 0, 0.5, 1]);
  const iPosicion = gl.getAttribLocation(programa, 'aPosicion');
  const iCoordTextura = gl.getAttribLocation(programa, 'aCoordsTextura');

  const textura = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, textura);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, datosImagen.ancho, datosImagen.alto, 0, gl.RGB, gl.UNSIGNED_BYTE, fondo1);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  const bufferUbicacion = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferUbicacion);
  gl.bufferData(gl.ARRAY_BUFFER, datosPosicionPantalla, gl.STATIC_DRAW);
  gl.vertexAttribPointer(iPosicion, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(iPosicion);

  const bufferFotogramas = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferFotogramas);
  gl.bufferData(gl.ARRAY_BUFFER, datosPosicionesFotoframas, gl.STATIC_DRAW);
  gl.vertexAttribPointer(iCoordTextura, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(iCoordTextura);

  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  // const bufferCoordenadasTexturas = gl.createBuffer();
  // gl.bindBuffer(gl.ARRAY_BUFFER, bufferCoordenadasTexturas);
  // gl.bufferData(gl.ARRAY_BUFFER, datosTexturas, gl.STATIC_DRAW);
  // gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 0, 0);
  // gl.enableVertexAttribArray(1);

  gl.drawArrays(gl.TRIANGLES, 0, 6);
}
