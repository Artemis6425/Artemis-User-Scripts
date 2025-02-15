// ==UserScript==
// @id             Twitch Raid Remover
// @name           Twitch Raid Remover
// @namespace      https://github.com/Artemis6425/Artemis-User-Scripts
// @author         Artemis6425
// @match          *://*.twitch.tv/*
// @grant          none
// @version        1.1
// @description    After a streamer raids another channel, immediately remove the "?referrer=raid" in the URL and refreshes the page
// @run-at         document-body
// @downloadURL    https://github.com/Artemis6425/Artemis-User-Scripts/raw/refs/heads/main/scripts/Twitch%20Raid%20Remover.user.js
// @updateURL      https://github.com/Artemis6425/Artemis-User-Scripts/raw/refs/heads/main/scripts/Twitch%20Raid%20Remover.user.js
// ==/UserScript==
(function() {
    'use strict';

    let lastUrl = location.href;

    // Intercept history API changes
    const pushState = history.pushState;
    history.pushState = function() {
        pushState.apply(this, arguments);
        onUrlChange();
    };

    function onUrlChange() {
        const currentUrl = location.href;
        if (currentUrl !== lastUrl) {
            if (currentUrl.includes("?referrer=raid")) {
                let tempVar = window.location.pathname.split("?")
                history.replaceState(null, "Twitch Raid Remover", tempVar)
                location.reload()
            }
        }
    }
})();