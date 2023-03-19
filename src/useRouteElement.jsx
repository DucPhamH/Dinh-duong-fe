import { useRoutes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'

import RegisterLayout from './Layout/RegisterLayout'
import ChiaSe from './page/ChiaSe'
import Home from './page/Home'
import KienThuc from './page/KienThuc'
import Login from './page/Login'
import MonAn from './page/MonAn'
import MuaBan from './page/MuaBan'
import Register from './page/Register'
import ThucDon from './page/ThucDon'

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: '/thuc-don',
      element: (
        <MainLayout>
          <ThucDon />
        </MainLayout>
      )
    },
    {
      path: '/kien-thuc',
      element: (
        <MainLayout>
          <KienThuc />
        </MainLayout>
      )
    },
    {
      path: '/mon-an',
      element: (
        <MainLayout>
          <MonAn />
        </MainLayout>
      )
    },
    {
      path: '/chia-se',
      element: (
        <MainLayout>
          <ChiaSe />
        </MainLayout>
      )
    },
    {
      path: '/mua-ban',
      element: (
        <MainLayout>
          <MuaBan />
        </MainLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElement
}
