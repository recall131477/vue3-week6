<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <h1 class="navbar-brand m-0">肉鬆電器行後台</h1>
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
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">回到前台</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login" @click="singout">登出</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view v-if="checkSuccess"></router-view>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  methods: {
    // 確認是否登入並儲存 token
    checkLogin() {
      // 取出token
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        // axios 預設值
        this.$http.defaults.headers.common.Authorization = `${token}`;
        const url = `${process.env.VUE_APP_API}/api/user/check`;
        this.$http.post(url, { api_token: this.token })
          .then(() => {
            this.checkSuccess = true;
          })
          .catch((err) => {
            console.log(err.response.data.message);
            this.$router.push('/login');
          });
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: '請先登入!',
          showConfirmButton: false,
          timer: 1500,
        });
        this.$router.push('/login');
      }
    },
    // 登出並清除 token
    singout() {
      document.cookie = 'hexToken=;expires=;';
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '已登出!',
        showConfirmButton: false,
        timer: 1500,
      });
      this.$router.push('/login');
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
