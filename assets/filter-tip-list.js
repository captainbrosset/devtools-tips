"use strict";

const HIGHLIGHTED_CLASS = 'highlighted';
const allTips = [];
const listEl = document.querySelector('.tips');

function getAllTips() {
    if (!allTips.length) {
        document.querySelectorAll('.tips .tip').forEach(el => {
            allTips.push({
                el,
                title: el.textContent
            });
        })
    }

    return allTips
}

function findMatchingTips(query) {
    return getAllTips().filter(tip => {
        // TODO: make a better search.
        return tip.title.toLowerCase().includes(query.toLowerCase());
    });
}

function resetFilter() {
    getAllTips().forEach(tip => tip.el.classList.remove(HIGHLIGHTED_CLASS));
    listEl.classList.remove('searching');
}

function showMatchingTips(tips, query) {
    resetFilter();

    for (const { el, title } of tips) {
        el.classList.add(HIGHLIGHTED_CLASS);
        const a = el.firstElementChild;

        const matchStart = title.toLowerCase().indexOf(query.toLowerCase());
        const matchLength = query.length;

        a.innerHTML = '';

        a.appendChild(document.createTextNode(title.substring(0, matchStart)));

        const highlighted = document.createElement('span');
        highlighted.classList.add('highlight');
        highlighted.textContent = title.substring(matchStart, matchStart + matchLength);
        a.appendChild(highlighted);

        a.appendChild(document.createTextNode(title.substring(matchStart + matchLength)));
    }

    listEl.classList.add('searching');
}

function maybeSearch() {
    const q = searchField.value.trim();
    if (q.length < 2) {
        resetFilter();
        return;
    }
    const tips = findMatchingTips(q);
    if (tips.length) {
        showMatchingTips(tips, q);
    } else {
        resetFilter();
    }
}

const searchField = document.querySelector('.search input');
searchField.addEventListener('input', maybeSearch);
searchField.addEventListener('focus', maybeSearch);
