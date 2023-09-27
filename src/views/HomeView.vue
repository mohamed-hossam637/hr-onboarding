<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/MicrosoftTeams-image.png" class="d-block w-100" alt="...">
        <p class="caption">
          
        </p>
      </div>
      <!-- <div class="carousel-item ">
        <img src="../assets/OIP.png" class="d-block w-100" alt="...">
        <p class="caption">
          ON BOARDING
        </p>
      </div> -->
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
#carouselExample {
  height: 80vh;
}

.carousel-inner {
  height: 100%;
}

.carousel-inner .carousel-item {
  height: 100%;
  position: relative;
  z-index: 1;
}

.carousel-inner .carousel-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #33333334;
}

.carousel-inner .carousel-item .caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: bold;
  font-size: 2.4em;
  z-index: 2;
}

.carousel-inner .carousel-item img {
  /* object-fit: cover; */
  width: 100%;
  height: 100%;
}

@media(max-width: 767px) {
  .carousel-inner .carousel-item .caption {
    font-size: 1.5em;
  }
}

</style>