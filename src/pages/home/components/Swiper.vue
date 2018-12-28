<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
			<!-- slides -->
		    <swiper-slide v-for="item of swiperList" :key="item.id">
				<img class="swiper-img" :src="item.imgUrl" />
		    </swiper-slide>
		    
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true
			},
			swiperList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg'
			}, {
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1812/47/a51fe403715df102.jpg_750x200_085792b6.jpg'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
    	background: white
	body
		touch-action: none
		.wrapper
			overflow: hidden
			width: 100%
			height: 0
			padding-bottom: 28.25%
			.swiper-img
				width: 100%
</style>