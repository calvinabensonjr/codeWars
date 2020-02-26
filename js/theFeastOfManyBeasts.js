//References:  Google; mdn, w3schools. Youtube.


function feast(beast, dish) {
let result
const start = beast[0] === dish[0]
const end = beast[beast.length - 1] === dish[dish.length - 1]
result =start && end

return result
}
