<template>
  <div class="heading-about">
    <h1>
      فريق متنوع من المهووسين المتحمسين لتصميم موجودون هنا <br />لمساعدة
      <span>شركتك</span> الناشئة على <span>النجاح</span>
    </h1>
    <p>
      "مجموعة متنوعة من المبدعين الملهمين في مجالات متعددة، نحن هنا لنقدم دعمًا
      لا مثيل لشركتك الناشئة. نحن مهووسون بتصميم الاستثنائي وملتزمون بضمان نجاحك
      من خلال خبراتنا المتنوعة والمتخصصة”
    </p>
  </div>
  <div class="services">
    <div class="heading-services">
      <h1>ايش الخدمات إلي راح نقدمها في باقاتنا</h1>
    </div>
    <div class="two-service">
      <div class="service1">
        <ul>
          <li>صورة عرض</li>
          <li>ستوري سناب</li>
          <li>بوب اب</li>
          <li>هايلايت بنر</li>
          <li>اكس بوستر</li>
          <li>بوستات انستقرام</li>
          <li>بنر يوتيوب</li>
          <li>منيو</li>
          <li>كاروسيل انستقرام</li>
          <li>بزنس كارد</li>
        </ul>
      </div>
      <div class="service2">
        <ul>
          <li>موك اب</li>
          <li>ستوري انستقرام</li>
          <li>أي دي كارد</li>
          <li>بنر متجر إلكتروني</li>
          <li>تصميم إعلانات تجارية</li>
          <li>رول اب</li>
          <li>استيكرات</li>
          <li>تصميم النشرات البريدية</li>
          <li>غلاف فيديو</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="steps">
    <div class="heading-steps">
      <h1>
        احنا ماخترعنا شي جديد فقط <span>سهلنا</span> عملية <span>التصميم</span>
      </h1>
    </div>
    <div class="step-img">
      <div class="num-img-title">
        <div class="num">01</div>
        <div class="heading">
          <p>اشترك في الخطة المناسبة لك واطلب تصاميم قدر ماتريد</p>
        </div>
        <div class="img">
          <img
            src="https://icxblgzglhqeatbffmfh.supabase.co/storage/v1/object/public/images/steps/1.png?t=2024-01-07T13%3A48%3A45.600Z"
            alt="step img"
          />
        </div>
      </div>
      <div class="num-img-title">
        <div class="num">02</div>
        <div class="heading">
          <p>استلم تصاميمك خلال ٢٤ ساعه</p>
        </div>
        <div class="img">
          <img
            src="https://icxblgzglhqeatbffmfh.supabase.co/storage/v1/object/public/images/steps/2.png?t=2024-01-07T13%3A48%3A45.600Z"
            alt="step img"
          />
        </div>
      </div>
      <div class="num-img-title">
        <div class="num">03</div>
        <div class="heading">
          <p>نعدل على التصميم لين تكون راضي ١٠٠٪</p>
        </div>
        <div class="img">
          <img
            src="https://icxblgzglhqeatbffmfh.supabase.co/storage/v1/object/public/images/steps/3.png?t=2024-01-07T13%3A48%3A45.600Z"
            alt="step img"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.heading-about {
  margin-top: 152px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 23px;
  h1 {
    color: #000;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 47px; /* 117.5% */
    text-transform: capitalize;
    span {
      color: #f24e1e;
      font-style: normal;
      font-weight: 700;
      line-height: 47px;
      text-transform: capitalize;
    }
  }
  p {
    max-width: 800px;
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
}
.services {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 25px;
  border-bottom: 1px solid #000;
  border-top: 1px solid #000;
  padding-block: 20px;
  max-width: 1000px;
  margin-inline: auto;

  .heading-services {
    margin-bottom: 70px;
    h1 {
      color: #1d1d1b;
      text-align: center;
      font-size: 38px;
      font-style: normal;
      font-weight: 700;
      line-height: 44px; /* 115.789% */
      text-transform: capitalize;
    }
  }
  .two-service {
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    ul {
      li {
        color: #000;
        text-align: right;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 32px; /* 137.5% */
        text-transform: uppercase;
        list-style-type: none;

        &::before {
          content: "-";
          margin-left: 5px; /* إضافة بعض التباعد بين الشرطة ونص العنصر */
        }
      }
    }
  }
}
.steps {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin-inline: auto;
  .heading-steps {
    margin-block: 55px;
    h1 {
      color: #1d1d1b;
      text-align: center;
      font-size: 38px;
      font-style: normal;
      font-weight: 700;
      line-height: 44px; /* 115.789% */
      text-transform: capitalize;
      span {
        color: var(--bg-orange);
      }
    }
  }
  .step-img {
    display: flex;
    max-width: 1200px;
    column-gap: 200px;
    flex-direction: row-reverse;
    .num-img-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      .num {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 59px;
        height: 59px;
        border-radius: 999px;
        margin-bottom: 20px;
        background-color: var(--bg-orange);
        color: #fff;
        text-align: center;
        font-size: 34px;
        font-style: normal;
        font-weight: 700;
        line-height: 44px; /* 129.412% */
        text-transform: capitalize;
      }
      .heading {
        height: 80px;
        p {
          color: var(--bg-orange);
          text-align: center;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 22px; /* 110% */
          text-transform: capitalize;
          max-width: 200px;
        }
      }
    }
  }
}
@media (max-width: 800px) {
  .heading-about {
    padding-inline: 5px;
    margin-top: 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 10px;
    h1 {
      color: #000;
      text-align: center;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px;
      text-transform: capitalize;
      span {
        color: #f24e1e;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
        text-transform: capitalize;
      }
    }
    p {
      max-width: 800px;
      color: #000;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 150% */
    }
  }
  .services {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block: 25px;
    border-bottom: 1px solid #000;
    border-top: 1px solid #000;
    padding-block: 20px;
    max-width: 1000px;
    margin-inline: auto;

    .heading-services {
      margin-bottom: 50px;
      h1 {
        color: #1d1d1b;
        text-align: center;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; /* 115.789% */
        text-transform: capitalize;
      }
    }
    .two-service {
      display: grid;
      justify-content: center;
      gap: 20px;
      ul {
        li {
          color: #000;
          text-align: right;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 32px; /* 137.5% */
          text-transform: uppercase;
          list-style-type: none;

          &::before {
            content: "-";
            margin-left: 5px; /* إضافة بعض التباعد بين الشرطة ونص العنصر */
          }
        }
      }
    }
  }
  .steps {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin-inline: auto;

    .heading-steps {
      margin-block: 30px;
      h1 {
        color: #1d1d1b;
        text-align: center;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; /* 115.789% */
        text-transform: capitalize;
        span {
          color: var(--bg-orange);
        }
      }
    }
    .step-img {
      display: flex;
      max-width: 1200px;
      column-gap: 200px;
      flex-direction: row-reverse;
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 50px;
      .num-img-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        .num {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 59px;
          height: 59px;
          border-radius: 999px;
          margin-bottom: 20px;
          background-color: var(--bg-orange);
          color: #fff;
          text-align: center;
          font-size: 34px;
          font-style: normal;
          font-weight: 700;
          line-height: 44px; /* 129.412% */
          text-transform: capitalize;
        }
        .heading {
          height: 80px;
          p {
            color: var(--bg-orange);
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 22px; /* 110% */
            text-transform: capitalize;
            max-width: 200px;
          }
        }
      }
    }
  }
}
</style>
