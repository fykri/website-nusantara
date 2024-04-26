<template>
    <div class="container-sm d-flex justify-content-center align-items-center min-vh-100">
      <!-- login -->
      <div class="row border rounder-5 bg-white shadow box-area">
        <!-- kotak kiri -->
        <div class="col-md-6 d-flex justify-content-center align-items-center flex-column left-box">
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src="../assets/login1.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="../assets/login2.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="../assets/login3.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="../assets/login4.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <!-- kotak kanan -->
        <div class="col-md-6 p-4 my-3 right-box">
          <form method="POST" class="needs-validation" autocomplete="off">
            <div class="row align-items-center">
              <div class="header-text mb-4">
                <h2>Sign In</h2>
              </div>
              <div class="input-group mb-3">
                <div class="col">
                  <label for="" class="mb-2">Username</label>
                  <input type="text" class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Username" required autofocus />
                  <div class="invalid-feedback">Username is invalid</div>
                </div>
              </div>
              <div class="input-group mb-1">
                <div class="col">
                  <label for="" class="mb-2">Password</label>
                  <input type="password" class="form-control form-control-lg bg-light fs-6" placeholder="password" required />
                  <div class="invalid-feedback">Password is required</div>
                </div>
              </div>
              <div class="input-group mb-5 d-flex justify-content-between">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="formCheck" />
                  <label for="formCheck" clas><small>Remember Me</small></label>
                </div>
                <div class="forgot">
                  <a href="#">Forgot Password?</a>
                </div>
              </div>
              <div class="input-group mb-3">
                <button type="submit" class="btn btn-lg btn-primary w-100 fs-6">Login</button>
              </div>
              <div class="input-group mb-3">
                <h6 type="submit" class="fs-6">Don't have an account? <a class="stylnone" href="../../register/register.html">Create Account</a></h6>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
        name: 'Login'
    }
</script>