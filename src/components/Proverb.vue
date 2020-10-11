<template>
  <section class="proverb-section">
    <p v-if="proverb" class="proverb-text">{{ proverb }}</p>
  </section>
</template>

<script>
export default {
  name: 'Proverb',
  props: {
    proverb: String
  }
};
</script>

<style>
.proverb-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  padding: 2rem;
  width: 100%;
}

.proverb-text {
  font-family: Apple Chancery, cursive;
  color: #ffffff;
  font-size: var(--text-size);
  text-align: center;
  animation: fadeIn ease 5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
