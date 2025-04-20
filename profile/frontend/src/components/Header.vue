<template>
    <header class="app-header">
      <nav>
        <ul class="nav-links">
          <li><router-link to="/about" class="nav-item">About Me</router-link></li>
          <li><router-link to="/portfolio" class="nav-item">Portfolio</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "AppHeader",
  };
  </script>
  
  <style src="../assets/styles/header.css"></style>
  