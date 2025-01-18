let GROUP = EtGamepad.Group.Group1
let DELAY = 50
let TIME: number = 0
let PRESSED = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

basic.showNumber(GROUP+1)

pins.digitalWritePin(DigitalPin.P0, 1)
pins.digitalWritePin(DigitalPin.P1, 1)
pins.digitalWritePin(DigitalPin.P2, 1)
pins.digitalWritePin(DigitalPin.P8, 1)
pins.digitalWritePin(DigitalPin.P9, 1)
pins.digitalWritePin(DigitalPin.P11, 1)
pins.digitalWritePin(DigitalPin.P12, 1)
pins.digitalWritePin(DigitalPin.P13, 1)
pins.digitalWritePin(DigitalPin.P14, 1)
pins.digitalWritePin(DigitalPin.P15, 1)
pins.digitalWritePin(DigitalPin.P16, 1)

pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P9, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)

function buttonState(button: EtGamepad.Gamepad) {
    let newstate: number
    switch (button) {
        case EtGamepad.Gamepad.Button1:
            newstate = pins.digitalReadPin(DigitalPin.P13)
            break
        case EtGamepad.Gamepad.Button2:
            newstate = pins.digitalReadPin(DigitalPin.P15)
            break
        case EtGamepad.Gamepad.Button3:
            newstate = pins.digitalReadPin(DigitalPin.P1)
            break
        case EtGamepad.Gamepad.Button4:
            newstate = pins.digitalReadPin(DigitalPin.P12)
            break
        case EtGamepad.Gamepad.Button5:
            newstate = pins.digitalReadPin(DigitalPin.P16)
            break
        case EtGamepad.Gamepad.Button6:
            newstate = pins.digitalReadPin(DigitalPin.P2)
            break
        case EtGamepad.Gamepad.Button7:
            newstate = pins.digitalReadPin(DigitalPin.P8)
            break
        case EtGamepad.Gamepad.Button8:
            newstate = pins.digitalReadPin(DigitalPin.P14)
            break
        case EtGamepad.Gamepad.Button9:
            newstate = pins.digitalReadPin(DigitalPin.P9)
            break
        case EtGamepad.Gamepad.Button10:
            newstate = pins.digitalReadPin(DigitalPin.P0)
            break
        case EtGamepad.Gamepad.Button11:
            newstate = pins.digitalReadPin(DigitalPin.P5)
            break
        case EtGamepad.Gamepad.Button12:
            newstate = pins.digitalReadPin(DigitalPin.P11)
            break
    }
    if (PRESSED[button] == newstate)
        return
    PRESSED[button] = newstate
    if (newstate)
        button += EtGamepad.Gamepad.Button12
    radio.sendNumber(button)
}

basic.forever(function () {
    for (let i = EtGamepad.Gamepad.Button1; i <= EtGamepad.Gamepad.Button12; i++)
        buttonState(i)
})

input.onGesture(Gesture.LogoDown, function() {
    GROUP += 1
    if (GROUP > EtGamepad.Group.Group9)
        GROUP = EtGamepad.Group.Group1
    EtGamepad.setGroup(GROUP)
    basic.showNumber(GROUP + 1)
})
