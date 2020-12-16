const actions = {
  setPhoneNum ({ commit, state }, num) {
    commit('setPhoneNum', num)
  },
  saveUser ({ commit, state }, user) {
    commit('saveUser', user)
  },
  saveGoodCart ({ commit, state }, data) {
    commit('saveGoodCart', data)
  },
  changeCodeState ({ commit, state }, data) {
    commit('changeCodeState', data)
  },
  changeCodeNum ({ commit, state }, num) {
    commit('changeCodeNum', num)
  },
  changeResidueNum ({ commit, state }, num) {
    commit('changeResidueNum', num)
  },
  saveToken ({ commit, state }, token) {
    commit('saveToken', token)
  }
}
export default actions
