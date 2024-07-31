import React from "react";
import {useContext} from"react";
import ProductContext from "../context/ProductProvider";
import { UseProductsContextType } from "../context/ProductProvider";

const useProducts=(): UseProductsContextType =>{
    return useContext(ProductContext)
}

export default useProducts               