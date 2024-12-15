let CHYEN_FUNTIONS = 0
let NNK = 0
let ERROR = 0
let DOWN = 0
let language = 0
let xx1 = 0
let MOI = 0
let NEWWWWWWWWWWWWWWWW = 0
let up = 0
let ays = 0
let xx2 = 0
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (CHYEN_FUNTIONS == 1) {
        if (NNK == 1) {
            dong_y()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (ERROR == 1) {
        DOWN = 6
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Sad)
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(1000)
        }
        if (language == 1) {
            basic.showString("ERROR 403")
        } else if (language == 2) {
            basic.showString("L?I 403")
        } else if (language == 3) {
            basic.showString("FOUT 403")
        }
        if (language == 1) {
            basic.showString("MICROBIT WILL TURN OFF IN A FEW SECONDS")
        } else if (language == 2) {
            basic.showString("MICROBIT S? T?T TRONG V?I GI?Y")
        } else if (language == 3) {
            basic.showString("MICROBIT SAL BINNE'N PAAR SEKONDES AFSLAAI")
        }
        erui()
    }
    if (NNK == 0) {
        language = 1
    }
    if (ERROR == 0) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . # # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . # .
            . . # # .
            . # . # .
            . . . # .
            . . . # .
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # # #
            . . # # #
            . . # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        xx1 = randint(1, 6)
        if (xx1 == 6) {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                `)
        } else if (xx1 == 5) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                `)
        } else if (xx1 == 4) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                `)
        } else if (xx1 == 3) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                `)
        } else if (xx1 == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                . . . . .
                . . . . .
                `)
        } else if (xx1 == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (CHYEN_FUNTIONS == 1) {
        if (MOI == 1) {
            language = 0
            MOI = 1
        }
        language += 1
        if (language == 1) {
            basic.showString("ENGLISH")
            ERROR = 0
            NEWWWWWWWWWWWWWWWW = 0
        } else if (language == 2) {
            basic.showString("TI?NG VI?T")
            ERROR = 0
            NEWWWWWWWWWWWWWWWW = 0
        } else if (language == 3) {
            basic.showString("NEDERLANDS (SUID-AFRIKA)")
            NEWWWWWWWWWWWWWWWW = 0
            ERROR = 0
        } else {
            language = 1
            basic.showString("ENGLISH")
            ERROR = 0
            NEWWWWWWWWWWWWWWWW = 0
        }
    }
})
function dong_y () {
    basic.showString("LOADING PACK, PLEASE WAIT...")
    basic.pause(1000)
    up = 1
    basic.clearScreen()
    while (up == 1) {
        if (ays > 255) {
            basic.clearScreen()
            basic.showIcon(IconNames.Yes)
            up = 0
        }
        ays += 10
        led.plotBarGraph(
        ays,
        255
        )
        basic.pause(1000)
    }
    if (up == 0) {
        basic.pause(1000)
        basic.clearScreen()
        CHYEN_FUNTIONS = 0
    }
}
function erui () {
    if (language == 1) {
        basic.showString("LANGUAGE AFTER REBOOT WILL BE ENGLISH")
    } else if (language == 2) {
        basic.showString("NG?N NG? SAU KHI KH?I Đ?NG L?I S? L? TI?NG ANH")
    } else if (language == 3) {
        basic.showString("DIE TAAL NA HERBEGIN SAL ENGELS WEES")
    }
    while (ERROR == 1) {
        if (DOWN == 0) {
            control.reset()
        }
        DOWN += -1
        basic.showNumber(DOWN)
        basic.pause(1000)
    }
}
input.onButtonPressed(Button.AB, function () {
    ERROR = 1
    if (NEWWWWWWWWWWWWWWWW == 0) {
        if (NNK == 0) {
            language = 1
        }
        if (language == 1) {
            basic.showString("LANGUAGE")
        } else if (language == 2) {
            basic.showString("NG?N NG?")
        } else if (language == 3) {
            basic.showString("TAAL")
        }
        CHYEN_FUNTIONS = 1
        NEWWWWWWWWWWWWWWWW = 1
        NNK = 1
    } else {
        CHAY_NGON_NGU()
    }
})
input.onButtonPressed(Button.B, function () {
    if (ERROR == 1) {
        DOWN = 6
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Sad)
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(1000)
        }
        if (language == 1) {
            basic.showString("ERROR 403")
        } else if (language == 2) {
            basic.showString("L?I 403")
        } else if (language == 3) {
            basic.showString("FOUT 403")
        }
        if (language == 1) {
            basic.showString("MICROBIT WILL TURN OFF IN A FEW SECONDS")
        } else if (language == 2) {
            basic.showString("MICROBIT S? T?T TRONG V?I GI?Y")
        } else if (language == 3) {
            basic.showString("MICROBIT SAL BINNE'N PAAR SEKONDES AFSLAAI")
        }
        erui()
    }
    if (NNK == 0) {
        language = 1
    }
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # # .
        . # . # .
        . # # # .
        . . . # .
        . . . # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . . # .
        . . # . .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        . . . # .
        . . # # .
        . # . # .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # #
        . . # # #
        . . # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    xx2 = randint(1, 6)
    if (xx2 == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    } else if (xx2 == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else if (xx2 == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (xx2 == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else if (xx2 == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . . . . .
            . . . . .
            `)
    } else if (xx2 == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
function CHAY_NGON_NGU () {
    if (input.logoIsPressed()) {
        language = 0
        language += 1
        if (language == 1) {
            basic.showString("ENGLISH")
        } else if (language == 2) {
            basic.showString("TI?NG VI?T")
        } else if (language == 3) {
            basic.showString("NEDERLANDS (SUID-AFRIKA)")
        } else {
            language = 1
        }
    }
}
basic.forever(function () {
    if (xx1 > 0 && xx2 > 0) {
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
        if (xx1 > xx2) {
            if (language == 1) {
                basic.showString("DICE 1 WIN")
                xx1 = 0
                xx2 = 0
            } else if (language == 2) {
                basic.showString("X?C X?C 1 TH?NG")
                xx1 = 0
                xx2 = 0
                basic.clearScreen()
            } else if (language == 3) {
                basic.showString("DObbelsteen 1 WEN")
                xx1 = 0
                xx2 = 0
                basic.clearScreen()
            }
        } else if (xx1 < xx2) {
            if (language == 1) {
                basic.showString("DICE 2 WIN")
                xx1 = 0
                xx2 = 0
                basic.clearScreen()
            } else if (language == 2) {
                basic.showString("X?C X?C 2 TH?NG")
                xx1 = 0
                xx2 = 0
                basic.clearScreen()
            } else if (language == 3) {
                basic.showString("DObbelsteen 2 WEN")
                xx1 = 0
                xx2 = 0
                basic.clearScreen()
            }
        } else if (xx1 == xx2) {
            if (language == 1) {
                basic.showString("DRAW")
                xx1 = 0
                xx2 = 0
                basic.clearScreen()
            } else if (language == 2) {
                basic.showString("H?A")
                xx1 = 0
                xx2 = 0
                basic.clearScreen()
            } else if (language == 3) {
                basic.showString("BINDEN")
                xx1 = 0
                xx2 = 0
                basic.clearScreen()
            }
        }
    }
})
