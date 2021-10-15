import {createContext, useReducer, useContext} from "react";
import { cartCouponValue, cartTotalValue } from "../Utils/couponFunction";
import { dataReducer } from "../Reducers/dataReducer";
import {checkItems} from "../Utils/helper"

export const DataContext = createContext();

export function DataProvider({children}) {
    const [{itemsInCart, wishlist, couponUsed, showCoupon}, dispatch] = useReducer(dataReducer, {itemsInCart: [], wishlist: [], couponUsed:"", showCoupon: false})
    
    let cartValue = cartTotalValue(itemsInCart);
    let cartFinalValue = cartCouponValue(cartValue, couponUsed);

    return (
        <DataContext.Provider value={{itemsInCart,wishlist, dispatch, checkItems, cartFinalValue , couponUsed, showCoupon}}>
            {children}
        </DataContext.Provider>
    )
}

export function useData() {
    return useContext(DataContext)
}