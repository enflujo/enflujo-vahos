import { BaseTexture, Spritesheet, Texture } from 'pixijs';
import type { IDatosParaPixi } from '../tipos';
import { secuencias, valoresCargador } from '../cerebros/general';

export const imgs: { [nombre: string]: Texture[] } = {};
const cola: { nombre: string; datos: IDatosParaPixi }[] = [];
let total = 0;
let cargado = 0;
let imgsCargadas = 0;
let cargando = false;

export function agregar(nombre: string, datos: IDatosParaPixi) {
  cola.push({ nombre, datos });
}

export async function cargar(): Promise<void> {
  return new Promise((resolver) => {
    setTimeout(() => {
      if (cargando) {
        valoresCargador.setKey('visible', true);
      }
    }, 250);

    cargando = true;

    for (const elemento of cola) {
      let totalSumado = false;
      let valorAnterior = 0;

      console.log(elemento);

      const xhr = new XMLHttpRequest();

      xhr.open('GET', elemento.datos.fuente, true);
      xhr.responseType = 'blob';

      xhr.onload = () => {
        imgsCargadas++;

        const img = new Image();
        img.src = URL.createObjectURL(xhr.response);
        const textura = new Spritesheet(BaseTexture.from(img), elemento.datos);
        textura.parse();

        if (textura.animations.anim) {
          secuencias.setKey(elemento.nombre, textura.animations.anim);
        }

        if (imgsCargadas === cola.length) {
          valoresCargador.setKey('porcentaje', 100);
          valoresCargador.setKey('mensaje', `${100}% (${imgsCargadas} / ${cola.length})`);
          valoresCargador.setKey('visible', false);
          cola.splice(0, cola.length);
          cargando = false;
          resolver();
        }
      };

      xhr.onprogress = (evento) => {
        if (evento.lengthComputable) {
          if (!totalSumado) {
            total += evento.total;
            totalSumado = true;
          }

          cargado += evento.loaded - valorAnterior;
          valorAnterior = evento.loaded;

          const porcentaje = Math.floor((cargado / total) * 100);
          valoresCargador.setKey('porcentaje', porcentaje);
          valoresCargador.setKey('mensaje', `${porcentaje}% (${imgsCargadas} / ${cola.length})`);
        }
      };
      xhr.send();
    }
  });
}
