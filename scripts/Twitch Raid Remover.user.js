// ==UserScript==
// @id             Twitch Raid Remover
// @name           Twitch Raid Remover
// @namespace      https://github.com/Artemis6425/Artemis-User-Scripts
// @author         Artemis6425
// @match          *://*twitch.tv/*
// @grant          none
// @version        1.0
// @description    After a streamer raids another channel, immediately remove the "?referrer=raid" in the URL and refreshes the page
// @run-at         document-start
// @downloadURL    https://github.com/Artemis6425/Artemis-User-Scripts/raw/refs/heads/main/scripts/Twitch%20Raid%20Remover.user.js
// @updateURL      https://github.com/Artemis6425/Artemis-User-Scripts/raw/refs/heads/main/scripts/Twitch%20Raid%20Remover.user.js
// ==/UserScript==
(function() {
    var docLocation = document.location;
    if (docLocation.search == "?referrer=raid") {
        window.location.replace(docLocation.origin + docLocation.pathname)
    }
})();