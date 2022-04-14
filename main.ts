input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
})
let distance = 0
music.setVolume(128)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (distance < 1) {
        basic.showString("C")
        music.ringTone(262)
    } else if (distance >= 1 && distance < 5) {
        basic.showString("D")
        music.ringTone(294)
    } else if (distance >= 5 && distance < 10) {
        basic.showString("E")
        music.ringTone(330)
    } else if (distance >= 10 && distance < 15) {
        basic.showString("F")
        music.ringTone(349)
    } else if (distance >= 15 && distance < 20) {
        basic.showString("G")
        music.ringTone(392)
    } else if (distance >= 20 && distance < 25) {
        basic.showString("A")
        music.ringTone(440)
    } else if (distance >= 25 && distance < 30) {
        basic.showString("B")
        music.ringTone(494)
    } else {
        music.stopAllSounds()
        basic.showIcon(IconNames.EigthNote)
    }
})
