
import { Link } from "react-router-dom";
import { useData } from "../../Contexts/dataContext"
import { NavigationBar } from "../Nav/nav";
import { CouponModel } from "../Cart/coupon";

export function Cart() {
    const {itemsInCart, dispatch,wishlist, checkItems, cartFinalValue, showCoupon} = useData();
    function cartQtyValue(qty, watchId) {
        if(qty > 1) {
            return  dispatch({type: "DECREMENT_QTY", payload: watchId})
        } else {
            return dispatch({type: "REMOVE_FROM_CART", payload: watchId})
        }
    }
    
    function cartPriceValue(array) {
        return array.reduce((total, {ogPrice, qty}) => total + ogPrice * qty, 0)
    }



    return (
        <div>
            <div className={`w-full fixed h-full top-0  place-items-center z-10 bg-gray-900 px-4 bg-opacity-30 ${showCoupon ? "grid" : "hidden"} `}>
                <CouponModel />
            </div>
            <div>
                <NavigationBar />
                {itemsInCart.length < 1 
                ?
                <div className="flex mt-8 h-screen">
                    <div className="flex flex-col gap-4 m-auto">
                        <img className="w-full" src="images/empty-cart.png" alt="empty cart" /> 
                        <p className="text-xl font-medium">NO ITEMS IN CART</p>
                        <Link to="/product">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Shop Now </button>
                        </Link>
                    </div>
                </div>
                :
                <div className="flex justify-items-center items-center">
                    <div className="mt-24 md:px-20 w-full p-2 lg:p-20  flex flex-col justify-items-center justify-evenly lg:flex-row gap-y-4 lg:gap-x-2 "> 
                        <div className="lg:w-3/5">
                            <div className="text-left text-2xl font-medium p-2 mb-3">My Cart <span className="text-xl font-normal">&#40;{itemsInCart.length} items&#41;</span></div>
                            <div className="flex flex-col gap-y-2 lg:border-r-2 lg:pr-8">
                                {
                                itemsInCart.map(({watchId, imgUrl,inStock, brandName, info, gender, color, size, price, ogPrice, discount, qty}) => (
                                    <div key={watchId} 
                                    
                                    className="w-full  p-4 border-2">
                                        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-items-center items-center">
                                            <div className="w-1/2 max-w-xs">
                                                <Link to={`/product/${watchId}`} >
                                                <img className="w-full" src={imgUrl} alt="Watch"/>
                                                </Link>
                                            </div>
                                        
                                            <div className="flex flex-col gap-y-4">
                                                <div className="flex flex-col justify-items-center text-left text-gray-500 gap-y-2 py-4">
                                                    <span className="text-black text-2xl font-bold">{brandName}</span>
                                                    <p className="text-xl font-semibold">{info} {gender} Watch </p>
                                                    
                                                    <div className="flex flex-wrap justify-items-center items-center gap-x-2">
                                                        <strong className="text-black text-xl">&#8377; {price}</strong>
                                                        <strike>&#8377; {ogPrice}</strike>
                                                        <span className="font-bold text-yellow-500">&#40;{discount}&#37;OFF&#41;</span>
                                                    </div>
                                                    
                                                    <div className="flex text-lg gap-x-2 font-medium justify-items-center items-center">
                                                        <button className="border-2 px-3 py-1 rounded" onClick={() =>cartQtyValue( qty, watchId)}>{qty > 1 ? <i class="fas fa-minus"></i> : <i className="fas fa-trash-alt"></i>}</button>
                                                        <div className="border-2 px-3 py-1 rounded text-gray-900">{qty}</div>
                                                        <button className="border-2 px-3 py-1 rounded" onClick={() => dispatch({type: "INCREMENT_QTY", payload: watchId})}><i className="fas fa-plus"></i></button>
                                                    </div>
                                                    <div>
                                                        {
                                                            checkItems(wishlist, watchId) 
                                                            ? 
                                                            <button className="border-blue-500 text-blue-500 md:text-sm lg:text-base border-2 px-4 py-2 rounded" disabled>Already in Wishlist</button>
                                                            :
                                                            <button className="bg-blue-500 text-lg font-medium hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => {
                                                                dispatch({type: "REMOVE_FROM_CART", payload: watchId})
                                                                dispatch({type: "ADD_TO_WISHLIST", 
                                                                payload: {watchId, imgUrl, brandName,inStock, info, gender, color, size, price, ogPrice, discount}})   
                                                            }}> Move to Wishlist</button>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>   
                                    </div>
                                ))
                                }
                            </div>
                        </div>    
                        
                        <div className="flex flex-col gap-4 lg:mt-16">
                            <div className="flex justify-items-center text-left border-2 text-gray-500 text-lg font-semibold px-4 py-2 rounded">
                                <button onClick={() => dispatch({type: "SHOW_COUPON"})}><i className="fas fa-tag mr-2"></i><span>Apply Coupon</span>
                                </button>
                            </div>
                            <div className="border-2 flex flex-col text-left justify-items-center">
                                <div className="border-b-2 text-gray-600 font-semibold text-lg p-2">PRICE DETAILS</div>
                                <div className="p-4 flex flex-col gap-4">
                                    <div className="flex flex-col  text-base font-medium text-gray-800 gap-2 ">
                                        <div className="flex justify-between"><span>Price &#40;{itemsInCart.length} items&#41;</span> <span>&#8377;{cartPriceValue(itemsInCart)}</span></div>
                                        <div className="flex justify-between"><span>Discount</span> <span className="text-green-400">&#8722;&#8377;{cartPriceValue(itemsInCart) - cartFinalValue}</span></div>
                                        <div className="flex justify-between"><span>Delivery Charges</span><span>FREE</span></div>
                                    </div>
                                    <div className="flex justify-between border-dashed border-t-2 border-b-2 py-4 text-black font-medium text-lg">
                                        <span>Total Value</span> <span>&#8377;{cartFinalValue}</span>
                                    </div>
                                    <p className="flex justify-items-center items-center pb-2  text-green-400 text-base font-medium">You will save &#8377;{cartPriceValue(itemsInCart) - cartFinalValue} on this order</p>
                                    <div className="text-right">
                                        <button className="max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Place Order</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
            
        </div>
    )
}