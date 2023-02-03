function listAllNames(array) {
    return array.map(item => item.name).join(', ');
}

function listEachProperty(array, key) {
    return array.map(item => item[key]).join(', ')
}

function listFilteredNames(array, filter_key){
    return array
        .filter(object => object[filter_key])
        .map(object => object['name'])
        .join(', ');
}

function isValueBigger(array, key, index_1, index_2){
    return array[index_1][key] > array[index_2][key];
}