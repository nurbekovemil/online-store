import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from './utils/consts'
import {AdminPage, BasketPage, LoginPage, RegistrationPage, ShopPage, DevicePage} from './pages'
export const privateRoutes = [
   {
      path: ADMIN_ROUTE,
      Component: AdminPage
   },
   {
      path: BASKET_ROUTE,
      Component: BasketPage
   },

]
export const publicRoutes = [
   {
      path: LOGIN_ROUTE,
      Component: LoginPage
   },
   {
      path: REGISTRATION_ROUTE,
      Component: RegistrationPage
   },
   {
      path: SHOP_ROUTE,
      Component: ShopPage
   },
   {
      path: DEVICE_ROUTE+'/:id',
      Component: DevicePage
   },
]