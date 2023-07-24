<script setup lang="ts">
import { valoresCargador } from '@/cerebros/general';
import { useStore } from '@nanostores/vue';

const datos = useStore(valoresCargador);
</script>

<template>
  <div id="cargador" :class="datos.visible ? `visible` : ''">
    {{ datos.visible }}
    <span class="mensaje">{{ datos.mensaje }}</span>
    <span class="barra">
      <span class="proceso" :style="`width:${datos.porcentaje}%`"></span>
    </span>
  </div>
</template>

<style lang="scss">
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

  &.visible {
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
