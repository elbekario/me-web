<template>
  <main>
    <section>eslogan / image</section>
    <section>cv</section>
    <section>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet turpis et volutpat sollicitudin. Aliquam erat
      volutpat. Sed a magna at justo sollicitudin aliquam. Aliquam tincidunt velit vel pharetra vulputate. Nullam
      consequat est in porta condimentum. Donec non lectus eget arcu blandit blandit in vitae neque. Vivamus lobortis,
      elit eget vehicula varius, dolor massa finibus eros, quis lobortis erat justo a purus. Phasellus eu congue augue,
      ac vulputate velit. In auctor erat non elit lobortis laoreet.
    </section>
    <section>cosas</section>
  </main>
</template>

<script>
export default {
  name: 'Main',
  props: {
    name: String
  }
};
</script>

<style scoped>
main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  position: relative;
}

main::before {
  content: ' ';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../assets/javier-alvarez.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.5;
  filter: grayscale(100%);
}

section {
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 1;
  max-width: var(--max-width);
}
</style>
