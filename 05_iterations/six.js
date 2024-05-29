// filter in javaScript : it returns only true value

// const myArray = ["javascript", "cpp", "python", "mysql", "mongodb"]

// const values = myArray.forEach( (item) => {
//     // console.log(item);
//     // return item; // for each loop never return any value
// })

// console.log(values); // here it will not print the values becoz for each loop never return any value

// we are not able to get values from the array using for each so we use filter method to get values from an array :

// filter :

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newArray = myArray.filter( (val) => val > 3) // it is an implicit method to return the value
// console.log(newArray); // we got the results as : [4, 5, 6, 7, 8, 9, 10]

// if we want to get value under a scope, so how will we do that :

const newArray = myArray.filter( (num) => {
    // num > 4 // in this case it gives us empty array because if we want to get values from under the scope we have to return those value by written return keyword.
    // return num > 4; // using return keyword it will give result as expected.
})
// console.log(newArray);

// if you want to get same result using for each loop only then you can use this method :

const newNum = []
myArray.forEach( (num) => {
    if (num > 4) { // usinf if statement with push method we can do the same
        newNum.push(num)
    }
})
// console.log(newNum);

// example of filter :

const books = [
    {title: 'Book one' , genre: 'fiction', publish: '1981', edition: 2004},
    {title: 'Book two' , genre: 'non-fiction', publish: '1992', edition: 2008},
    {title: 'Book three' , genre: 'history', publish: '1999', edition: 2007},
    {title: 'Book four' , genre: 'non-fiction', publish: '1989', edition: 2010},
    {title: 'Book five' , genre: 'science', publish: '2009', edition: 2014},
    {title: 'Book six' , genre: 'fiction', publish: '1987', edition: 2010},
    {title: 'Book seven' , genre: 'history', publish: '1986', edition: 1996},
    {title: 'Book eight' , genre: 'science', publish: '2011', edition: 2016},
]

let userBooks = books.filter( (book) => book.genre = 'science') // this is how we can fetch value using filter from multiple data
userBooks = books.filter( (book) => {
    // book.edition > 2000 // here this give empty array in result becoz code is written under the scope and under a scope we have to use return keyword to return a value
    // return book.edition > 2000;
    return book.edition > 2000 && book.genre == 'science' // this is how we can check or filter values using these conditions
})
console.log(userBooks);