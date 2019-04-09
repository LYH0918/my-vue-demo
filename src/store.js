import vuex from 'vuex'
import Vue from 'vue'
import modultA from './storeModult/modultA'
//import { modultB } from './storeModult/modultB'
Vue.use(vuex);
const store = new vuex.Store({
    modules: {
        a: { modultA },
        //b: modultB
    },
    state: {
        count: 0,
        myObj: [
            { name: "tom", age: 12 },
            { name: "lily", age: 11 }
        ]
    },
    getters: {
        myName: state => state.myObj.map(item => item.name)
    },
    mutations: {
        creatment(state) {
            state.count++;
        },
        cag(state, bbb) {
            var a = parseInt(bbb)
            state.count = a
        }
    },
    actions: {
        myfun(context) {
            setTimeout(function () {
                context.commit("creatment")
            }, 2000)

        }
    }
})
export { store }