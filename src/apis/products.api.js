import http from '../ultils/http'

export const getProducts = () => http.get('products')
