<script setup>
// global seo and meta settings
useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#fff' },
    { name: 'description', content: 'Троксевазин – препарат, который улучшает микроциркуляцию крови и лимфы, снижает воспалительные процессы, уменьшает отеки и улучшает состояние кожи при варикозе, тромбофлебите, флебите, геморрое и других заболеваниях. Инструкция по применению, цена, аналоги и отзывы пациентов – на официальном сайте.' },
  ],
  htmlAttrs: {
    lang: 'ru'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://geolocation.onetrust.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  ],
  script: [
    // <!-- OneTrust Cookies Consent Notice start for troxevasin.ru -->
    {src: "https://cdn.cookielaw.org/consent/34381627-2539-4fd3-be0e-4d904b5e84d7/OtAutoBlock.js", },
    {src: "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", "data-document-language": "true", "charset": "UTF-8", "data-domain-script": "34381627-2539-4fd3-be0e-4d904b5e84d7", type: "text/javascript"},
    {innerHTML: "function OptanonWrapper() { }", type: "text/javascript"},
    // <!-- OneTrust Cookies Consent Notice end for troxevasin.ru -->
    // <!-- UTEKA start -->
    {
      type: "text/javascript",
      innerHTML: `var script = document.createElement('script')
      script.src = 'https://widget.uteka.ru/static/widgets/widget.simple.compiled.js?l=' + Date.now()
      script.async = true
      document.head.appendChild(script)`
    },
    // <!-- UTEKA end -->
    // <!-- Yandex.Metrika counter -->
    { type: "text/javascript",
      innerHTML: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(92925175, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
      });`
    },
    // <!-- /Yandex.Metrika counter -->
    // <!-- Google tag (gtag.js) -->
    { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-0TGE7W06YH" },
    {
      type: "text/javascript",
      innerHTML: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-0TGE7W06YH');`
    },
    // <!-- /Google tag (gtag.js) -->
    // <!-- Google Tag Manager -->
    {
      type: "text/javascript",
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NJ4F4WC');`
    },
  ],
  noscript: [
    { innerHTML: '<div><img src="https://mc.yandex.ru/watch/92925175" style="position:absolute; left:-9999px;" alt="" /></div>', tagPosition: 'head' },
    { innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJ4F4WC" height="0" width="0" style="display:none;visibility:hidden"></iframe>', tagPosition: 'bodyOpen' },
  ] 
})
//c208134931e7c1d9ce52562d22c933a3106ccd5cd23f79d653c56f205ea4b4ee45cdd1cff50fb744f865fc01d6227254f4de87b83fb9b1b2427dba7954de471c2cc14d769c5a67ae4a1794b897caa400480e8ce2806f90d666fe2a8738956a26437756e133bb2950ff7a41fd3e029f417a3174adde67339fc12aab2ea9028138
// const res = await $fetch("http://localhost:1337/api/tests")
</script>

<template>  
  <Navbar />
  <NuxtPage />
  <Footer />
  <MedInfo />
  <Cart />
</template>
