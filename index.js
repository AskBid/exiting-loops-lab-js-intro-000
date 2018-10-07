function breakOut(array, changeValue, stopValue) {
	console.log('console works');
    for (var i = 0; i < array.length; i++) {
        if (array[i] === stopValue) {
			console.log(`before break ${array}`);
            return array
        }
        array[i] = changeValue;
		console.log(array);
    }

}

// function keepGoing(array, changeValue, skipValue) {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] === stopValue) {
// 			console.log(`before break ${array}`);
//             break
//         }
//     }
// }
