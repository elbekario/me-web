<template>
  <footer>
    <div class="footer-wrapper">
      <a href="https://www.instagram.com/el_bekario/" target="_blank" rel="noopener noreferrer">
        <em class="fab fa-instagram"></em>
      </a>
      <a href="mailto:fjalva01@gmail.com">
        <em class="far fa-envelope"></em>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style>
footer {
  display: flex;
  justify-content: center;
  background-color: lightblue;
}

.footer-wrapper {
  max-width: var(--max-width);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
}

em {
  font-size: 2rem;
}
</style>
