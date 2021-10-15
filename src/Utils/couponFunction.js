export function cartTotalValue(array) {
    return array.reduce((total, {price, qty}) => total + price * qty, 0)
}

export function cartCouponValue(valueData, couponUsed) {
   let value = valueData
   if(couponUsed === "FIRST_SAVE" && valueData > 15000) {
       return value - 2000;
   } else if(couponUsed === "NAVRATRI_SAVE" && valueData > 25000) {
       return value - 3000;
   } else {
       return valueData;
   }
}