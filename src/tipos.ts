import type { ISpritesheetData } from 'pixijs';

export interface IDatosParaPixi extends ISpritesheetData {
  fuente: string;
}

interface DatosFotograma {
  x: number;
  y: number;
  ancho: number;
  alto: number;
}

export interface IDatosTitiritero {
  [llave: string]: {
    fuente: string;
    ancho: number;
    alto: number;
    columnas: number;
    filas: number;
    invertido?: boolean;
    fotogramas: DatosFotograma[];
    orden?: string[];
    pingPong?: boolean;
  };
}

export interface IDatosPixi {
  [nombre: string]: IDatosParaPixi;
}