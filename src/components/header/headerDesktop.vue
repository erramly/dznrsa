<template>
  <div class="header-desktop">
    <a class="btn" href="https://wa.me/966595371184">تواصل معنا</a>

    <div class="nav">
      <a href="#" id="projects-section">أعمالنا</a>
      <a href="#" id="price-section">الأسعار</a>
      <a href="#" id="heading-about">عنا</a>
      <a href="#" id="drops-menu">الاسئلة</a>
    </div>
    <div class="logo">
      <img
        src="https://icxblgzglhqeatbffmfh.supabase.co/storage/v1/object/public/images/logo.png"
        alt="logo"
      />
    </div>
  </div>
</template>
<script>
import { supabase } from "@/supabase/supabaseClient.js";

export default {
  data() {
    return {
      logoImg: "",
    };
  },
  mounted() {
    this.getlogo();
    this.getSection();
  },
  methods: {
    async getlogo() {
      let { data: avatar, error } = await supabase.storage
        .from("images")
        .list("");
      if (error) {
        console.log(error);
      }
      const urlImg =
        "https://icxblgzglhqeatbffmfh.supabase.co/storage/v1/object/public/images/";
      let fullimg = avatar.map((el) => {
        return urlImg + el.name;
      });
      this.logoImg = fullimg[0];
    },
    getSection() {
      let links = document.querySelectorAll(".nav a");
      links.forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("id");
          const targetSection = document.querySelector(
            `.${targetId}`
          ).offsetTop;
          window.scrollTo({
            top: targetSection - 100,
            behavior: "smooth",
          });
        });
      });
    },
  },
};
</script>
<style scoped lang="scss">
.header-desktop {
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  .logo {
    img {
      object-fit: contain;
      width: 150px;
      height: 100px;
    }
  }
  .btn {
    background-color: var(--bg-orange);
    width: 162px;
    height: 45px;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    font-family: "Cairo", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 120% */
    text-transform: uppercase;
    text-decoration: none;
  }
  .nav {
    display: flex;
    align-items: flex-start;
    gap: 37px;
    a {
      text-decoration: none;
      color: #000;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 18px; /* 128.571% */
      text-transform: uppercase;
    }
  }
}
@media (max-width: 800px) {
  .header-desktop {
    display: none;
  }
}
</style>
