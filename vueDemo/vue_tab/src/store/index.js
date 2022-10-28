import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // state相当于vue中的data属性，存放数据的
    num: 10
  },
  getters: {
    // 可以修i该state中的数据，通过寒湖是修改state中的一些数据
    // 函数里面要有一个参数，把state传进来
    getNum(state) {
      return state.num + '元'
    }
  },
  mutations: {
    // 用来修改state的状态的 和getter差不多写法 是同步的，
    getAdd(state) {
      // 不需要return 可以不要return
      state.num++
    }
  },
  actions: {
    // 和mutation一样的操作，但是是异步的，不能直接修改state里面的数据，只能通过mutation去修改
    // 通过commit去触发mutation中的方法
    getAddction(content){
      content.commit(getAdd);
    }

  },
  modules: {
  }
})
