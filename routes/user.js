
/*
 * GET users listing.
 */

exports.client = function(req, res){
  res.render('client', { title: 'WhitePaper'});
};

exports.fuck = function(req , res){
	res.render('fuck',{title:'fuck'});
};
