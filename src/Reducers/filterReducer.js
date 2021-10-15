export function filterReducer(state, action) {
    switch(action.type) {
        case "SORT":
            return {
                ...state, 
                sortBy: action.payload
            };
        
        case "FILTER_BY_GENDER":
            return state.filterGender.includes(action.payload) 
            ? {
                ...state,
                filterGender: state.filterGender.filter(item => item !== action.payload)
            }
            : {
                ...state,
                filterGender: state.filterGender.concat(action.payload)
            }

        case "FILTER_BY_BRAND" :
            return state.filterBrand.includes(action.payload) 
            ? {
                ...state, 
                filterBrand: state.filterBrand.filter(item => item !== action.payload)
            }
            :{
                ...state,
                filterBrand: state.filterBrand.concat(action.payload)
            }
    
        case "FILTER_BY_COLOR":
            return state.filterColor.includes(action.payload) 
            ? {
                ...state,
                filterColor: state.filterColor.filter(item => item !== action.payload)
            }
            : {
                ...state,
                filterColor: state.filterColor.concat(action.payload)
            }
        
        case "FILTER_BY_SIZE":
            return state.filterSize.includes(action.payload)
            ? {
                ...state,
                filterSize: state.filterSize.filter(item => item !== action.payload)
            }
            : {
                ...state,
                filterSize: state.filterSize.concat(action.payload)
            }

        case "INC_OUT_OF_STOCK":
            return {
                ...state,
                showOutOfStock: !state.showOutOfStock
            }  
    
        case "FAST_DELIVERY_ONLY":
            return {
                ...state,
                showFastDelivery: !state.showFastDelivery
            }
        
        case "CLEAR_ALL":
            return {
                ...state,
                sortBy: "",
                filterBrand: [],
                filterColor: [],
                filterGender: [],
                filterSize: [],
                showOutOfStock: true,
                showFastDelivery: false
            }
        
        case "RESET_SORT":
            return {
                ...state, 
                sortBy: ""
            }
        
        case "RESET_FILTERS":
            return {
                ...state, 
                filterBrand: [],
                filterColor: [],
                filterGender: [],
                filterSize: [],
                showOutOfStock: true,
                showFastDelivery: false
            }

       case "FILTER_SHOWN": 
            return {
                ...state,
                showFilter: !state.showFilter
            } 
        
            default:
                return state;
    }
}