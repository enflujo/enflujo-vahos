function inicio() {
  const shaderVert = crearShader(gl, gl.VERTEX_SHADER, principalVert);
  const shaderFrag = crearShader(gl, gl.FRAGMENT_SHADER, principalFrag);

  if (!shaderVert || !shaderFrag) return;

  const programa = crearPrograma(gl, shaderVert, shaderFrag);

  if (!programa) return;
  const ubicacionAtributoPosicion = gl.getAttribLocation(programa, 'a_posicion');
  const ubicacionATextura = gl.getAttribLocation(programa, 'a_textura');

  const ubicacionUResolucion = gl.getUniformLocation(programa, 'u_resolucion');
  const ubicacionImagen = gl.getUniformLocation(programa, 'u_imagen');

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  const datosPosicion = gl.createBuffer();
  gl.enableVertexAttribArray(ubicacionAtributoPosicion);
  gl.bindBuffer(gl.ARRAY_BUFFER, datosPosicion);

  gl.vertexAttribPointer(ubicacionAtributoPosicion, 2, gl.FLOAT, false, 0, 0);

  const datosTextura = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, datosTextura);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]),
    gl.STATIC_DRAW
  );

  gl.enableVertexAttribArray(ubicacionATextura);
  gl.vertexAttribPointer(ubicacionATextura, 2, gl.FLOAT, false, 0, 0);

  const textura = gl.createTexture();
  gl.activeTexture(gl.TEXTURE0 + 0);
  gl.bindTexture(gl.TEXTURE_2D, textura);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, fondo1);

  actualizarDimensiones();
  gl.viewport(0, 0, dims.ancho, dims.alto);

  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  gl.useProgram(programa);
  gl.bindVertexArray(vao);

  gl.uniform2f(ubicacionUResolucion, dims.ancho, dims.alto);
  gl.uniform1i(ubicacionImagen, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, datosPosicion);

  crearRectangulo(gl, 0, 0, fondo1.naturalWidth, fondo1.naturalHeight);

  gl.drawArrays(gl.TRIANGLES, 0, 6);
}
