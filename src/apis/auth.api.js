import http from '../ultils/http'

export const registerAccount = (body) => http.post('/register', body)
export const login = (body) => http.post('/login', body)
