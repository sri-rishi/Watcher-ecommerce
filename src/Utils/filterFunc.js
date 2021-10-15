export function getSortedData(productList, sortBy) {

    const newProductList = [...productList]
    if(sortBy === "PRICE_LOW_TO_HIGH") {
       return  newProductList.sort((a, b) => a["price"] - b["price"])
    }

    if(sortBy === "PRICE_HIGH_TO_LOW") {
        return newProductList.sort((a, b) => b["price"] - a["price"])
    }

    
    return productList;
}

export function getFilterByData(productList, filterBrand, filterColor, filterGender, filterSize, showOutOfStock, showFastDelivery) {
    let filteredList = [...productList]
    if(filterBrand.length > 0) {
        filteredList = filteredList.filter(product => filterBrand.includes(product.brandName))
    }

    if(filterColor.length > 0) {
        filteredList = filteredList.filter(product => filterColor.includes(product.color))
    }

    if(filterGender.length > 0) {
        filteredList = filteredList.filter(product => filterGender.includes(product.gender))
    }

    if(filterSize.length > 0) {
        filteredList = filteredList.filter(product => filterSize.includes(product.size))
    }

    return filteredList.filter(({fastDelivery}) => showFastDelivery ? fastDelivery : true).filter(({inStock}) => showOutOfStock ? true: inStock)
}