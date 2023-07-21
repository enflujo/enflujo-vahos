<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const reproductor = ref<HTMLAudioElement | null>(null);

defineProps({
  cancion: String,
});

onMounted(() => {
  console.log(reproductor.value);
  reproductor.value?.play();
});

onUnmounted(() => {});
</script>

<template>
  <audio id="reproductor" ref="reproductor" :src="`/canciones/${cancion}.mp3`" controls></audio>
</template>

<style lang="scss">
#reproductor {
  position: absolute;
  top: 100px;
  z-index: 999;
}
</style>
