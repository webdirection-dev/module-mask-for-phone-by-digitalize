const mask = () => {
    const phoneInputs = document.querySelectorAll('[data-tel-input]');

    phoneInputs.forEach(item => {

        // Форматирование values on input
        item.addEventListener('input', (event) => {
            let target = event.target,
                numbersValue = getInputNumberValue(target.value),
                formattedInputValue = '',
                selectionStarts = target.selectionStart;

            if (!numbersValue) return target.value = '';

            if (target.value.length !== selectionStarts) {
                if (event.data && /\D/g.test(event.data)) target.value = numbersValue;
                return;
            }

            if (['7', '8', '9'].indexOf(numbersValue[0]) > -1) {
                // Russian phone number
                if (numbersValue[0] == '9') numbersValue = '7' + numbersValue;
                formattedInputValue = numbersValue[0] == '8' ? '8' : '+7';
                if (numbersValue.length > 0) formattedInputValue += ' (' + numbersValue.substring(1, 4);
                if (numbersValue.length >= 5) formattedInputValue += ') ' + numbersValue.substring(4, 7);
                if (numbersValue.length >= 8) formattedInputValue += '-' + numbersValue.substring(7, 9);
                if (numbersValue.length >= 10) formattedInputValue += '-' + numbersValue.substring(9, 11);
            } else formattedInputValue = '+' + numbersValue.substring(0, 16); // Not Russian phone number

            target.value = formattedInputValue;
        });

        // Удаление неудаляемых символов
        item.addEventListener('keydown', (event) => {
            let target = event.target,
                keyCode = event.keyCode;
            if (keyCode === 8 && getInputNumberValue(target.value).length === 1) target.value = '';
        });

        // Paste
        item.addEventListener('paste', (event) => {
            let target = event.target,
                numbersValue = getInputNumberValue(target.value),
                pasted = event.clipboardData || window.clipboardData;

            if (pasted) {
                let pastedText = pasted.getData('Text');
                if (/\D/g.test(pastedText)) target.value = numbersValue;
            }
        });
    });

    // Фильтр чисел .replace()
    function getInputNumberValue (input) {
        return input.replace(/\D/g, '');
    }
};

export default mask;