// let a = [1, 2, 4, 5, 6];
// let b = [4, 5, 6, 8, 11];

// // Initialize an array to store the products
// let products = [];

// // Loop through each element of array a
// for (let i = 0; i < a.length; i++) {
//     // Loop through each element of array b
//     for (let j = 0; j < b.length; j++) {
//         // Calculate the product of current elements from both arrays
//         let product = a[i] * b[j];
        
//         // Push the product to the products array
//         products.push(product);
//     }
// }

// // Display the resulting products
// console.log(products);




// // Define the arrays
// let a = [1, 2, 4, 5, 6];
// let b = [4, 5, 6, 8, 11];

// // Function to compute product of corresponding elements in arrays a and b
// function computeCorrespondingProducts(arr1, arr2) {
//     // Ensure both arrays have the same length
//     if (arr1.length !== arr2.length) {
//         throw new Error("Arrays must have the same length");
//     }

//     // Map each pair of corresponding elements to their product
//     return arr1.map((num1, index) => `${num1} * ${arr2[index]} = ${num1 * arr2[index]}`);
// }

// // Compute the products of corresponding elements using the computeCorrespondingProducts function
// let correspondingProducts = computeCorrespondingProducts(a, b);

// // Display the resulting products
// console.log(correspondingProducts);