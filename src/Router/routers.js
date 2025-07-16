import { categoriaController } from '../Views/categories/controllerCategories';
import { createController } from '../Views/categories/createController';
import { homeController } from '../Views/home/homeController';
import { loginController } from '../Views/login/loginController';
import { controllerProducto } from '../Views/products/controllerProducts';
import { registerController } from '../Views/register/registerController';


export const rutas = {
  home : {
    path: "home/index.html",
    controller: homeController,
    private: false
 },   
 categories :{
  "/":   {
    path: "categories/index.html",
    controller: categoriaController,
    private: false,
   },
  create:    {
    path: "categories/create.html",
    controller: createController,
    private: false,
   },
  editar:   {
    path: "categories/editar.html",
    controller: categoriaController,
    private: false,
   }
 },   
 products : {
  path: "products/index.html",
    controller: loginController ,
    private: false
 },
 login: {
    path: "login/index.html",
    controller: loginController ,
    private: false
 },
 register:{
    path: "register/index.html",
    controller: registerController ,
    private: false
 }
}