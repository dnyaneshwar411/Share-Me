export const fetchUser = function () {
   return localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : localStorage.clear();
}