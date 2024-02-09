<template>
  <main class="container-banner with-link">
    <h2>Почему Teva?</h2>
    <div class="container-banner__content">
      <h1 class="container-banner__big-txt">Teva – это высокое качество <br>препаратов по доступной цене</h1>
      <p class="container-banner__md-txt">Хорошее соотношение «цена-качество» подтверждает <br>большинство
        опрошенных потребителей<sup>1</sup></p>
      <div class="container-banner__info">
        <p class="container-banner__sml-txt">1. 64% потребителей. Исследование Ipsos «Брендированные дженерики Teva.
          <br>Трекер здоровья бренда», потребители, 2021 г.
        </p>
        <p class="container-banner__banner-number banner-number">NPS-RU-00657-INT-07.2023</p>
        <a href="https://www.teva.ru/our-medicines/teva-quality/" class="container-banner__more-info">Узнать больше</a>
      </div>
    </div>
  </main>
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap');

.container-banner * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container-banner {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 55px;
  max-width: 1888px;
  /* min-width: 320px; */
  width: 100%;
  height: auto;
  max-height: 836px;
  margin-bottom: 30px;
  color: #fff;
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  background: url(/img/banner.webp) no-repeat center;
  background-size: cover;
}

.container-banner__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  height: 100%;
  padding: 0 60px 80px;
}

.container-banner>h2 {
  display: block;
  padding: 45px 60px 45px;
  font-size: 35px;
  font-weight: 600;
  line-height: 35px;
  background: #015D86;
  border-bottom-right-radius: 20px;
}

.container-banner__big-txt {
  font-size: 60px;
  font-weight: 700;
  line-height: 65px;
  padding-right: 20px;
}

.container-banner__md-txt {
  font-size: 30px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 1px;
}

.container-banner__sml-txt {
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
}

.container-banner sup {
  font-size: 20px !important;
  font-weight: 500 !important;
  line-height: 20px !important;
  vertical-align: super !important;
}

.container-banner__info {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  column-gap: 20px;
  row-gap: 40px;
  width: 100%;
  margin-top: 3px;
}

.container-banner__more-info {
  display: none;
  color: #fff;
  padding: 13px 28px;
  font-size: 20px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: 1px;
  text-decoration: none;
  background: transparent;
  border: 3px solid #fff;
  white-space: nowrap;
  transition: background 0.4s ease, color 0.3s ease;
  cursor: pointer;
}

.container-banner__more-info:hover {
  background: #fff;
  color: green;
}

.banner-number,
.container-banner__banner-number {
  position: absolute;
  right: 0;
  bottom: 0;
  writing-mode: vertical-rl;
  letter-spacing: 1px;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
}

.container-banner.with-link .container-banner__info {
  margin-top: -15px;
}

.container-banner.with-link .container-banner__more-info {
  display: flex;
}

.container-banner.with-link .banner-number {
  bottom: 105px;
}


@media screen and (max-width: 993px) {
  .container-banner {
    background-position: 80%;
  }

  .container-banner>h2 {
    padding: 35px 40px;
    font-size: 30px;
    line-height: 30px;
  }

  .container-banner__content {
    padding: 0 40px 80px;
  }

  .container-banner__big-txt {
    font-size: 48px;
    line-height: 50px;
  }

  .container-banner__md-txt {
    font-size: 20px;
    line-height: 20px;
  }

  .container-banner__info {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    margin: 0 !important;
  }

  .container-banner__more-info {
    padding: 13px 28px;
    font-size: 18px;
    line-height: 25px;
  }

  .container-banner.with-link .banner-number {
    bottom: 0;
    writing-mode: horizontal-tb;
  }
}

@media screen and (max-width: 768px) {
  .container-banner>h2 {
    padding: 35px 20px;
    font-size: 25px;
    line-height: 25px;
  }

  .container-banner__content {
    padding: 0 20px 60px;
  }

  .container-banner__big-txt {
    font-size: 40px;
    line-height: 45px;
    padding: 0;
  }

  .container-banner__md-txt {
    font-size: 24px;
    line-height: 24px;
  }

  .container-banner sup {
    font-size: 18px !important;
    line-height: 18px !important;
  }

  .banner-number {
    position: static;
    writing-mode: horizontal-tb;
  }

  .container-banner__md-txt br {
    display: none;
  }

  .container-banner__more-info {
    padding: 13px 25px;
  }

}

@media screen and (max-width: 620px) {
  .container-banner.with-link .banner-number {
    position: static;
    writing-mode: horizontal-tb;
  }
}

@media screen and (max-width: 500px) {
  .container-banner {
    gap: 55px;
    margin-bottom: 20px;
  }

  .container-banner__content {
    gap: 30px;
  }

  .container-banner>h2 {
    padding: 35px 20px;
    font-size: 22px;
    line-height: 22px;
  }

  .container-banner__big-txt {
    font-size: 30px;
    line-height: 35px;
  }

  .container-banner__md-txt {
    font-size: 18px;
    line-height: 20px;
  }

  br {
    display: none;
  }

  .container-banner__more-info {
    padding: 10px 20px;
    font-size: 16px;
    line-height: 18px;
  }

  .container-banner__more-info:hover {
    background: transparent;
    color: #fff;
  }

  .container-banner sup {
    font-size: 13px !important;
    line-height: 14px !important;
  }
}

@media screen and (max-width: 375px) {
  .container-banner__big-txt {
    font-size: 25px;
    line-height: 30px;
  }

  .container-banner__md-txt {
    font-size: 16px;
    line-height: 18px;
  }
}
</style>