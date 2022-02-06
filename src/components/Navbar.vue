<template>
  <nav class="nav">
    <div class="nav__hamburger">
      <img
        :src="hamburger"
        alt="hamburger"
        class="nav__hamburger--img"
        @click.prevent.stop="toggleHamburger"
      />
    </div>
    <div class="nav__logo">
      <a href="javascript:void(0)">
        <img :src="logo" alt="logo" class="nav__logo--img" />
      </a>
    </div>
    <div class="nav-container d-none">
      <div class="nav__wrapper">
        <div class="nav__wrapper__category">
          <a
            href="javascript:void(0)"
            v-for="category in navCategoriesContent"
            :key="category.id"
          >
            <span class="nav__wrapper__category--content">{{
              category.name
            }}</span>
          </a>
        </div>
        <div class="nav__wrapper__icons">
          <a href="javascript:void(0)">
            <img
              :src="navIcons.searchIcon"
              alt="search-icon"
              class="nav__wrapper__icons--icon search"
            />
          </a>
          <a href="javascript:void(0)">
            <img
              :src="navIcons.shoppingCartIcon"
              alt="cart-icon"
              class="nav__wrapper__icons--icon shopping-cart"
            />
          </a>
          <a href="javascript:void(0)">
            <img
              :src="navIcons.switchIcon"
              alt="switch-icon"
              class="nav__wrapper__icons--icon switch"
            />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'Navbar',
  data() {
    return {
      navCategoriesContent: [
        {
          id: uuidv4(),
          name: '男款',
        },
        {
          id: uuidv4(),
          name: '女款',
        },
        {
          id: uuidv4(),
          name: '最新消息',
        },
        {
          id: uuidv4(),
          name: '客製商品',
        },
        {
          id: uuidv4(),
          name: '聯絡我們',
        },
      ],
      navIcons: {
        searchIcon: require('./../assets/search-icon-daymode.svg'),
        shoppingCartIcon: require('./../assets/shoppingcart-icon-daymode.svg'),
        switchIcon: require('./../assets/moon-icon-daymode.svg'),
      },
      logo: require('./../assets/logo-daymode.svg'),
      hamburger: require('./../assets/hamburger-daymode.svg'),
    }
  },
  methods: {
    toggleHamburger(e) {
      const navContainer = document.querySelector('.nav-container')
      if (!e.target.classList.contains('nav__hamburger--img')) return

      if (navContainer.classList.contains('d-none')) {
        navContainer.classList.remove('d-none')
      } else {
        navContainer.classList.add('d-none')
      }
    },
  },
}
</script>
