// ==UserScript==
// @id           Twitch Directory Cleaner
// @name         Twitch Directory Cleaner
// @namespace    https://github.com/Artemis6425/Artemis-User-Scripts
// @version      1.12.0
// @updateURL    https://github.com/Artemis6425/Artemis-User-Scripts/raw/refs/heads/main/scripts/Twitch%20Directory%20Cleaner.user.js
// @downloadURL  https://github.com/Artemis6425/Artemis-User-Scripts/raw/refs/heads/main/scripts/Twitch%20Directory%20Cleaner.user.js
// @description  Removes Channels from any directory if they are found on a list. Requires a refresh of the category page to work.
// @author       Artemis6425
// @match        *://*twitch.tv/directory/category/*
// @run-at       document-end
// @grant        GM_getResourceText
//
// REPLACE THE BELOW RESOURCE WITH YOUR PREFERRED JSON BAN LIST. IF YOU WOULD RATHER HAVE IT BUILT INTO THE SCRIPT, CHANGE IT ON LINE 27
// @resource streams https://raw.githubusercontent.com/Artemis6425/Artemis-User-Scripts/refs/heads/main/scripts/script-resources/247-hide-list.json?t=${Date.now()}
//
// ==/UserScript==



// The main flaw here is that this requires the category to be refreshed by the user. will be fixed

(function() {
    'use strict';

    var streams = JSON.parse(GM_getResourceText("streams"))

    var container = null;
	var legacy = false

	const removeStreams = () => {
		if(legacy) {
			// Deletes all streams on category load
			Array.from(container.children).forEach((child, index) => {
				if(child.classList.contains('tw-tower')){
					if (child.children.length > 0) {
						Array.from(child.children).forEach((nestedChild, nestedIndex) => {
							if(nestedChild.hasAttribute('data-target')){
								var links = nestedChild.querySelectorAll('a[href]')
								for(i=0; i < streams.length; i++){
									var matchingLink = Array.from(links).find(link => link.href.includes(streams[i].toLowerCase()));
									if(matchingLink){
										console.log("removing stream " + streams[i] + " from directory")
										nestedChild.remove()
									}
								}
							}
						});
					}
				}
			});

			// Deletes all streams when scrolling
			const observer = new MutationObserver((mutationsList) => {
				mutationsList.forEach((mutation) => {
					if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
						mutation.addedNodes.forEach((node) => {
							if (node.nodeType === Node.ELEMENT_NODE) {
								if(node.hasAttribute('data-target')){
									var links = node.querySelectorAll('a[href]')
									for(i=0; i < streams.length; i++){
										var matchingLink = Array.from(links).find(link => link.href.includes(streams[i]));
										if(matchingLink){
											console.log("removing stream " + streams[i] + " from directory")
											node.remove()
										}
									}
								}
							}
						});
					}
				});
			});

			observer.observe(container, { childList: true, subtree: true });
		} else {
			// Deletes all streams on category load
			Array.from(container.children).forEach((child, index) => {
				if(child.classList.contains('tw-tower')){
					if (child.children.length > 0) {
						Array.from(child.children).forEach((nestedChild, nestedIndex) => {
							var link = nestedChild.querySelector("a")?.href;
							if(link!=null){
								for(i=0; i < streams.length; i++){
									var matchingLink = link.includes(streams[i].toLowerCase());
									if(matchingLink){
										console.log("removing stream " + streams[i] + " from directory")
										nestedChild.remove()
									}
								}
							}
						});
					}
				}
			});

			// Deletes all streams when scrolling
			const observer = new MutationObserver((mutationsList) => {
				mutationsList.forEach((mutation) => {
					if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
						mutation.addedNodes.forEach((node) => {
							if (node.nodeType === Node.ELEMENT_NODE) {
								var link = node.querySelector("a")?.href;
							if(link!=null){
								for(i=0; i < streams.length; i++){
									var matchingLink = link.includes(streams[i].toLowerCase());
									if(matchingLink){
										console.log("removing stream " + streams[i] + " from directory")
										node.remove()
									}
								}
							}
							}
						});
					}
				});
			});

			observer.observe(container, { childList: true, subtree: true });
		}
	}

    const waitForContainer = () => {

		// This is the main way twitch currently does it
		if (document.querySelector('div[data-target="directory-container"]') != null) {
			container = document.querySelector('div[data-target="directory-container"]')
			legacy = true
		}
		// This is the new way twitch is TESTING it
		if (document.querySelector('.tower-wrapper') != null) {
			container = document.querySelector('.tower-wrapper')
		}
		if (!container) {
			console.log('Container not found, retrying...');
            setTimeout(waitForContainer, 500); // Retry after 500ms
			return
		}

        console.log('Container found:', container);
        setTimeout(removeStreams, 100);
    }


    waitForContainer();
})();
