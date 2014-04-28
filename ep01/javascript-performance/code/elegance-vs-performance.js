function spacer_split(s) {
    return s.split('').join(' ');
}
    
function spacer_for(s) {
    var returnVal = '';
    for (var i = 0; i < s.length; i++) {
        returnVal += s[i];
	
        if (i < s.length - 1 && s[i] !== ' ') {
            returnVal += ' ';
        }
    }
    
    return returnVal;
}
    
function spacer_regex(s) {
    return s.replace(/([a-zA-Z0-9])(?!$)/g, '$1 ');
}
