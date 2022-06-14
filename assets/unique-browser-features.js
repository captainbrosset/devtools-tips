"use strict";

function filterUniqueBrowserFeatures() {
    document.body.classList.toggle('show-unique-browser-feature', uniqueBrowserFilterBox.checked);
    
}

const uniqueBrowserFilterBox = document.querySelector('.unique-browser input');
uniqueBrowserFilterBox.addEventListener('change', filterUniqueBrowserFeatures);
