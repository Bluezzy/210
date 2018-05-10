function objectHasProperty(obj, propertyName) {
	var keys = Object.keys(obj);
	return keys.indexOf(propertyName) !== -1;
}

function incrementProperty(obj, propertyName) {
	if (objectHasProperty(obj, propertyName)) {
		obj[propertyName]++;
	} else {
		obj[propertyName] = 1;
	}
}

function copyProperties(obj1, obj2) {
	var count = 0;
	var element;
	for (element in obj1) {
		obj2[element] = obj1[element];
		count++;
	}
	return count;
}

function wordCount(string) {
	var words = string.split(' ');
	var count = 0;
	var index;
	result = {};

	for (index in words) {
		
	}
}
