document.addEventListener('DOMContentLoaded', () => {
    const modalSelect = document.querySelector('.modal__select');
    const selectOptionList = modalSelect.querySelector('.modal__option-list')
    const modalOption = modalSelect.querySelector('.modal__option');
    const selectOptions = document.querySelector('[data-select="select-options"]')

    function consoleLog(eventTarget) {
        if(!eventTarget.contains(selectOptionList)) {
           console.log('clicked outside')
        }
    }

    function openCustomSelect(selectList) {
        if (!selectList) return;
        const selectHeight = selectOptions.offsetHeight;

        if (selectList.classList.contains('open')) {
            selectList.classList.remove('open');
            selectList.style.height = '0';
            modalOption.classList.remove('modal__option_arrow-rotate')



            window.addEventListener('click', () => consoleLog(event.target))
        } else {
            selectList.classList.add('open');
            selectList.style.height = `${selectHeight}px`;
            selectList.style.borderTop = 'none';
            modalOption.classList.add('modal__option_arrow-rotate')
        }
    }

    function setOptionHandler(list, eventName, callBack) {
        for (const li of list) {
            if (li) {
                li.addEventListener(eventName, callBack)
            }
        }
    }

    if (modalSelect) {
        modalSelect.addEventListener('click', () => {
            openCustomSelect(selectOptionList);
        })

        setOptionHandler(selectOptions.children, 'click', (event) => {
            const itemContent = event.target.textContent.trim()

            if (itemContent) {
                modalOption.textContent = itemContent
            }
        })
    }
});