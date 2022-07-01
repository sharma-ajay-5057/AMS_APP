import { combineReducers } from "redux";
import LoginReducers from './LoginReducers';
import changePasswordReducers from "./changePasswordReducers";
import CategoryDetailReducer from "./CategoryDetailReducer";
import addCategoryReducer from "./addCategoryReducer";
import deleteCategoryReducer from "./deleteCategoryReducer";
import updateCategoryReducer from "./UpdateCategoryReducer";
import EmployeeListReducer from "./EmployeeListReducer";
import empRegReducer from "./empRegReducer";
import singleEmployeeReducer from "./singleEmployeeReducer";
import updateEmpReducer from "./updateEmpReducer";
import employeeStatusReducer from "./employeeStatusReducer";
import categoryStatusReducer from "./categoryStatusReducer";
import getCategoryStockListReducer from "./getCategoryStockListReducer";
import productListReducer from "./productListReducer"; 
import addProductReducer from "./addProductReducer";
import getProductReducer from "./getProductReducer";
import updateProductReducer from "./updateProductReducer";
import productStatusReducer from "./productStatusReducer";
import allocationListReducer from "./allocationListReducer";
import allocationAddReducer from "./allocationAddReducer";
import allocationStatusReducer from "./allocationStatusReducer";
export default combineReducers({
   LoginReducers,
   changePasswordReducers,
   CategoryDetailReducer,
   addCategoryReducer,
   deleteCategoryReducer,
   updateCategoryReducer,
   EmployeeListReducer,
   empRegReducer,
   singleEmployeeReducer,
   updateEmpReducer,
   employeeStatusReducer,
   categoryStatusReducer,
   getCategoryStockListReducer,
   productListReducer,
   addProductReducer,
   getProductReducer,
   updateProductReducer,
   productStatusReducer,
   allocationListReducer,
   allocationAddReducer,
   allocationStatusReducer
});