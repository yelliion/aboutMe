<template>
  <div>
    <Header />

    <main>
      <router-view />
    </main>

    <footer>
      <p>저작권 © 2025</p>
    </footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: "App",
  components: {
    Header,
  }
};
</script>

<style>
/* 스타일 부분 */
</style>
