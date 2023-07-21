import { BaseTexture, Spritesheet, Texture } from 'pixijs';
import type { IDatosParaPixi } from '../tipos';
import { secuencias } from '../cerebros/general';

let cargador: HTMLDivElement;
let proceso: HTMLSpanElement | null;
let contenedorMensaje: HTMLSpanElement | null;

export const imgs: { [nombre: string]: Texture[] } = {};
const cola: { nombre: string; datos: IDatosParaPixi }[] = [];
let total = 0;
let cargado = 0;
let imgsCargadas = 0;

export function agregar(nombre: string, datos: IDatosParaPixi) {
  cola.push({ nombre, datos });
}

export async function cargar(): Promise<void> {
  return new Promise((resolver) => {
    setTimeout(() => {
      if (imgsCargadas !== cola.length) {
        cargador = document.getElementById('cargador') as HTMLDivElement;
        proceso = cargador.querySelector('.proceso');
        contenedorMensaje = cargador.querySelector('.mensaje');

        mostrar();
      }
    }, 250);

    for (const elemento of cola) {
      let totalSumado = false;
      let valorAnterior = 0;
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
          esconder();
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

          if (!proceso || !contenedorMensaje) return;
          const porcentaje = Math.floor((cargado / total) * 100);

          proceso.style.width = `${porcentaje}%`;
          contenedorMensaje.innerText = `${porcentaje}% (${imgsCargadas} / ${cola.length})`;
        }
      };
      xhr.send();
    }
  });
}

function mostrar() {
  cargador?.classList.add('activo');
}

function esconder() {
  cargador?.classList.remove('activo');
}
