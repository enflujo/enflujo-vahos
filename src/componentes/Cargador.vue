<script setup>
import { BaseTexture, Spritesheet } from 'pixijs';
import type { Texture } from 'pixijs';
import type { IDatosParaPixi } from '../tipos';
import { secuencias } from '../cerebros/general';

const cargador = document.getElementById('cargador');
const proceso: HTMLSpanElement | null | undefined = cargador?.querySelector('.proceso');
const contenedorMensaje: HTMLSpanElement | null | undefined = cargador?.querySelector('.mensaje');

const imgs: { [nombre: string]: Texture[] } = {};
const cola: { nombre: string, datos: IDatosParaPixi }[] = [];
let total = 0;
let cargado = 0;
let imgsCargadas = 0;

function agregar(nombre: string, datos: IDatosParaPixi) {
  cola.push({ nombre, datos });
}

async function cargar(): Promise<void> {
  return new Promise((resolver) => {
    setTimeout(() => {
      if (imgsCargadas !== cola.length) {
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
</script>

<template>
  <div id="cargador">
    <span class="mensaje"></span>
    <span class="barra">
      <span class="proceso"></span>
    </span>
  </div>
</template>

<style lang="scss" scoped>
#cargador {
  opacity: 0;
  position: fixed;
  z-index: 9;
  font-style: italic;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;

  &.activo {
    opacity: 1;
  }

  .barra {
    display: block;
    height: 2px;
    width: 250px;
    position: relative;
    background-color: #bbbbb4;
  }

  .proceso {
    position: absolute;
    top: 0;
    left: 0;
    height: 2px;
    background-color: var(--colorFondo2);
    width: 0%;
  }
}
</style>
