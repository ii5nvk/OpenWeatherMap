define("entry", ['router'], router => {
    new Promise(resolve => {
        window.onload = resolve;
    }).then(() => {
        let interval;
        citiesList.addEventListener('change', e => {
            if (e.currentTarget.value == '') {
                result.innerHTML = '';
            } else {
                router.handle(e.currentTarget.value);
            }
        }, false);
    }).catch(e => {
        console.error(e);
        alert(`Ошибка: ${e.message}`);
    });
});