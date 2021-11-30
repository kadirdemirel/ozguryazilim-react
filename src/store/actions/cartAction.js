export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export function addToCart(product) {
  //gönderilen obje
  return {
    type: ADD_TO_CART, //aksiyonun ismi
    payload: product, //state'e eklenicek veri
  };
}

export function removeFromCart(product) {
  //gönderilen obje
  return {
    type: REMOVE_FROM_CART, //aksiyonun ismi
    payload: product, //state'e eklenicek veri
  };
}
