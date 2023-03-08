import './scss/estilos.scss';
import principalFrag from './glsl/principal.frag';
import principalVert from './glsl/principal.vert';
import { crearPrograma, crearShader } from './utilidades/webgl';

const lienzo = <HTMLCanvasElement>document.getElementById('lienzo');
const gl = lienzo.getContext('webgl2');

function prepararPrograma() {
  if (!gl) {
    throw new Error('Este explorador no funciona con WebGL 2');
  }
  const shaderVert = crearShader(gl, gl.VERTEX_SHADER, principalVert);
  const shaderFrag = crearShader(gl, gl.FRAGMENT_SHADER, principalFrag);

  if (!shaderVert || !shaderFrag) return;

  const programa = crearPrograma(gl, shaderVert, shaderFrag);

  if (!programa) return;

  const ubicacionAtributoPosicion = gl.getAttribLocation(programa, 'a_posicion');
  const datosPosicion = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, datosPosicion);

  const posiciones = [0, 0, 0, 0.5, 0.7, 0];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(posiciones), gl.STATIC_DRAW);

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  gl.enableVertexAttribArray(ubicacionAtributoPosicion);

  const size = 2;
  const type = gl.FLOAT;
  const normalize = false;
  const stride = 0;
  const offset = 0;
  gl.vertexAttribPointer(ubicacionAtributoPosicion, size, type, normalize, stride, offset);
}

prepararPrograma();
