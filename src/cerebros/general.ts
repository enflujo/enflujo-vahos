import { map } from 'nanostores';
import { Application, utils } from 'pixijs';
import type { Resource, Texture } from 'pixijs';

export type TDimensiones = {
  ancho: number;
  alto: number;
  pasoX: number;
  pasoY: number;
};

export const instanciaAplicacion = map<Application>(
  new Application({
    backgroundColor: 0xffffe6,
    powerPreference: 'high-performance',
    autoStart: true,
    view: document.getElementById('lienzo') as HTMLCanvasElement,
  })
);

export const cache = map<{ [llave: string]: Texture<Resource> }>(utils.TextureCache);

export const dimensiones = map<TDimensiones>({ ancho: 0, alto: 0, pasoX: 0, pasoY: 0 });

export const secuencias = map<{ [nombre: string]: Texture[] }>({});

export const valoresCargador = map<{ mensaje: string; porcentaje: number; visible: boolean }>({
  mensaje: '',
  porcentaje: 0,
  visible: false,
});
