import { Link, NavLink} from "react-router-dom";
import { useFilterData } from "../../Contexts/filterContext";
import {useData} from "../../Contexts/dataContext";
import { useState } from "react";



export function Home() {
    const {dispatch} = useFilterData();
    const {itemsInCart, wishlist} = useData();
    const [showTab, setShowTab] = useState(false)
    return (
        <div>
            <div className="bg-black flex flex-col bg-gradient-to-tl from-gray-800">
                <nav className="flex text-white flex-wrap justify-between items-center justify-items-center p-4 md:px-5 md:py-2">
                    <div className="w-1/2 flex justify-items-center items-center gap-4">
                        <div className="text-2xl md:hidden">
                            <button className="text-white" onClick={() => setShowTab((val) => !val)}><i className="fas fa-bars"></i></button>
                        </div>
                        <div className="mr-4">
                            <h1 className="text-2xl md:text-4xl"><span className="text-4xl md:text-7xl">W</span>atcher</h1>
                        </div>
                        <div className={`${showTab ? "flex" : "hidden"} flex-col md:flex md:flex-row h-full md:h-0  top-0 left-0 fixed md:static bg-white w-1/2 z-20`}>
                            <div className="relative h-28 w-full bg-gray-900  flex items-center justify-items-center p-6 md:hidden">
                                <div className="text-center text-white text-xl border-2 border-white rounded-full p-2 h-12 w-12">
                                    <i className="fas fa-user"></i>
                                </div>
                                <button className="absolute top-1 right-3 text-2xl text-white" onClick={() => setShowTab((val) => !val)}>
                                    <i className="fas fa-times  transform  hover:rotate-180  transition-all"></i>
                                </button>
                            </div>
                            <ul className="text-left flex md:text-white flex-col md:flex-row justify-items-center md:items-center justify gap-4 text-lg text-gray-800 font-medium p-4 ">
                                <li>
                                    <NavLink exact to="/" activeStyle={{ fontColor:"red" }} >Home</NavLink>
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
                            <div className="grid items-center space-x-1">
                                <i className="ml-1 fas fa-shopping-cart text-white text-2xl relative">
                                    {itemsInCart.length > 0 ?<span className="text-xs p-1 absolute -top-1 -right-3 rounded-full bg-red-500 text-white w-5 h-5 m-0 leading-3 text-center">{itemsInCart.length}</span> : ""}
                                </i>
                                <span className="ml-4 hidden md:inline text-sm font-semibold">Cart</span>
                            </div> 
                        </NavLink>
                        
                        <NavLink to="/wishlist">
                            <div className="grid items-center space-x-1">
                            <i className="ml-1 fas fa-heart text-white text-2xl relative">
                            {wishlist.length > 0 ?  <span className="text-xs p-1 absolute -top-1 right-0.5 rounded-full bg-red-500 text-white w-5 h-5 m-0 leading-3 text-center">{wishlist.length}</span>: ""}
                            </i>
                            <span className="mr-0 hidden md:inline text-sm font-semibold">Wishlist</span>
                            </div>
                        </NavLink>
                    </div>
                </nav>
                <div className="flex justify-items-center justify-around md:justify-evenly items-center text-white py-8 px-9">
                    <div className="leading-loose text-left">
                        <h1 className="text-4xl md:text-6xl font-semibold">Calvin Klein</h1>
                        <div className="my-4 text-gray-400 w-4/5 md:w-11/12">
                            <h2 className="text-2xl md:text-4xl">Up To 40% <span className="text-lg">off</span></h2>
                            <p className="leading-snug md:text-2xl">Find your Timepeace with Calvin Klein</p>
                        </div>
                        
                        <Link to={`/product`}>
                            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={() => dispatch({type: "FILTER_BY_BRAND", payload: "CALVIN KLEIN"})}>See Collection</button>
                        </Link>
                    </div>
                    <div className="w-2/5 md:w-1/6">
                        <img className="w-full" src="images/K2G2G4CX.png" alt="calvin-cover" />
                    </div>
                </div>
            </div>


            <div className="realtive m-8 md:mx-24 flex flex-col justify-items-center items-center">
                <div className="my-8 underline">
                    <h2 className="font-semibold md:font-normal text-xl md:text-4xl">SHOP BY CATEGORY</h2>
                </div>
                <div className="md:mt-4 w-full md:w-9/12 flex flex-col md:flex-row justify-items-center items-center">
                    <div className="relative my-4">
                        <Link to={`/product`}>
                            <button className="w-4/5 " 
                            onClick={() => dispatch({type: "FILTER_BY_GENDER", payload: "Men"})}>
                                <img className="relative transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-105 z-0" 
                                src="https://www.tissotwatches.com/media/home/watch_for_him_2.jpg" alt="mens-cover"/>
                            </button>
                        </Link>
                        <div className="absolute w-full py-8 bottom-0 inset-x-0 text-center leading-4">
                            <h2 className="text-white text-2xl lg:text-3xl font-light">
                                WATCHES FOR HIM
                            </h2>
                        </div>
                    </div>
                    
                    <div className="relative my-4">
                        <Link to={`/product`}>
                            <button className="w-4/5" onClick={() => dispatch({type: "FILTER_BY_GENDER", payload: "Women"})}>
                                <img className="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-105" src="https://www.tissotwatches.com/media/home/MenWomen_850x1050_Cecilia_PR100.jpg" alt="womens-cover"/>
                            </button>
                        </Link>
                        <div className="absolute w-full py-8 bottom-0 inset-x-0 text-center leading-4">
                            <h2 className="text-white text-2xl lg:text-3xl font-light">
                                WATCHES FOR HER
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-items-center items-center py-4">
                <div className="my-4 underline">
                    <h2 className="font-semibold md:font-normal text-xl md:text-4xl">FEATURED BRANDS</h2>
                </div>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 justify-items-center items-center p-8 gap-6">
                    <Link to={`/product`}>
                        <button className="w-1/2 md:w-2/5" onClick={() => dispatch({type: "FILTER_BY_BRAND", payload: "CALVIN KLEIN"})}>
                            <img className="w-full transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105" src="images/calvin-klein-logo.png" alt="calvin klein log"/>
                        </button>
                    </Link>
                    <Link to={`/product`}>
                        <button className="w-4/5 md:w-3/5" onClick={() => dispatch({type: "FILTER_BY_BRAND", payload: "TISSOT"})}>
                            <img className="w-full transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105"
                                src="images/tissot-logo.png" alt="tissot logo"/>
                        </button>
                    </Link>
                    <Link to={`/product`}>
                        <button className="w-4/5 md:w-3/5" onClick={() => dispatch({type: "FILTER_BY_BRAND", payload: "OBAKU"})}>
                            <img className="w-full transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105"
                                src="images/obaku-logo.png" alt="obaku logo"/> 
                        </button>
                    </Link>
                    <Link to={`/product`}>
                        <button className="w-4/5 md:w-3/5" onClick={() => dispatch({type: "FILTER_BY_BRAND", payload: "BALMAIN"})}>
                            <img className="w-full transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105"
                                src="images/balmain-logo.png" alt="balmain logo" />
                        </button>
                    </Link>
                    <Link to={`/product`}>
                        <button className="w-4/5 md:w-3/5" onClick={() => dispatch({type: "FILTER_BY_BRAND", payload: "ARMANI EXCHANGE"})}>
                            <img className="w-full transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105"
                                src="images/armani-exchange-logo.png" alt="armani exchange logo" />
                        </button>
                    </Link>
                    <Link to={`/product`}>
                        <button className="w-4/5 md:w-3/5 col-start-auto col-end-auto" onClick={() => dispatch({type: "FILTER_BY_BRAND", payload: "TITAN"})}>
                            <img className="w-full transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105"
                                src="images/titan-logo.png" alt="titan logo" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}