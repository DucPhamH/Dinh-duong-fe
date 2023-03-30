import http from '../ultils/http'

export const getProducts = (params) => http.get('products', { params })
export const getFruit = (params) => http.get('fruit', { params })
