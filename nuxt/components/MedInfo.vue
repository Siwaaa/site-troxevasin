<template>
  <div class="medinfo" v-show="showMed">
    <div class="medinfo__content">
      <p ref="med">ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ, НЕОБХОДИМО ПРОКОНСУЛЬТИРОВАТЬСЯ СО СПЕЦИАЛИСТОМ</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Medinfo",
  data() {
    return {
      showMed: false,
    };
  },
  methods: {
    resizeMedInfo() { 
      const screenWidth = document.documentElement.clientWidth;
      if (process.client && screenWidth < 636) {
        this.$refs.med.style.removeProperty("transform");
      }
      else if (process.client) {
        let perpx = screenWidth > 1000 ? 2410 : 2440;
        let ratio = screenWidth / perpx;
        this.$refs.med.style.transform = `scale( ${ratio}, 1.1 )`;
      }
    }
  },
  mounted() {
    this.showMed = true;
    this.resizeMedInfo();
    window.addEventListener("resize", this.resizeMedInfo);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeMedInfo);
  },
}
</script>

<style lang="postcss">
.medinfo {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--color-white);
  color: var(--color-violet);
  box-shadow: 4px -15px 40px -25px rgba(0, 0, 0, 0.1);
  z-index: 10;

  &__content {
    display: flex;
    align-items: center;
    height: var(--med-h);
    padding: 0 10px;
    overflow: hidden;

    @media (--sm) {
      padding: 10px;
      text-align: center;
    }

    &>p {
      display: block;
      width: 100%;
      font-size: 45px;
      font-weight: 200;
      white-space: nowrap;
      line-height: 1;
      /* transform: scale(.3, 1.1); */
      transform-origin: left;

      @media (--sm) {
        font-size: 16px;
        line-height: 1.2;
        white-space: normal;
      }

      @media (--xs) {
        font-size: 12px;
      }
    }
  }

  &__btn {
    display: none;

    @media (--xs) {
      display: inline-block !important;
      text-align: center;
      margin-bottom: 5px;
    }
  }
}</style>