import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useData } from "../../Contexts/dataContext";
import { useFilterData } from "../../Contexts/filterContext";


export function NavigationBar() {
    const {itemsInCart, wishlist, showCoupon} = useData();
    const {showFilter} = useFilterData();
    const[showTab, setShowTab] = useState(false);
    
    return (
        <nav className={`w-full top-0 fixed bg-white flex-wrap justify-between items-center justify-items-center px-3 py-5 md:px-5 md:py-3 shadow-lg md:flex ${showCoupon ? "z-0" : "z-10"}  ${showFilter ? "hidden" :"flex "}`}>
            <div className="w-1/2 flex justify-items-center items-center gap-4">
                <div className="text-2xl md:hidden">
                    <button className="text-blue-800" onClick={() => setShowTab((val) => !val)}><i className="fas fa-bars "></i></button>
                </div>
                <div>
                    <Link to="/">
                        <h1 className="text-2xl md:text-4xl"><span className="text-4xl md:text-7xl">W</span>atcher</h1>
                    </Link>
                </div>
                <div className={`${showTab ? "flex" : "hidden"} flex-col md:flex md:flex-row h-full md:h-0  top-0 left-0 fixed md:static bg-white w-1/2`}>
                <div className="relative h-28 w-full bg-gray-900  flex items-center justify-items-center p-6 md:hidden">
                    <div className="text-center text-white text-xl border-2 border-white rounded-full p-2 h-12 w-12">
                        <i className="fas fa-user"></i>
                    </div>
                    <button className="absolute top-1 right-3 text-2xl text-white" onClick={() => setShowTab((val) => !val)}>
                        <i className="fas fa-times  transform  hover:rotate-180  transition-all"></i>
                    </button>
                </div>
                <ul className="text-left flex flex-col md:flex-row justify-items-center md:items-center justify gap-3 md:gap-7 text-lg text-gray-800 font-medium p-4">
                    <li>
                        <NavLink to="/" activeStyle={{fontWeigth: "300", color: "red"}} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">Store</NavLink>
                    </li>
                    <li className="md:hidden">
                        <NavLink to="">Profile</NavLink>
                    </li>
                </ul>
            </div>
            </div>
            
            
            <div className="flex flex-wrap gap-4 px-2 md:justify-evenly justify-items-center justify-end">
                <NavLink to="/cart">
                    <div className="grid items-center space-x-1 ">
                        <i className="ml-1 fas fa-shopping-cart text-gray-700 text-2xl relative">
                            {itemsInCart.length > 0 ?<span className="text-xs p-1 absolute -top-1 -right-3 rounded-full bg-red-500 text-white w-5 h-5 m-0 leading-3 text-center">{itemsInCart.length}</span> : ""}
                        </i>
                        <span className="ml-4 hidden md:inline text-sm font-semibold">Cart</span>
                    </div> 
                </NavLink>
                
                <NavLink to="/wishlist">
                    <div className="grid items-center space-x-1">
                    <i className="ml-1 fas fa-heart text-gray-700 text-2xl relative">
                       {wishlist.length > 0 ?  <span className="text-xs p-1 absolute -top-1 -right-0.5 rounded-full bg-red-500 text-white w-5 h-5 m-0 leading-3 text-center">{wishlist.length}</span>: ""}
                    </i>
                    <span className="mr-0 hidden md:inline text-sm font-semibold">Wishlist</span>
                    </div>
                </NavLink>
            </div>
        </nav>
    )
}