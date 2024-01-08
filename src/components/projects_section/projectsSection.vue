<template>
  <div class="projects-section">
    <div class="heading">
      <h1>
        بعض اعمال شركتنا التي ساعدت العديد الشركات للنمو <span>للأفضل</span>
      </h1>
    </div>
    <div class="projects">
      <div class="project-card"></div>
      <div class="project-card"></div>
      <div class="project-card"></div>
    </div>
    <div class="reviews">
      <div class="review">
        <span
          >استمتعت بتعاوني مع شركة التصميم هذه بشكل كبير. فريقهم المتنوع
          والمهووس يظهر بشكل واضح في العمل الذي يقدمونه. كانوا متفهمين
          لاحتياجاتي وقدموا حلاً إبداعيًا وفعّالًا. تميزت خدماتهم بالاحترافية
          والجودة، وأنا بالتأكيد سأقوم بعمل شراكة معهم.</span
        >
        <div class="avatar">
          <div class="img-avatar">
            <img
              src="https://icxblgzglhqeatbffmfh.supabase.co/storage/v1/object/public/images/review/erick_desoto_17d68fc497.png.png?t=2024-01-07T13%3A50%3A40.675Z"
              alt="avatar"
            />
          </div>
          <div class="info-avatar">
            <h2>خالد العمراني</h2>
            <span>مدير متاجر اليكترونية</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.projects-section {
  background-color: var(--bg-black);
  padding: 50px 20px;
  .heading {
    margin-bottom: 100px;
    max-width: 800px;
    margin-inline: auto;
    h1 {
      color: #fff;
      text-align: center;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 54.5px; /* 136.25% */
      text-transform: capitalize;
      span {
        color: var(--bg-orange);
      }
    }
  }
  .projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;
    .project-card {
      max-width: 1532px;
      width: 100%;
      max-height: 2832px;
      height: 500px;
      background: var(--bg-orange);
    }
  }
  .reviews {
    .review {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-top: 30px;
      span {
        color: #fff;
        text-align: center;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 55px; /* 137.5% */
        max-width: 890px;
        text-align: center;
      }
      .avatar {
        display: flex;
        align-items: center;
        gap: 24px;
        margin-top: 24px;
        .img-avatar {
          img {
            width: 74px;
            height: 74px;
            border-radius: 999px;
          }
        }
        .info-avatar {
          h2 {
            color: var(--bg-orange);
            text-align: right;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 27px; /* 112.5% */
            text-transform: uppercase;
          }
          span {
            color: #fff;
            text-align: right;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 19px; /* 118.75% */
          }
        }
      }
    }
  }
}
@media (max-width: 800px) {
  .projects-section {
    padding: 20px 20px;
  }
  .heading {
    margin-bottom: 30px !important;
    h1 {
      color: #fff;
      text-align: center;
      font-size: 22px !important;
      font-style: normal;
      font-weight: 700;
      line-height: 150% !important;
      span {
        color: var(--bg-orange);
      }
    }
  }
  .reviews {
    .review {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-top: 30px;
      span {
        color: #fff;
        text-align: center;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 39px !important; /* 137.5% */
        max-width: 890px;
        text-align: center;
      }
      .avatar {
        display: flex;
        align-items: center;
        gap: 24px;
        margin-top: 24px;
        .img-avatar {
          img {
            width: 74px;
            height: 74px;
            border-radius: 999px;
          }
        }
        .info-avatar {
          h2 {
            color: var(--bg-orange);
            text-align: right;
            font-size: 18px !important;
            font-style: normal;
            font-weight: 700;
            line-height: 20px; /* 112.5% */
            text-transform: uppercase;
          }
          span {
            color: #fff;
            text-align: right;
            font-size: 14px !important;
            font-style: normal;
            font-weight: 400;
            line-height: 19px; /* 118.75% */
          }
        }
      }
    }
  }
}
</style>
