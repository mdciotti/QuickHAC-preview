
// To allow forEach on NodeList
function forEachNode() {
	var args = [].slice.call(arguments, 0);
	var ctx = args.shift();
	return [].forEach.apply(ctx, args);
}
