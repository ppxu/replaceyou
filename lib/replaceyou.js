exports.replaceyou = function(text, vala, valb) {
	function out() {
		var toreplace = new RegExp(vala, 'g');
		if(!text.match(toreplace)){
			return false;
		}
		return text.replace(toreplace, valb);
	}
	return out(vala, valb);
}