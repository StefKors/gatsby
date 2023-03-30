export const state = () => ({
  // UIMode: "dark",
  sortSettings: {
    direction: "desc",
    key: "date",
  },
  cms: []
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
  // toggleUIMode(state) {
  //   if (state.UIMode === "dark") {
  //     return (state.UIMode = "light")
  //   }

  //   return (state.UIMode = "dark")
  // },
  // initUIMode(state) {
  //   const mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
  //   return state.UIMode = mode
  // },
  addCMSdata(state, payload) {
    payload.id = state.cms.length
    state.cms.push(payload)
  },
  removeCMSdata(state, payload) {
    state.cms = state.cms.reduce(item => {
      if (item.id == payload.id) {
        return true
      }
    })
  },
  clearCMSdata(state) {
    state.cms = []
  },
}