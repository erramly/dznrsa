<template>
  <div class="hero-section">
    <div class="main-title">
      <h1>وكالة تصميم متطورة <br />باقات تناسب كل الاعمال</h1>
    </div>
    <div class="mini-title">
      <div class="icon-title">
        <i class="fa-regular fa-circle-check"></i
        ><span>متاجر إلكترونية صغير</span>
      </div>
      <div class="icon-title">
        <i class="fa-regular fa-circle-check"></i><span>مشاريع اسر منتجة</span>
      </div>
      <div class="icon-title">
        <i class="fa-regular fa-circle-check"></i><span>شركات و مؤسسات</span>
      </div>
    </div>
    <a class="btn" href="https://wa.me/966595371184"
      >ابدأ مع خططتك المناسبة لك</a
    >
  </div>
  <div class="img-section"><img src="./img/main-img.png" alt="main img" /></div>
</template>
<script>
export default {
  name: "heroSection",
};
</script>
<style lang="scss">
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 53px;
  z-index: 10;
  position: relative;
  .main-title {
    margin-bottom: 30px;
    h1 {
      color: #1d1d1b;
      text-align: center;
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: 54.5px; /* 109% */
      text-transform: capitalize;
    }
  }
  .mini-title {
    display: flex;
    justify-content: space-between;
    width: 60%;
    max-width: 700px;
    .icon-title {
      display: flex;
      align-items: center;
      gap: 8px;
      .fa-circle-check {
        color: var(--bg-orange);
      }
      span {
        color: #000;
        text-align: right;
        font-size: 17px;
        font-style: normal;
        font-weight: 700;
        line-height: 26px; /* 152.941% */
      }
    }
  }
  .btn {
    text-decoration: none;
    display: flex;
    justify-content: center;
    width: 301px;
    padding: 10px 10px 10px 16px;
    background-color: var(--bg-orange);
    color: white;
    border-radius: 15px;

    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 152.941% */
    text-transform: uppercase;
    margin-top: 22px;
  }
}
.img-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -10px;
  img {
    width: 100%;
    max-width: 770px;
  }
}
@media (max-width: 800px) {
  .hero-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 53px;
    z-index: 10;
    position: relative;
    .main-title {
      margin-bottom: 30px;
      h1 {
        color: #1d1d1b;
        text-align: center;
        font-size: 35px;
        font-style: normal;
        font-weight: 700;
        line-height: 39px; /* 109% */
        text-transform: capitalize;
      }
    }
    .mini-title {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 60%;
      row-gap: 10px;
      .icon-title {
        display: flex;
        align-items: center;
        gap: 8px;
        .fa-circle-check {
          color: var(--bg-orange);
        }
        span {
          color: #000;
          text-align: right;
          font-size: 17px;
          font-style: normal;
          font-weight: 700;
          line-height: 26px; /* 152.941% */
        }
      }
    }
    .btn {
      display: flex;
      justify-content: center;
      width: 60%;
      padding: 10px 10px 10px 16px;
      background-color: var(--bg-orange);
      color: white;
      border-radius: 15px;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 26px; /* 152.941% */
      text-transform: uppercase;
      margin-top: 22px;
      text-align: center;
    }
  }
  .img-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -10px;
    img {
      width: 100%;
      max-width: 770px;
    }
  }
}
</style>
