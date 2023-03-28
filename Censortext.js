var censorwords=['bad','mad','sad'];
function censor(censorword){
	for(x in censorwords)
	{
		censorword=censorword.replace(censorwords[x],"*****");
	}
	for(x in usercensor)
	{
		censorword=censorword.replace(usercensor[x],"*****");
	}
	return censorword;
}
var usercensor=[];
function addCensor(x){
	usercensor.push(x);
}
exports.censor=censor;
exports.addCensor=addCensor;
//console.log(usercensor);


