<template>
  <div class="price-section">
    <div class="heading">
      <h1>الخطط والباقات</h1>
    </div>
    <div class="price-cards">
      <div class="price-card1">
        <div class="heading-card"><h2>المؤسسات والشركات</h2></div>
        <div class="price">
          <h3>
            ٢٠٠٠ ريال
            <div>شهرياً</div>
          </h3>
        </div>
        <div class="options">
          <div class="heading"><h3>ما الذي ستحصل عليه :</h3></div>
          <div class="all-options">
            <span
              >طلب واحد في اليوم (طلبين باليوم +٩٠٠ ريال) طلب واحد في اليوم </span
            ><span>متوسط التسليم ٢٤ ساعة</span>
            <span>علامة تجارية واحدة +علامة تجارية ٥٠٠ ريال </span>
            <span>عدد غير محدد من المستخدمين</span>
            <span>سهولة الدفع بالبطاقة الائتمانية</span>
            <span>إيقاف مؤقت ١٥ أيام أو إلغا في أي وقت</span>
          </div>
        </div>
      </div>
      <div class="price-card2">
        <div class="heading-card">
          <h2>متاجر الانستجرام الصغيرة والاسر المنتجة</h2>
        </div>
        <div class="price">
          <h3>
            ٩٠٠ ريال
            <div>شهرياً</div>
          </h3>
        </div>
        <div class="options">
          <div class="heading"><h3>ما الذي ستحصل عليه :</h3></div>
          <div class="all-options">
            <span
              >طلب واحد في اليوم (طلبين باليوم +٩٠٠ ريال) طلب واحد في
              اليوم</span
            >
            <span>متوسط التسليم ٤٨ ساعة</span>
            <span>علامه تجارية واحده</span>
            <span>عدد واحد من المستخدمين</span>
            <span>سهولة الدفع بالبطاقة الائتمانية</span>
            <span>إيقاف مؤقت ٧ أيام أو إلغاء في أي وقت</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="call-setion">
    <h1>حجز موعد مكالمة <br />عشان تعرف كيف نقدر نخدم مشروعك</h1>
    <div class="btn-call">حجز مكالمة</div>
  </div>
</template>
<style lang="scss" scoped>
.price-section {
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  .heading {
    h1 {
      color: #000;
      text-align: center;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 55px; /* 114.583% */
      margin-bottom: 80px;
    }
  }
  .price-cards {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    .price-card1 {
      background-color: var(--bg-orange);
      width: 100%;
      height: 887px;
      max-width: 387px;
      border-radius: 15px;
      border: 2px solid #000;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 50px;
      .heading-card {
        width: 90%;
        height: 150px;
        h2 {
          color: #fff;
          text-align: center;
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          line-height: 33px;
        }
      }
      .price {
        width: 60%;
        padding-bottom: 35px;
        border-bottom: 1px solid #fff;
        h3 {
          color: #000;
          text-align: center;
          font-size: 35px;
          font-style: normal;
          font-weight: 700;
          line-height: 30px; /* 85.714% */
          text-transform: uppercase;
          div {
            color: #000;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 30px;
            text-transform: uppercase;
          }
        }
      }
      .options {
        width: 80%;
        padding-top: 30px;
        .heading {
          h3 {
            color: #fff;
            text-align: right;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 20px; /* 90% */
            text-transform: uppercase;
            margin-bottom: 10px;
          }
        }
        .all-options {
          span {
            color: #fff;
            text-align: right;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 22px;
            display: block;
            margin-top: 10px;
            &::before {
              content: "-";
              margin-left: 3px;
            }
          }
        }
      }
    }
    .price-card2 {
      width: 100%;
      height: 887px;
      max-width: 387px;
      border-radius: 15px;
      border: 2px solid var(--bg-orange);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 50px;
      padding-bottom: 50px;
      .heading-card {
        width: 90%;
        height: 150px;
        h2 {
          color: #000;
          text-align: center;
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          line-height: 33px;
        }
      }
      .price {
        width: 60%;
        padding-bottom: 35px;
        border-bottom: 1px solid var(--bg-orange);
        h3 {
          color: var(--bg-orange);
          text-align: center;
          font-size: 35px;
          font-style: normal;
          font-weight: 700;
          line-height: 30px; /* 85.714% */
          text-transform: uppercase;
          div {
            color: var(--bg-orange);
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 30px;
            text-transform: uppercase;
          }
        }
      }
      .options {
        width: 80%;
        padding-top: 30px;
        .heading {
          h3 {
            color: #000;
            text-align: right;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 20px; /* 90% */
            text-transform: uppercase;
            margin-bottom: 10px;
          }
        }
        .all-options {
          span {
            color: #000;
            text-align: right;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 22px;
            display: block;
            margin-top: 10px;
            &::before {
              content: "-";
              margin-left: 3px;
            }
          }
        }
      }
    }
  }
}
.call-setion {
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  h1 {
    padding-top: 40px;
    border-top: 1px solid #000;
    color: #000;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px; /* 100% */
    width: 100%;
    max-width: 700px;
  }
  .btn-call {
    border-radius: 15px;
    background: var(--bg-orange);
    display: inline-flex;
    padding: 20px 60px;
    align-items: flex-start;
    color: #fff;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 100% */
    text-transform: uppercase;
  }
}
@media (max-width: 800px) {
  .call-setion {
    width: 80%;
    gap: 20px;
    .btn-call {
      padding: 15px 30px !important;
      font-size: 22px !important;
    }
  }
  .price-section {
    padding-inline: 6%;
    margin: 50px auto;

    .heading {
      h1 {
        color: #000;
        text-align: center;
        font-size: 30px !important;
        font-style: normal;
        font-weight: 700;
        line-height: 39px !important; /* 114.583% */
        margin-bottom: 40px;
      }
    }
  }
  .price-card1 {
    height: fit-content !important;
    padding-bottom: 50px;
    .heading-card {
      height: fit-content !important;
      margin-bottom: 20px;

      h2 {
        font-size: 22px !important;
      }
    }
    .price h3 {
      font-size: 24px !important;
    }
  }
  .price-card2 {
    height: fit-content !important;
    .heading-card {
      height: fit-content !important;
      margin-bottom: 20px;
      h2 {
        font-size: 22px !important;
      }
    }
    .price h3 {
      font-size: 24px !important;
    }
  }
}
</style>
