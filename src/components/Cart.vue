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
              ></div>
              <div
                class="cart__container__wrapper__product__info__modifier--qty qty"
              >
                {{ product.qty }}
              </div>
              <div
                class="cart__container__wrapper__product__info__modifier--plus plus"
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
            ${freightDisplay}
          </div>
        </div>
      </div>
      <div class="cart__container__wrapper">
        <div class="cart__container__wrapper__total">
          <div class="cart__container__wrapper__total--item">小計</div>
          <div class="cart__container__wrapper__total--amount total-amount">
            $
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
  filters: {
    addComma: function (value) {
      if (!value) return '-'
      return (
        '$' + value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      )
    },
  },
}
</script>
