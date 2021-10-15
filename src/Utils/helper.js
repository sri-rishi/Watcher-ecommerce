export function checkItems(array, productId) {
    return array.find((item) => item.watchId === productId) ? true: false
}