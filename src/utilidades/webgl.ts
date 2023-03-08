export function crearShader(gl: WebGL2RenderingContext, tipo: number, fuente: string) {
  const shader = gl.createShader(tipo);

  if (!shader) return;
  gl.shaderSource(shader, fuente);
  gl.compileShader(shader);

  const shaderCompiladoExitosamente: boolean = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (shaderCompiladoExitosamente) {
    return shader;
  }

  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

export function crearPrograma(gl: WebGL2RenderingContext, shaderVert: WebGLShader, shaderFrag: WebGLShader) {
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
}
