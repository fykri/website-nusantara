<template>
    <nav class="navbar navbar-expand navbar-light fixed top">
      <div class="container">
        <a href="#" class="navbar-brand">Nusantara Vue</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/auth/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/auth/register" class="nav-link">Register</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>

  export default {
    name: 'Nav'
  }

</script>