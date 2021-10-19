export const state = () => ({
  user:null,
  language: "zh-cn"
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setLang(state, payload) {
    state.language = payload;
  }
}
