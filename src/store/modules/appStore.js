const appStore = {
    namespaced: true,
    state: {
        userList: [
            {
                name: "kim",
                age: 32,
                habbit: ['baseball', 'golf']
            }
        ]
    },
    getters: {
        GET_USER_LIST: (state) => state.userList
    },
    mutations: {
        MU_ADD_USER: (state, data) => {
            state.userList = [...state.userList, data]
        }, MU_DEL_USER: (state, age) => {
            state.userList = state.userList.filter(user => user.age !== age);
        }
    },
    actions: {
        AC_ADD_USER: ({ commit }, data) => {
            commit('MU_ADD_USER', data)
        },
        AC_DEL_USER: ({ commit }, name) => {
            commit('MU_DEL_USER', name)
        }
    }

}

export default appStore;