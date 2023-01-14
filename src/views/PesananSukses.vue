<template>
    <div class="pesanan-sukses">
        <Navbar />
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <img src="../assets/images/makanan.png" alt="" width="350px">
                    <h2 class="mt-5"><strong> Sukses Pesan Makanan !! </strong></h2>
                    <h6> Silahkan Menunggu dengan Santai <br> Kami Sedang Mencarikan Driver disekitar </h6><br>
                    <br>
                    <br>
                    <h6> Pembayaran di dukung Oleh :</h6>
                    <img src="../assets/images/gopay.png" width="80px" alt="" class="me-2">
                    <img src="../assets/images/ovo.png" width="80px" alt="" class="me-2">
                    <img src="../assets/images/maxim.png" width="80px" alt="" class="me-2">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: "pesananSukses",
    components: {
        Navbar,
    }
}
</script>

<style>

</style>