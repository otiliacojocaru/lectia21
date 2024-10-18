const strArr = ['str1', 'str2', 'astr3'];

const vocale = ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U'];

// const result = strArr.reduce((acc, curr) => {
//     if(vocale.includes(curr[0])) acc.push(curr);
//         return acc;
// }, [])

// console.log(result)


// const result = strArr.reduce((acc, curr) => {
//     if(!vocale.includes(curr[0])) acc.push(curr);
//         return acc;
// }, [])

// console.log(result)



// const result = strArr.reduce((acc, curr) => {
//     if(vocale.includes(curr[curr.length - 1])) acc.push(curr);
//         return acc;
// }, [])

// console.log(result)




// const result = strArr.reduce((acc, curr) => {
//     if(!vocale.includes(curr[curr.length - 1])) acc.push(curr);
//         return acc;
// }, [])

// console.log(result)




// const addElement = (list1, list2, k) => {
//     const validation = list1.some(item => typeof item !== 'string') || list2.some(item => typeof item !== 'string')

//     if(validation) return `please use array of strings`

//     const results = list2.reduce((acc, curr, index) => {
//         if(index < k) acc.push(curr)
//             return acc;
//     }, [])


//     return [...list1, ...results]
// }


// console.log(addElement(strArr, vocale, 3))


