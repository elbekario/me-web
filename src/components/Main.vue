<template>
  <main>
    <section>
      <a
        href="https://blog.kairosds.com/author/francisco-alvarez/"
        target="_blank"
        rel="noopener noreferrer"
        class="main-card-wrapper"
      >
        <div class="ebk-card">
          <img
            src="https://www.redeszone.net/app/uploads-redeszone.net/2019/05/crear-blog-alternativas.jpg"
            class="main-card-img"
            alt="header image of blog card"
          />
          <div class="main-card-content">
            Mis posts en<a
              href="https://www.kairosds.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="ebk-remarkable main-card-link"
              >KairósDS</a
            >
          </div>
        </div>
      </a>
    </section>
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
  padding: 2rem;
  position: relative;
  text-align: justify;
  margin-top: 4rem;
}

/* main::before {
  content: ' ';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../assets/javier-alvarez.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.5;
  filter: grayscale(100%);
} */

section {
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 1;
  max-width: var(--max-width);
  margin: auto;
}

.main-card-wrapper {
  display: contents;
  width: 100%;
}

.main-card-img {
  max-width: 100%;
  max-height: 100%;
}

.main-card-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 2.5rem;
}

.main-card-link {
  margin-left: 0.3rem;
}
</style>
