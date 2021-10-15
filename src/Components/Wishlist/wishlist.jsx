import { useData } from "../../Contexts/dataContext"
import { NavigationBar } from "../Nav/nav";
import { Link } from "react-router-dom";

export function Wishlist() {
    const {wishlist, dispatch, itemsInCart, checkItems} = useData()
    return (
        <div className="relative">
            <NavigationBar />
            {
                wishlist.length < 1 ?
                <div className="flex mt-24 h-screen">
                    <div className="flex flex-col gap-4 m-auto">
                        <img className="w-full" src="https://us.123rf.com/450wm/sanek13744/sanek137442105/sanek13744210500044/169424225-wishlist-icon-in-comic-style-like-document-cartoon-vector-illustration-on-white-isolated-background-.jpg?ver=6" alt="empty cart" /> 
                        <p className="text-xl font-medium">NO ITEMS IN WISHLIST</p>
                        <Link to="/product">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Continue Shopping</button>
                        </Link>
                    </div>
                </div>
                :
                <div className="mt-24 py-8 md:px-14">
                <div className="text-left text-2xl font-medium p-4 mb-3">My Wishlist <span className="text-xl font-normal">&#40;{wishlist.length}items&#41;</span></div>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                
                {
                    wishlist.map(({watchId, imgUrl, brandName, inStock, info, gender, color, size, price, ogPrice, discount}) => (
                        <div className="w-full p-4 border-2"
                        key={watchId}>
                            
                            <div className="relative grid grid-cols-3 md:grid-rows-2 auto-rows-min md:grid-cols-1 jusitfy-items-center items-center gap-2">
                                <div className="w-full md:w-4/5 lg:w-3/5 m-auto ">
                                    <Link to={`/product/${watchId}`}>
                                        <img className="w-full" src={imgUrl} alt="watch" />
                                    </Link>
                                </div>
                                <button className="absolute -top-2 right-0 text-gray-700 text-2xl " onClick={() =>  dispatch({type: "REMOVE_FROM_WISHLIST", payload: watchId})}><i className="fas fa-times"></i></button>
                                
                                <div className="col-span-2">
                                    <div className="px-1 py-2 text-left flex flex-col">
                                        <div className="flex flex-col justify-items-center h-36 text-left text-gray-500 py-4">
                                            <span className="text-black text-xl font-semibold">{brandName}</span>
                                            <p className="text-lg  truncate">{info} {gender} Watch </p>
                                            <div className="flex flex-wrap justify-items-center items-center gap-x-2">
                                                <strong className="text-black text-lg">&#8377; {price}</strong>
                                                <strike>&#8377; {ogPrice}</strike>
                                                <span className="font-bold text-yellow-500">&#40;{discount}&#37;OFF&#41;</span>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            {
                                                inStock ?
                                                <button className="bg-blue-500 text-lg font-medium hover:bg-blue-700 text-white  py-2 px-4 rounded" onClick={() =>  checkItems(itemsInCart, watchId)  ? "": dispatch({type: "ADD_TO_CART", 
                                                payload: {watchId, imgUrl,inStock, brandName, info, gender, color, size, price, ogPrice, discount, qty: 1}})
                                                }>
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
                                        </div>
                                    </div> 
                                </div> 
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
            }
        </div>
    )
}

