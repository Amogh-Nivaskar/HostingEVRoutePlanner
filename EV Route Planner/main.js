import EVobj from './EV.js';
import { calcRoute, initMap, go } from './index.js';

const EV = new EVobj({lat:5, lng: 7}, 500, 100)

// EV.createEVMarker(stepPoints[0], map, car)

// console.log(EV)
var ds;
var map;
// console.log(ds)
var arr = initMap()
// console.log(arr[1])

// async function go(arr){
//     var arr2  = await calcRoute(arr[0], arr[1]);
    
// } 

// go(arr)

var arr2 

// var getRoute = (arr) =>{
//     return new Promise((resolve, reject)=>{
//         resolve(calcRoute(arr[0], arr[1]))
        
//     })
// } 

function getRoute(arr){
    var data = go();
    return data
}

var data = getRoute(arr)
console.log(data)



// let p = new Promise(calcRoute => {
//     var arr2 = calcRoute(arr[0], arr[1])
// }).then(console.log(arr2))