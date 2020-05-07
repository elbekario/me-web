<template>
  <main>
    <section>eslogan / image</section>
    <section>cv</section>
    <section>viajes</section>
    <section>cosas</section>
  </main>
</template>

<script>
export default {
  name: 'Main',
  props: {
    name: String,
  },
};
</script>

<style>
main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
}

section {
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
}
</style>
