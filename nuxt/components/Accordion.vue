<template>
  <div @click="toggleAccordion" class="instruction__item">
    <div class="instruction__title">
      <slot name="header"></slot>
      <div class="accordion-btn"></div>
    </div>
    <div class="instruction__desc">
      <slot name="desc"></slot>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="postcss"></style>