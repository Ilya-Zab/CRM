document.addEventListener('DOMContentLoaded', () => {
    const modalSelect = document.querySelector('.modal__select');
    const selectOptionList = modalSelect.querySelector('.modal__option-list')
    const selectOptions = modalSelect.querySelector('[data-select="select-options"]');
    console.log(selectOptionList);

    function openCustomSelect(selectList) {
        if(!selectList) return;
        const selectHeight = selectList.querySelector('[data-select="select-options"]').offsetHeight;
        
        selectList.style.maxHeight = 0;

        if(selectList.classList.contains('open')) {
            selectList.style.maxHeight = '0';
            selectList.classList.remove('open');
        } else {
            selectList.style.maxHeight = `${selectHeight}px`;
            selectList.classList.add('open');
        }
    }
    
    if(modalSelect) {
        modalSelect.addEventListener('click', () => {
            openCustomSelect(selectOptionList);
            console.log('select clicked');
        })
    }
});