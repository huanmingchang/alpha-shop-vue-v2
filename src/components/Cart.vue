<template>
  <section class="cart">
    <div class="cart__container">
      <div class="cart__container__title">購物籃</div>
      <div
        class="cart__container__wrapper"
        v-for="product in carts"
        :key="product.id"
      >
        <div class="cart__container__wrapper__product-photo">
          <img
            :src="product.img"
            :alt="'product' + product.id"
            class="cart__container__wrapper__product-photo--img"
          />
        </div>
        <div class="cart__container__wrapper__product">
          <div class="cart__container__wrapper__product__info">
            <div class="cart__container__wrapper__product__info--product-name">
              {{ product.name }}
            </div>
            <div class="cart__container__wrapper__product__info__modifier">
              <div
                class="cart__container__wrapper__product__info__modifier--minus minus"
                @click.stop.prevent="minusQty(product.id)"
              ></div>
              <div
                class="cart__container__wrapper__product__info__modifier--qty qty"
              >
                {{ product.qty }}
              </div>
              <div
                class="cart__container__wrapper__product__info__modifier--plus plus"
                @click.stop.prevent="addQty(product.id)"
              ></div>
            </div>
          </div>
          <div class="cart__container__wrapper__product__info--price">
            {{ product.price | addComma }}
          </div>
        </div>
      </div>

      <div class="cart__container__wrapper">
        <div class="cart__container__wrapper__freight">
          <div class="cart__container__wrapper__freight--item">運費</div>
          <div class="cart__container__wrapper__freight--amount freight">
            {{ deliveryCost | filterFreightCost }}
          </div>
        </div>
      </div>
      <div class="cart__container__wrapper">
        <div class="cart__container__wrapper__total">
          <div class="cart__container__wrapper__total--item">小計</div>
          <div class="cart__container__wrapper__total--amount total-amount">
            {{ calculateTotal | addComma }}
          </div>
        </div>
      </div>
      `
    </div>
  </section>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'Cart',
  props: {
    deliveryCost: {
      type: [Number, String, Object],
      required: true,
      default: () => ({
        deliveryCost: 0,
      }),
    },
  },
  data() {
    return {
      carts: [
        {
          id: uuidv4(),
          img: require('./../assets/product1.svg'),
          name: '破壞補丁修身牛仔褲',
          price: 3299,
          qty: 1,
        },
        {
          id: uuidv4(),
          img: require('./../assets/product2.svg'),
          name: '刷色直筒牛仔褲',
          price: 1299,
          qty: 1,
        },
      ],
    }
  },
  methods: {
    addQty(productId) {
      this.carts.map((product) => {
        if (product.id === productId) {
          product.qty += 1
        }
      })
    },
    minusQty(productId) {
      this.carts.map((product) => {
        if (product.id === productId) {
          product.qty -= 1
        }

        if (product.qty <= 0) {
          product.qty = 0
        }
      })
    },
  },
  filters: {
    // 把數字加上千分位逗號
    addComma: function (value) {
      if (!value) return '$0'
      return (
        '$' + value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      )
    },
    // 依照運費金額顯示免費或是運費價錢
    filterFreightCost: function (value) {
      return value === 0
        ? '免費'
        : '$' + value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
    },
  },
  computed: {
    // 計算總金額
    calculateTotal: function () {
      const total = this.carts.reduce((accu, curr) => {
        return accu.price * accu.qty + curr.price * curr.qty
      })

      return this.deliveryCost + total
    },
  },
  watch: {
    // 監聽總金額變化並往父組件送
    calculateTotal: {
      handler: function (total) {
        this.$emit('handleTotal', total)
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>
