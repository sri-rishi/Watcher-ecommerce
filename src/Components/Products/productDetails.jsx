import { Link, useParams } from "react-router-dom"
import { useData } from "../../Contexts/dataContext";
import { useFilterData } from "../../Contexts/filterContext";
import { NavigationBar } from "../Nav/nav";

export function ProductDetails() {
    const {productId} = useParams();
    const {filteredData} = useFilterData();
    const {itemsInCart, wishlist, dispatch, checkItems} = useData(); 

    const {watchId, imgUrl, brandName, info, gender,ogPrice, inStock, fastDelivery, color, size, price, discount } = filteredData.find((product) => product.watchId === Number(productId));
    
    function addToCart(array, productId) {
        if (checkItems(array, productId)) {
            return null
        }else {
            dispatch({type: "ADD_TO_CART", 
                payload: {watchId, imgUrl,inStock, brandName, info, gender, color, size, price, ogPrice, discount, qty: 1}})
        }
    }

    function addToWishList(array, productId) {
        if (checkItems(array, productId)) {
            dispatch({type: "REMOVE_FROM_WISHLIST", watchId})
        }else {
            dispatch({type: "ADD_TO_WISHLIST", 
                payload: {watchId, imgUrl, brandName,inStock, info, gender, color, size, price, ogPrice, discount, qty: 1}})
        }
    }

    return (
        <div className="relative">
            <NavigationBar />
            <div className="w-full md:w-4/5 mt-14 md:mt-28 lg:mt-36 md:mx-24 p-4 md:p-9 shadow-xl lg:w-3/5 lg:mx-72">
                <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-items-center items-center">
                    <div className="w-4/5 max-w-xs">
                        <img className="w-full" src={imgUrl} alt="Watch"/>
                    </div>
                        
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col justify-items-center text-left text-gray-500 gap-y-2 border-b-2 py-4">
                            <span className="text-black text-2xl font-bold">{brandName}</span>
                            <p className="text-xl font-semibold">{info} {gender} Watch </p>
                            <div className="flex flex-col">
                                <div className="flex flex-wrap justify-items-center items-center gap-x-2">
                                    <strong className="text-black text-xl">&#8377; {price}</strong>
                                    <strike>&#8377; {ogPrice}</strike>
                                    <span className="font-bold text-yellow-500">&#40;{discount}&#37;OFF&#41;</span>
                                </div>
                                <div>
                                    <p className="text-base font-semibold text-green-900">Inclusive of all taxes</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-items-center text-left text-gray-500 gap-y-2 border-b-2 pb-4">
                            <p>Size: {size}</p>
                            <p>Dial Color: {color}</p>
                            <p>Gender : {gender}</p>
                        </div>
                        <div className="text-left text-gray-800 text-base font-medium">
                            <div>
                                {
                                    fastDelivery ? 
                                    <p><i class="fas fa-shipping-fast mr-2"></i><span>Fast delivery available</span></p>
                                    : ""
                                }
                            </div>
                            <div>
                                {
                                    inStock ?
                                    <p><i class="far fa-calendar-check mr-3.5"></i><span>Currently in stock</span></p>
                                    : <p><i class="far fa-calendar-times mr-3.5"></i><span>Out of stock</span></p>
                                }
                            </div>
                        </div>

                        <div className="flex flex-col mt-2 gap-y-4 justify-between w-3/5">
                            {
                                inStock ?
                                <button className="bg-blue-500 text-lg font-medium hover:bg-blue-700 text-white  py-2 px-4 rounded" onClick={() =>  addToCart(itemsInCart, watchId)}>
                                    <i className="fas fa-shopping-cart mr-2"></i>
                                {
                                    checkItems(itemsInCart, watchId)  ? 
                                    <Link to="/cart">
                                        <span>Go to Cart</span>
                                    </Link>
                                    : <span>Add to Cart</span>
                                }
                                </button>
                                :
                                <button className="border-blue-500 text-blue-500 md:text-sm lg:text-base border-2 px-4 py-2 rounded"    disabled>
                                    Out of Stock
                                </button>
                            }
                            
                            <button className="text-base border-blue-500  font-medium text-blue-500 md:text-sm lg:text-base border-2 px-4 py-2 rounded" 
                             onClick={() => addToWishList(wishlist, watchId)}>
                                {
                                   checkItems(wishlist, watchId) ? "Added to Wishlist" : "Add to Wishlist"
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}