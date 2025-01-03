<template>
  <div id="home-page-container">

    <div class="text-center mt-4">
      <h3 style="color: black; text-align: center; margin: 50px;">SELAMAT DATANG DI SMK PUSAT KEUNGGULAN SMKN 4 TASIKMALAYA</h3>
      <img src="~/assets/img/logo.png" alt="Logo SMKN 4 Tasikmalaya" style="width: 20%; height: auto;" class="img-fluid" />
    </div>


    <h2 class="bg-primary text-white text-center py-2 mt-5">SAMBUTAN KEPALA SEKOLAH</h2>
    <div class="d-flex flex-column flex-md-row align-items-center mt-4 shadow" style="background-color: lightgray; margin-bottom: 20px;">
      <img src="~/assets/img/kepsek.png" alt="Kepala Sekolah" class="rounded-circle m-5 logo-glow" />
      <div class="ms-4 mt-3 mt-md-0">
        <h3><span class="text-black">Sambutan</span> <span class="text-primary">Kepala Sekolah</span></h3>
        <p><span class="text-black">Selamat datang di</span> <span class="text-primary">SMKN 4 Tasikmalaya.</span> <span class="text-black">Dengan penuh syukur kami mengucapkan terima kasih sebesar-besarnya kepada semua pihak yang telah memberikan dukungan dan fasilitas yang sangat berarti bagi kami. Semoga semua usaha yang telah dilakukan membawa manfaat dan kebaikan. Wassalamu'alaikum Warahmatullahi Wabarakatuh.</span></p>
        <small class="text-muted">Kepala Sekolah, SMKN 4 Tasikmalaya</small>
      </div>
    </div>

    <h2 class="bg-primary text-white text-center py-2 mt-5">JUMLAH GURU DAN SISWA</h2>
    <div class="stat-cards-container d-flex justify-content-around mt-5 mb-4">
      <div class="stat-card">
        <div class="stat-card-body">
          <h4 class="stat-title">Jumlah Guru</h4>
          <p class="stat-number">50</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-card-body">
          <h4 class="stat-title">Jumlah Siswa</h4>
          <p class="stat-number">1000</p>
        </div>
      </div>
    </div>

  
    <h2 class="bg-primary text-white text-center py-2">BERITA</h2>
    <div class="news-cards-container m-5">
      <div class="card-item">
        <img src="~assets/img/berita.webp" class="card-img-top" alt="Expo">
        <div class="card-body">
          <h5 class="card-title">EXPO</h5>
          <p class="card-text">Latest update on our school expo.</p>
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card-item">
        <img src="~assets/img/berita.webp" class="card-img-top" alt="Expo">
        <div class="card-body">
          <h5 class="card-title">EXPO</h5>
          <p class="card-text">Details about our upcoming event.</p>
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card-item">
        <img src="~assets/img/berita.webp" class="card-img-top" alt="Expo">
        <div class="card-body">
          <h5 class="card-title">EXPO</h5>
          <p class="card-text">Details about our upcoming event.</p>
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({title: "beranda", meta: [{nama: "beranda", content: "HALAMAN BERANDA"}]});
</script>

<style scoped>
#home-page-container {
  padding-top: 50px;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.stat-cards-container {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
}

.stat-card {
  position: relative;
  width: 250px;
  height: 120px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 5px solid transparent;
  border-image: linear-gradient(to right, #007bff, #0056b3) 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.stat-card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.stat-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: bold;
  color: #007bff;
}

.news-cards-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
}

.card-item {
  flex: 1 1 calc(33.33% - 20px);
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-bottom: 2px solid #ddd;
  border-radius: 12px 12px 0 0;
}

.card-body {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 0 0 12px 12px;
}

.card-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
}

.card-text {
  font-size: 1rem;
  color: #555;
}

.bg-primary {
  background-color: #007bff;
}

.text-center {
  text-align: center;
}

.ms-4 {
  margin-left: 1.5rem;
}

.text-muted {
  font-size: 0.875rem;
}

.logo-glow {
  box-shadow: 0 0 15px 5px rgba(98, 177, 255, 0.7);
  border-radius: 30%;
  padding: 15px;
}

.d-flex {
  display: flex;
  align-items: center;
}

img {
  max-width: 100%;
}

.rounded-circle {
  width: 150px;
  height: 150px;
}

.text-primary {
  color: #007bff;
}

.text-black {
  color: #000000;
}

@media (max-width: 1024px) {
  .news-cards-container {
    flex-direction: column;
  }

  .card-item {
    flex: 1 1 100%;
  }

  .logo-glow {
    width: 50%;
  }

  .ms-4 {
    margin-left: 0;
    margin-top: 15px;
  }

  .d-flex {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .card-item {
    flex: 1 1 100%;
  }
}
</style>