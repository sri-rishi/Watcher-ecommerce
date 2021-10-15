import { useFilterData } from "../../Contexts/filterContext"

export function FilterUI() {
    const {
        sortBy,
        dispatch,
        showOutOfStock,
        showFastDelivery,
        filterGender,
        filterBrand,
        showFilter
    } = useFilterData()
    return (
       <div className="relative">
           <div className="md:left-0 md:py-12 lg:py-16 md:sticky md:top-16 lg:top-20 md:z-0" >
                <div className="w-full fixed bottom-0 bg-white border-t-2 p-4 text-xl grid grid-cols-2 justify-items-center items-center md:hidden">
                    <button onClick={() => dispatch({type: "FILTER_SHOWN"})}>
                        {showFilter ? <span className="font-medium">Apply</span> : <span className="font-light"><i className="fas fa-filter text-gray-700"></i>Filter</span>}
                    </button>
                    <button className="font-light hover:text-red-500" onClick={() => {dispatch({type: "CLEAR_ALL"})
                    document.querySelectorAll("input[type='checkbox']").forEach((el) => el.checked = false) 
                    document.querySelectorAll("input[type='checkbox']").forEach((el) => el.checked = false) }}>
                        Clear All
                    </button>
                </div>
                <div className={`md:grid text-left md:bg-white md:sticky md:top-0 ${showFilter ? "w-full h-full pb-14 mx-auto  bg-gray-100 " : "hidden"}`} >
                    <ul className="grid jusitfy-items-center items-center break-word">
                        <li className="p-4 md:px-2 lg:p-4 border-b-2 leading-loose">
                            <div className="flex justify-items-center items-center justify-between md:mb-4">
                                <span className="font-semibold  text-xl  text-gray-700">Sort </span>
                                <button className="border-gray-900 md:border-none hover:border-white border-2 bg-white hover:bg-gray-900 text-gray-700 hover:text-white py-1 px-4 rounded font-medium" onClick={() => dispatch({type: "RESET_SORT"})}>
                                    Reset
                                </button>
                            </div>  
                            <ul>
                                <li>
                                    <label className="flex justify-items-center ">
                                        <input className="mt-3 mr-2" type="radio" name="sort" onChange={() => dispatch({type: "SORT", payload: "PRICE_LOW_TO_HIGH"})} checked={sortBy === "PRICE_LOW_TO_HIGH"}/>
                                    Price - Low To High
                                    </label>
                                </li>
                                <li>
                                    <label className="flex justify-items-center ">
                                        <input className="mt-3 mr-2" type="radio" name="sort" onChange={() => dispatch({type: "SORT", payload: "PRICE_HIGH_TO_LOW"})} checked={sortBy === "PRICE_HIGH_TO_LOW"}/>
                                    Price - High To Low
                                    </label>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="px-4 md:px-2 lg:px-4 py-2 flex justify-items-center items-center justify-between mb-2"> 
                                <span className="font-semibold text-xl text-gray-700">Filter</span>
                                <button className="border-gray-900 md:border-none hover:border-white border-2 bg-white hover:bg-gray-900 text-gray-700 hover:text-white py-1 px-4 rounded font-medium"
                                onClick={() => {dispatch({type: "RESET_FILTERS"})
                                    document.querySelectorAll("input[type='checkbox']").forEach((el) => el.checked = false)}}>
                                    Clear
                                </button>
                            </div>
                            <ul className="p-4 md:px-2 lg:p-4">
                                <li className=" border-b-2 leading-loose">
                                    <span className="text-lg font-medium text-gray-600">Gender</span>
                                    <ul className="py-2">
                                        <li>
                                            <label>
                                                <input className="align-middle -mt-1 mr-2" type="checkbox" onChange={() => dispatch({type: "FILTER_BY_GENDER", payload:"Men"})} checked={filterGender.includes("Men")}/>
                                                Mens
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input className="align-middle -mt-1 mr-2" type="checkbox" onChange={() => dispatch({type: "FILTER_BY_GENDER", payload: "Women"})} checked={filterGender.includes("Women")}/>
                                                Womens
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                            
                                <li className="border-b-2 leading-loose">
                                    <span className="text-lg font-medium text-gray-600">Brands</span>
                                    <ul className="py-2">
                                        <li>
                                            <label>
                                                <input className="align-middle -mt-1 mr-2" type="checkbox" onChange={() => dispatch({type: "FILTER_BY_BRAND", payload: "TISSOT"})} checked={filterBrand.includes("TISSOT")}/>
                                                Tissot
                                            </label>
                                        </li>
                                        
                                        <li>
                                            <label>
                                                <input className="align-middle -mt-1 mr-2" type="checkbox" onChange={() => dispatch({type: "FILTER_BY_BRAND", payload: "BALMAIN"})} checked={filterBrand.includes("BALMAIN")}/>
                                                Balmain
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input className="align-middle -mt-1 mr-2" type="checkbox" onChange={() => dispatch({type: "FILTER_BY_BRAND", payload: "CALVIN KLEIN"})} checked={filterBrand.includes("CALVIN KLEIN")}/>
                                                Calvin Klein
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input className="align-middle -mt-1 mr-2" type="checkbox" onChange={() => dispatch({type: "FILTER_BY_BRAND", payload: "ARMANI EXCHANGE"})} checked={filterBrand.includes("ARMANI EXCHANGE")}/>
                                                Armani Exchange
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input className="align-middle -mt-1 mr-2" type="checkbox" onChange={() => dispatch({type: "FILTER_BY_BRAND", payload: "TITAN"})} checked={filterBrand.includes("TITAN")}/>
                                                Titan
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                                <li className="border-b-2 leading-loose">  
                                    <span className="text-lg font-medium text-gray-600">Color</span>
                                    <ul className="py-2">
                                        <li>
                                            <label>
                                                <input className="align-middle -mt-1 mr-2" type="checkbox" onChange={() => dispatch({type: "FILTER_BY_COLOR", payload: "White"})} />
                                                White
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input className="align-middle -mt-1 mr-2" type="checkbox" onChange={() => dispatch({type: "FILTER_BY_COLOR", payload: "Black"})} />
                                                Black
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input className="align-middle -mt-1 mr-2" type="checkbox" onChange={() => dispatch({type: "FILTER_BY_COLOR", payload: "Brown"})} />
                                                Brown
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input className="align-middle -mt-1 mr-2" type="checkbox" onChange={() => dispatch({type: "FILTER_BY_COLOR", payload: "Blue"})} />
                                                Blue
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                        
                                <li className="border-b-2 leading-loose">
                                    <span className="text-lg font-medium text-gray-600">Size</span>
                                    <ul className="py-2">
                                        <li>
                                            <label>
                                                <input className="align-middle -mt-1 mr-2" type="checkbox" onChange={() => dispatch({type: "FILTER_BY_SIZE", payload: "Small"})} />
                                                Small
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input className="align-middle -mt-1 mr-2" type="checkbox" onChange={() => dispatch({type: "FILTER_BY_SIZE", payload: "Medium"})} />
                                                Medium
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input className="align-middle -mt-1 mr-2" type="checkbox" onChange={() => dispatch({type: "FILTER_BY_SIZE", payload: "Large"})} />
                                                Large
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                                <li className="leading-loose">
                                    <span className="text-lg font-medium text-gray-600">Other</span>
                                    <ul className="py-2">
                                        <li>
                                            <label className="flex justify-items-center "> 
                                                <input className="mt-3 mr-2" type="checkbox" onChange={() => dispatch({type: "INC_OUT_OF_STOCK"})} checked={showOutOfStock} />
                                                Include Out Of Stock
                                            </label>
                                        </li>
                                        <li>
                                            <label  className="flex justify-items-center "> 
                                                <input className="mt-3 mr-2" type="checkbox" onChange={() => dispatch({type: "FAST_DELIVERY_ONLY"})} checked={showFastDelivery} />
                                                Fast Delivery Only
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>              
           </div>
       </div>
    )
}