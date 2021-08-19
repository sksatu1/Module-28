const products = [
    'Dell satu', 'Dell hi ami satu', 'dell hardcore', 'yellow laptop with black camera', 'LG super nova laptop', 'HTC low price Phone'
    , ' purple color Phone with Laptop'
]

const searching = 'Dell';

//search string using indexOf ()

const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);


//search string using includes() 

for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase)) {
        // output.push(product);
    }
}
// console.log(output);


// stars with 
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLocaleLowerCase())) {
        output.push(product);
    }
}
console.log(output);