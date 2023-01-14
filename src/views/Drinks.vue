<template>
  <div class="drinks">
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar <strong> Minuman </strong></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "HomeView",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>