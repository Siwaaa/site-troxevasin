<template>
  <div class="cart">
    <svg viewBox="0 0 44 39" fill="none" xmlns="http://www.w3.org/2000/svg" class="cart__image">
      <path d="M36.99 5.624h5.039a.925.925 0 01.925 1.193L38.33 21.88a1.85 1.85 0 01-1.766 1.314H14.796m23.118 6.473H18.023a1.849 1.849 0 01-1.776-1.323L8.72 3.247a1.85 1.85 0 00-1.775-1.322H0M26 6v4m0 0v4m0-4h4m-4 0h-4m-7.204-4.376H9.247M19.42 35.206a2.783 2.783 0 11-5.567 0 2.783 2.783 0 015.567 0zm18.513 0a2.783 2.783 0 11-5.567 0 2.783 2.783 0 015.567 0zM34 10a8 8 0 11-16 0 8 8 0 0116 0z" stroke="#fff" stroke-width="2" stroke-miterlimit="10"></path>
    </svg>
    <a target="_blank" href="https://apteka.ru/search/?q=%D1%82%D1%80%D0%BE%D0%BA%D1%81%D0%B5%D0%B2%D0%B0%D0%B7%D0%B8%D0%BD&utm_source=teva&utm_medium=buy_now&utm_campaign=troxevasin" class="cart__link">
      <img  src="/img/apteks/aptekaru.png" alt="apteka.ru">
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
.cart {
	position: fixed;
	right: 40px;
	bottom: 40px;
	z-index: 30;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 22px 20px 18px 15px;
	background: linear-gradient(242.08deg, #e728b4 -16.63%, rgba(255, 255, 255, 0) 103.7%), #a81280;
	border-radius: 50px;
	transition: all .2s linear;
  cursor: pointer;
}

@media(max-width: 767px) {
	.cart {
		top: 80px;
		bottom: auto
	}
}

.cart:hover .cart__link {
	width: 93px;
	margin-left: 10px
}

@media(max-width: 600px) {
	.cart {
		right: 14px;
		padding: 17px 14px 13px 11px
	}

	.cart__image {
		width: 30px;
		height: 25px
	}

	.cart__link {
		padding: 9px 0
	}

	.cart__link img {
		width: auto;
		height: 9px
	}
}

.cart__image {
	width: 42px;
	height: 36px
}

.cart__link {
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	width: 0;
	max-height: 36px;
	padding: 11px 0;
	margin-top: -5px;
	overflow: hidden;
	background-color: #fff;
	border-radius: 50px;
	transition: all .2s linear
}

.cart__link img {
	width: 71px;
	height: 14px
}
</style>