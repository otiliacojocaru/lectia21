// const obj = {
//     name: 'alex',
//     job: 'dev',
//     age: '33'
// }

// const arr = ['str', 'str1', 'str2']

// arr[1]

// obj.age

// obj['job']

// console.log(obj['job'])


// for(let index in arr) {
//     console.log('for in', index)
// }

// for(let value of arr) {
//     console.log('for of', value)
// }



// for(let index in obj) {
//     console.log('for in', obj[index])
// }

// const obj = {
//     name: 'alex',
//     job: 'dev',
//     age: '33'
// }

// const values = Object.values(obj)
// const keys = Object.keys(obj)

// console.log('v', values)
// console.log('k', keys)



// const arr = [
//     {
//         closeToHome: true,
//         high: false,
//         black: true,
//     },
//     {
//         farToHome: false,
//         low: true,
//         white: true,
//     },

// ]

// const showObj = (list) => {
// return list.reduce((acc, curr) => {
//     const accValues = Object.values(acc)
//     const filtredAcc = accValues.filter(item => item)
//     const currValues = Object.values(curr).filter(item => item)

//     console.log('acc' , filtredAcc)
//     console.log('curr', currValues)

//     return filtredAcc.length > currValues.length ? acc : curr

// })
// }

// showObj(arr)




const arr = [1,2,3,4,5,6,7,8]

// const sortASC = arr.sort((a, b) => {
//     return a - b
// })
// console.log('ASC', sortASC)


// const sortDSC = arr.sort((a, b) => {
//     return b - a
// })
// console.log('DSC', sortDSC)


// const sortASCEven = sortASC.filter(item => item % 2 ===0)
// console.log(sortASCEven)


// const sortDSCOdd = sortDSC.filter(item => item % 2 ===0)
// console.log(sortDSCOdd)


const sortFunc = (numList) => {
    const even = numList.filter(item => item % 2 === 0).sort((a, b) => {
        return a - b
    })
    const odd = numList.filter(item => item % 2 !== 0).sort((a, b) => b - a)

    return [...even, ...odd]
}

console.log(sortFunc(arr))