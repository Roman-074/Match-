import {REG_SCREENS} from "../../../app/screens.js";  

const link = document.createElement("link");
link.rel = 'stylesheet';
link.href = "../../../ui-kit/styles/app_styles.css";
document.head.appendChild(link);

var EnterScreen = {
    view: function() {
        // Фон-картинка
        return m("div.reg_bg_image", [
            // Карточка с блюром
            m("div.blur_card", [
                // Заголовок
                m("h1.h1_text", "Зарегистрироваться или войти"),
                // Инпут
                m("input.reg_input", {
                        type: "tel",
                        placeholder: "Номер телефона",
                        oninput: function(e) {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }
                    }),
                // Кнопка "Вперед"
                m("button.purple_button", {
                    onclick: () => m.route.set(REG_SCREENS.CODE) 
                }, "Вперед"),
            ]),
        ]);
    }
};

export default EnterScreen
