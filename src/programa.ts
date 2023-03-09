import './scss/estilos.scss';
// import principalFrag from './glsl/principal.frag';
// import principalVert from './glsl/principal.vert';
import pintarFotogramaV from './glsl/pintarFrame.vert';
import pintarFotogramaF from './glsl/pintarFrame.frag';
import * as datos from './datos';
import { crearPrograma, crearRectangulo, crearShader } from './utilidades/webgl';

const lienzo = <HTMLCanvasElement>document.getElementById('lienzo');
const gl = <WebGL2RenderingContext>lienzo.getContext('webgl2');
const datosImagen = datos.montañaPajaro;
if (!gl) {
  throw new Error('Este explorador no funciona con WebGL 2');
}

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

  gl.useProgram(programa);
  // console.log(datos.fondo1);
  // const fotogramasFondo1 = [];

  // datos.fondo1.fotogramas.forEach((fotograma) => {
  //   fotogramasFondo1.push( fotograma.x / datos.fondo1.ancho);
  //   fotogramasFondo1.push( fotograma.y / datos.fondo1.alto);

  // });

  const datosVertices = new Float32Array([-0.9, -0.9, 0.9, -0.9, 0, 0.9]);
  // debería estar en un solo buffer, pero para seguir el ejemplo los pongo aparte
  const datosTexturas = new Float32Array([0, 0, 1, 0, 0.5, 1]);

  const bufferVertices = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferVertices);
  gl.bufferData(gl.ARRAY_BUFFER, datosVertices, gl.STATIC_DRAW);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(0);

  const bufferCoordenadasTexturas = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferCoordenadasTexturas);
  gl.bufferData(gl.ARRAY_BUFFER, datosTexturas, gl.STATIC_DRAW);
  gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(1);

  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  const textura = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, textura);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, datosImagen.ancho, datosImagen.alto, 0, gl.RGB, gl.UNSIGNED_BYTE, fondo1);

  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}
