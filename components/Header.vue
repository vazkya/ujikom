<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-primary navbar-dark fixed-top">
      <div class="container">

        <img src="~/assets/img/logo.png" alt="Logo Sekolah" width="30" height="35" class="me-2">
        <div style="color: white;">SMKN 4 TASIKMALAYA</div>


        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="../">BERANDA</nuxt-link>
            </li>
            <li class="nav-item dropdown" @click="toggleDropdown">
              <nuxt-link class="nav-link dropdown-toggle" to="/profil" role="button">
                PROFIL
              </nuxt-link>
              <ul class="dropdown-menu" :class="{ show: isDropdownOpen }">
                  <li><nuxt-link class="dropdown-item" to="/profil">PROFIL</nuxt-link></li>
                  <li><nuxt-link class="dropdown-item" to="/visi">VISI MISI</nuxt-link></li>
                  <li><nuxt-link class="dropdown-item" to="/sejarah">SEJARAH</nuxt-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/jurusan">JURUSAN</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="./eskul">EKSTRAKURIKULER</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/galeri">GALERI</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>

<style scoped>

.navbar {
  padding: 10px 15px;
  z-index: 1050;
  width: 100%;
}


.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}


.navbar-brand img {
  max-height: 35px;
}


body {
  padding-top: 70px;
}

.nav-item.dropdown .dropdown-menu {
  z-index: 1060;
}
</style>