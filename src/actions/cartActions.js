export const addtocart=(cake,category, weight,quantity)=>dispatch=>{


let cartItems = {
    name : cake.name,
    image : cake.image,
    category: category,
    quantity: quantity,
    prices: cake.prices,
    price: cake.prices[0][weight]*quantity
}
dispatch({type: 'ADD_TO_CART', payload : cartItems})
}
