export function dataReducer(state, action) {
    
    switch(action.type) {
        case "ADD_TO_CART":
            return {
                ...state, 
                itemsInCart: state.itemsInCart.concat(action.payload)
            } 

        case "INCREMENT_QTY":
            return {
                ...state,
                itemsInCart: state.itemsInCart.map((item) => item.watchId === action.payload ? {...item, qty: item.qty + 1} : item)
            }

        case "DECREMENT_QTY":
            return {
                ...state,
                itemsInCart: state.itemsInCart.map((item) => item.watchId === action.payload ? {...item, qty: item.qty - 1} : item)
            }

        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlist: state.wishlist.concat(action.payload)
            }
        
        case "REMOVE_FROM_CART":
            return {
                ...state,
                itemsInCart: state.itemsInCart.filter((item) => item.watchId !== action.payload)
            }

        case "REMOVE_FROM_WISHLIST":
            console.log(state.wishlist.filter(item => item.id !== action.id))
            return {
                ...state,
                wishlist: state.wishlist.filter((item) => item.watchId !== action.payload)
            }

        case "APPLY_COUPON":
            return {
                ...state,
                couponUsed: action.payload
            }

        case "REMOVE_COUPON":
            return {
                ...state,
                couponUsed: ""
            }
            
        case "SHOW_COUPON":
            return {
                ...state, 
                showCoupon: !state.showCoupon
            }

        default:
            return state;
    }

}