const sessionStorageKey = 'PRESS_FREQUENCY';

if(typeof Storage !== 'undefined') {
    if(sessionStorage.getItem(sessionStorageKey) === null) {
        sessionStorage.setItem(sessionStorageKey, 0);
    }

    const incrementButton = document.querySelector('#incrementButton');
    const clearButton = document.querySelector('#clear');
    const countDiplsay = document.querySelector('#count');

    countDiplsay.innerText = sessionStorage.getItem(sessionStorageKey);

    incrementButton.addEventListener('click', function() {
        let count = sessionStorage.getItem(sessionStorageKey);
        count++;
        sessionStorage.setItem(sessionStorageKey, count);
        countDiplsay.innerText = sessionStorage.getItem(sessionStorageKey);
    });

    clearButton.addEventListener('click', function() {
        sessionStorage.removeItem(sessionStorageKey);
        countDiplsay.innerText = 0;
    });
}else{
    alert('Browser yang Anda gunakan tidak mendukung Web Storage');
}