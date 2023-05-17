import { atom, map } from 'nanostores';
import { Application } from 'pixijs';
import type { Texture } from 'pixijs';

export type TDimensiones = {
  ancho: number;
  alto: number;
  pasoX: number;
  pasoY: number;
};

export const instanciaAplicacion = atom(
  new Application({
    backgroundColor: 0xffffe6,
    powerPreference: 'high-performance',
    autoStart: true,
    view: document.getElementById('lienzo') as HTMLCanvasElement,
  })
);

export const dimensiones = map<TDimensiones>({ ancho: 0, alto: 0, pasoX: 0, pasoY: 0 });

export const secuencias = map<{ [nombre: string]: Texture[] }>({});
