import Cookies from 'js-cookie'
import { tokenKey } from '@/libs/constant'

const mutations = {
  saveToken (state, token) {
    Cookies.set(tokenKey, token, { expires: 7 })
    state.token = token
  },
  setPhoneNum (state, num) {
    state.phoneNum = num
  },
  changeCodeState (state, status) {
    state.onCoding = status
  },
  saveUser (state, user) {
    state.user = user
  },
  saveGoodCart (state, data) {
    state.goodsCart = data
  },
  changeCodeNum (state, num) {
    state.codeNum = num
  },
  changeResidueNum (state, num) {
    state.residueNum = num
  }
}
export default mutations
