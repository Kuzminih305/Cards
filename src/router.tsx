import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'
import {Layout} from "@/components/layout/layout.tsx";
import {useMeQuery} from "@/services/auth/auth.tsx";
import {SignUp} from "@/components/auth/sign-up";
import {CheckEmail} from "@/components/auth/check-email";
import {PacksList} from "@/components/pages/packs-list/packs-list.tsx";




const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <div></div>,
  },
  {
    path: '/sign-up',
    element: <div></div>,
  },
  {
    path: '/forgot-password',
    element: <div></div>,
  },
  {
    path: '/recover-password/:token',
    element: <div></div>,
  },
  {
    path: '/check-email/:email',
    element: <CheckEmail />,
  },
  {
    path: '/confirm-email/:code',
    element: <div></div>,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <PacksList />,
  },
  {
    path: '/my-pack/:id',
    element: <div></div>,
  },
  {
    path: '/friends-pack/:id',
    element: <div></div>,
  },
  {
    path: '/empty-pack/:name/:id',
    element: <div></div>,
  },
  {
    path: '/learn-pack/:id',
    element: <div></div>,
  },
  {
    path: '/profile',
    element: <div></div>,
  },
]

const router = createBrowserRouter([
  {
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        element: <PrivateRoutes />,

        children: privateRoutes,
      },
      {
        path: '*',
        // element: <ErrorPage />,
      },
      ...publicRoutes,
    ],
  },
])

function PrivateRoutes() {
  const { data, isLoading } = useMeQuery()

  // if (isLoading) return <Loader />

  return data ? <Outlet /> : <Navigate to="/login" />
}

export const Router = () => {
  return <RouterProvider router={router} />
}
