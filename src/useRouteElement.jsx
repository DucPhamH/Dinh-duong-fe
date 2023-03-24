import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'

import RegisterLayout from './Layout/RegisterLayout'
import ChiaSe from './page/ChiaSe'
import Home from './page/Home'
import KienThuc from './page/KienThuc'
import Login from './page/Login'
import MonAn from './page/MonAn'
import MuaBan from './page/MuaBan'
import Profile from './page/Profile'
import Register from './page/Register'
import ThucDon from './page/ThucDon'

const isAuthenticated = false
function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      index: true,
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
      index: true,
      element: (
        <MainLayout>
          <KienThuc />
        </MainLayout>
      )
    },
    {
      path: '/mon-an',
      index: true,
      element: (
        <MainLayout>
          <MonAn />
        </MainLayout>
      )
    },
    {
      path: '/chia-se',
      index: true,
      element: (
        <MainLayout>
          <ChiaSe />
        </MainLayout>
      )
    },
    {
      path: '/mua-ban',
      index: true,
      element: (
        <MainLayout>
          <MuaBan />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: 'login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: 'register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: 'profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        }
      ]
    }
  ])
  return routeElement
}
