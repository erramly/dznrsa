<template>
  <div class="header-mobile">
    <div class="logo">
      <img
        src="https://icxblgzglhqeatbffmfh.supabase.co/storage/v1/object/public/images/logo.png"
        alt="logo"
      />
    </div>
    <div id="nav-icon3" class="icons">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="nav">
      <a href="#" id="projects-section">أعمالنا</a>
      <a href="#" id="price-section">الأسعار</a>
      <a href="#" id="heading-about">عنا</a>
      <a href="#" id="drops-menu">الاسئلة</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "headerMobile",
  mounted() {
    this.fun();
    this.openNav();
    this.getSection();
  },
  methods: {
    fun() {
      // قم بحفظ العنصر #nav-icon1 في متغير
      const navIcon1 = document.querySelector("#nav-icon3");

      // أضف event listener إلى العنصر navIcon1 بدلاً من "this"
      navIcon1.addEventListener("click", function () {
        if (this.classList.contains("open")) {
          this.classList.remove("open");
        } else {
          this.classList.add("open");
        }
      });
    },
    openNav() {
      var icon = document.querySelector("#nav-icon3");
      icon.onclick = function () {
        let nav = document.querySelector(".header-mobile .nav");
        nav.classList.toggle("navopen");
      };
    },
    getSection() {
      let links = document.querySelectorAll(".nav a");
      links.forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("id");
          console.log(targetId);
          const targetSection = document.querySelector(`.${targetId}`);

          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
          });
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.header-mobile {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  .logo {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      height: 80px;
      object-fit: contain;
    }
  }
  .nav {
    background-color: rgba(255, 255, 255, 0.95);
    width: 100%;
    position: absolute;
    padding: 200px 20px;
    z-index: 999;
    top: 0;
    right: 0;
    bottom: 0;
    transition: 0.5s;
    display: none;
    a {
      color: #331b3b;
      padding: 0px 15px;
      margin: 10px;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.01rem;
      display: block;
      text-decoration: none;
    }
  }
}
.navopen {
  display: block !important;
}
/* Icon 1 */
.icons {
  position: relative;
  z-index: 99999;
  right: 0;
}
#nav-icon1,
#nav-icon2,
#nav-icon3,
#nav-icon4 {
  width: 50px;
  height: 40px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon1 span,
#nav-icon3 span,
#nav-icon4 span {
  display: block;
  position: absolute;
  height: 9px;
  width: 80%;
  background: #331b3b;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}
/* Icon 3 */

#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
  top: calc(50% - 9px);
}

#nav-icon3 span:nth-child(4) {
  width: 80%;
  bottom: 9px;
}

#nav-icon3.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}
input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]:checked + #menu {
  display: block;
}

@media (min-width: 800px) {
  .header-mobile {
    display: none;
  }
}
</style>
