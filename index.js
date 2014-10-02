(function(module) {
	"use strict";

	var nico = {},
  embed = '<iframe src="/plugins/nodebb-plugin-niconico/embed/plugin.html?$1" width="485" height="385"></iframe>';

	nico.parse = function(postContent, callback) {
		postContent = postContent.replace(/<a href="(?:http:\/\/)?(?:www\.)?nicovideo.jp\/watch\/(.+)">.+<\/a>/g, embed);
		callback(null, postContent);
	};

	module.exports = nico;
}(module));
