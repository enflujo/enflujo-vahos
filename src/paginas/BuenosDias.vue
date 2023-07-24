<script setup lang="ts">
import { onMounted } from 'vue';
import { instanciaAplicacion } from '@/cerebros/general';
// import Reproductor from '../componentes/Reproductor.vue';

const aplicacion = instanciaAplicacion.get();

onMounted(async () => {
  const { children } = aplicacion.stage;

  console.log(children);
  // if (!aplicacion.stage.children.length) {
  //   const { juanCamilo } = datosPixi;

  //   if (!juanCamilo) return;

  //   agregar('juanCamilo', juanCamilo);

  //   await cargar();

  //   if (!animaciones.juanCamilo) return;
  // }
});
</script>

<template>
  <!-- <Reproductor cancion="01-Buenos Días" /> -->
</template>
