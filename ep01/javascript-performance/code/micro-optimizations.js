function forLoop(array) {
    for (var i = 0, ii = array.length; i < ii; i += 1) {
	//..
    }
}

function ifElse(value) {
    if (value == 0) {
	return result0;
    } else if (value == 1) {
	return result1;
    } else if (value == 2) {
	return result2;
    } else if (value == 3) {
	return result3;
    } else if (value == 4) {
	return result4;
    } else if (value == 5) {
	return result5;
    } else if (value == 6) {
	return result6;
    } else if (value == 7) {
	return result7;
    } else if (value == 8) {
	return result8;
    } else if (value == 9) {
	return result9;
    } else {
	return result10;
    }
}

function betterIfElse(value) {
    if (value < 6) {
	if (value < 3) {
	    if (value == 0) {
		return result0;
	    } else if (value == 1) {
		return result1;
	    } else {
		return result2;
	    }
	} else {
	    if (value == 3) {
		return result3;
	    } else if (value == 4) {
		return result4;
	    } else {
		return result5;
	    }
	}
    } else {
	if (value < 8) {
	    if (value == 6) {
		return result6;
	    } else {
		return result7;
	    }
	} else {
	    if (value == 8) {
		return result8;
	    } else if (value == 9) {
		return result9;
	    } else {
		return result10;
	    }
	}	
    }
}

function duffDevice(items, process) {
    var iterations = Math.floor(items.length / 8),
        startAt = items.length % 8,
        i = 0;

    do {
	switch(startAt) {
	case 0: process(items[i++]);
	case 7: process(items[i++]);
	case 6: process(items[i++]);
	case 5: process(items[i++]);
	case 4: process(items[i++]);
	case 3: process(items[i++]);
	case 2: process(items[i++]);
	case 1: process(items[i++]);
	}
	startAt = 0;
    } while (iterations--);
}
