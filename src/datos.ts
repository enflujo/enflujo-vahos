interface DatosFotograma {
  x: number;
  y: number;
  ancho: number;
  alto: number;
}
interface DatosImagen {
  fuente: string;
  ancho: number;
  alto: number;
  columnas: number;
  filas: number;
  fotogramas: DatosFotograma[];
  vertices: number[];
}

interface Datos {}

const datos: { [llave: string]: DatosImagen } = {
  anaSol: {
    fuente: '/anaSol_5x1-3115x600_1.webp',
    ancho: 3115,
    alto: 600,
    columnas: 5,
    filas: 1,
    fotogramas: [
      { x: 0, y: 0, ancho: 623, alto: 600 },
      { x: 623, y: 0, ancho: 623, alto: 600 },
      { x: 1246, y: 0, ancho: 623, alto: 600 },
      { x: 1869, y: 0, ancho: 623, alto: 600 },
      { x: 2492, y: 0, ancho: 623, alto: 600 },
    ],
    vertices: [],
  },
  fondo1: {
    fuente: '/fondo1_5x1-10829x1080_1.webp',
    ancho: 10829,
    alto: 1080,
    columnas: 5,
    filas: 1,
    fotogramas: [
      { x: 0, y: 0, ancho: 2165, alto: 1080 },
      { x: 2165, y: 0, ancho: 2165, alto: 1080 },
      { x: 4330, y: 0, ancho: 2165, alto: 1080 },
      { x: 6495, y: 0, ancho: 2165, alto: 1080 },
      { x: 8660, y: 0, ancho: 2165, alto: 1080 },
    ],
    vertices: [],
  },
  fondo2: {
    fuente: '/fondo2_5x1-13806x1080_1.webp',
    ancho: 13806,
    alto: 1080,
    columnas: 5,
    filas: 1,
    fotogramas: [
      { x: 0, y: 0, ancho: 2761, alto: 1080 },
      { x: 2761, y: 0, ancho: 2761, alto: 1080 },
      { x: 5522, y: 0, ancho: 2761, alto: 1080 },
      { x: 8283, y: 0, ancho: 2761, alto: 1080 },
      { x: 11044, y: 0, ancho: 2761, alto: 1080 },
    ],
    vertices: [],
  },
  fondo3: {
    fuente: '/fondo3_5x1-15154x800_1.webp',
    ancho: 15154,
    alto: 800,
    columnas: 5,
    filas: 1,
    fotogramas: [
      { x: 0, y: 0, ancho: 3030, alto: 800 },
      { x: 3030, y: 0, ancho: 3030, alto: 800 },
      { x: 6060, y: 0, ancho: 3030, alto: 800 },
      { x: 9090, y: 0, ancho: 3030, alto: 800 },
      { x: 12120, y: 0, ancho: 3030, alto: 800 },
    ],
    vertices: [],
  },
  montañaPajaro: {
    fuente: '/montañaPajaro_3x7-6204x2520_1.webp',
    ancho: 6204,
    alto: 2520,
    columnas: 3,
    filas: 7,
    fotogramas: [
      { x: 0, y: 0, ancho: 2068, alto: 360 },
      { x: 2068, y: 0, ancho: 2068, alto: 360 },
      { x: 4136, y: 0, ancho: 2068, alto: 360 },
      { x: 0, y: 360, ancho: 2068, alto: 360 },
      { x: 2068, y: 360, ancho: 2068, alto: 360 },
      { x: 4136, y: 360, ancho: 2068, alto: 360 },
      { x: 0, y: 720, ancho: 2068, alto: 360 },
      { x: 2068, y: 720, ancho: 2068, alto: 360 },
      { x: 4136, y: 720, ancho: 2068, alto: 360 },
      { x: 0, y: 1080, ancho: 2068, alto: 360 },
      { x: 2068, y: 1080, ancho: 2068, alto: 360 },
      { x: 4136, y: 1080, ancho: 2068, alto: 360 },
      { x: 0, y: 1440, ancho: 2068, alto: 360 },
      { x: 2068, y: 1440, ancho: 2068, alto: 360 },
      { x: 4136, y: 1440, ancho: 2068, alto: 360 },
      { x: 0, y: 1800, ancho: 2068, alto: 360 },
      { x: 2068, y: 1800, ancho: 2068, alto: 360 },
      { x: 4136, y: 1800, ancho: 2068, alto: 360 },
      { x: 0, y: 2160, ancho: 2068, alto: 360 },
      { x: 2068, y: 2160, ancho: 2068, alto: 360 },
      { x: 4136, y: 2160, ancho: 2068, alto: 360 },
    ],
    vertices: [],
  },
  giraSol: {
    fuente: '/giraSol_4x4-2683x3000_1.webp',
    ancho: 2683,
    alto: 3000,
    columnas: 4,
    filas: 4,
    fotogramas: [
      { x: 0, y: 0, ancho: 670, alto: 750 },
      { x: 670, y: 0, ancho: 670, alto: 750 },
      { x: 1340, y: 0, ancho: 670, alto: 750 },
      { x: 2010, y: 0, ancho: 670, alto: 750 },
      { x: 0, y: 750, ancho: 670, alto: 750 },
      { x: 670, y: 750, ancho: 670, alto: 750 },
      { x: 1340, y: 750, ancho: 670, alto: 750 },
      { x: 2010, y: 750, ancho: 670, alto: 750 },
      { x: 0, y: 1500, ancho: 670, alto: 750 },
      { x: 670, y: 1500, ancho: 670, alto: 750 },
      { x: 1340, y: 1500, ancho: 670, alto: 750 },
      { x: 2010, y: 1500, ancho: 670, alto: 750 },
      { x: 0, y: 2250, ancho: 670, alto: 750 },
      { x: 670, y: 2250, ancho: 670, alto: 750 },
      { x: 1340, y: 2250, ancho: 670, alto: 750 },
      { x: 2010, y: 2250, ancho: 670, alto: 750 },
    ],
    vertices: [],
  },
  arbolSol: {
    fuente: '/arbolSol_7x2-7922x2000_1.webp',
    ancho: 7922,
    alto: 2000,
    columnas: 7,
    filas: 2,
    fotogramas: [
      { x: 0, y: 0, ancho: 1131, alto: 1000 },
      { x: 1131, y: 0, ancho: 1131, alto: 1000 },
      { x: 2262, y: 0, ancho: 1131, alto: 1000 },
      { x: 3393, y: 0, ancho: 1131, alto: 1000 },
      { x: 4524, y: 0, ancho: 1131, alto: 1000 },
      { x: 5655, y: 0, ancho: 1131, alto: 1000 },
      { x: 6786, y: 0, ancho: 1131, alto: 1000 },
      { x: 0, y: 1000, ancho: 1131, alto: 1000 },
      { x: 1131, y: 1000, ancho: 1131, alto: 1000 },
      { x: 2262, y: 1000, ancho: 1131, alto: 1000 },
      { x: 3393, y: 1000, ancho: 1131, alto: 1000 },
      { x: 4524, y: 1000, ancho: 1131, alto: 1000 },
      { x: 5655, y: 1000, ancho: 1131, alto: 1000 },
      { x: 6786, y: 1000, ancho: 1131, alto: 1000 },
    ],
    vertices: [],
  },
  fondo4: {
    fuente: '/fondo4_5x1-11720x1000_1.webp',
    ancho: 11720,
    alto: 1000,
    columnas: 5,
    filas: 1,
    fotogramas: [
      { x: 0, y: 0, ancho: 2344, alto: 1000 },
      { x: 2344, y: 0, ancho: 2344, alto: 1000 },
      { x: 4688, y: 0, ancho: 2344, alto: 1000 },
      { x: 7032, y: 0, ancho: 2344, alto: 1000 },
      { x: 9376, y: 0, ancho: 2344, alto: 1000 },
    ],
    vertices: [],
  },
  pasto: {
    fuente: '/pasto_5x3-5598x2000_1.webp',
    ancho: 5598,
    alto: 2000,
    columnas: 5,
    filas: 3,
    fotogramas: [
      { x: 0, y: 0, ancho: 1119, alto: 666 },
      { x: 1119, y: 0, ancho: 1119, alto: 666 },
      { x: 2238, y: 0, ancho: 1119, alto: 666 },
      { x: 3357, y: 0, ancho: 1119, alto: 666 },
      { x: 4476, y: 0, ancho: 1119, alto: 666 },
      { x: 0, y: 666, ancho: 1119, alto: 666 },
      { x: 1119, y: 666, ancho: 1119, alto: 666 },
      { x: 2238, y: 666, ancho: 1119, alto: 666 },
      { x: 3357, y: 666, ancho: 1119, alto: 666 },
      { x: 4476, y: 666, ancho: 1119, alto: 666 },
      { x: 0, y: 1332, ancho: 1119, alto: 666 },
      { x: 1119, y: 1332, ancho: 1119, alto: 666 },
      { x: 2238, y: 1332, ancho: 1119, alto: 666 },
      { x: 3357, y: 1332, ancho: 1119, alto: 666 },
      { x: 4476, y: 1332, ancho: 1119, alto: 666 },
    ],
    vertices: [],
  },
};

for (const llave in datos) {
  const imagen = datos[llave];
  imagen.vertices = [];
  imagen.fotogramas.forEach((fotograma) => {
    const ancho = (fotograma.ancho / imagen.ancho) * 2 - 1;
    const alto = (fotograma.alto / imagen.alto) * 2 - 1;
    const x = (fotograma.x / imagen.ancho) * 2 - 1;
    const y = (fotograma.y / imagen.alto) * 2 - 1;
    /**
     * +
     * |\
     */
    const puntoSupIzq = [x, y];
    const puntoInfDer = [ancho, alto];
    const puntoInfIzq = [x, alto];
    const puntoSupDer = [ancho, y];

    imagen.vertices?.push(
      ...puntoSupIzq,
      ...puntoInfDer,
      ...puntoInfIzq,
      ...puntoSupIzq,
      ...puntoSupDer,
      ...puntoInfDer
    );

    // return [...[x, y, ancho, alto]];
  });
}

export default datos;
