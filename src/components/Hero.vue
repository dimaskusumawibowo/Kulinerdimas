<template>
  <div class="hero">
    <div class="container">
      <!-- Desktop Version -->
      <div class="d-none d-md-block">
        <div class="row mt-4">
          <div class="col md-6">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h3>
                  <strong> Delicious Menu, </strong><br />dalam Genggamanmu !!!
                </h3>
                <p>Segera Lihat Daftar Menu Makanan Kami</p>
                <router-link class="btn btn-success" to="/foods">
                  <b-icon-arrow-right></b-icon-arrow-right> Order Now
                </router-link>
              </div>
            </div>
          </div>
          <div class="col md-6">
            <img src="../assets/images/Hero.png" alt="Hero" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- Mobile Version -->
      <div class="d-sm-block d-md-none">
        <div class="row mt-4">
          <div class="col md-6">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <div class="col md-6 mb-4">
                  <img src="../assets/images/Hero.png" alt="Hero" />
                </div>
                <h3>
                  <strong> Delicious Menu, </strong><br />dalam Genggamanmu !!!
                </h3>
                <p>Segera Lihat Daftar Menu Makanan Kami</p>
                <router-link class="btn btn-success" to="/foods">
                  <b-icon-arrow-right></b-icon-arrow-right> Order Now
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroDimas",
};
</script>

<style>
</style>