<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <a href="/" class="navbar-brand"><strong>Kuliner</strong>dimas</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/"> Home </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/foods"> Foods </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Drinks"> Drinks </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about"> About </router-link>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/keranjang">
                Keranjang
                <b-icon-cart></b-icon-cart>
                <span class="badge text-bg-success ms-2">{{updateKeranjang ? updateKeranjang.length : jumlah_pesanans.length }}</span>
              </router-link>
            </li>
          </ul>
        </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NavbarDimas",
  data(){
    return{
      jumlah_pesanans: []
    }
  },
  props:['updateKeranjang'],
  methods:{
    setJumlah(data){
      this.jumlah_pesanans = data
    }
  },
  mounted(){
    axios
      .get(`http://localhost:3000/keranjangs`)
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error));
  },
};

</script>
