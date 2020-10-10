<template>
  <section class="proverb-section">
    <p v-if="proverb" class="proverb-text">{{ proverb }}</p>
  </section>
</template>

<script>
export default {
  name: 'Proverb',
  props: {
    proverb: String,
  }
};
</script>

<style>
.proverb-section {
  height: 100vh;
  background-color: #000;
}

.proverb-text {
  font-family: Apple Chancery, cursive;
  color: #fff;
  font-size: 3rem;
  animation: fadeIn ease 5s;
}

@keyframes fadeIn {
  0% { opacity:0; }
  100% { opacity:1; }
}

</style>
