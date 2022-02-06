<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__container__logo">
        <a href="javascript:void(0)">
          <img :src="logo" alt="" class="footer__container__logo--img" />
        </a>
      </div>
      <div
        class="footer__container__info"
        v-for="info in footerInfo"
        :key="info.id"
      >
        <div class="footer__container__info--title">{{ info.title }}</div>
        <div class="footer__container__info__wrapper">
          <a
            href="javascript:void(0)"
            v-for="content in info.contents"
            :key="content"
            ><span class="footer__container__info__wrapper--content">{{
              content
            }}</span></a
          >
        </div>
      </div>
      <div class="footer__container__info">
        <div class="footer__container__info--title">追蹤 ALPHA Shop</div>
        <div class="footer__container__info__wrapper">
          <div class="footer__container__info__wrapper--content">
            +886 02123-45678
          </div>
          <div class="footer__container__info__wrapper__icons">
            <a href="javascript:void(0)"
              ><img
                :src="footerIcons.fb"
                alt="fb-icon"
                class="footer__container__info__wrapper__icons--icon fb"
            /></a>
            <a href="javascript:void(0)"
              ><img
                :src="footerIcons.ig"
                alt="ig-icon"
                class="footer__container__info__wrapper__icons--icon ig"
            /></a>
            <a href="javascript:void(0)"
              ><img
                :src="footerIcons.whatsapp"
                alt="whatsapp-icon"
                class="footer__container__info__wrapper__icons--icon whatsapp"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'Footer',
  data() {
    return {
      footerInfo: [
        {
          id: uuidv4(),
          title: '客戶服務',
          contents: ['運送說明', '退換貨相關', '付款資訊', 'FAQ'],
        },
        {
          id: uuidv4(),
          title: '關於我們',
          contents: ['品牌故事', '媒體聯繫', 'Press kit'],
        },
        {
          id: uuidv4(),
          title: '資訊',
          contents: ['隱私權政策', 'Cookie', 'GDPR'],
        },
      ],
      footerIcons: {
        fb: require('./../assets/fb-icon-daymode.svg'),
        ig: require('./../assets/instagram-icon-daymode.svg'),
        whatsapp: require('./../assets/whatsapp-icon-daymode.svg'),
      },
      logo: require('./../assets/logo-daymode.svg'),
    }
  },
}
</script>
