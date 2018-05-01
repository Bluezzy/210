function isXor(value1, value2) {
	if ( !!(!value1 && value2) || !!(value1 && !value2) ) {
		return true;
	} 
	return false;
}