<template>
  <div id="jurusan" class="container mt-5" style="padding-top: 50px;"> 
    <div class="row">
      <div class="col text-center">
        <h2>JURUSAN</h2>
        <p>Berbagai jurusan menarik yang tersedia di SMKN 4 Tasikmalaya.</p>
      </div>
    </div>
  
    <div class="row mt-4">

      <div class="col-md-4 mb-4">
        <div class="shadow card h-100">
          <div class="card-body text-center bg-primary" style="color: white;">
            <img src="~/assets/img/tkj.png" alt="Logo Sekolah" width="30" height="35" class="me-2">
            <h5 class="card-title">Teknik Komputer dan Jaringan (TKJ)</h5>
            <p class="card-text">Mahir dalam jaringan komputer dan teknologi informasi.</p>
            <p class="card-text"><strong>Jumlah Murid: 120</strong></p>
          </div>
        </div>
        </div>
  
        <div class="col-md-4 mb-4">
          <div class="shadow card h-100">
            <div class="card-body text-center bg-success" style="color: white;">
              <img src="~/assets/img/rpl.png" alt="Logo Sekolah" width="30" height="35" class="me-2">
              <h5 class="card-title">Rekayasa Perangkat Lunak (RPL)</h5>
              <p class="card-text">Ahli dalam pengembangan perangkat lunak modern.</p>
              <p class="card-text"><strong>Jumlah Murid: 100</strong></p>
            </div>
          </div>
        </div>
  
        <div class="col-md-4 mb-4">
          <div class="shadow card h-100">
            <div class="card-body text-center bg-warning" style="color: white;">
              <img src="~/assets/img/dkv.png" alt="Logo Sekolah" width="30" height="35" class="me-2">
              <h5 class="card-title">Desain Komunikasi Visual (DKV)</h5>
              <p class="card-text">Kreatif dalam seni desain dan komunikasi visual.</p>
              <p class="card-text"><strong>Jumlah Murid: 90</strong></p>
            </div>
          </div>
        </div>
  
        <div class="col-md-6 mb-4">
          <div class="shadow card h-100">
            <div class="card-body text-center bg-danger" style="color: white;">
              <img src="~/assets/img/tsm.png" alt="Logo Sekolah" width="30" height="35" class="me-2">
              <h5 class="card-title">Teknik Bisnis Sepeda Motor (TBSM)</h5>
              <p class="card-text">Ahli dalam perbaikan dan manajemen bisnis sepeda motor.</p>
              <p class="card-text"><strong>Jumlah Murid: 80</strong></p>
            </div>
          </div>
        </div>
  
        <div class="col-md-6 mb-4">
          <div class="shadow card h-100">
            <div class="card-body text-center bg-secondary" style="color: white;">
              <img src="~/assets/img/toi.png" alt="Logo Sekolah" width="30" height="35" class="me-2">
              <h5 class="card-title">Teknik Otomasi Industri (TOI)</h5>
              <p class="card-text">Mahir dalam sistem otomatisasi dan teknologi industri.</p>
              <p class="card-text"><strong>Jumlah Murid: 70</strong></p>
            </div>
          </div>
        </div>
      </div>
  
      <div class="row mt-5">
        <div class="col text-center">
          <h2>FASILITAS PEMBELAJARAN</h2>
          <p>RUANG PRAKTIK SISWA</p>
        </div>
      </div>
  

      <div class="row mt-4">
        <div class="col-md-4 mb-4">
          <div class="shadow card h-100">
            <div class="card-body text-center bg-primary" style="color: white;">
              <img src="~/assets/img/labtkj.jpg" alt="Laboratorium Komputer" width="200" height="200" class="me-2 m-3">
              <h5 class="card-title">RUANG PRAKTIK SISWA TKJ</h5>
              <p class="card-text">Fasilitas untuk pembelajaran teknologi informasi dan jaringan.</p>
            </div>
          </div>
        </div>
  
        <div class="col-md-4 mb-4">
          <div class="shadow card h-100">
            <div class="card-body text-center bg-success" style="color: white;">
              <img src="~/assets/img/labrpl.jpg" alt="Ruang Kelas" width="200" height="200" class="me-2 m-3">
              <h5 class="card-title">RUANG PRAKTIK SISWA RPL</h5>
              <p class="card-text">Ruangan praktik yang lengkap dan nyaman</p>
            </div>
          </div>
        </div>
  
        <div class="col-md-4 mb-4">
          <div class="shadow card h-100">
            <div class="card-body text-center bg-warning" style="color: white;">
              <img src="~/assets/img/labdkv.jpg" alt="Studio DKV" width="200" height="200" class="me-2 m-3">
              <h5 class="card-title">Studio DKV</h5>
              <p class="card-text">Fasilitas untuk pembelajaran desain grafis dan komunikasi visual.</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <div class="shadow card h-100">
            <div class="card-body text-center bg-danger" style="color: white;">
              <img src="~/assets/img/labtsm.jpg" alt="Ruang Kelas"width="200" height="200" class="me-2 m-3">
              <h5 class="card-title">BENGKEL TBSM</h5>
              <p class="card-text">Ruang kelas yang nyaman untuk kegiatan belajar-mengajar.</p>
            </div>
          </div>
        </div>
  
        <div class="col-md-6 mb-4">
          <div class="shadow card h-100">
            <div class="card-body text-center bg-secondary" style="color: white;">
              <img src="~/assets/img/labrpl.jpg" alt="Laboratorium Otomasi" width="200" height="200" class="me-2 m-3">
              <h5 class="card-title">Laboratorium Otomasi Industri</h5>
              <p class="card-text">Fasilitas untuk praktek dalam bidang otomatisasi industri.</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
useHead({title: "jurusan", meta: [{nama: "jurusan", content: "HALAMAN JURUSAN"}]});
</script>
<style scoped>
.card {
  border-radius: 10px;
}
</style>
  