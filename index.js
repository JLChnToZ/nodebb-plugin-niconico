(function(module) {
	"use strict";

	var nico = {},
  embed = '<script type="text/javascript" src="http://ext.nicovideo.jp/thumb_watch/$1"></script>';

	nico.parse = function(postContent, callback) {
		postContent = postContent.replace(/<a href="(?:http:\/\/)?(?:www\.)?nicovideo.jp\/watch\/(.+)">.+<\/a>/g, embed);
		callback(null, postContent);
	};

	module.exports = nico;
}(module));
