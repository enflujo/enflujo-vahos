import { ISpritesheetData } from 'pixijs';

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
  invertido?: boolean;
  fotogramas: DatosFotograma[];
}

const datos: { [llave: string]: DatosImagen } = {
  anaSol: {
    fuente: '/anaSol_5x1-3115x600_1_CC.webp',
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
  },

  fondo1: {
    fuente: '/fondo1_5x1-10829x1080_1_CC.webp',
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
  },
  fondo2: {
    fuente: '/fondo2_5x1-13806x1080_1_CC.webp',
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
  },
  fondo3: {
    fuente: '/fondo3_5x1-15154x800_1_CC.webp',
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
  },
  giraSol: {
    fuente: '/giraSol_4x4-2683x3000_1_CC.webp',
    ancho: 2683,
    alto: 3000,
    columnas: 4,
    filas: 4,
    invertido: true,
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
  },
  arbolSol: {
    fuente: '/arbolSol_7x2-7922x2000_1_CC.webp',
    ancho: 7922,
    alto: 2000,
    columnas: 7,
    filas: 2,
    invertido: true,
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
  },
  fondo4: {
    fuente: '/fondo4_5x1-11720x1000_1_CC.webp',
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
  },
  pasto: {
    fuente: '/pasto_5x3-5598x2000_1_CC.webp',
    ancho: 5598,
    alto: 2000,
    columnas: 5,
    filas: 3,
    invertido: true,
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
  },

  montañaArboles: {
    fuente: '/montañaArboles_5x2-3154x900_1_CC.webp',
    ancho: 3154,
    alto: 900,
    columnas: 5,
    filas: 2,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 630, alto: 450 },
      { x: 630, y: 0, ancho: 630, alto: 450 },
      { x: 1260, y: 0, ancho: 630, alto: 450 },
      { x: 1890, y: 0, ancho: 630, alto: 450 },
      { x: 2520, y: 0, ancho: 630, alto: 450 },
      { x: 0, y: 450, ancho: 630, alto: 450 },
      { x: 630, y: 450, ancho: 630, alto: 450 },
      { x: 1260, y: 450, ancho: 630, alto: 450 },
      { x: 1890, y: 450, ancho: 630, alto: 450 },
      { x: 2520, y: 450, ancho: 630, alto: 450 },
    ],
  },

  lampara: {
    fuente: '/lampara_3x3-687x800_1.webp',
    ancho: 687,
    alto: 800,
    columnas: 3,
    filas: 3,
    fotogramas: [
      { x: 0, y: 0, ancho: 229, alto: 266 },
      { x: 229, y: 0, ancho: 229, alto: 266 },
      { x: 458, y: 0, ancho: 229, alto: 266 },
      { x: 0, y: 266, ancho: 229, alto: 266 },
      { x: 229, y: 266, ancho: 229, alto: 266 },
      { x: 458, y: 266, ancho: 229, alto: 266 },
      { x: 0, y: 532, ancho: 229, alto: 266 },
      { x: 229, y: 532, ancho: 229, alto: 266 },
      { x: 458, y: 532, ancho: 229, alto: 266 },
    ],
  },

  floresExplosivas: {
    fuente: '/floresExplosivas_11x2-8575x1200_1.webp',
    ancho: 8575,
    alto: 1200,
    columnas: 11,
    filas: 2,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 779, alto: 600 },
      { x: 779, y: 0, ancho: 779, alto: 600 },
      { x: 1558, y: 0, ancho: 779, alto: 600 },
      { x: 2337, y: 0, ancho: 779, alto: 600 },
      { x: 3116, y: 0, ancho: 779, alto: 600 },
      { x: 3895, y: 0, ancho: 779, alto: 600 },
      { x: 4674, y: 0, ancho: 779, alto: 600 },
      { x: 5453, y: 0, ancho: 779, alto: 600 },
      { x: 6232, y: 0, ancho: 779, alto: 600 },
      { x: 7011, y: 0, ancho: 779, alto: 600 },
      { x: 7790, y: 0, ancho: 779, alto: 600 },
      { x: 0, y: 600, ancho: 779, alto: 600 },
      { x: 779, y: 600, ancho: 779, alto: 600 },
      { x: 1558, y: 600, ancho: 779, alto: 600 },
      { x: 2337, y: 600, ancho: 779, alto: 600 },
      { x: 3116, y: 600, ancho: 779, alto: 600 },
      { x: 3895, y: 600, ancho: 779, alto: 600 },
      { x: 4674, y: 600, ancho: 779, alto: 600 },
      { x: 5453, y: 600, ancho: 779, alto: 600 },
      { x: 6232, y: 600, ancho: 779, alto: 600 },
      { x: 7011, y: 600, ancho: 779, alto: 600 },
      { x: 7790, y: 600, ancho: 779, alto: 600 },
    ],
  },

  pescadini: {
    fuente: '/pescadini_5x2-2128x1500_1_CC.webp',
    ancho: 2128,
    alto: 1500,
    columnas: 5,
    filas: 2,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 425, alto: 750 },
      { x: 425, y: 0, ancho: 425, alto: 750 },
      { x: 850, y: 0, ancho: 425, alto: 750 },
      { x: 1275, y: 0, ancho: 425, alto: 750 },
      { x: 1700, y: 0, ancho: 425, alto: 750 },
      { x: 0, y: 750, ancho: 425, alto: 750 },
      { x: 425, y: 750, ancho: 425, alto: 750 },
      { x: 850, y: 750, ancho: 425, alto: 750 },
      { x: 1275, y: 750, ancho: 425, alto: 750 },
      { x: 1700, y: 750, ancho: 425, alto: 750 },
    ],
  },

  monstruoMar: {
    fuente: '/monstruoMar_7x4-4108x1200_1.webp',
    ancho: 4108,
    alto: 1200,
    columnas: 7,
    filas: 4,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 586, alto: 300 },
      { x: 586, y: 0, ancho: 586, alto: 300 },
      { x: 1172, y: 0, ancho: 586, alto: 300 },
      { x: 1758, y: 0, ancho: 586, alto: 300 },
      { x: 2344, y: 0, ancho: 586, alto: 300 },
      { x: 2930, y: 0, ancho: 586, alto: 300 },
      { x: 3516, y: 0, ancho: 586, alto: 300 },
      { x: 0, y: 300, ancho: 586, alto: 300 },
      { x: 586, y: 300, ancho: 586, alto: 300 },
      { x: 1172, y: 300, ancho: 586, alto: 300 },
      { x: 1758, y: 300, ancho: 586, alto: 300 },
      { x: 2344, y: 300, ancho: 586, alto: 300 },
      { x: 2930, y: 300, ancho: 586, alto: 300 },
      { x: 3516, y: 300, ancho: 586, alto: 300 },
      { x: 0, y: 600, ancho: 586, alto: 300 },
      { x: 586, y: 600, ancho: 586, alto: 300 },
      { x: 1172, y: 600, ancho: 586, alto: 300 },
      { x: 1758, y: 600, ancho: 586, alto: 300 },
      { x: 2344, y: 600, ancho: 586, alto: 300 },
      { x: 2930, y: 600, ancho: 586, alto: 300 },
      { x: 3516, y: 600, ancho: 586, alto: 300 },
      { x: 0, y: 900, ancho: 586, alto: 300 },
      { x: 586, y: 900, ancho: 586, alto: 300 },
      { x: 1172, y: 900, ancho: 586, alto: 300 },
      { x: 1758, y: 900, ancho: 586, alto: 300 },
      { x: 2344, y: 900, ancho: 586, alto: 300 },
      { x: 2930, y: 900, ancho: 586, alto: 300 },
      { x: 3516, y: 900, ancho: 586, alto: 300 },
    ],
  },

  floresBarbaras: {
    fuente: '/floresBarbaras_4x4-4665x2200_1.webp',
    ancho: 4665,
    alto: 2200,
    columnas: 4,
    filas: 4,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 1166, alto: 550 },
      { x: 1166, y: 0, ancho: 1166, alto: 550 },
      { x: 2332, y: 0, ancho: 1166, alto: 550 },
      { x: 3498, y: 0, ancho: 1166, alto: 550 },
      { x: 0, y: 550, ancho: 1166, alto: 550 },
      { x: 1166, y: 550, ancho: 1166, alto: 550 },
      { x: 2332, y: 550, ancho: 1166, alto: 550 },
      { x: 3498, y: 550, ancho: 1166, alto: 550 },
      { x: 0, y: 1100, ancho: 1166, alto: 550 },
      { x: 1166, y: 1100, ancho: 1166, alto: 550 },
      { x: 2332, y: 1100, ancho: 1166, alto: 550 },
      { x: 3498, y: 1100, ancho: 1166, alto: 550 },
      { x: 0, y: 1650, ancho: 1166, alto: 550 },
      { x: 1166, y: 1650, ancho: 1166, alto: 550 },
      { x: 2332, y: 1650, ancho: 1166, alto: 550 },
      { x: 3498, y: 1650, ancho: 1166, alto: 550 },
    ],
  },

  iguanas: {
    fuente: '/iguanas_3x3-4250x1200_1_CC.webp',
    ancho: 4250,
    alto: 1200,
    columnas: 3,
    filas: 3,
    fotogramas: [
      { x: 0, y: 0, ancho: 1416, alto: 400 },
      { x: 1416, y: 0, ancho: 1416, alto: 400 },
      { x: 2832, y: 0, ancho: 1416, alto: 400 },
      { x: 0, y: 400, ancho: 1416, alto: 400 },
      { x: 1416, y: 400, ancho: 1416, alto: 400 },
      { x: 2832, y: 400, ancho: 1416, alto: 400 },
      { x: 0, y: 800, ancho: 1416, alto: 400 },
      { x: 1416, y: 800, ancho: 1416, alto: 400 },
      { x: 2832, y: 800, ancho: 1416, alto: 400 },
    ],
  },

  pajaroVolador: {
    fuente: '/pajaroVolador_1x19-800x5978_1.webp',
    ancho: 800,
    alto: 5978,
    columnas: 1,
    filas: 19,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 800, alto: 314 },
      { x: 0, y: 314, ancho: 800, alto: 314 },
      { x: 0, y: 628, ancho: 800, alto: 314 },
      { x: 0, y: 942, ancho: 800, alto: 314 },
      { x: 0, y: 1256, ancho: 800, alto: 314 },
      { x: 0, y: 1570, ancho: 800, alto: 314 },
      { x: 0, y: 1884, ancho: 800, alto: 314 },
      { x: 0, y: 2198, ancho: 800, alto: 314 },
      { x: 0, y: 2512, ancho: 800, alto: 314 },
      { x: 0, y: 2826, ancho: 800, alto: 314 },
      { x: 0, y: 3140, ancho: 800, alto: 314 },
      { x: 0, y: 3454, ancho: 800, alto: 314 },
      { x: 0, y: 3768, ancho: 800, alto: 314 },
      { x: 0, y: 4082, ancho: 800, alto: 314 },
      { x: 0, y: 4396, ancho: 800, alto: 314 },
      { x: 0, y: 4710, ancho: 800, alto: 314 },
      { x: 0, y: 5024, ancho: 800, alto: 314 },
      { x: 0, y: 5338, ancho: 800, alto: 314 },
      { x: 0, y: 5652, ancho: 800, alto: 314 },
    ],
  },

  flores: {
    fuente: '/flores_7x1-2313x400_1.webp',
    ancho: 2313,
    alto: 400,
    columnas: 7,
    filas: 1,
    fotogramas: [
      { x: 0, y: 0, ancho: 330, alto: 400 },
      { x: 330, y: 0, ancho: 330, alto: 400 },
      { x: 660, y: 0, ancho: 330, alto: 400 },
      { x: 990, y: 0, ancho: 330, alto: 400 },
      { x: 1320, y: 0, ancho: 330, alto: 400 },
      { x: 1650, y: 0, ancho: 330, alto: 400 },
      { x: 1980, y: 0, ancho: 330, alto: 400 },
    ],
  },

  arbolLloron: {
    fuente: '/arbolLloron_7x3-4060x1600_1_CC.webp',
    ancho: 4060,
    alto: 1600,
    columnas: 7,
    filas: 3,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 580, alto: 533 },
      { x: 580, y: 0, ancho: 580, alto: 533 },
      { x: 1160, y: 0, ancho: 580, alto: 533 },
      { x: 1740, y: 0, ancho: 580, alto: 533 },
      { x: 2320, y: 0, ancho: 580, alto: 533 },
      { x: 2900, y: 0, ancho: 580, alto: 533 },
      { x: 3480, y: 0, ancho: 580, alto: 533 },
      { x: 0, y: 533, ancho: 580, alto: 533 },
      { x: 580, y: 533, ancho: 580, alto: 533 },
      { x: 1160, y: 533, ancho: 580, alto: 533 },
      { x: 1740, y: 533, ancho: 580, alto: 533 },
      { x: 2320, y: 533, ancho: 580, alto: 533 },
      { x: 2900, y: 533, ancho: 580, alto: 533 },
      { x: 3480, y: 533, ancho: 580, alto: 533 },
      { x: 0, y: 1066, ancho: 580, alto: 533 },
      { x: 580, y: 1066, ancho: 580, alto: 533 },
      { x: 1160, y: 1066, ancho: 580, alto: 533 },
      { x: 1740, y: 1066, ancho: 580, alto: 533 },
      { x: 2320, y: 1066, ancho: 580, alto: 533 },
      { x: 2900, y: 1066, ancho: 580, alto: 533 },
      { x: 3480, y: 1066, ancho: 580, alto: 533 },
    ],
  },

  hueco1: {
    fuente: '/hueco1_3x1-2292x400_1.webp',
    ancho: 2292,
    alto: 400,
    columnas: 3,
    filas: 1,
    fotogramas: [
      { x: 0, y: 0, ancho: 764, alto: 400 },
      { x: 764, y: 0, ancho: 764, alto: 400 },
      { x: 1528, y: 0, ancho: 764, alto: 400 },
    ],
  },

  manoPajaro: {
    fuente: '/manoPajaro_10x7-13158x8000_1_CC.webp',
    ancho: 13158,
    alto: 8000,
    columnas: 10,
    invertido: true,
    filas: 7,
    fotogramas: [
      { x: 0, y: 0, ancho: 1315, alto: 1142 },
      { x: 1315, y: 0, ancho: 1315, alto: 1142 },
      { x: 2630, y: 0, ancho: 1315, alto: 1142 },
      { x: 3945, y: 0, ancho: 1315, alto: 1142 },
      { x: 5260, y: 0, ancho: 1315, alto: 1142 },
      { x: 6575, y: 0, ancho: 1315, alto: 1142 },
      { x: 7890, y: 0, ancho: 1315, alto: 1142 },
      { x: 9205, y: 0, ancho: 1315, alto: 1142 },
      { x: 10520, y: 0, ancho: 1315, alto: 1142 },
      { x: 11835, y: 0, ancho: 1315, alto: 1142 },
      { x: 0, y: 1142, ancho: 1315, alto: 1142 },
      { x: 1315, y: 1142, ancho: 1315, alto: 1142 },
      { x: 2630, y: 1142, ancho: 1315, alto: 1142 },
      { x: 3945, y: 1142, ancho: 1315, alto: 1142 },
      { x: 5260, y: 1142, ancho: 1315, alto: 1142 },
      { x: 6575, y: 1142, ancho: 1315, alto: 1142 },
      { x: 7890, y: 1142, ancho: 1315, alto: 1142 },
      { x: 9205, y: 1142, ancho: 1315, alto: 1142 },
      { x: 10520, y: 1142, ancho: 1315, alto: 1142 },
      { x: 11835, y: 1142, ancho: 1315, alto: 1142 },
      { x: 0, y: 2284, ancho: 1315, alto: 1142 },
      { x: 1315, y: 2284, ancho: 1315, alto: 1142 },
      { x: 2630, y: 2284, ancho: 1315, alto: 1142 },
      { x: 3945, y: 2284, ancho: 1315, alto: 1142 },
      { x: 5260, y: 2284, ancho: 1315, alto: 1142 },
      { x: 6575, y: 2284, ancho: 1315, alto: 1142 },
      { x: 7890, y: 2284, ancho: 1315, alto: 1142 },
      { x: 9205, y: 2284, ancho: 1315, alto: 1142 },
      { x: 10520, y: 2284, ancho: 1315, alto: 1142 },
      { x: 11835, y: 2284, ancho: 1315, alto: 1142 },
      { x: 0, y: 3426, ancho: 1315, alto: 1142 },
      { x: 1315, y: 3426, ancho: 1315, alto: 1142 },
      { x: 2630, y: 3426, ancho: 1315, alto: 1142 },
      { x: 3945, y: 3426, ancho: 1315, alto: 1142 },
      { x: 5260, y: 3426, ancho: 1315, alto: 1142 },
      { x: 6575, y: 3426, ancho: 1315, alto: 1142 },
      { x: 7890, y: 3426, ancho: 1315, alto: 1142 },
      { x: 9205, y: 3426, ancho: 1315, alto: 1142 },
      { x: 10520, y: 3426, ancho: 1315, alto: 1142 },
      { x: 11835, y: 3426, ancho: 1315, alto: 1142 },
      { x: 0, y: 4568, ancho: 1315, alto: 1142 },
      { x: 1315, y: 4568, ancho: 1315, alto: 1142 },
      { x: 2630, y: 4568, ancho: 1315, alto: 1142 },
      { x: 3945, y: 4568, ancho: 1315, alto: 1142 },
      { x: 5260, y: 4568, ancho: 1315, alto: 1142 },
      { x: 6575, y: 4568, ancho: 1315, alto: 1142 },
      { x: 7890, y: 4568, ancho: 1315, alto: 1142 },
      { x: 9205, y: 4568, ancho: 1315, alto: 1142 },
      { x: 10520, y: 4568, ancho: 1315, alto: 1142 },
      { x: 11835, y: 4568, ancho: 1315, alto: 1142 },
      { x: 0, y: 5710, ancho: 1315, alto: 1142 },
      { x: 1315, y: 5710, ancho: 1315, alto: 1142 },
      { x: 2630, y: 5710, ancho: 1315, alto: 1142 },
      { x: 3945, y: 5710, ancho: 1315, alto: 1142 },
      { x: 5260, y: 5710, ancho: 1315, alto: 1142 },
      { x: 6575, y: 5710, ancho: 1315, alto: 1142 },
      { x: 7890, y: 5710, ancho: 1315, alto: 1142 },
      { x: 9205, y: 5710, ancho: 1315, alto: 1142 },
      { x: 10520, y: 5710, ancho: 1315, alto: 1142 },
      { x: 11835, y: 5710, ancho: 1315, alto: 1142 },
      { x: 0, y: 6852, ancho: 1315, alto: 1142 },
      { x: 1315, y: 6852, ancho: 1315, alto: 1142 },
      { x: 2630, y: 6852, ancho: 1315, alto: 1142 },
      { x: 3945, y: 6852, ancho: 1315, alto: 1142 },
      { x: 5260, y: 6852, ancho: 1315, alto: 1142 },
      { x: 6575, y: 6852, ancho: 1315, alto: 1142 },
      { x: 7890, y: 6852, ancho: 1315, alto: 1142 },
      { x: 9205, y: 6852, ancho: 1315, alto: 1142 },
      { x: 10520, y: 6852, ancho: 1315, alto: 1142 },
      { x: 11835, y: 6852, ancho: 1315, alto: 1142 },
    ],
  },

  nube1: {
    fuente: '/nube1_3x1-1767x350_1.webp',
    ancho: 1767,
    alto: 350,
    columnas: 3,
    filas: 1,
    fotogramas: [
      { x: 0, y: 0, ancho: 589, alto: 350 },
      { x: 589, y: 0, ancho: 589, alto: 350 },
      { x: 1178, y: 0, ancho: 589, alto: 350 },
    ],
  },

  arbolNube: {
    fuente: '/arbolNube_4x4-2205x2500_1_CC.webp',
    ancho: 2205,
    alto: 2500,
    columnas: 4,
    filas: 4,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 551, alto: 625 },
      { x: 551, y: 0, ancho: 551, alto: 625 },
      { x: 1102, y: 0, ancho: 551, alto: 625 },
      { x: 1653, y: 0, ancho: 551, alto: 625 },
      { x: 0, y: 625, ancho: 551, alto: 625 },
      { x: 551, y: 625, ancho: 551, alto: 625 },
      { x: 1102, y: 625, ancho: 551, alto: 625 },
      { x: 1653, y: 625, ancho: 551, alto: 625 },
      { x: 0, y: 1250, ancho: 551, alto: 625 },
      { x: 551, y: 1250, ancho: 551, alto: 625 },
      { x: 1102, y: 1250, ancho: 551, alto: 625 },
      { x: 1653, y: 1250, ancho: 551, alto: 625 },
      { x: 0, y: 1875, ancho: 551, alto: 625 },
      { x: 551, y: 1875, ancho: 551, alto: 625 },
      { x: 1102, y: 1875, ancho: 551, alto: 625 },
      { x: 1653, y: 1875, ancho: 551, alto: 625 },
    ],
  },

  arbolNubeLoop: {
    fuente: '/arbolNubeLoop_17x2-7012x1200_1_CC.webp',
    ancho: 7012,
    alto: 1200,
    columnas: 17,
    filas: 2,
    fotogramas: [
      { x: 0, y: 0, ancho: 412, alto: 600 },
      { x: 412, y: 0, ancho: 412, alto: 600 },
      { x: 824, y: 0, ancho: 412, alto: 600 },
      { x: 1236, y: 0, ancho: 412, alto: 600 },
      { x: 1648, y: 0, ancho: 412, alto: 600 },
      { x: 2060, y: 0, ancho: 412, alto: 600 },
      { x: 2472, y: 0, ancho: 412, alto: 600 },
      { x: 2884, y: 0, ancho: 412, alto: 600 },
      { x: 3296, y: 0, ancho: 412, alto: 600 },
      { x: 3708, y: 0, ancho: 412, alto: 600 },
      { x: 4120, y: 0, ancho: 412, alto: 600 },
      { x: 4532, y: 0, ancho: 412, alto: 600 },
      { x: 4944, y: 0, ancho: 412, alto: 600 },
      { x: 5356, y: 0, ancho: 412, alto: 600 },
      { x: 5768, y: 0, ancho: 412, alto: 600 },
      { x: 6180, y: 0, ancho: 412, alto: 600 },
      { x: 6592, y: 0, ancho: 412, alto: 600 },
      { x: 0, y: 600, ancho: 412, alto: 600 },
      { x: 412, y: 600, ancho: 412, alto: 600 },
      { x: 824, y: 600, ancho: 412, alto: 600 },
      { x: 1236, y: 600, ancho: 412, alto: 600 },
      { x: 1648, y: 600, ancho: 412, alto: 600 },
      { x: 2060, y: 600, ancho: 412, alto: 600 },
      { x: 2472, y: 600, ancho: 412, alto: 600 },
      { x: 2884, y: 600, ancho: 412, alto: 600 },
      { x: 3296, y: 600, ancho: 412, alto: 600 },
      { x: 3708, y: 600, ancho: 412, alto: 600 },
      { x: 4120, y: 600, ancho: 412, alto: 600 },
      { x: 4532, y: 600, ancho: 412, alto: 600 },
      { x: 4944, y: 600, ancho: 412, alto: 600 },
      { x: 5356, y: 600, ancho: 412, alto: 600 },
      { x: 5768, y: 600, ancho: 412, alto: 600 },
      { x: 6180, y: 600, ancho: 412, alto: 600 },
      { x: 6592, y: 600, ancho: 412, alto: 600 },
    ],
  },

  pajaroBailarin: {
    fuente: '/pajaroBailarin_6x4-4251x2000_1_CC.webp',
    ancho: 4251,
    alto: 2000,
    columnas: 6,
    filas: 4,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 708, alto: 500 },
      { x: 708, y: 0, ancho: 708, alto: 500 },
      { x: 1416, y: 0, ancho: 708, alto: 500 },
      { x: 2124, y: 0, ancho: 708, alto: 500 },
      { x: 2832, y: 0, ancho: 708, alto: 500 },
      { x: 3540, y: 0, ancho: 708, alto: 500 },
      { x: 0, y: 500, ancho: 708, alto: 500 },
      { x: 708, y: 500, ancho: 708, alto: 500 },
      { x: 1416, y: 500, ancho: 708, alto: 500 },
      { x: 2124, y: 500, ancho: 708, alto: 500 },
      { x: 2832, y: 500, ancho: 708, alto: 500 },
      { x: 3540, y: 500, ancho: 708, alto: 500 },
      { x: 0, y: 1000, ancho: 708, alto: 500 },
      { x: 708, y: 1000, ancho: 708, alto: 500 },
      { x: 1416, y: 1000, ancho: 708, alto: 500 },
      { x: 2124, y: 1000, ancho: 708, alto: 500 },
      { x: 2832, y: 1000, ancho: 708, alto: 500 },
      { x: 3540, y: 1000, ancho: 708, alto: 500 },
      { x: 0, y: 1500, ancho: 708, alto: 500 },
      { x: 708, y: 1500, ancho: 708, alto: 500 },
      { x: 1416, y: 1500, ancho: 708, alto: 500 },
      { x: 2124, y: 1500, ancho: 708, alto: 500 },
      { x: 2832, y: 1500, ancho: 708, alto: 500 },
      { x: 3540, y: 1500, ancho: 708, alto: 500 },
    ],
  },

  cocoCantaor: {
    fuente: '/cocoCantaor_4x3-3105x1200_1_CC.webp',
    ancho: 3105,
    alto: 1200,
    columnas: 4,
    filas: 3,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 776, alto: 400 },
      { x: 776, y: 0, ancho: 776, alto: 400 },
      { x: 1552, y: 0, ancho: 776, alto: 400 },
      { x: 2328, y: 0, ancho: 776, alto: 400 },
      { x: 0, y: 400, ancho: 776, alto: 400 },
      { x: 776, y: 400, ancho: 776, alto: 400 },
      { x: 1552, y: 400, ancho: 776, alto: 400 },
      { x: 2328, y: 400, ancho: 776, alto: 400 },
      { x: 0, y: 800, ancho: 776, alto: 400 },
      { x: 776, y: 800, ancho: 776, alto: 400 },
      { x: 1552, y: 800, ancho: 776, alto: 400 },
      { x: 2328, y: 800, ancho: 776, alto: 400 },
    ],
  },

  mar: {
    fuente: '/mar_5x1-10589x500_1_CC.webp',
    ancho: 10589,
    alto: 500,
    columnas: 5,
    filas: 1,
    fotogramas: [
      { x: 0, y: 0, ancho: 2117, alto: 500 },
      { x: 2117, y: 0, ancho: 2117, alto: 500 },
      { x: 4234, y: 0, ancho: 2117, alto: 500 },
      { x: 6351, y: 0, ancho: 2117, alto: 500 },
      { x: 8468, y: 0, ancho: 2117, alto: 500 },
    ],
  },

  dimensionAstral: {
    fuente: '/dimensionAstral_4x3-4105x1600_1_CC.webp',
    ancho: 4105,
    alto: 1600,
    columnas: 4,
    filas: 3,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 1026, alto: 533 },
      { x: 1026, y: 0, ancho: 1026, alto: 533 },
      { x: 2052, y: 0, ancho: 1026, alto: 533 },
      { x: 3078, y: 0, ancho: 1026, alto: 533 },
      { x: 0, y: 533, ancho: 1026, alto: 533 },
      { x: 1026, y: 533, ancho: 1026, alto: 533 },
      { x: 2052, y: 533, ancho: 1026, alto: 533 },
      { x: 3078, y: 533, ancho: 1026, alto: 533 },
      { x: 0, y: 1066, ancho: 1026, alto: 533 },
      { x: 1026, y: 1066, ancho: 1026, alto: 533 },
      { x: 2052, y: 1066, ancho: 1026, alto: 533 },
      { x: 3078, y: 1066, ancho: 1026, alto: 533 },
    ],
  },

  fondo5: {
    fuente: '/fondo5_5x1-7125x600_1_CC.webp',
    ancho: 7125,
    alto: 600,
    columnas: 5,
    filas: 1,
    fotogramas: [
      { x: 0, y: 0, ancho: 1425, alto: 600 },
      { x: 1425, y: 0, ancho: 1425, alto: 600 },
      { x: 2850, y: 0, ancho: 1425, alto: 600 },
      { x: 4275, y: 0, ancho: 1425, alto: 600 },
      { x: 5700, y: 0, ancho: 1425, alto: 600 },
    ],
  },

  arbolSeco: {
    fuente: '/arbolSeco_2x2-781x1300_1_CC.webp',
    ancho: 781,
    alto: 1300,
    columnas: 2,
    filas: 2,
    fotogramas: [
      { x: 0, y: 0, ancho: 390, alto: 650 },
      { x: 390, y: 0, ancho: 390, alto: 650 },
      { x: 0, y: 650, ancho: 390, alto: 650 },
      { x: 390, y: 650, ancho: 390, alto: 650 },
    ],
  },

  arbolSeco2: {
    fuente: '/arbolSeco2_2x2-1038x1500_1_CC.webp',
    ancho: 1038,
    alto: 1500,
    columnas: 2,
    filas: 2,
    fotogramas: [
      { x: 0, y: 0, ancho: 519, alto: 750 },
      { x: 519, y: 0, ancho: 519, alto: 750 },
      { x: 0, y: 750, ancho: 519, alto: 750 },
      { x: 519, y: 750, ancho: 519, alto: 750 },
    ],
  },

  arbolSeco3: {
    fuente: '/arbolSeco3_2x2-717x1300_1_CC.webp',
    ancho: 717,
    alto: 1300,
    columnas: 2,
    filas: 2,
    fotogramas: [
      { x: 0, y: 0, ancho: 358, alto: 650 },
      { x: 358, y: 0, ancho: 358, alto: 650 },
      { x: 0, y: 650, ancho: 358, alto: 650 },
      { x: 358, y: 650, ancho: 358, alto: 650 },
    ],
  },

  pajarera: {
    fuente: '/pajarera_6x3-5793x1300_1.webp',
    ancho: 5793,
    alto: 1300,
    columnas: 6,
    filas: 3,
    fotogramas: [
      { x: 0, y: 0, ancho: 965, alto: 433 },
      { x: 965, y: 0, ancho: 965, alto: 433 },
      { x: 1930, y: 0, ancho: 965, alto: 433 },
      { x: 2895, y: 0, ancho: 965, alto: 433 },
      { x: 3860, y: 0, ancho: 965, alto: 433 },
      { x: 4825, y: 0, ancho: 965, alto: 433 },
      { x: 0, y: 433, ancho: 965, alto: 433 },
      { x: 965, y: 433, ancho: 965, alto: 433 },
      { x: 1930, y: 433, ancho: 965, alto: 433 },
      { x: 2895, y: 433, ancho: 965, alto: 433 },
      { x: 3860, y: 433, ancho: 965, alto: 433 },
      { x: 4825, y: 433, ancho: 965, alto: 433 },
      { x: 0, y: 866, ancho: 965, alto: 433 },
      { x: 965, y: 866, ancho: 965, alto: 433 },
      { x: 1930, y: 866, ancho: 965, alto: 433 },
      { x: 2895, y: 866, ancho: 965, alto: 433 },
      { x: 3860, y: 866, ancho: 965, alto: 433 },
      { x: 4825, y: 866, ancho: 965, alto: 433 },
    ],
  },

  floresitas: {
    fuente: '/floresitas_3x1-3262x600_1_CC.webp',
    ancho: 3262,
    alto: 600,
    columnas: 3,
    filas: 1,
    fotogramas: [
      { x: 0, y: 0, ancho: 1087, alto: 600 },
      { x: 1087, y: 0, ancho: 1087, alto: 600 },
      { x: 2174, y: 0, ancho: 1087, alto: 600 },
    ],
  },

  matorral: {
    fuente: '/matorral_1x23-900x10276_1_CC.webp',
    ancho: 900,
    alto: 10276,
    columnas: 1,
    filas: 23,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 900, alto: 446 },
      { x: 0, y: 446, ancho: 900, alto: 446 },
      { x: 0, y: 892, ancho: 900, alto: 446 },
      { x: 0, y: 1338, ancho: 900, alto: 446 },
      { x: 0, y: 1784, ancho: 900, alto: 446 },
      { x: 0, y: 2230, ancho: 900, alto: 446 },
      { x: 0, y: 2676, ancho: 900, alto: 446 },
      { x: 0, y: 3122, ancho: 900, alto: 446 },
      { x: 0, y: 3568, ancho: 900, alto: 446 },
      { x: 0, y: 4014, ancho: 900, alto: 446 },
      { x: 0, y: 4460, ancho: 900, alto: 446 },
      { x: 0, y: 4906, ancho: 900, alto: 446 },
      { x: 0, y: 5352, ancho: 900, alto: 446 },
      { x: 0, y: 5798, ancho: 900, alto: 446 },
      { x: 0, y: 6244, ancho: 900, alto: 446 },
      { x: 0, y: 6690, ancho: 900, alto: 446 },
      { x: 0, y: 7136, ancho: 900, alto: 446 },
      { x: 0, y: 7582, ancho: 900, alto: 446 },
      { x: 0, y: 8028, ancho: 900, alto: 446 },
      { x: 0, y: 8474, ancho: 900, alto: 446 },
      { x: 0, y: 8920, ancho: 900, alto: 446 },
      { x: 0, y: 9366, ancho: 900, alto: 446 },
      { x: 0, y: 9812, ancho: 900, alto: 446 },
    ],
  },

  hueco2: {
    fuente: '/hueco2_3x1-2775x350_1_CC.webp',
    ancho: 2775,
    alto: 350,
    columnas: 3,
    filas: 1,
    fotogramas: [
      { x: 0, y: 0, ancho: 925, alto: 350 },
      { x: 925, y: 0, ancho: 925, alto: 350 },
      { x: 1850, y: 0, ancho: 925, alto: 350 },
    ],
  },

  huecoSol: {
    fuente: '/huecoSol_17x1-8777x700_1.webp',
    ancho: 8777,
    alto: 700,
    columnas: 17,
    filas: 1,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 516, alto: 700 },
      { x: 516, y: 0, ancho: 516, alto: 700 },
      { x: 1032, y: 0, ancho: 516, alto: 700 },
      { x: 1548, y: 0, ancho: 516, alto: 700 },
      { x: 2064, y: 0, ancho: 516, alto: 700 },
      { x: 2580, y: 0, ancho: 516, alto: 700 },
      { x: 3096, y: 0, ancho: 516, alto: 700 },
      { x: 3612, y: 0, ancho: 516, alto: 700 },
      { x: 4128, y: 0, ancho: 516, alto: 700 },
      { x: 4644, y: 0, ancho: 516, alto: 700 },
      { x: 5160, y: 0, ancho: 516, alto: 700 },
      { x: 5676, y: 0, ancho: 516, alto: 700 },
      { x: 6192, y: 0, ancho: 516, alto: 700 },
      { x: 6708, y: 0, ancho: 516, alto: 700 },
      { x: 7224, y: 0, ancho: 516, alto: 700 },
      { x: 7740, y: 0, ancho: 516, alto: 700 },
      { x: 8256, y: 0, ancho: 516, alto: 700 },
    ],
  },

  arbolLloronLoop: {
    fuente: '/arbolLloronLoop_5x1-3938x600_1_CC.webp',
    ancho: 3938,
    alto: 600,
    columnas: 5,
    filas: 1,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 787, alto: 600 },
      { x: 787, y: 0, ancho: 787, alto: 600 },
      { x: 1574, y: 0, ancho: 787, alto: 600 },
      { x: 2361, y: 0, ancho: 787, alto: 600 },
      { x: 3148, y: 0, ancho: 787, alto: 600 },
    ],
  },

  huecoNube: {
    fuente: '/huecoNube_5x3-3251x2000_1.webp',
    ancho: 3251,
    alto: 2000,
    columnas: 5,
    filas: 3,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 650, alto: 666 },
      { x: 650, y: 0, ancho: 650, alto: 666 },
      { x: 1300, y: 0, ancho: 650, alto: 666 },
      { x: 1950, y: 0, ancho: 650, alto: 666 },
      { x: 2600, y: 0, ancho: 650, alto: 666 },
      { x: 0, y: 666, ancho: 650, alto: 666 },
      { x: 650, y: 666, ancho: 650, alto: 666 },
      { x: 1300, y: 666, ancho: 650, alto: 666 },
      { x: 1950, y: 666, ancho: 650, alto: 666 },
      { x: 2600, y: 666, ancho: 650, alto: 666 },
      { x: 0, y: 1332, ancho: 650, alto: 666 },
      { x: 650, y: 1332, ancho: 650, alto: 666 },
      { x: 1300, y: 1332, ancho: 650, alto: 666 },
      { x: 1950, y: 1332, ancho: 650, alto: 666 },
      { x: 2600, y: 1332, ancho: 650, alto: 666 },
    ],
  },

  hueco3: {
    fuente: '/hueco3_3x1-3008x450_1.webp',
    ancho: 3008,
    alto: 450,
    columnas: 3,
    filas: 1,
    fotogramas: [
      { x: 0, y: 0, ancho: 1002, alto: 450 },
      { x: 1002, y: 0, ancho: 1002, alto: 450 },
      { x: 2004, y: 0, ancho: 1002, alto: 450 },
    ],
  },

  moscas: {
    fuente: '/moscas_4x3-2801x1400_1_CC.webp',
    ancho: 2801,
    alto: 1400,
    columnas: 4,
    filas: 3,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 700, alto: 466 },
      { x: 700, y: 0, ancho: 700, alto: 466 },
      { x: 1400, y: 0, ancho: 700, alto: 466 },
      { x: 2100, y: 0, ancho: 700, alto: 466 },
      { x: 0, y: 466, ancho: 700, alto: 466 },
      { x: 700, y: 466, ancho: 700, alto: 466 },
      { x: 1400, y: 466, ancho: 700, alto: 466 },
      { x: 2100, y: 466, ancho: 700, alto: 466 },
      { x: 0, y: 932, ancho: 700, alto: 466 },
      { x: 700, y: 932, ancho: 700, alto: 466 },
      { x: 1400, y: 932, ancho: 700, alto: 466 },
      { x: 2100, y: 932, ancho: 700, alto: 466 },
    ],
  },

  mesaPajaro: {
    fuente: '/mesaPajaro_11x1-8483x800_1_CC.webp',
    ancho: 8483,
    alto: 800,
    columnas: 11,
    filas: 1,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 771, alto: 800 },
      { x: 771, y: 0, ancho: 771, alto: 800 },
      { x: 1542, y: 0, ancho: 771, alto: 800 },
      { x: 2313, y: 0, ancho: 771, alto: 800 },
      { x: 3084, y: 0, ancho: 771, alto: 800 },
      { x: 3855, y: 0, ancho: 771, alto: 800 },
      { x: 4626, y: 0, ancho: 771, alto: 800 },
      { x: 5397, y: 0, ancho: 771, alto: 800 },
      { x: 6168, y: 0, ancho: 771, alto: 800 },
      { x: 6939, y: 0, ancho: 771, alto: 800 },
      { x: 7710, y: 0, ancho: 771, alto: 800 },
    ],
  },

  florBailarina: {
    fuente: '/florBailarina_5x3-2384x2200_1_CC.webp',
    ancho: 2384,
    alto: 2200,
    columnas: 5,
    filas: 3,
    invertido: true,
    fotogramas: [
      { x: 0, y: 0, ancho: 476, alto: 733 },
      { x: 476, y: 0, ancho: 476, alto: 733 },
      { x: 952, y: 0, ancho: 476, alto: 733 },
      { x: 1428, y: 0, ancho: 476, alto: 733 },
      { x: 1904, y: 0, ancho: 476, alto: 733 },
      { x: 0, y: 733, ancho: 476, alto: 733 },
      { x: 476, y: 733, ancho: 476, alto: 733 },
      { x: 952, y: 733, ancho: 476, alto: 733 },
      { x: 1428, y: 733, ancho: 476, alto: 733 },
      { x: 1904, y: 733, ancho: 476, alto: 733 },
      { x: 0, y: 1466, ancho: 476, alto: 733 },
      { x: 476, y: 1466, ancho: 476, alto: 733 },
      { x: 952, y: 1466, ancho: 476, alto: 733 },
      { x: 1428, y: 1466, ancho: 476, alto: 733 },
      { x: 1904, y: 1466, ancho: 476, alto: 733 },
    ],
  },
};
interface IDatosParaPixi extends ISpritesheetData {
  fuente: string;
}
const datosFormatoPixi: { [nombre: string]: IDatosParaPixi } = {};

for (const llave in datos) {
  const imagen = datos[llave];
  datosFormatoPixi[llave] = { fuente: imagen.fuente, frames: {}, meta: { scale: '1' }, animations: { anim: [] } };

  imagen.fotogramas.forEach((fotograma, i) => {
    datosFormatoPixi[llave].frames[`${llave}${i}`] = {
      frame: { x: fotograma.x, y: fotograma.y, w: fotograma.ancho, h: fotograma.alto },
    };
    datosFormatoPixi[llave].animations.anim.push(`${llave}${i}`);
  });

  if (imagen.invertido) {
    datosFormatoPixi[llave].animations.anim.reverse();
  }
}

export default datosFormatoPixi;
