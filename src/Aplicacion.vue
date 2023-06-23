<script setup lang="ts">
import { onMounted } from 'vue';
import { dimensiones, instanciaAplicacion } from './cerebros/general';
import { onUnmounted, ref } from 'vue';
import { Application } from 'pixijs';

const lienzo = ref();

onMounted(() => {
  const aplicacion = new Application({
    backgroundColor: 0xffffe6,
    powerPreference: 'high-performance',
    autoStart: true,
    view: lienzo.value,
  });

  instanciaAplicacion.set(aplicacion);

  actualizarDimensiones();
  window.addEventListener('resize', actualizarDimensiones);
});

onUnmounted(() => {
  window.removeEventListener('resize', actualizarDimensiones);
});

function actualizarDimensiones() {
  const ancho = window.innerWidth;
  const alto = window.innerHeight;

  dimensiones.set({
    ancho,
    alto,
    pasoX: ancho / 11,
    pasoY: alto / 11,
  });

  instanciaAplicacion.get().renderer.resize(ancho, alto);
}
</script>

<template>
  <nav id="menu">
    <router-link to="/">Inicio</router-link>&nbsp;
    <router-link to="/buenos-dias">Buenos Días</router-link>
  </nav>

  <canvas id="lienzo" ref="lienzo"></canvas>
  <router-view />
</template>

<style lang="scss">
:root {
  --colorFondo: #ffffe6;
  --colorFondo2: #f3e6aa;
}

html,
body {
  margin: 0;
  padding: 0;
}

canvas {
  position: absolute;
  display: inline-block;
  vertical-align: top;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

#menu {
  position: absolute;
  z-index: 9;
}
</style>
