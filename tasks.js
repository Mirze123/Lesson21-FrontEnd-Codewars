// function positiveSum(arr) {

//     // parametr olaraq array gelir
//     //arrayde olan ancaq musbet ededleri toplamaq lazimdir

//     let result = 0;
//     arr.forEach(x => {
//         if(x>0){
//             result+=x;
//         }
//     });
//     return result;
// }

// console.log(positiveSum([1,2,-2,3]));

// function findSmallestInt(arr) {
//     // return arr.sort((a, b) => {
//     //     return a - b;
//     // })[0];
//     return Math.min(...arr);
// }

// console.log(findSmallestInt([1,10,-5,20,3,-27,27]));


// function countSheeps(arr) {
//     return arr.filter(x=>x).length;
//   }

// console.log(countSheeps([true,false,true]));


// function findNeedle(haystack) {
// //    for(let index in haystack){
// //     if(haystack[index]==='needle'){
// //         console.log(index);
// //         break;
// //     }
// //    }
// return haystack.indexOf('needle');
//   }
// console.log(  findNeedle(['salam','yay','needle','yaz']));


// function getMiddle(str) {
//     let mid = str.length / 2;
//     let compare = mid % 1 > 0;
//     return str.substr(compare ? Math.floor(mid) : mid - 1, compare ? 1 : 2);
// }

// console.log(getMiddle('alma'));


function toCamelCase(str) {

    if(str === ''){
        return '';
    }

    let isPascalCase = false;
    if (str[0].toUpperCase() === str[0]) {
        isPascalCase = true;
    }

    str = str.replaceAll('-', '*').replaceAll('_', '*');
    return str.split('*').map((x, idx) => {
        if (isPascalCase) {
            return x[0].toUpperCase() + x.slice(1);
        }
        else {
            if (idx === 0) {
                return x;
            }
            else {
                return x[0].toUpperCase() + x.slice(1);
            }
        }
    }).join('');

}

console.log(toCamelCase('This_is_codelandia'));
