import http from '../ultils/http'

export const getProducts = (params) => http.get('products', { params })
export const getProductsDetail = (id) => http.get(`products/${id}`)
export const getFruit = (params) => http.get('fruit', { params })
