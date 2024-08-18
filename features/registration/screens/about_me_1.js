import {REG_SCREENS} from "../../../app/screens.js" 

// Компонент экрана для ввода SMS-кода
var AboutMe1Screen = {
    view: function() {
        return m("div.bg_dark_default", [
            // Верхняя часть экрана
            m("div.top-container", [
                // Заголовок
                m("div", { style: { marginTop: "20px", textAlign: "center" } }, [
                    m("p.h2_text", "Расскажи о себе")
                ]),
            ]),

            // Нижняя часть экрана
            m("div.bottom-container", [
                // Кнопка "Далее"
                m("div", { style: { marginTop: "20px", textAlign: "center" } }, [
                    m("button.purple_button", {
                        onclick: () => m.route.set(REG_SCREENS.ABOUT_ME_2) 
                    }, "Далее"),
                ])
            ])
        ]);
    }
};

export default AboutMe1Screen