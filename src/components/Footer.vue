<template>
  <footer>
    <div class="footer-wrapper">
      <a href="mailto:fjalva01@gmail.com">
        fjalva01@gmail.com
      </a>
      <a
        href="https://www.linkedin.com/in/francisco-javier-%C3%A1lvarez-s%C3%A1nchez/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <em class="fab fa-linkedin"></em>
      </a>
      <a href="https://www.instagram.com/el_bekario" target="_blank" rel="noopener noreferrer">
        <em class="fab fa-instagram"></em>
      </a>
      <a href="https://twitter.com/el_bekario" target="_blank" rel="noopener noreferrer">
        <em class="fab fa-twitter"></em>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  background-color: #000000;
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

a {
  color: #ffffff;
  transition: transform 0.25s ease;
  will-change: transform;
}

a:hover {
  transform: scale(1.1);
}

em {
  font-size: 2rem;
}
</style>
