<template>
  <NavBar />
  <router-view/>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "./components/NavBar.vue";

export default {
    data() {
        return {};
    },
    created() { },
    components: { NavBar }
}

</script>

<style>
:root{
  --main-color :#0057B7 ;
}
body{
  direction: ltr;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  direction: ltr;
}

nav {
  padding: 30px;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
.text-left {
  /* text-align: left; */
  font-size: 1.3em;
  line-height: 1.5;
}
.text-left {
  text-align: left;
  font-size: 1.3em;
  line-height: 1.5;
}
/* nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
