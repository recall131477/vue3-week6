<template>
  <div class="container">
    <div class="mt-4">
      <VLoading :active="isLoading"></VLoading>
      <h2 class="text-center">購物車</h2>
      <!-- 購物車列表 -->
      <div class="text-end">
        <!-- 購物車產品為 0 時，清空購物車不可點擊 -->
        <button
          class="btn btn-outline-danger"
          type="button"
          @click="deleteAllCarts"
          :disabled="cart.carts.length === 0"
        >
          清空購物車
        </button>
      </div>
      <table class="table align-middle">
        <thead>
          <tr>
            <th style="width: 25%"></th>
            <th style="width: 25%">品名</th>
            <th style="width: 10%">數量/單位</th>
            <th style="width: 25%" class="text-end">單價</th>
          </tr>
        </thead>
        <tbody>
          <!-- 判斷購物車資料是否存在 -->
          <template v-if="cart.carts">
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="deleteCartItem(item.id)"
                  :disabled="isLoadingItem === item.id"
                >
                  <i class="fas fa-spinner fa-pulse" v-if="isLoadingItem === item.id"></i>
                  x
                </button>
              </td>
              <td>
                {{ item.product.title }}
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <select
                      id=""
                      class="form-select"
                      v-model="item.qty"
                      @change="updateCartItem(item)"
                      :disabled="isLoadingItem === item.id"
                    >
                      <option :value="num" v-for="num in 20" :key="`${num}-${item.id}`">
                        {{ num }}
                      </option>
                    </select>
                    <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                  </div>
                </div>
              </td>
              <td class="text-end">
                {{ item.total }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{ cart.total }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- 表單 -->
    <div class="my-5 row justify-content-center">
      <VForm ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label"> Email </label>
          <VField
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          >
          </VField>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <VField
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></VField>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <VField
            id="tel"
            name="電話"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            :rules="isPhone"
            v-model="form.user.tel"
          >
          </VField>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <VField
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></VField>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <!-- 當購物車產品為 0 或錯誤訊息大於 1 時，表單無法送出並顯示不能點選 ( ? = 可選串連) -->
          <button
            type="submit"
            class="btn btn-danger"
            :disabled="cart.carts?.length === 0 || Object.keys(errors).length > 0"
          >
            送出訂單
          </button>
        </div>
      </VForm>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import emitter from '@/libs/emitter';

export default {
  data() {
    return {
      cart: {
        carts: [],
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      isLoadingItem: '',
      isLoading: false,
    };
  },
  methods: {
    // 取得購物車資料
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.cart = res.data.data;
          emitter.emit('get-cart');
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err.data.message);
        });
    },
    // 更新購物車
    updateCartItem(item) {
      const data = {
        product_id: item.id,
        qty: item.qty,
      };
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoadingItem = item.id;
      this.$http
        .put(url, { data })
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '已更新商品',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getCart();
          this.isLoadingItem = '';
        })
        .catch((err) => {
          console.log(err.data.message);
        });
    },
    // 刪除購物車特定產品
    deleteCartItem(id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoadingItem = id;
      this.$http
        .delete(url)
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '已刪除商品',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getCart();
          this.isLoadingItem = '';
        })
        .catch((err) => {
          console.log(err.data.message);
        });
    },
    // 刪除購物車全部產品
    deleteAllCarts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      this.$http
        .delete(url)
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '已刪除全部商品',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getCart();
        })
        .catch((err) => {
          console.log(err.data.message);
        });
    },
    // 判斷電話是否符合正規表達式
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入正確的電話號碼';
    },
    // 建立表單
    createOrder() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http
        .post(url, { data: order })
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '已建立訂單',
            showConfirmButton: false,
            timer: 1500,
          });
          this.$refs.form.resetForm(); // 清空 form 表單內容，套件用法
          this.form.message = '';
          this.getCart();
        })
        .catch((err) => {
          console.log(err.data.message);
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
