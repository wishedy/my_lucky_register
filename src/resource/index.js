import { json2Query } from '@/libs/utils'
const Resource = require('./create-api')
const { api } = Resource
export function getSignature (params) {
  console.log(params)
  return api.post('/api/wechat/getSignature', params)
}
export function getOrderList (params) {
  console.log(params)
  const query = params?`?${json2Query(params)}`:''

  return api.get(`/api/order/getOrderList${query}`)
}
