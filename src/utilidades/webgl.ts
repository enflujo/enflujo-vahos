/**
 * Carga el programa GLSL a la GPU y lo compila.
 *
 * @param gl Contexto del WebGL 2
 * @param tipo Típo de shader gl.VERTEX_SHADER o gl.FRAGMENT_SHADER
 * @param glsl Código GLSL del shader
 * @returns El shader compilado.
 */
export function crearShader(gl: WebGL2RenderingContext, tipo: number, glsl: string): WebGLShader | undefined {
  const shader = gl.createShader(tipo);

  if (!shader) return;
  gl.shaderSource(shader, glsl);
  gl.compileShader(shader);

  const shaderCompiladoExitosamente: boolean = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (shaderCompiladoExitosamente) {
    return shader;
  }

  // En este punto el shader no se pudo compilar.
  console.log(gl.getShaderInfoLog(shader)); // Imprime información del shader que no se pudo compilar.
  gl.deleteShader(shader); // Limpia el proceso de la GPU.
  return;
}

/**
 * Crea un programa con la pareja de shaders en la GPU.
 *
 * @param gl Contexto del WebGL 2
 * @param shaderVert Shader de vertices compilado.
 * @param shaderFrag Shader de fragmentos compilado.
 * @returns Programa compilado
 */
export function crearPrograma(
  gl: WebGL2RenderingContext,
  codigoVert: string,
  codigoFrag: string
): WebGLProgram | undefined {
  const shaderVert = crearShader(gl, gl.VERTEX_SHADER, codigoVert);
  const shaderFrag = crearShader(gl, gl.FRAGMENT_SHADER, codigoFrag);

  if (!shaderVert || !shaderFrag) return;

  const programa = gl.createProgram();

  if (!programa) return;
  gl.attachShader(programa, shaderVert);
  gl.attachShader(programa, shaderFrag);
  gl.linkProgram(programa);

  const programaCompiladoExitosamente = gl.getProgramParameter(programa, gl.LINK_STATUS);
  if (programaCompiladoExitosamente) {
    return programa;
  }

  console.log(gl.getProgramInfoLog(programa));
  gl.deleteProgram(programa);
  return;
}

export function crearRectangulo(gl: WebGL2RenderingContext, x1: number, y1: number, ancho: number, alto: number) {
  const x2 = x1 + ancho;
  const y2 = y1 + alto;
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]), gl.STATIC_DRAW);
}

export function sacarDatosImagen() {
  const lienzo = document.createElement('canvas');
  const ctx = lienzo.getContext('2d');

  return (img: HTMLImageElement) => {
    const { naturalWidth, naturalHeight } = img;
    lienzo.width = naturalWidth;
    lienzo.height = naturalHeight;

    ctx?.drawImage(img, 0, 0);

    return ctx?.getImageData(0, 0, naturalWidth, naturalHeight).data;
  };
}
