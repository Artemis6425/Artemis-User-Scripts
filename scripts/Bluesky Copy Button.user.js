// ==UserScript==
// @name         One Click Copy Link Button for Bluesky
// @namespace    https://github.com/Artemis6425/Artemis-User-Scripts
// @version      1.01
// @description  Add a button to copy the URL of a post on Bluesky without clicking the dropdown. Based off of Dinomcworld's script for Twitter, found here: https://greasyfork.org/scripts/482477/
// @author       Artemis6425 & Dinomcworld
// @match        *://bsky.app/*
// @icon         https://www.google.com/s2/favicons?domain=bsky.app
// @grant        none

// @downloadURL https://github.com/Artemis6425/Artemis-User-Scripts/raw/refs/heads/main/scripts/Bluesky%20Copy%20Button.user.js
// @updateURL https://github.com/Artemis6425/Artemis-User-Scripts/raw/refs/heads/main/scripts/Bluesky%20Copy%20Button.user.js
// ==/UserScript==

(function() {
    'use strict';

    const defaultSVG = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clipboard" viewBox="0 0 24 24" height="20" width="20" stroke-width="2" stroke="#788ea5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>';
    const copiedSVG = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clipboard-check" viewBox="0 0 24 24" height="20" width="20" stroke-width="2" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M9 14l2 2l4 -4" /></svg>';

    function addCopyButtonToPosts() {
        const tweets = document.querySelectorAll('button[data-testid="likeBtn"]');

        tweets.forEach(likeButton => {
            const likeBox = likeButton.parentElement;
            const interactionSection = likeBox.parentElement
            const postContent = interactionSection.parentElement
            if (!interactionSection.querySelector('.custom-copy-icon')) {
                const copyBox = likeBox.cloneNode(false)
                copyBox.innerHTML = ''

                const copyIcon = document.createElement('button');
                copyIcon.classList.add('custom-copy-icon', 'css-g5y9jx', 'r-1loqt21', 'r-1otgn73');
                copyIcon.setAttribute('aria-label', 'Copy link');
                copyIcon.setAttribute('role', 'button');
                copyIcon.setAttribute('type', 'button')
                copyIcon.setAttribute('tabindex', '0');
                copyIcon.style.cssText = 'gap: 4px; border-radius: 999px; flex-direction: row; justify-content: center; align-items: center; overflow: hidden; padding: 5px;'
                copyIcon.innerHTML = defaultSVG;

                copyIcon.addEventListener('click', (event) => {
                    event.stopPropagation();
                    if (postContent.querySelector('a[href*="/post/"]')) {
                        const postLink = "https://bsky.app" + postContent.querySelector('a[href*="/post/"]').getAttribute('href')
                        navigator.clipboard.writeText(postLink)
                            .then(() => {
                            console.log('Post link copied!');
                            copyIcon.innerHTML = copiedSVG;
                        })
                    }
                })

                copyBox.appendChild(copyIcon)
                interactionSection.insertBefore(copyBox, interactionSection.lastChild)
            }
        })
    }

    const observer = new MutationObserver(addCopyButtonToPosts);
    observer.observe(document.body, { childList: true, subtree: true });

    addCopyButtonToPosts();
})();
