import { categoriaController } from '../Views/categories/controllerCategories';
import { createController } from '../Views/categories/create/createController';
import { homeController } from '../Views/home/homeController';
import { loginController } from '../Views/login/loginController';
import { productController } from '../Views/products/productController';
import { registerController } from '../Views/register/registerController';
import { editController } from "../Views/categories/edit/editController";


export const routes = {
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
    path: "categories/create/index.html",
    controller: createController,
    private: false,
   },
  edit:   {
    path: "categories/edit/index.html",
    controller: editController,
    private: false,
   }
 },   
 products : {
  path: "products/index.html",
    controller: productController ,
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