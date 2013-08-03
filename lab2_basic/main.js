chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html',
    {width: 500, height: 309});

  chrome.pushMessaging.getChannelId(true, function( channelId ) {
    console.log( "channelid", channelId );
  });

  chrome.pushMessaging.onMessage.addListener( function( message ) {
    console.log( "message", message );
  });
});

chrome.runtime.onInstalled.addListener( function() {
    console.log( "installed" );

    chrome.pushMessaging.getChannelId(true, function( channelId ) {
        console.log( "channelid", channelId );
    });

});

