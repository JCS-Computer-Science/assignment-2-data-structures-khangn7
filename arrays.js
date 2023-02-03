function getLength(array) {
    return array.length;
}

function isEmpty(array) {
    return array.length === 0;
}

function getItemAtIndex(array, index) {
    return array[index]
}

function containsItem(array, item) {
    return array.includes(item)
}

function addToArray(array, item) {
    array.push(item);
    return array;
}
function sum(array) {

    let sum = 0;

    for(let i in array){
        sum += array[i];
    }

    return sum;
}

function clone(array) {
    return [...array];
}

function replaceItemAtIndex(array, index, item) {

    let new_array = [...array];
    new_array[index] = item;
    return new_array;
}

function removeRegion(array, start_index, end_index) {
    return [...array.slice(0, start_index).concat(array.slice(end_index + 1))];
}

function merge(array1, array2){
    return array1.concat(array2);
}
