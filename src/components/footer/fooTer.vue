<template>
  <div class="footer-bg">
    <div class="footer">
      <div class="logo-socail">
        <div class="logo">
          <img
            src="https://icxblgzglhqeatbffmfh.supabase.co/storage/v1/object/public/images/logo.png"
            alt=""
          />
        </div>
        <div class="socails">
          <div class="textSocail-icon">
            <i class="fa-regular fa-envelope"></i> <span>name@gmail.com</span>
          </div>
          <div class="textSocail-icon">
            <i class="fa-brands fa-linkedin-in"></i><span>linkden</span>
          </div>
          <div class="textSocail-icon">
            <i class="fa-brands fa-facebook"></i><span>facebook</span>
          </div>
        </div>
      </div>
      <div class="links">
        <a href="#" id="projects-section" class="bg-red-600">أعمالنا</a>
        <a href="#" id="price-section">الأسعار</a>
        <a href="#" id="heading-about">عنا</a>
        <a href="#" id="drops-menu">الاسئلة</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer-bg {
  background-color: var(--bg-black);

  .footer {
    max-width: 1200px;
    margin-inline: auto;
    padding: 50px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    .logo-socail {
      display: flex;
      flex-direction: column;
      align-items: center;
      .logo {
        img {
          width: 100%;
          height: 80px;
        }
      }
      .socails {
        display: flex;
        gap: 20px;
        .textSocail-icon {
          display: flex;
          flex-direction: row-reverse;
          i {
            margin-right: 5px;
            width: 26px;
            height: 25px;
            font-size: 20px;
            color: var(--bg-orange);
          }
          span {
            color: #fff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 142.857% */
          }
        }
      }
    }
    .links {
      display: flex;
      flex-direction: column;
      gap: 20px;

      a {
        color: #fff;
        text-align: right;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 18px; /* 128.571% */
        text-transform: uppercase;
        text-decoration: none;
      }
    }
  }
}
@media (max-width: 800px) {
  .footer-bg {
    background-color: var(--bg-black);

    .footer {
      max-width: 1200px;
      margin-inline: auto;
      padding: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 50px;
      .logo-socail {
        display: flex;
        flex-direction: column;
        align-items: center;
        .logo {
          img {
            width: 100%;
            height: 80px;
          }
        }
        .socails {
          display: flex;
          flex-direction: column;
          gap: 20px;
          .textSocail-icon {
            display: flex;
            flex-direction: row-reverse;
            i {
              margin-right: 5px;
              width: 26px;
              height: 25px;
              font-size: 20px;
              color: var(--bg-orange);
            }
            span {
              color: #00000000;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px; /* 142.857% */
            }
          }
        }
      }
      .links {
        display: flex;
        flex-direction: column;
        gap: 20px;

        a {
          color: #fff;
          text-align: right;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 18px; /* 128.571% */
          text-transform: uppercase;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
<script>
export default {
  mounted() {
    this.getSection();
  },
  methods: {
    getSection() {
      let links = document.querySelectorAll(".links a");
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
