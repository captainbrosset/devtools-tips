"use strict";

function findMatchingTips(query) {
    return allTips.filter(tip => {
        // TODO.
        return tip.title.toLowerCase().includes(query.toLowerCase());
    });
}

let resultPanel = null;

function emptyResults() {
    if (resultPanel) {
        resultPanel.innerHTML = '';
    }
}

function hideResults() {
    resultPanel.style.display = "none";
}

function showMatchingTips(tips, query) {
    if (!resultPanel) {
        resultPanel = document.querySelector('.search-results');
    }

    emptyResults();

    for (const { title, url } of tips) {
        const li = document.createElement('li');
        li.classList.add('result', 'hover-box', 'tip');

        const a = document.createElement('a');
        a.href = url;

        const matchStart = title.toLowerCase().indexOf(query.toLowerCase());
        const matchLength = query.length;

        a.appendChild(document.createTextNode(title.substring(0, matchStart)));

        const highlighted = document.createElement('span');
        highlighted.classList.add('highlight');
        highlighted.textContent = title.substring(matchStart, matchStart + matchLength);
        a.appendChild(highlighted);

        a.appendChild(document.createTextNode(title.substring(matchStart + matchLength)));

        li.appendChild(a);

        resultPanel.appendChild(li);
    }

    resultPanel.style.display = "";
}

const searchField = document.querySelector('#search');

function maybeSearch() {
    const q = searchField.value.trim();
    if (q.length < 2) {
        emptyResults();
        return;
    }
    const tips = findMatchingTips(q);
    if (tips.length) {
        showMatchingTips(tips, q);
    } else {
        emptyResults();
    }
}

searchField.addEventListener('input', maybeSearch);
searchField.addEventListener('focus', maybeSearch);
searchField.addEventListener('blur', () => {
    setTimeout(hideResults, 200);
});
