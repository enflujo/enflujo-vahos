<script setup lang="ts">
import { AnimatedSprite, BLEND_MODES } from 'pixijs';
import { dimensiones, instanciaAplicacion, secuencias } from '../cerebros/general';
import { datosPixi } from '../utilidades/datos';
import { agregar, cargar } from '../utilidades/cargador';
import { aleatorioFraccion, aleatorioIntegral } from '../utilidades/ayudas';
import type { ISecuenciaAnimacion } from '../tipos';
import { onMounted, onUnmounted } from 'vue';
import { useStore } from '@nanostores/vue';

const aplicacion = instanciaAplicacion.get();
// const animaciones = secuencias.get();
const pajaros: ISecuenciaAnimacion[] = [];
const dims = useStore(dimensiones);

onMounted(async () => {
  if (!aplicacion.stage.children.length) {
    const { juanCamilo } = datosPixi;

    if (!juanCamilo) return;

    agregar('juanCamilo', juanCamilo);

    await cargar();

    // if (!animaciones.juanCamilo) return;
    animar();
  }
});

onUnmounted(async () => {
  aplicacion.stage.removeChildren();

  // aplicacion.stage.children.forEach((elemento) => {
  //   elemento.destroy();
  //   // console.log(elemento);
  //   // escena.removeChild(elemento.);
  // });
});

secuencias.listen((evento) => {
  if (!evento.juanCamilo) return;
  const { ancho, alto } = dims.value;

  for (let i = 0; i < 50; i++) {
    const pajaro = new AnimatedSprite(evento.juanCamilo) as ISecuenciaAnimacion;
    pajaro.blendMode = BLEND_MODES.MULTIPLY;
    pajaro.alpha = 0;
    pajaro.animationSpeed = aleatorioFraccion(0.111, 0.175);
    pajaro.opacidad = aleatorioFraccion(0.8, 0.95);
    pajaro.velocidad = aleatorioFraccion(5.5, 10.5);
    pajaro.anchor.set(0.5);
    const angulo = aleatorioFraccion(-0.35, 0.5);
    pajaro.angulo = angulo;
    pajaro.rotation = angulo;
    pajaro.gotoAndPlay(aleatorioIntegral(0, 4));

    pajaro.invertido = false;
    pajaro.direccion = 1;

    if (Math.random() > 0.5) {
      pajaro.invertido = true;
    }

    if (pajaro.invertido) {
      const escala = aleatorioFraccion(0.2, 1);
      pajaro.scale.set(-escala, escala);
      pajaro.position.set(aleatorioFraccion(0, ancho), aleatorioFraccion(0, alto));
      pajaro.direccion = -1;
    } else {
      pajaro.scale.set(aleatorioFraccion(0.3, 1.5));
      pajaro.position.set(aleatorioFraccion(0, ancho), aleatorioFraccion(0, alto));
    }
    pajaros.push(pajaro);
    aplicacion.stage.addChild(pajaro);
  }
});

function animar() {
  aplicacion.ticker.add(() => {
    const { ancho, alto } = dims.value;
    pajaros.forEach((pajaro) => {
      if (pajaro.alpha < pajaro.opacidad) {
        pajaro.alpha += 0.0006;
      }

      pajaro.x += pajaro.velocidad * pajaro.direccion;
      pajaro.y += pajaro.velocidad * pajaro.angulo * pajaro.direccion;

      if (!pajaro.invertido && pajaro.x > ancho + 10) {
        reiniciarPajaro(pajaro, ancho, alto);
      } else if (pajaro.invertido && pajaro.x < -10) {
        reiniciarPajaro(pajaro, ancho, alto);
      }

      if (pajaro.y < 0 || pajaro.y > alto) {
        reiniciarPajaro(pajaro, ancho, alto);
      }
    });
  });
}

function reiniciarPajaro(pajaro: ISecuenciaAnimacion, ancho: number, alto: number) {
  if (pajaro.invertido) {
    pajaro.x = aleatorioIntegral(ancho + 300, ancho + 100);
  } else {
    pajaro.x = aleatorioIntegral(-300, -100);
  }

  pajaro.y = aleatorioFraccion(0, alto);
  const angulo = aleatorioFraccion(-0.35, 0.5);
  pajaro.angulo = angulo;
  pajaro.rotation = angulo;
}
</script>
<template></template>
