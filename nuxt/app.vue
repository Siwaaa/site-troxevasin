<script setup>
// c208134931e7c1d9ce52562d22c933a3106ccd5cd23f79d653c56f205ea4b4ee45cdd1cff50fb744f865fc01d6227254f4de87b83fb9b1b2427dba7954de471c2cc14d769c5a67ae4a1794b897caa400480e8ce2806f90d666fe2a8738956a26437756e133bb2950ff7a41fd3e029f417a3174adde67339fc12aab2ea9028138
  const res = await $fetch("http://localhost:1337/api/tests")
</script>

<template>
  <div>
    {{ res }}
  </div>
</template>
