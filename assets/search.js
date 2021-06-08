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

function showMatchingTips(tips, query) {
    if (!resultPanel) {
        resultPanel = document.querySelector('.search-results');
    }

    resultPanel.innerHTML = '';

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
}

const searchField = document.querySelector('#search');
searchField.addEventListener('input', () => {
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
});
