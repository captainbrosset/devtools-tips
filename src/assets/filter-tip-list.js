"use strict";

const HIGHLIGHTED_CLASS = 'highlighted';
const allTips = [];
const listEl = document.querySelector('.tips');

function getAllTips() {
    if (!allTips.length) {
        document.querySelectorAll('.tips .tip').forEach(el => {
            allTips.push({
                el,
                title: el.querySelector('.tip-title'),
                excerpt: el.querySelector('.tip-excerpt')
            });
        })
    }

    return allTips
}

const tipMatchers = {
    includes: function (s, hay) {
        return hay.toLowerCase().includes(s.toLowerCase());
    },
    fuzzy: function (s, hay) {
        let i = 0, n = -1, l;
        hay = hay.toLowerCase();
        s = s.toLowerCase();
        for (; l = s[i++];) if (!~(n = hay.indexOf(l, n + 1))) return false;
        return true;
    }
};

function findMatchingTips(query) {
    return getAllTips().filter(tip => {
        return tipMatchers.includes(query, tip.title.textContent) ||
               tipMatchers.includes(query, tip.excerpt.textContent);
    });
}

function resetFilter() {
    getAllTips().forEach(tip => {
        tip.el.classList.remove(HIGHLIGHTED_CLASS);
        tip.title.textContent = tip.title.textContent;
        tip.title.excerpt = tip.title.excerpt;
    });
    listEl.classList.remove('searching');
}

function highlightTextElement(el, query) {
    const text = el.textContent;
    const matchStart = text.toLowerCase().indexOf(query.toLowerCase());
    if (matchStart === -1) {
        return;
    }
    const matchLength = query.length;

    el.innerHTML = '';

    el.appendChild(document.createTextNode(text.substring(0, matchStart)));

    const highlighted = document.createElement('span');
    highlighted.classList.add('highlight');
    highlighted.textContent = text.substring(matchStart, matchStart + matchLength);
    el.appendChild(highlighted);

    el.appendChild(document.createTextNode(text.substring(matchStart + matchLength)));
}

function showMatchingTips(tips, query) {
    resetFilter();

    for (const { el, title, excerpt } of tips) {
        el.classList.add(HIGHLIGHTED_CLASS);

        highlightTextElement(title, query);
        highlightTextElement(excerpt, query);
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
    showMatchingTips(tips, q);
    // if (tips.length) {
    //     showMatchingTips(tips, q);
    // } else {
    //     resetFilter();
    // }
}

const searchField = document.querySelector('.search input');
searchField.addEventListener('input', maybeSearch);
searchField.addEventListener('focus', maybeSearch);
