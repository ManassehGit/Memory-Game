export const randomNumber = number => {
    return Math.floor(Math.random() * number);
}

//Select a random 
export const randomItem = arr => {
    const arrayLength = arr.length;
    return arr[randomNumber(arrayLength)];
}
