function breakOut(array, changeValue, stopValue) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === stopValue) {
            return array
        }
        array[i] = changeValue;
		console.log(array);
    }

}

function keepGoing(array, changeValue, skipValue) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === skipValue) {
            continue
        }
        array[i] = changeValue;
		console.log(array);
    }
}
