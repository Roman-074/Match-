import {REG_SCREENS} from "../../../app/screens.js"  

var EnterScreen = {
    view: function() {
        // Фон-картинка
        return m("div.reg_bg_image", [
            // Карточка с блюром
            m("div.reg_bg_card", [
                // Заголовок
                m("h1.reg_h1", "Зарегистрироваться или войти"),
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
