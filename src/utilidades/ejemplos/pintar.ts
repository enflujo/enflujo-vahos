async function inicio() {
  const programa = crearPrograma(gl, pintarFotogramaV, pintarFotogramaF);

  if (!programa) return;
  actualizarDimensiones();
  gl.viewport(0, 0, dims.ancho, dims.alto);

  gl.useProgram(programa);
  const izqInf = [-1, 0];
  const derSup = [0, 1];
  const izqSup = [-1, 1];
  const derInf = [0, 0];
  const positionData = new Float32Array([...izqInf, ...derSup, ...izqSup, ...izqInf, ...derInf, ...derSup]);

  const iPosicion = gl.getAttribLocation(programa, 'aPosicion');
  const iCoordTextura = gl.getAttribLocation(programa, 'aCoordsTextura');

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, coordenadasPosicion(0, 100), gl.STATIC_DRAW);
  gl.vertexAttribPointer(iPosicion, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(iPosicion);

  const texCoordData = new Float32Array(2 * 4 * 6);
  const texCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, texCoordData.byteLength, gl.DYNAMIC_DRAW);
  gl.vertexAttribPointer(iCoordTextura, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(iCoordTextura);

  const getUVs = await createUVLookup();
  const uv1 = getUVs(0);
  if (uv1) texCoordData.set(uv1, 0);
  const uv2 = getUVs(1);
  if (uv2) texCoordData.set(uv2, 12);
  const uv3 = getUVs(2);
  if (uv3) texCoordData.set(uv3, 24);
  const uv4 = getUVs(3);
  if (uv4) texCoordData.set(uv4, 36);

  gl.bufferSubData(gl.ARRAY_BUFFER, 0, texCoordData);

  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, datosImagen.ancho, datosImagen.alto, 0, gl.RGBA, gl.UNSIGNED_BYTE, fondo1);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.drawArrays(gl.TRIANGLES, 0, 6);

  // const datosPosicionesFotoframas = new Float32Array(datosImagen.vertices);

  // const datosPosiciones = new Float32Array([-1, 0, 0, 1, -1, 1, -1, 0, 0, 0, 0, 1]);

  // const datosVertices = new Float32Array([-1, 1, 1, 1, -1, -1, -1, -1, 1, -1, 1, 1]);
  // const datosPosicionPantalla = new Float32Array([-1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1]);
  // // debería estar en un solo buffer, pero para seguir el ejemplo los pongo aparte
  // const datosTexturas = new Float32Array([0, 0, 1, 0, 0.5, 1]);
  // const iPosicion = gl.getAttribLocation(programa, 'aPosicion');
  // const iCoordTextura = gl.getAttribLocation(programa, 'aCoordsTextura');

  // const textura = gl.createTexture();
  // gl.bindTexture(gl.TEXTURE_2D, textura);
  // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, datosImagen.ancho, datosImagen.alto, 0, gl.RGB, gl.UNSIGNED_BYTE, fondo1);
  // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  // const bufferUbicacion = gl.createBuffer();
  // gl.bindBuffer(gl.ARRAY_BUFFER, bufferUbicacion);
  // gl.bufferData(gl.ARRAY_BUFFER, datosPosicionPantalla, gl.STATIC_DRAW);
  // gl.vertexAttribPointer(iPosicion, 2, gl.FLOAT, false, 0, 0);
  // gl.enableVertexAttribArray(iPosicion);

  // const bufferFotogramas = gl.createBuffer();
  // gl.bindBuffer(gl.ARRAY_BUFFER, bufferFotogramas);
  // gl.bufferData(gl.ARRAY_BUFFER, datosPosicionesFotoframas, gl.STATIC_DRAW);
  // gl.vertexAttribPointer(iCoordTextura, 2, gl.FLOAT, false, 0, 0);
  // gl.enableVertexAttribArray(iCoordTextura);

  // // const bufferCoordenadasTexturas = gl.createBuffer();
  // // gl.bindBuffer(gl.ARRAY_BUFFER, bufferCoordenadasTexturas);
  // // gl.bufferData(gl.ARRAY_BUFFER, datosTexturas, gl.STATIC_DRAW);
  // // gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 0, 0);
  // // gl.enableVertexAttribArray(1);

  // gl.drawArrays(gl.TRIANGLES, 0, 6);
}
