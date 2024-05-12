document.addEventListener('DOMContentLoaded', () => {
    const modalSelect = document.querySelector('.modal__select');
    const defaultSelect = modalSelect.querySelector('[data-select="default-select"]');
    console.log(defaultSelect);

    function openCustomSelect(select) {
        if(select.classList.contains('open')) {
            select.classList.remove('open');
        } else {
            select.classList.add('open');
        }
    }
    
    if(modalSelect) {
        modalSelect.addEventListener('click', () => {
            openCustomSelect(modalSelect);
        })
    }
});