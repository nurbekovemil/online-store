import React, {useContext} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Context } from '../index'
import {privateRoutes, publicRoutes} from '../routes'
import { SHOP_ROUTE } from '../utils/consts'
export default function AppRouter() {
   const {user} = useContext(Context)
   console.log(user)
   return (
      <Switch>
         {
            user.isAuth && privateRoutes.map(({path, Component}) => 
               <Route key={path} path ={path} component={Component} exact/>
            )
         }
         {
            publicRoutes.map(({path, Component}) => 
               <Route key={path} path ={path} component={Component} exact/>
            )
         }
         <Redirect to={SHOP_ROUTE}/>
      </Switch>
   )
}
