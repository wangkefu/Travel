<template>
	<div>
		<div class="title">周末去哪</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" />
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name: 'HomeWeekend',
	data () {
		return {
			recommendList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
				title:'苏州天颐温泉',
				desc: '江南佳丽地，享滋润温汤，葆青春容颜'
			}, {
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
				title:'苏州天颐温泉',
				desc: '江南佳丽地，享滋润温汤，葆青春容颜'
			}, {
				id: '0003',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
				title:'苏州天颐温泉',
				desc: '江南佳丽地，享滋润温汤，葆青春容颜'
			}, {
				id: '0004',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
				title:'苏州天颐温泉',
				desc: '江南佳丽地，享滋润温汤，葆青春容颜'
			}, {
				id: '0005',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
				title:'苏州天颐温泉',
				desc: '江南佳丽地，享滋润温汤，葆青春容颜'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl' 
	.title
		margin-top: .2rem
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.item-img-wrapper
		overflow: hidden
		height: 0
		padding-bottom: 36.5%
		.item-img
			width: 100%
	.item-info
		padding: .1rem
		.item-title
			line-height: .54rem
			font-size: .32rem
			ellipsis()
		.item-desc
			line-height: .4rem
			color: #ccc
			ellipsis()
</style>