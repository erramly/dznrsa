<template>
  <div class="partner-section">
    <div class="title">
      <h1>
        لقد ساعدنا عملائنا على الرفع من <span>مشاريعهم</span><br />
        عملنا مع
      </h1>
    </div>
    <div class="img-partner">
      <div class="img-line" v-for="img in imgesParnners" :key="img">
        <img :src="img" alt="img pratner" />

        <div class="line"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { supabase } from "@/supabase/supabaseClient.js";

export default {
  data() {
    return {
      imgesParnners: "",
    };
  },
  mounted() {
    this.getlogo();
  },
  methods: {
    async getlogo() {
      let { data: avatar, error } = await supabase.storage
        .from("images")
        .list("partner");
      console.log("this", avatar);
      if (error) {
        console.log(error);
      }
      const urlImg =
        "https://icxblgzglhqeatbffmfh.supabase.co/storage/v1/object/public/images/partner/";
      let fullimg = avatar.map((el) => {
        return urlImg + el.name;
      });
      console.log(fullimg);
      this.imgesParnners = fullimg;
    },
  },
};
</script>
<style lang="scss" scoped>
.partner-section {
  background-color: var(--bg-black);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 46px;
  margin-top: -10px;
  position: relative;
  z-index: 10px;
  overflow: hidden;
  row-gap: 30px;
  .title {
    h1 {
      color: #fff;
      text-align: center;
      font-size: 38px;
      font-style: normal;
      font-weight: 700;
      line-height: 44px; /* 115.789% */
      text-transform: capitalize;
      span {
        color: #ff6900;
        font-size: 38px;
        font-style: normal;
        font-weight: 700;
        line-height: 44px;
        text-transform: capitalize;
      }
    }
  }
  .img-partner {
    display: flex;
    height: 140px;
    align-items: center;
    gap: 15px;
    max-width: 1200px;

    .img-line {
      display: flex;
      height: 100px;
      width: 400px;
      align-items: center;
      overflow: hidden;
      flex-wrap: nowrap;
      background-color: var(--bg-white);
      img {
        width: 100%;
        height: 200px;
        object-fit: contain;
        position: relative;
      }
      .line {
        background-color: #ff6900;
        width: 1px;
        height: 50px;
      }
    }
  }
}
@media (max-width: 800px) {
  .partner-section {
    background-color: var(--bg-black);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: 46px;
    margin-top: -10px;
    position: relative;
    z-index: 10px;
    .title {
      h1 {
        color: #fff;
        text-align: center;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; /* 115.789% */
        text-transform: capitalize;
        span {
          font-size: 22px;
          line-height: 30px; /* 115.789% */
        }
      }
    }
    .img-partner {
      display: flex;
      height: 100px;
      align-items: center;
      overflow: hidden;
      flex-wrap: nowrap;
      gap: 10px;
      width: 1200px;
      animation: slide 20s linear infinite;
      .img-line {
        width: calc(1200px / 10);
        height: 200px;
        background-color: var(--bg-white);
        img {
          width: 100%;
          height: 400px;
          object-fit: contain;
          position: relative;
        }
        .line {
          background-color: #ff6900;
          width: 1px;
          height: 50px;
        }
      }
    }
  }
}

.img-line {
  width: 100%;
}

@keyframes slide {
  0% {
    transform: translateX(-350px);
  }
  50% {
    transform: translateX(350px);
  }
  100% {
    transform: translateX(-350px);
  }
}
</style>
