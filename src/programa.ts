import './scss/estilos.scss';
// import principalFrag from './glsl/principal.frag';
// import principalVert from './glsl/principal.vert';
// import pintarFotogramaV from './glsl/pintarFrame.vert';
// import pintarFotogramaF from './glsl/pintarFrame.frag';
import unaAnimacionVert from './glsl/unaAnimacion.vert';
import unaAnimacionFrag from './glsl/unaAnimacion.frag';

import datos from './datos';
import { crearPrograma, sacarDatosImagen } from './utilidades/webgl';

const lienzo = <HTMLCanvasElement>document.getElementById('lienzo');
const gl = <WebGL2RenderingContext>lienzo.getContext('webgl2');
const datosImagen = datos.fondo1;
if (!gl) {
  throw new Error('Este explorador no funciona con WebGL 2');
}

const fondo1 = new Image();
fondo1.onload = inicio2;
fondo1.src = datosImagen.fuente;
let dims = { alto: 0, ancho: 0 };

function actualizarDimensiones() {
  lienzo.width = dims.ancho = window.innerWidth;
  lienzo.height = dims.alto = window.innerHeight;
}

const createUVLookup = async () => {
  const w = datosImagen.fotogramas[0].ancho / datosImagen.ancho;
  const h = datosImagen.fotogramas[0].alto / datosImagen.alto;
  const hPadding = 0.25 / datosImagen.ancho;
  const vPadding = 0.25 / datosImagen.alto;

  return (fotograma: number) => {
    if (!datosImagen.fotogramas[fotograma]) return null;
    const { x, y } = datosImagen.fotogramas[fotograma];

    return [
      x + hPadding,
      y - vPadding + h,
      x - hPadding + w,
      y + vPadding,
      x + hPadding,
      y + vPadding,

      x + hPadding,
      y - vPadding + h,
      x - hPadding + w,
      y - vPadding + h,
      x - hPadding + w,
      y + vPadding,
    ];
  };
};

// const coordenadasPosicion = (x0: number, y0: number) => {
//   const { ancho: x20, alto: y20 } = datosImagen.fotogramas[0];
//   const { ancho, alto } = dims;
//   const x1 = (x0 / ancho) * 2 - 1;
//   const y1 = ((y0 / alto) * 2 - 1) * -1;
//   const x2 = (x20 / ancho) * 2 - 1;
//   const y2 = ((y20 / alto) * 2 - 1) * -1;

//   const izqInf = [x1, y2];
//   const derSup = [x2, y1];
//   const izqSup = [x1, y1];
//   const derInf = [x2, y2];
//   return new Float32Array([...izqInf, ...derSup, ...izqSup, ...izqInf, ...derInf, ...derSup]);
// };

// prettier-ignore
const rectanguloCompletoUVS = [
  0,1, // Inferior izquierda
  1,0, // Superior derecha
  0,0, // Superior izquierda 
  0,1, // Inferior izquierda
  1,1, // Inferior derecha
  1,0 // Superior derecha
];

const coordenadasPosicion = (x: number, y: number) => {
  const infIzq = [x, alto + y];
  const supDer = [x + ancho, y];
  const supIzq = [x, y];
  const infDer = [x + ancho, y + alto];
  return { infIzq, supDer, supIzq, infDer };
};

// const construirDatosPosiciones = (x: number, y: number) => {
//   const;
// };

