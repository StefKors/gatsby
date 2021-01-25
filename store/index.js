export const state = () => ({
  UIMode: "dark",
  writing: ["content.md", "content2.md"],
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
  toggleUIMode(state) {
    if (state.UIMode === "dark") {
      return (state.UIMode = "light")
    }

    return (state.UIMode = "dark")
  },
  initUIMode(state) {
    const mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
    return state.UIMode = mode
  }
}