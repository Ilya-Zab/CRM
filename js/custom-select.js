document.addEventListener('DOMContentLoaded', () =>
{
    const modalSelect = document.querySelector('.modal__select');
    const selectOptionList = modalSelect.querySelector('.modal__option-list')
    const selectOptions = modalSelect.querySelector('[data-select="select-options"]');
    const modalOption = modalSelect.querySelector('.modal__option');
    console.log(modalOption)

    function openCustomSelect(selectList)
    {
        if (!selectList) return;
        const selectHeight = document.querySelector('[data-select="select-options"]').offsetHeight;

        if (selectList.classList.contains('open'))
        {
            selectList.classList.remove('open');
            selectList.style.height = '0';
            selectList.style.border = 'none';

            modalOption.classList.remove('modal__option_arrow-45')
            modalOption.classList.add('modal__option_arrow-225')
            console.log(modalOption)
        } else
        {
            selectList.classList.add('open');
            selectList.style.height = `${selectHeight}px`;
            selectList.style.border = '2px solid #c8c5d1';
            selectList.style.borderTop = 'none';

            modalOption.classList.remove('modal__option_arrow-225')
            modalOption.classList.add('modal__option_arrow-45')
            console.log(modalOption)
        }
    }

    if (modalSelect)
    {
        modalSelect.addEventListener('click', () =>
        {
            openCustomSelect(selectOptionList);
            console.log('select clicked');
        })
    }
});