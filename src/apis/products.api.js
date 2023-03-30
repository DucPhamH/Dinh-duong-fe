import http from '../ultils/http'

export const getProducts = (params) => http.get('products', { params })
