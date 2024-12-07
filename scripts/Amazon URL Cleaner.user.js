// ==UserScript==
// @id             Amazon URL Cleaner
// @name           Amazon URL Cleaner
// @namespace      https://github.com/Artemis6425/Artemis-User-Scripts
// @description    replaceState for Amazon
// @include        https://www.amazon.*/dp/*
// @include        https://www.amazon.*/*gp/product/*
// @include        https://www.amazon.*/exec/obidos/ASIN/*
// @include        https://www.amazon.*/o/ASIN/*
// @version        1.0
// @downloadURL    
// @updateURL      
// @run-at         document-end
// ==/UserScript==
(function(doc) {
    // ASIN.0 in kindle store
    var asin = doc.getElementById("ASIN") || doc.getElementsByName("ASIN.0")[0];
    if (asin) {
        asin = asin.value
        history.replaceState(null, "Amazon URL Cleaner", "/dp/" + asin + "/");
    }
})(document);