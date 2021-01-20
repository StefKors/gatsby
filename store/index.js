export const state = () => ({
  sortSettings: {
    direction: "asc",
    key: "Project",
  },
})

export const mutations = {
  setSortSettings(state, payload) {
    state.sortSettings = payload
  },
  setSortDirection(state, payload) {
    state.sortSettings.direction = payload.value
  },
  setSortKey(state, payload) {
    state.sortSettings.key = payload.value
    state.sortSettings.direction = payload.defaultSort
  },
}
