<template>
  <div class="home">
    <Navbar />
    <Hero />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong> Foods </strong></h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-end"
            ><b-icon-eyeglasses></b-icon-eyeglasses> See All Menu
          </router-link>
        </div>

        <div class="row mb-4">
          <div
            class="col-md-3 mt-4"
            v-for="product in products"
            :key="product.id"
          >
            <productCard :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import productCard from "@/components/productCard.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    Navbar,
    Hero,
    productCard,
  },

  data() {
    return {
      products: [],
    };
  },

  methods: {
    setProduct(data) {
      this.products = data;
    },
  },

  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
