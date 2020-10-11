<template>
  <div id="app">
    <Proverb v-if="preloading" class="app-preloading" :proverb="proverb" />
    <Header class="app-header" />
    <Main name="Hello" class="app-main" />
    <Footer class="app-footer" />
  </div>
</template>

<script>
import fire from './fire';
import Proverb from './components/Proverb.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Proverb,
    Header,
    Main,
    Footer
  },
  created() {
    fire
      .database()
      .ref('/proverbs')
      .once('value')
      .then((snapshot) => {
        const proverbs = snapshot.val();
        this.proverb = proverbs[Math.floor(Math.random() * proverbs.length)];
        setTimeout(() => this.finishPreloading(), 5000);
      });
  },
  data() {
    return {
      preloading: true,
      proverb: ''
    };
  },
  methods: {
    finishPreloading: function () {
      this.preloading = false;
    }
  }
};
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header,
.app-footer {
  z-index: 100;
}

.app-main {
  padding-top: 3rem;
}

.app-preloading {
  position: fixed;
  z-index: 1000;
}
</style>
