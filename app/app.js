import {REG_SCREENS} from "./screens.js"  
import EnterScreen from "../features/registration/screens/enter.js"
import SmsCodeScreen from "../features/registration/screens/code.js"

// Маршруты
m.route(document.body, REG_SCREENS.ENTER, {
    [REG_SCREENS.ENTER]: EnterScreen,
    [REG_SCREENS.CODE]: SmsCodeScreen
});
