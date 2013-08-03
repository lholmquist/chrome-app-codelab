window.onload = findChannel;

function findChannel() {
    chrome.pushMessaging.getChannelId(true, function( channel ) {
        document.getElementById( "message" ).innerText = channel.channelId;
    });

    chrome.pushMessaging.onMessage.addListener( function( message ) {
        document.getElementById( "message" ).innerText = "MESSAGE";
    });
}
