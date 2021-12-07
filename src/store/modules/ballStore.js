const ballStore = {
    namespaced: true,
    state: {
        ballList: [
            { name: "김형민", num: 1, id: new Date().getTime(), isDel: false }
        ], filterType: 'NAME_DESC'
    },
    getters: {
        GET_BALL_LIST: (state) => state.ballList,
        GET_SORTED_BALL_LIST: (state) => {
            switch (state.filterType) {
                case "NAME_DESC": {
                    return state.ballList.sort((a, b) => {
                        if (a.name < b.name) return -1;
                        else if (a.name > b.name) return 1;
                        return 0;
                    })
                }
                case "NAME_ASC": {
                    return state.ballList.sort((a, b) => {
                        if (a.name < b.name) return 1;
                        else if (a.name > b.name) return -1;
                        return 0;
                    })
                }
                default: {
                    return state.ballList.sort((a, b) => {
                        if (a.name < b.name) return -1;
                        else if (a.name > b.name) return 1;
                        return 0;
                    })
                }
            }
        },
        GET_FILTER_TYPE: (state) => state.filterType

    },
    mutations: {
        MU_ADD_BALL: (state, name) => {
            const lastNum = state.ballList.length + 1;
            state.ballList = [...state.ballList, {
                name, num: lastNum, id: new Date().getTime(), isDel: false
            }]
        }, MU_DEL_BALL: (state, id) => {
            state.ballList = state.ballList.filter(ball => ball.id !== id);
        }, MU_UPDATE_FILTER: (state, newFilter) => {
            state.filterType = newFilter;
        }
    },
    actions: {
        AC_ADD_BALL: ({ commit }, name) => {
            commit('MU_ADD_BALL', name)
        },
        AC_DEL_BALL: ({ commit }, id) => {
            commit('MU_DEL_BALL', id)
        }, AC_UPDATE_FILTER: ({ commit }, newFilter) => {
            commit('MU_UPDATE_FILTER', newFilter)
        }
    }

}

export default ballStore;