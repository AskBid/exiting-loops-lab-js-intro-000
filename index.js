function breakOut(array, changeValue, stopValue) {
    console.log('breakOut');
    for (var i = 0; i < array.length; i++) {
        if (array[i] === stopValue) {
            return array
        }
        array[i] = changeValue;
		console.log(array);
    }

}

function keepGoing(array, changeValue, skipValue) {
    console.log('keepGoing');
    for (var i = 0; i < array.length; i++) {
        if (array[i] === skipValue) {
            continue
        }
        array[i] = changeValue;
		console.log(array);
    }
    return array
}
