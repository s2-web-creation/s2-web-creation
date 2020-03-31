<template>
  <h1 class="titleLogo">{{ titleText }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['titleText']
})
</script>

<style lang="scss">
.titleLogo {
  animation: 2s appear;
  color: $bg-color;
  font-size: 4em;
  font-weight: bold;
  line-height: 1.2;
  text-shadow: -.05em -.05em .05em lighten($bg-color, 5%), .07em .07em .05em darken($bg-color, 15%);
}

@keyframes appear {
  0% {
    text-shadow: 0 0 0 lighten($bg-color, 5%), 0 0 0 darken($bg-color, 15%);
  }
  100% {
    text-shadow: -.05em -.05em .05em lighten($bg-color, 5%), .07em .07em .05em darken($bg-color, 15%);
  }
}
</style>
