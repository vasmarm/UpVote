
const state = {
    upVotes: [
        {
            id: 1,
            selected: false,
            votesCount: 1
        },
        {
            id: 2,
            selected: false,
            votesCount: 2
        },
        {
            id: 3,
            selected: false,
            votesCount: 3
        }
    ]
};

const getters = {
    allUpVotes: state => state.upVotes
};

const actions = {
    addUpVote({ commit }, id) {
        commit('addVote', id)
    },
    toggleUpVote({ commit }, id) {
        commit('toggleVote', id)
    }
};

const mutations = {
    addVote: (state, id) => state.upVotes = state.upVotes.map(item => {
            if (item.id === id) {
                const newItem = { ...item };
                const existingCount = item.votesCount;
                newItem.votesCount = existingCount + 1;
                return newItem;
            }
            return item;
            }),
    toggleVote: (state, id) => state.upVotes = state.upVotes.map(item => {
        if (item.id === id) {
            const newItem = { ...item };
            const existingSelected = item.selected;
            newItem.selected = !existingSelected;
            return newItem;
        }
        return item;
        }),
};

export default {
    state,
    getters,
    actions,
    mutations
}