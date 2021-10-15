import { useEffect } from "react"
import { Link } from "react-router-dom";
import { useData } from "../../Contexts/dataContext";
import { useFilterData } from "../../Contexts/filterContext"
import { FilterUI } from "../Filter/filterUI";
import { NavigationBar } from "../Nav/nav"



export function ProductList() {
  const {filteredData, showFilter} = useFilterData();
  const {itemsInCart, wishlist, dispatch, checkItems} = useData();

  // cleanup after component is unmounted
  useEffect(() => {
    return () =>  {
      dispatch({ type: "RESET_FILTERS"});
      dispatch({type: "RESET"});
    } 
  },[])

    return (
      <div className="relative">
        <NavigationBar/>
        <div className="md:grid md:grid-cols-5 md:py-6 lg:py-10 md:px-4 lg:px-8 md:mt-20 lg:mt-24 md:gap-x-0 lg:gap-x-8">
          
          <FilterUI/>
          <div className={`md:mt-0 md:w-full md:grid md:col-span-4 auto-rows-min md:grid-cols-3 lg:grid-cols-4 md:gap-4 lg:gap-8 md:p-4 lg:p-16 
          ${showFilter ? "hidden": "grid grid-cols-2 mt-20 mb-14 "}`}>
            {
              filteredData.map((
                {
                  watchId, imgUrl, brandName, info, gender,ogPrice, inStock, fastDelivery, color, size, price, discount 
                }) => (
                <div className="border-2 p-3 md:p-2  md:transition duration-500 md:ease-in-out md:transform md:hover:-translate-y-1 md:hover:scale-105"
                key={watchId} 
                >   
                  <div className="flex flex-col gap-4">
                    <Link to={`/product/${watchId}`}>
                      <img className="w-full" src={imgUrl} alt="watch" />
                    </Link>
                    
                      <div className="px-1 h-24 md:p-0 py-2 text-left  lg:h-28">
                        <div className="flex  justify-between justify-items-center items-center">
                          <span className="text-sm lg:text-base font-bold ">{brandName}</span>
                          <button 
                          onClick={() => {
                            checkItems(wishlist, watchId) ? dispatch({type: "REMOVE_FROM_WISHLIST", payload: watchId}) : dispatch({type:"ADD_TO_WISHLIST", payload:{watchId,inStock, imgUrl, brandName, info, gender, color, size, price, ogPrice, discount}}) }
                            }>
                          <i className={`w-full far fa-heart ${checkItems(wishlist, watchId) ? "text-red-400" : "" }`}></i>
                          </button> 
                        </div>
                        <div className="flex flex-col justify-items-center text-sm text-gray-500">
                          <p className="truncate">{info} {gender} Watch </p>
                          <div className="flex flex-wrap justify-items-center items-center gap-x-1 md:gap-x-0.5 lg:gap-x-1">
                            <strong className="text-black md:text-sm text-base">&#8377; {price}</strong>
                            <strike>&#8377; {ogPrice}</strike>
                            <span className="text-xs font-medium lg:font-bold text-yellow-500">&#40;{discount}&#37;OFF&#41;</span>
                          </div>
                        </div>
                      </div>
                      <div >
                        {
                          inStock 
                          ? <button className="border-blue-700 hover:bg-blue-700 md:text-sm lg:text-base text-blue-700 hover:text-white border-2 px-3 py-2 rounded"
                          onClick={() => checkItems(itemsInCart, watchId) ? "" : dispatch({type:"ADD_TO_CART", payload:{watchId, imgUrl, brandName,inStock, info, gender, color, size, price, ogPrice, discount, qty: 1} })}>
                            {checkItems(itemsInCart, watchId) ? <Link to="/cart"><span>Go to Cart</span></Link> : <span>Add to Cart</span>}
                          </button>
                          : <button className="border-blue-500 text-blue-500 md:text-sm lg:text-base border-2 p-2 rounded" disabled>Out of Stock</button>
                        }
                      </div>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
        
      </div>
    )
}