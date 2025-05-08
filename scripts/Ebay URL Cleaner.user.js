// ==UserScript==
// @id             Ebay URL Cleaner
// @name           Ebay URL Cleaner
// @namespace      https://github.com/Artemis6425/Artemis-User-Scripts
// @author         Artemis6425
// @description    Removes URL tracking for Ebay URLs for easier sharing
// @include        *://*ebay.*/itm/*
// @downloadURL
// @updateURL
// ==/UserScript==
(function(doc) {

    var itm = location.href
    if(itm.includes("?")){
        history.replaceState(null, "Ebay URL Cleaner", location.href.split("?")[0])
    }

})(document);