

var EnterScreen = {
    view: function() {
        return m("div.reg_bg_image", [
          m("div.reg_bg_card", [
            m("h1.reg_h1", "Зарегистрироваться или войти"),
            m("input.reg_input", {
                 type: "tel",
                 placeholder: "Номер телефона",
                 oninput: function(e) {
                     e.target.value = e.target.value.replace(/[^0-9]/g, '');
                 }
                }),
            m("button.purple_button", {
                onclick: () => m.route.set("#!/code") }, "Вперед"),
          ]),
        ]);
      }
  };

m.mount(document.body, EnterScreen);

export default EnterScreen
