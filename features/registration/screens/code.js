import {REG_SCREENS} from "../../../app/screens.js" 

// Компонент экрана для ввода SMS-кода
var SmsCodeScreen = {
    view: function() {
        return m("div.bg_dark_default", [
            // Верхняя часть экрана
            m("div.top-container", [
                // Заголовок
                m("div", { style: { marginTop: "20px", textAlign: "center" } }, [
                    m("p.h2_text", "Введи код отправленный \nна номер +7 999 999 99 99")
                ]),

                // Поля ввода для кода из SMS
                m("div", { style: { marginTop: "40px", display: "flex", justifyContent: "center", gap: "10px" } }, [
                    m("input[type='text']", { maxlength: "1", style: inputStyle, class: "input-field" }),
                    m("input[type='text']", { maxlength: "1", style: inputStyle, class: "input-field" }),
                    m("input[type='text']", { maxlength: "1", style: inputStyle, class: "input-field" }),
                    m("input[type='text']", { maxlength: "1", style: inputStyle, class: "input-field" })
                ])
            ]),

            // Нижняя часть экрана
            m("div.bottom-container", [
                // Текст "Изменить номер"
                m("div", { style: { textAlign: "center" } }, [
                    m("a.h2_text", "Изменить номер")
                ]),

                // Кнопка "Далее"
                m("div", { style: { marginTop: "20px", textAlign: "center" } }, [
                    m("button.purple_button", {
                        onclick: () => m.route.set(REG_SCREENS.ABOUT_ME_1) 
                    }, "Далее"),
                ])
            ])
        ]);
    }
};

// Функция для получения атрибутов инпута
function getInputAttributes(inputRefs) {
    return {
        maxlength: "1",
        style: inputStyle,
        class: "input-field",
        ref: (ref) => inputRefs.push(ref),
        oninput: (e) => handleInput(e, inputRefs)
    };
}

// Обработчик ввода текста
function handleInput(e, inputRefs) {
    const value = e.target.value;
    if (value.length === 1) { // Если введена одна цифра
        // Найти индекс текущего поля ввода
        const currentIndex = inputRefs.indexOf(e.target);

        // Перейти к следующему полю ввода, если оно существует
        if (currentIndex >= 0 && currentIndex < inputRefs.length - 1) {
            inputRefs[currentIndex + 1].focus();
        }
    }
}

// TODO 
var inputStyle = {
    width: "68px",
    height: "100px",
    textAlign: "center",
    fontSize: "24px",             // Увеличенный шрифт для соответствия новым размерам
    borderRadius: "24px",         // Закругленные углы
    border: "none",               // Убираем границу
    backgroundColor: "#2A2A2A",   // Цвет фона
    color: "#fff",                // Цвет текста
    outline: "none",              // Убираем стандартную рамку при фокусе
    boxShadow: "none",            // Убираем тень
    padding: "0",                 // Убираем внутренние отступы, если есть
    margin: "0",                  // Убираем внешние отступы, если есть
    transition: "border-color 0.3s ease"  // Плавный переход при фокусе
};

export default SmsCodeScreen