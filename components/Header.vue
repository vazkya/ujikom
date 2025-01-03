<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img
            src="~/assets/img/logo.png"
            alt="Logo"
            width="30"
            height="35"
            class="me-2"
          />
          <span>SMKN 4 TASIKMALAYA</span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/">Beranda</nuxt-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profil
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><nuxt-link class="dropdown-item" to="/profil">Profil</nuxt-link></li>
                <li><nuxt-link class="dropdown-item" to="/visi">Visi Misi</nuxt-link></li>
                <li><nuxt-link class="dropdown-item" to="/sejarah">Sejarah</nuxt-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/jurusan">Jurusan</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/eskul">Ekstrakurikuler</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/galeri">Galeri</nuxt-link>
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
  name: "Navbar",
};
</script>

<style>
body {
  padding-top: 70px; 
}
.navbar {
  z-index: 1050; 
}
</style>
