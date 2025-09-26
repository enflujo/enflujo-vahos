import type { AnimatedSprite, SpritesheetData } from 'pixi.js';

export interface IDatosParaPixi extends SpritesheetData {
  fuente: string;
  velocidad: number;
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
    velocidad?: number;
  };
}

export interface IDatosPixi {
  [nombre: string]: IDatosParaPixi;
}

export interface ISecuenciaAnimacion extends AnimatedSprite {
  velocidad: number;
  angulo: number;
  invertido: boolean;
  direccion: number;
  opacidad: number;
}

export type TDimensiones = {
  ancho: number;
  alto: number;
  pasoX: number;
  pasoY: number;
};

export type TAnimacionCancion = () => void;
