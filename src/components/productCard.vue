<template>
  <div class="card">
    <img
      :src="'../assets/images/' + product.gambar"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">Harga: Rp. {{ product.harga }}</p>
      <router-link class="btn btn-success me-2" :to="'/foods/'+ product.id"><b-icon-cart-check></b-icon-cart-check> Cart</router-link> 
      <a href="#" class="btn btn-warning"
        ><b-icon-cart2></b-icon-cart2> Wishlist
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "productCard",
  props: ["product"],
};
</script>

<style>
</style>