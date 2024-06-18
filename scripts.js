document.addEventListener('DOMContentLoaded', () => {
    let btnNext = document.querySelector('.next');
    let btnBack = document.querySelector('.back');
    let container = document.querySelector('.container');
    let list = document.querySelector('.container .list');
    let thumb = document.querySelector('.container .thumb');

    btnNext.onclick = () => moveItemsOnClick('next');
    btnBack.onclick = () => moveItemsOnClick('back');

    function moveItemsOnClick(type) {
        let listItems = document.querySelectorAll('.list .list-item');
        let thumbItems = document.querySelectorAll('.thumb .thumb-item');

        if (type === 'next') {
            list.appendChild(listItems[0]);
            thumb.appendChild(thumbItems[0]);
            container.classList.add('next');
        } else {
            list.prepend(listItems[listItems.length - 1]);
            thumb.prepend(thumbItems[thumbItems.length - 1]);
            container.classList.add('back');
        }

        // Esconder o texto da página anterior
        let currentText = document.querySelector('.list .list-item:not(.thumb-item)');
        currentText.style.opacity = 0;

        setTimeout(() => {
            // Remover as classes de transição após a animação
            container.classList.remove('next');
            container.classList.remove('back');

            // Mostrar o texto da página atual com animação
            let newText = document.querySelector('.list .list-item:not(.thumb-item)');
            newText.style.opacity = 1;
        }, 500); // Ajuste o tempo conforme necessário para combinar com suas animações CSS
    }
});