const store = JSON.parse(localStorage.getItem("pics"));
export const myPics = store || [];
