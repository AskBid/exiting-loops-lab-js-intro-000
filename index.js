function breakOut(array, changeValue, stopValue) {
	console.log('console works');
    for (var i = 0; i < array.length; i++) {
        if (array[i] === stopValue) {
			console.log(`before break ${array}`);
            break
        }
        array[i] = changeValue;
		console.log(array)
    }
    return array
}
