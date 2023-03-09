import { crearPrograma, crearShader } from '../webgl';
import principalVert from '../glsl/principal.vert';
import principalFrag from '../glsl/principal.frag';

function prepararPrograma(gl: WebGL2RenderingContext) {
  const shaderVert = crearShader(gl, gl.VERTEX_SHADER, principalVert);
  const shaderFrag = crearShader(gl, gl.FRAGMENT_SHADER, principalFrag);

  if (!shaderVert || !shaderFrag) return;

  const programa = crearPrograma(gl, shaderVert, shaderFrag);

  if (!programa) return;

  // Con los shaders compilados y el programa creado, se cargan los datos a la GPU para que los ejecute el programa con los shaders.
  const ubicacionAtributoPosicion = gl.getAttribLocation(programa, 'a_posicion');
  const ubicacionUniformeResolucion = gl.getUniformLocation(programa, 'u_resolucion');
  const ubicacionUColor = gl.getUniformLocation(programa, 'u_color');
  const datosPosicion = gl.createBuffer(); // buffer donde se cargan los datos.
  gl.bindBuffer(gl.ARRAY_BUFFER, datosPosicion); // Montar el buffer a la GPU para que reciba los datos.

  // Subir los datos de posiciones al buffer e indicar como se van a pintar.

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([10, 20, 80, 20, 10, 30, 10, 30, 80, 20, 80, 30]), gl.STATIC_DRAW);

  // Con los datos cargados en la GPU, le indicamos al atributo como sacar los datos.

  // Creamos una colección de estados del atributo en un "Vertex Array Object" (vao).
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao); // Hacer que este Vertex Array sea el actual en la GPU para que por ahí pasen los atributos.
  gl.enableVertexAttribArray(ubicacionAtributoPosicion); // Activar el Vertex Array, esto le indica a la GPU que saque datos de este buffer.

  // La forma como la GPU extrae los datos.
  const gruposDe = 2; // 2 elementos del array en cada iteración.
  const tipo = gl.FLOAT; // El tipo de dato es 32bit (definido antes en las posiciones que montamos en el Float32Array)
  const normalizar = false; // No debe normalizar los datos.
  const paso = 0; // como saltar de un dato al siguiente en el array, 0 significa que no haga saltos por encima de lo ya definido en "gruposDe"
  const iniciarEnPosicion = 0; // Donde empezar a leer en el array, 0 es al inicio del array.
  gl.vertexAttribPointer(ubicacionAtributoPosicion, gruposDe, tipo, normalizar, paso, iniciarEnPosicion);

  // actualizarDimensiones();

  // Esto mapea las dimensiones en WebGL que va de -1 a 1 a los pixeles de la pantalla.
  gl.viewport(0, 0, dims.ancho, dims.alto);

  // Borrar el lienzo
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Decirle a WebGL que ejecute el programa
  gl.useProgram(programa);

  gl.uniform2f(ubicacionUniformeResolucion, dims.ancho, dims.alto);
  gl.uniform4f(ubicacionUColor, Math.random(), Math.random(), Math.random(), 1);
  // Indicarle al WebGL cual buffer o conjunto de datos debe ejecutar.
  gl.bindVertexArray(vao);

  const modoDePintar = gl.TRIANGLES;
  const iniciarEn = 0;
  const iteraciones = 6; // Cuantas veces ejecutar el programa. Depende de la forma de los datos, acá hay 3 grupos de 2 para X y Y.
  gl.drawArrays(modoDePintar, iniciarEn, iteraciones);
}

// prepararPrograma();
