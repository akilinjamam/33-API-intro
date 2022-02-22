// What is JSON?
// JSON(java script Object Notation) is a readable text which is collected from user and convert it into  JSON.parse to make it functionable in programme. 

console.log('introduction to js file')

const product = {
    name: 'bottol',
    price: 200,
    color: 'blue',
    weight: '150 gm',
    categories: ['bottol', 'bucket', 'toys'],
    owner: { name: 'abul kalam azad', id: 341, share: '60%', position: 'CEO' },
    isExpensive: false
};


// converting into string
const stringified = JSON.stringify(product);
// console.log(product);
console.log(stringified);

// converting into active code. 

const convert = JSON.parse(stringified);
console.log(convert);
