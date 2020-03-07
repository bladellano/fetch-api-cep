(function(win, doc) {
    'use strict';
    const cep = doc.querySelector('#cep');

    const showData = (data) => {
        for (const campo in data) {
            if (doc.querySelector('#' + campo))
                doc.querySelector('#' + campo).value = data[campo];
        }
    }

    cep.addEventListener('blur', (e) => {
        let search = cep.value.replace('-', '');
        const option = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        };

        fetch(`https://viacep.com.br/ws/${search}/json`, option)
            .then(resp => {
                resp.json()
                    .then(data => showData(data))
            })
            .catch(error => console.log('Deu erro: ' + error));
    });

})(window, document);