function inicio2() {
  const programa = crearPrograma(gl, unaAnimacionVert, unaAnimacionFrag);
  const extractorDatosImagen = sacarDatosImagen();
  const pixeles = extractorDatosImagen(fondo1);

  if (!pixeles) {
    throw new Error(`No se pudo extraer los datos de la imagen ${datosImagen.fuente}`);
  }

  if (!programa) {
    throw new Error(`No se pudo cargar el programa de WebGL`);
  }

  const { ancho: anchoFotograma, alto: altoFotograma } = datosImagen.fotogramas[0];
  const totalFotograma = datosImagen.fotogramas.length;

  const iPosicion = gl.getAttribLocation(programa, 'aPosicion');
  const iCoordTextura = gl.getAttribLocation(programa, 'aCoordTextura');
  const iIndiceFotograma = gl.getAttribLocation(programa, 'aIndiceFotograma');
  const iResolucionPantalla = gl.getUniformLocation(programa, 'uResolucionPantalla');
  // const iResolucionFotograma = gl.getUniformLocation(programa, 'uResolucionFotograma');
  actualizarDimensiones();

  gl.viewport(0, 0, dims.ancho, dims.alto);
  gl.useProgram(programa);

  gl.uniform2f(iResolucionPantalla, dims.ancho, dims.alto);
  // gl.uniform2f(iResolucionFotograma, anchoFotograma, altoFotograma);

  const textura = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D_ARRAY, textura);
  const nivelesMipmap = 1;
  const formatoPixeles = gl.RGBA8;

  const x = 0;
  const y = 0;
  let ancho = anchoFotograma;
  let alto = altoFotograma;

  if (ancho > dims.ancho) {
    ancho = dims.ancho;
    alto = alto * (dims.ancho / anchoFotograma);
  } else {
    if (alto > dims.alto) {
      alto = dims.alto;
      ancho = ancho * (dims.alto / altoFotograma);
    }
  }

  const infIzq = [x, alto + y];
  const supDer = [x + ancho, y];
  const supIzq = [x, y];
  const infDer = [x + ancho, y + alto];
  console.log(fondo1.naturalWidth / dims.ancho, anchoFotograma / altoFotograma);

  // prettier-ignore
  const positionData = new Float32Array([
  //posición    // UV
  ...infIzq,    0,1, 
  ...supDer,    1,0, 
  ...supIzq,    0,0, 
  ...infIzq,    0,1, 
  ...infDer,    1,1, 
  ...supDer,    1,0
]);

  gl.texStorage3D(gl.TEXTURE_2D_ARRAY, nivelesMipmap, formatoPixeles, anchoFotograma, altoFotograma, totalFotograma);

  const pbo = gl.createBuffer();
  gl.bindBuffer(gl.PIXEL_UNPACK_BUFFER, pbo);
  gl.bufferData(gl.PIXEL_UNPACK_BUFFER, pixeles, gl.STATIC_DRAW);

  gl.pixelStorei(gl.UNPACK_ROW_LENGTH, fondo1.width);
  gl.pixelStorei(gl.UNPACK_IMAGE_HEIGHT, fondo1.height);

  for (let i = 0; i < totalFotograma; i++) {
    const { x, y } = datosImagen.fotogramas[i];
    gl.pixelStorei(gl.UNPACK_SKIP_PIXELS, x);
    gl.pixelStorei(gl.UNPACK_SKIP_ROWS, y);
    gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, 0, 0, 0, i, anchoFotograma, altoFotograma, 1, gl.RGBA, gl.UNSIGNED_BYTE, 0);
  }

  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, positionData, gl.STATIC_DRAW);
  gl.vertexAttribPointer(iPosicion, 2, gl.FLOAT, false, 16, 0);
  gl.vertexAttribPointer(iCoordTextura, 2, gl.FLOAT, false, 16, 8);
  gl.enableVertexAttribArray(iPosicion);
  gl.enableVertexAttribArray(iCoordTextura);

  gl.generateMipmap(gl.TEXTURE_2D_ARRAY);
  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_BASE_LEVEL, 0);

  let contador = 0;
  const velocidad = 4;
  let fotograma = 0;
  requestAnimationFrame(animar);
  function animar() {
    if (contador === velocidad) {
      gl.vertexAttrib1f(iIndiceFotograma, fotograma);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      contador = 0;
      fotograma = (fotograma + 1) % totalFotograma;
    }

    contador++;
    requestAnimationFrame(animar);
  }
}
