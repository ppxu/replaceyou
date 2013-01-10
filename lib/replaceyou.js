exports.replaceyou = function(text, vala, valb) {
	function out(val) {
		var toreplace = new RegExp(vala, 'g');
		return text.replace(toreplace, valb);
	}
	return out(vala, valb);
}