(function(nico) {
  "use strict";

  var converts = [
    { // Video
      from: /<a href="(?:(http|https):\/\/)?(?:www\.)?nicovideo.jp\/watch\/(.+)">.+<\/a>/g,
      to: '<div class="embed-responsive embed-responsive-16by9">'+
      '<iframe src="/plugins/nodebb-plugin-niconico/embed/plugin.html?$1" '+
      'class="embed-responsive-item"></iframe></div>'
    },
    { // User / Mylist / Community
      from: /<a href="(?:(http|https):\/\/)?(?:www\.)?nicovideo.jp\/(user|mylist|community)\/(.+)">.+<\/a>/g,
      to: '<iframe src="https://ext.nicovideo.jp/thumb_$1/$2" width="312" height="176"></iframe>'
    }
  ];

  nico.parse = function(data, callback) {
    try {
      for(var i = 0; i < converts.length; i++)
        data.postData.content = data.postData.content.replace(converts[i].from, converts[i].to);
      callback(null, data);
    } catch(ex) {
      callback(ex, data);
    }
  };

})(module.exports);
