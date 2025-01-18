input.onButtonPressed(Button.A, function () {
    if (so == -1) {
        so = 9
    } else {
        so += -1
    }
})
let so = 0
// 220 Mo
// 310 Dong
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 310)
basic.forever(function () {
    basic.showNumber(so)
})
