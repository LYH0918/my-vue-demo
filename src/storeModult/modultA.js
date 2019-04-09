
export default {
    modultA: {
        namespace: true,
        state: {
            count: 1
        },
        getters: {
            mag(state, getters, rootState, rootGetter) {
                return state.count + rootState.count
            }
        },
        mutations: {},
        actions: {}
    }
}