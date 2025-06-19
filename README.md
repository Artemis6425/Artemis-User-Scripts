# Artemis-User-Scripts
Various user scrips I've modified to work the way I want to, or created from scratch.

Credit will be given to where I get them, and I will also list what changes I made.

If you have any updates, please let me know! My discord is `Artemis6425`

These scripts require the usage of [Tampermonkey](https://www.tampermonkey.net/), [ViolentMonkey](https://violentmonkey.github.io/), or some other userscript extension.


## Amazon URL Cleaner
### Last update: 12/11/24
### Install link: [here](https://github.com/Artemis6425/Artemis-User-Scripts/raw/refs/heads/main/scripts/Amazon%20URL%20Cleaner.user.js)
### Description
This fixes the Amazon URL to remove all that tracking garbage so you can share a short link.
### Changes
- Updated to use any method, rather than just http
### Credit
This was originally from [this script](https://greasyfork.org/en/scripts/1162-amazon-url-cleaner) by user [azu 2](https://greasyfork.org/en/users/124-azu-2)


## Ebay URL Cleaner
### Last update: 5/8/25
### Install link: [here](https://raw.githubusercontent.com/Artemis6425/Artemis-User-Scripts/refs/heads/main/scripts/Ebay%20URL%20Cleaner.user.js)
### Description
This fixes the Ebay URL to remove all that tracking garbage so you can share a short link.
### Credit
I made this


## Twitch Directory Cleaner
### Last update: 6/19/25
### Install link: [here](https://github.com/Artemis6425/Artemis-User-Scripts/raw/refs/heads/main/scripts/Twitch%20Directory%20Cleaner.user.js)
### Description
Allows the user to have a list of streams to remove from category directories

The included array of streams to remove are 24/7 streams, primarily in the Super Mario 64 directory.

**Major update:** This now reads from an external `.json` file for the ban list. No more updating the script to get the most up-to-date list! Alternatively, you can replace the `.json` reource link with your own to share your ban list with others. Or, replace the `streams` variable with your own in-code array.

**Minor update:** This now supports the beta Twitch layout with the videoplayer at the top. 

**Note:** This script currently requires you to refresh the category page for it to execute. 
### Credit
I made this


## One Click Copy Link Button for Bluesky
### Last update: 5/19/25
### Install link: [here](https://github.com/Artemis6425/Artemis-User-Scripts/raw/refs/heads/main/scripts/Bluesky%20Copy%20Button.user.js)
### Description
Adds a button to copy the URL of a post on Bluesky without clicking the dropdown.
### Credit
Edited/rewritten by me. Based off of [this script](https://greasyfork.org/en/scripts/482477-one-click-copy-link-button-for-twitter-x) by [Dinomcworld](https://greasyfork.org/en/users/1234841-dinomcworld) that does this but for Twitter.  I highly recommend their script too, works great!


## Twitch Raid Remover
### Last update: 2/14/25
### Install link: [here](https://github.com/Artemis6425/Artemis-User-Scripts/raw/refs/heads/main/scripts/Twitch%20Raid%20Remover.user.js)
### Description
After a streamer raids another channel, immediately remove the `?referrer=raid` in the URL and refreshes the page.

This works now! I promise (lol i don't think it works still)
### Credit
I made this