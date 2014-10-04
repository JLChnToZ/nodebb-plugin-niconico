(function(nico) {
  "use strict";

  var converts = [
    { // Video
      from: /<a href="(?:http:\/\/)?(?:www\.)?nicovideo.jp\/watch\/(.+)">.+<\/a>/g,
      to: '<div class="embed-responsive embed-responsive-16by9">'+
      '<iframe src="/plugins/nodebb-plugin-niconico/embed/plugin.html?$1" '+
      'class="embed-responsive-item"></iframe></div>'
    },
    { // User / Mylist / Community
      from: /<a href="(?:http:\/\/)?(?:www\.)?nicovideo.jp\/(user|mylist|community)\/(.+)">.+<\/a>/g,
      to: '<iframe src="http://ext.nicovideo.jp/thumb_$1/$2" width="312" height="176"></iframe>'
    }
  ];

  nico.parse = function(postContent, callback) {
    for(var i = 0; i < converts.length; i++)
      postContent = postContent.replace(converts[i].from, converts[i].to);
    callback(null, postContent);
  };

})(module.exports);
