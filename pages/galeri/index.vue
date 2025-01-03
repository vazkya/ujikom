<template>
  <h3 style="margin-top: 80px; text-align: center;">GALERI</h3>
  <div class="row row-cols-1 row-cols-md-3 g-4 m-5" style="margin-top: 80px;">
  <div class="col">
    <div class="card h-100">
      <img src="~assets/img/2.png" class="card-img-top" alt="Expo">
      <div class="card-body">
        <h5 class="card-title">Upacara pembukaan porak siswa</h5>
        <p class="card-text">poto kegiatan upacara porak di SMKN 4 TASIKMALAYA</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">12-12-2024</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="~assets/img/3.png" class="card-img-top" alt="Expo">
      <div class="card-body">
        <h5 class="card-title">Upacara pembukaan porak guru</h5>
        <p class="card-text">dokumentasi guru dalam melaksanakan upacara pembukaan porak</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">12-12-2024</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="~assets/img/4.png" class="card-img-top" alt="Expo">
      <div class="card-body">
        <h5 class="card-title">Job Fair</h5>
        <p class="card-text">poto kegiatan job fair di SMKN 4 Taikmalaya</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">8-8-2024</small>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
useHead({title: "galeri", meta: [{nama: "galeri", content: "HALAMAN GALERI"}]});
</script>