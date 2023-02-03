function getName(object) {
    return object['name']
}

function getValue(object, key) {
    return object[key]
}

function setValue(object, key, value) {
    return object[key] = value
}

function getNestedProperty(object, key1, key2){
    return object[key1][key2]
}

function getKeys(object){

    let keys = [];

    for(let index in object){
        keys.push(index)
    }

    return keys;
}

function containsKey(object, key) {
    return getKeys(object).includes(key);
}