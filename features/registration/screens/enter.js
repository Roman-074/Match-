
var count = 0

var EnterScreen = {
    view: function() {
        return m("div.reg_bg_image", [
          m("div.reg_bg_card", [
            m("h1.reg_h1", "Зарегистрироваться или войти"),
            m("input.reg_input", { placeholder: "Номер телефона" }),
            m("button.purple_button", {
                onclick: function() {count++}
            }, count + " clicks"),
          ])
        ]);
      }
  };

m.mount(document.body, EnterScreen);

export default EnterScreen