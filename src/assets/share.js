function createTipUI() {
    const container = document.querySelector('main');

    const shareBtn = document.createElement('button');
    shareBtn.classList.add('share-button');
    shareBtn.textContent = 'Share tip';
    shareBtn.title = 'Share the link to this tip with other apps';
    shareBtn.addEventListener('click', shareTip);

    container.appendChild(shareBtn);
}

async function getImagesAsFiles(images) {
    const files = [];
    for (const image of images) {
        // Easiest way is to fetch them again, which is fine, it's already in cache.
        const response = await fetch(image.src);
        const blob = await response.blob();
        const name = image.src.substring(image.src.lastIndexOf('/') + 1);
        files.push(new File([blob], name, {type: blob.type}));
    }
    return files;
}

async function shareTip() {
    const url = document.location.href;
    const title = `DevTools Tip - ${document.title}`;
    const text = document.querySelector('.tip-content').textContent;
    const data = {title, text, url};

    // Add image files if supported.
    const images = await getImagesAsFiles([...document.querySelectorAll('.tip-content img')]);
    if (navigator.canShare && navigator.canShare({ files: images })) {
        data.files = images;
    }

    try {
        await navigator.share(data);
    } catch (e) {
        console.error('Error sharing this tip', e);
    }
}

if (navigator.share) {
    createTipUI();
}
