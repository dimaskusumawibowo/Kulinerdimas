<template>
  <div class="detailfood">
    <Navbar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link class="text-dark" to="/"> Home </router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link class="text-dark" to="/foods"> Foods </router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <!-- <img
            :src="
              product.gambar ?
                '../assets/images/' + product.gambar
                :
                'https://free-images.com/lg/7c2b/backlit_cattle_grazing_in.jpg'
            "
            class="img-fluid shadow"
          />  -->
          <!-- <img
            v-if="product.gambar"
            :src="'../assets/images/' + product.gambar"
            class="img-fluid shadow"
          />  -->
          <img
            v-if="product.gambar"
            :src="'../assets/images/' + product.gambar"
            class="img-fluid shadow"
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga:<strong> {{ product.harga }}</strong>
          </h4>
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="jpemesanan"> Jumlah Pesanan </label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlah_pemesanan"
              />
            </div>
            <div class="form-group">
              <label for="jketerangan"> Keterangan </label>
              <textarea
                type="text"
                class="form-control"
                placeholder="Pedes, atau mau Pakai Sendok.. ?"
                v-model="pesan.keterangan"
              />
            </div>
            <div class="form-group">
              <label for="jketerangan"> </label>
              <input
                type="text"
                class="form-control"
                placeholder="Punya Kode Promo ?"
              />
            </div>
            <button class="btn btn-success mt-2" @click="pemesanan">
              <b-icon-cart></b-icon-cart> Order Now
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "DetailFood",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = (data);
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.$router.push ({path: "/Keranjang"})
        this.pesan.products = this.product;
        axios
          .post(`http://localhost:3000/keranjangs`, this.pesan)
          .then(() => {
            this.$toast.success("Berhasil Masuk ke Keranjang", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Jumlah Pesanan Harus di Isi", {
              type: "error",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
      }
    },
  },
  mounted() {
    axios
      .get(`http://localhost:3000/products/${this.$route.params.id}`)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>