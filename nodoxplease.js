// ==UserScript==
// @name         NoDoxPlease
// @namespace    https://portfolio.crxaw.tech/NoDoxPlease
// @version      1.3
// @description  Removes Google's "Results for" section from search results and your location from the footer of the page.
// @author       Euro-pol
// @match        https://www.google.com/search*
// @icon         https://www.github.com/Euro-pol/nodoxplease/raw/main/icon.png
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove the specific div
    function removeDiv() {
        // Find the div with the specified class
        const divToRemove = document.querySelector('div.eKPi4.BUSxSd[aria-level="2"][role="heading"]');

        // If the div is found, remove it
        if (divToRemove) {
            divToRemove.remove();
            console.log('Removed the specified div:', divToRemove);
        }
    }

    // Run the function to remove the div
    removeDiv();

    // Optional: Set up a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver(removeDiv);
    observer.observe(document.body, { childList: true, subtree: true });
})();
