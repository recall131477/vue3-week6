<template>
  <div class="container">
    <div class="mt-4">
      <VLoading :active="isLoading"></VLoading>
      <h2 class="text-center">單一產品</h2>
      <table class="table align-middle">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="width: 200px">
              <div
                :style="{ backgroundImage: `url(${product.imageUrl})` }"
                style="height: 100px; background-size: cover; background-position: center"
              ></div>
            </td>
            <td>
              {{ product.title }}
            </td>
            <td>
              <div class="h5" v-if="product.price === product.origin_price">
                {{ product.price }} 元
              </div>
              <div v-else>
                <del class="h6">原價 {{ product.origin_price }} 元</del>
                <div class="h5">現在只要 {{ product.price }} 元</div>
              </div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="addToCart(product.id)"
                  :disabled="isLoadingItem === product.id || !product.is_enabled"
                >
                  加到購物車
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import emitter from '@/libs/emitter';

export default {
  data() {
    return {
      product: [],
      isLoadingItem: '',
      isLoading: false,
    };
  },
  methods: {
    // 取得產品資料
    getProduct() {
      this.isLoading = true;
      const { id } = this.$route.params; // 解構式取出 id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          this.product = res.data.product;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err.data.message);
        });
    },
    // 加入購物車，當 qty 沒有傳入值時，預設為1
    addToCart(id, qty = 1) {
      const data = {
        product_id: id,
        qty,
      };
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoadingItem = id;
      this.$http
        .post(url, { data })
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '已加入購物車',
            showConfirmButton: false,
            timer: 1500,
          });
          this.isLoadingItem = '';
          emitter.emit('get-cart');
        })
        .catch((err) => {
          console.log(err.data.message);
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
