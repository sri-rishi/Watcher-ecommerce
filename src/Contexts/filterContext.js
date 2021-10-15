import { createContext, useContext, useReducer } from "react";
import {data} from "../Assets/data"
import { getSortedData, getFilterByData } from "../Utils/filterFunc";
import { filterReducer } from "../Reducers/filterReducer";

export const  FilterContext = createContext();

export function FilterProvider({children}) {
    
    const [
        {sortBy,
        filterBrand,
        filterColor,
        filterGender,
        filterSize,
        showOutOfStock,
        showFastDelivery,
        showFilter
    }, dispatch
    ]  = useReducer(
        filterReducer,
        {
            sortBy: null, 
            filterBrand: [],
            filterColor: [],
            filterGender: [],
            filterSize: [],
            showOutOfStock: true,
            showFastDelivery: false,
            showFilter: false
        })

    const sortedData = getSortedData(data, sortBy)
    const filteredData = getFilterByData(sortedData, filterBrand, filterColor, filterGender,filterSize,showOutOfStock, showFastDelivery)
    

    return (
        <FilterContext.Provider value={{
            sortBy,
            dispatch,  
            filteredData,
            showOutOfStock,
            showFastDelivery,
            filterGender,
            filterBrand,
            showFilter
            }}>
            {children}
        </FilterContext.Provider>
    )
}

export function useFilterData() {
    return useContext(FilterContext);
}