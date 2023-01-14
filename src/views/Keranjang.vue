<template>
  <div class="Keranjang">
    <Navbar :updateKeranjang="keranjangs" />
    <div class="container">
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
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="col">
        <div class="row">
          <h2><strong>Keranjang </strong> Saya</h2>
          <div class="table-responsive mt-3">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Nomor</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img :src="'../assets/images/' + keranjang.products.gambar" class="img-fluid shadow"
                      width="180px" />
                  </td>
                  <td>
                    <strong>{{ keranjang.products.nama }}</strong>
                  </td>
                  <td>
                    {{ keranjang.keterangan ? keranjang.keterangan : "-" }}
                  </td>
                  <td>{{ keranjang.jumlah_pemesanan }}</td>
                  <td>Rp.{{ keranjang.products.harga }}</td>
                  <td>
                    <strong>
                      Rp.{{
    keranjang.products.harga * keranjang.jumlah_pemesanan
}}</strong>
                  </td>
                  <td class="text-danger">
                    <b-icon-trash @click="hapusKeranjang(keranjang.id)" style="cursor: pointer"></b-icon-trash>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="right">
                    <strong> Total Harga: </strong>
                  </td>
                  <td>
                    <strong>{{ totalHarga }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="nama_pemesan"><strong>Nama Pemesan :</strong></label>
              <input type="text" class="form-control" v-model="pesan.nama_pemesan" />
            </div>
            <div class="form-group mt-2">
              <label for="alamat_pemesan"><strong>Alamat Pemesan :</strong></label>
              <input type="text" class="form-control" v-model="pesan.alamat_pemesan" />
            </div>
            <div class="form-group mt-2">
              <label for="nomor_meja" class="mb-2"><strong>Mau di Kirim Lewat Apa ?</strong></label><br>
              <input class="form-check-input" type="radio" name="pemesanan" value="gojek" id="flexRadioDefault1"
                v-model="pesan.pemesanan" />
              <label class="form-check-label me-2" for="flexRadioDefault1"> Go-Ride </label>
              <input class="form-check-input" type="radio" name="pemesanan" value="grab" id="flexRadioDefault2"
                v-model="pesan.pemesanan" />
              <label class="form-check-label me-2" for="flexRadioDefault2"> Grab-Bike </label>
              <input class="form-check-input" type="radio" name="pemesanan" value="maxim" id="flexRadioDefault3"
                v-model="pesan.pemesanan" />
              <label class="form-check-label me-2" for="flexRadioDefault3"> Maxim-Driver </label>
            </div>

            <button class="btn btn-success mt-2" @click="checkout"><b-icon-cart></b-icon-cart>Order Now</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "KeranjangDimas",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
      pesan: {}
    };
  },
  methods: {
    setKeranjang(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then((response) => {
          console.log(response);
          this.$toast.error("Berhasil Hapus dari Keranjang", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
          // Update Data Keranjang Setelah User Menghapus Data di Keranjang
          axios
            .get(`http://localhost:3000/keranjangs`)
            .then((response) => this.setKeranjang(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    checkout() {
      if (this.pesan.nama_pemesan && this.pesan.alamat_pemesan && this.pesan.pemesanan) {
        axios
          .post(`http://localhost:3000/pesanans`, this.pesan)
          .then(() => {
            // Hapus Semua Keranjang Ketika Sudah Menjadi Pesanan
            this.keranjangs.map(function (item){
              return axios
                .delete(`http://localhost:3000/keranjangs/` + item.id)
                .catch((error) => console.log(error));
            });
            this.$router.push({ path: `/PesananSukses` })
            this.$toast.success(`Berhasil Sukses Pesan Makanan`, {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((error) => console.log(error));
      } else {
        this.$toast.error("Ups, Sepertinya ada yang kurang nih !!", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    }
  },
  mounted() {
    axios
      .get(`http://localhost:3000/keranjangs`)
      .then((response) => this.setKeranjang(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>
