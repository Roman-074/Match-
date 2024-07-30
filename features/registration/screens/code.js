var count = 0

var CodeScreen = {
    view: function() {
        return m("div.bg_screen_dark", [
          m("div.reg_bg_card", [
            m("button.purple_button", {
                onclick: function() {count++}
            }, count + " clicks"),
          ])
        ]);
      }
  };

m.mount(document.body, CodeScreen);

export default CodeScreen