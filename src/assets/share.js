function createTipUI() {
    const container = document.querySelector('main');

    const shareBtn = document.createElement('button');
    shareBtn.classList.add('share-button');
    shareBtn.textContent = 'Share tip';
    shareBtn.title = 'Share the link to this tip with other apps';
    shareBtn.addEventListener('click', shareTip);

    container.appendChild(shareBtn);
}

async function shareTip() {
    const url = document.location.href;
    const title = `DevTools Tip - ${document.title}`;
    const text = document.querySelector('.tip-content').textContent;

    try {
        await navigator.share({title, text, url});
    } catch (e) {
        console.error('Error sharing this tip', e);
    }
}

if (navigator.share) {
    createTipUI();
}
