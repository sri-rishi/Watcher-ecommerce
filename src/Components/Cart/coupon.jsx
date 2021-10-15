import { useEffect } from "react";
import { useData } from "../../Contexts/dataContext"

export function CouponModel() {
    const { dispatch, couponUsed, cartFinalValue} = useData();
    
   useEffect(() => {
       if(cartFinalValue < 15000) {
           return () => dispatch({type: "REMOVE_COUPON"})
       }
   }, [cartFinalValue])
    console.log({couponUsed});
    

    return (
        <div className="relative grid md:w-3/5 lg:w-2/5 gap-4 text-base font-medium justify-items-center text-left bg-white p-4 rounded">
            <button className="absolute top-3 right-3 text-gray-700 text-2xl " onClick={() => dispatch({type:"SHOW_COUPON"})}><i className="fas fa-times transform  hover:rotate-180  transition-all"></i></button>
            <p className="text-2xl m-4 text-gray-900">Apply Coupon</p>
                
                    <div className={`flex flex-col md:w-4/5 justify-items-center border-2 p-2 rounded-tr-2xl rounded-bl-2xl ${cartFinalValue < 15000 ? "text-gray-300" : "text-gray-700"}`}>
                        <label className="text-lg">
                            <input className={`mt-3 mr-2 ${cartFinalValue < 15000 ? "text-gray-300" : "text-gray-600"}`} type="radio" name="coupons" onChange={() => dispatch({type: "APPLY_COUPON", payload: "FIRST_SAVE"})} checked={cartFinalValue > 15000 && couponUsed === "FIRST_SAVE"} disabled={cartFinalValue < 15000 ? true : false} />
                            NEW USER
                        </label>
                        <span className={`${cartFinalValue < 15000 ? "text-gray-300" : "text-gray-600"}`}>Save &#8377;2000 on minimum purchase of &#8377;15000</span>
                    </div>
                    
                    <div  className={`flex flex-col md:w-4/5 justify-items-center border-2 p-2 rounded-tr-2xl rounded-bl-2xl ${cartFinalValue < 25000 ? "text-gray-300" : "text-gray-700"}`}>
                        <label className="text-lg">
                            <input className="mt-3 mr-2" type="radio" name="coupons" onChange={() => dispatch({type: "APPLY_COUPON", payload: "NAVRATRI_SAVE"})} checked={cartFinalValue > 25000 && couponUsed === "NAVRATRI_SAVE"} disabled={cartFinalValue < 25000 ? true : false}/>
                            DIWALI SPECIAL
                        </label>
                        <span className={`${cartFinalValue < 25000 ? "text-gray-300" : "text-gray-600"}`}>Save &#8377;3000 on minimum purchase of &#8377;25000</span>
                    </div>
                   
                    <button className="bg-blue-500 text-lg font-medium hover:bg-blue-700 text-white py-1 px-6 rounded disable:opacity-50" onClick={() => dispatch({type: "SHOW_COUPON"})} >Apply</button>
        </div>
    )
}