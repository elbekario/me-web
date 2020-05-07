<template>
  <header>header</header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: 3rem;
  position: fixed;
  width: 100%;
  background-color: blue;
}
</style>
