<template>
  <div class="container">
    <div class="mt-4">
      <VLoading :active="isLoading"></VLoading>
      <h2 class="text-center">產品列表</h2>
      <!-- row 決定內層的數量 -->
      <div class="row row-cols-1 row-cols-lg-4 g-3">
        <!-- 內層不定義寬度 -->
        <div class="col" v-for="product in products" :key="product.id">
          <div class="card h-100">
            <img :src="product.imageUrl" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">
                {{ product.description }}
              </p>
              <router-link class="btn btn-primary w-100" :to="`/product/${product.id}`"
                >查看更多</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      productId: '',
      isLoading: false,
    };
  },
  methods: {
    // 取得產品資料
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err.data.message);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';

.card {
  img {
    height: 200px;
    object-fit: cover;
  }
}
</style>
