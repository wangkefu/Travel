import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		city: '苏州'
	},
	// actions: {
	// 	changeCity (ctx, city) {
	// 		ctx.commit('changeCity', city)
	// 	}
	// },
	mutations: {
		changeCity (state, city) {
			state.city = city
		}
	}
	// 组件调用action，actions调用mutations, mutations改变数据
})