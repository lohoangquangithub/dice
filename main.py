language = 0
CHYEN_FUNTIONS = 0
MOI = 0
ERROR = 0
NEWWWWWWWWWWWWWWWW = 0
DOWN = 0
NNK = 0
xx1 = 0
xx2 = 0
def CHAY_NGON_NGU():
    global language, CHYEN_FUNTIONS
    if input.pin_is_pressed(TouchPin.P0):
        language = 0
        language += 1
        if language == 1:
            basic.show_string("ENGLISH")
        else:
            if language == 2:
                basic.show_string("TI?NG VI?T")
            else:
                if language == 3:
                    basic.show_string("NEDERLANDS (SUID-AFRIKA)")
                else:
                    CHYEN_FUNTIONS = 1

def on_pin_pressed_p0():
    global language, MOI, ERROR, NEWWWWWWWWWWWWWWWW, CHYEN_FUNTIONS
    if CHYEN_FUNTIONS == 1:
        if MOI == 1:
            language = 0
            MOI = 1
        language += 1
        if language == 1:
            basic.show_string("ENGLISH")
            ERROR = 0
            NEWWWWWWWWWWWWWWWW = 0
        else:
            if language == 2:
                basic.show_string("TI?NG VI?T")
                ERROR = 0
                NEWWWWWWWWWWWWWWWW = 0
            else:
                if language == 3:
                    basic.show_string("NEDERLANDS (SUID-AFRIKA)")
                    NEWWWWWWWWWWWWWWWW = 0
                    ERROR = 0
                else:
                    CHYEN_FUNTIONS = 1
    else:
        pins.analog_write_pin(AnalogPin.P0, 0)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_button_pressed_a():
    global DOWN, language, xx1
    if ERROR == 1:
        DOWN = 6
        for index in range(3):
            basic.show_icon(IconNames.SAD)
            basic.pause(1000)
            basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                """)
            basic.pause(1000)
        if language == 1:
            basic.show_string("ERROR 403")
        else:
            if language == 2:
                basic.show_string("L?I 403")
            else:
                if language == 3:
                    basic.show_string("FOUT 403")
        basic.show_string("AUTOMATICALLY SWITCH TO ENGLISH")
        basic.show_string("MICROBIT WILL TURN OFF IN A FEW SECONDS")
        erui()
    if NNK == 0:
        language = 1
    if ERROR == 0:
        basic.show_leds("""
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            """)
        basic.pause(1000)
        basic.show_leds("""
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            """)
        basic.pause(1000)
        basic.show_leds("""
            . . # # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            """)
        basic.pause(1000)
        basic.show_leds("""
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            """)
        basic.show_leds("""
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            """)
        basic.show_leds("""
            . . . # .
            . . # # .
            . # . # .
            . . . # .
            . . . # .
            """)
        basic.show_leds("""
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . # #
            . . . # #
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . # # #
            . . # # #
            . . # # #
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        basic.show_leds("""
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
        xx1 = randint(1, 6)
        if xx1 == 6:
            basic.show_leds("""
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                """)
        else:
            if xx1 == 5:
                basic.show_leds("""
                    # . . . #
                    . . . . .
                    . . # . .
                    . . . . .
                    # . . . #
                    """)
            else:
                if xx1 == 4:
                    basic.show_leds("""
                        # . . . #
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . #
                        """)
                else:
                    if xx1 == 3:
                        basic.show_leds("""
                            . . . . .
                            . . . . .
                            . . # . .
                            . . . . .
                            # . . . #
                            """)
                    else:
                        if xx1 == 2:
                            basic.show_leds("""
                                . . . . .
                                . . . . .
                                # . . . #
                                . . . . .
                                . . . . .
                                """)
                        else:
                            if xx1 == 1:
                                basic.show_leds("""
                                    . . . . .
                                    . . . . .
                                    . . # . .
                                    . . . . .
                                    . . . . .
                                    """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def erui():
    global DOWN
    while ERROR == 1:
        if DOWN == 0:
            control.reset()
        DOWN += -1
        basic.show_number(DOWN)
        basic.pause(1000)

def on_button_pressed_ab():
    global ERROR, language, CHYEN_FUNTIONS, NEWWWWWWWWWWWWWWWW, NNK
    ERROR = 1
    if NEWWWWWWWWWWWWWWWW == 0:
        if NNK == 0:
            language = 1
        if language == 1:
            basic.show_string("LANGUAGE")
        else:
            if language == 2:
                basic.show_string("NG?N NG?")
            else:
                if language == 3:
                    basic.show_string("TAAL")
        CHYEN_FUNTIONS = 1
        NEWWWWWWWWWWWWWWWW = 1
        NNK = 1
    else:
        CHAY_NGON_NGU()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global DOWN, language, xx2
    if ERROR == 1:
        DOWN = 6
        for index2 in range(3):
            basic.show_icon(IconNames.SAD)
            basic.pause(1000)
            basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                """)
            basic.pause(1000)
        if language == 1:
            basic.show_string("ERROR 403")
        else:
            if language == 2:
                basic.show_string("L?I 403")
            else:
                if language == 3:
                    basic.show_string("FOUT 403")
        basic.show_string("AUTOMATICALLY SWITCH TO ENGLISH")
        basic.show_string("MICROBIT WILL TURN OFF IN A FEW SECONDS")
        erui()
    if NNK == 0:
        language = 1
    basic.show_leds("""
        . # # # .
        . # . . .
        . # # # .
        . # . # .
        . # # # .
        """)
    basic.pause(1000)
    basic.show_leds("""
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        """)
    basic.pause(1000)
    basic.show_leds("""
        . . # # .
        . # . # .
        . # # # .
        . . . # .
        . . . # .
        """)
    basic.pause(1000)
    basic.show_leds("""
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        """)
    basic.show_leds("""
        . # # # .
        . . . # .
        . . # . .
        . # . . .
        . # # # .
        """)
    basic.show_leds("""
        . . . # .
        . . # # .
        . # . # .
        . . . # .
        . . . # .
        """)
    basic.show_leds("""
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.show_leds("""
        . . . # #
        . . . # #
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.show_leds("""
        . . # # #
        . . # # #
        . . # # #
        . . . . .
        . . . . .
        """)
    basic.show_leds("""
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        """)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
    basic.show_leds("""
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        """)
    xx2 = randint(1, 6)
    if xx2 == 6:
        basic.show_leds("""
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            """)
    else:
        if xx2 == 5:
            basic.show_leds("""
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                """)
        else:
            if xx2 == 4:
                basic.show_leds("""
                    # . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . . #
                    """)
            else:
                if xx2 == 3:
                    basic.show_leds("""
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        # . . . #
                        """)
                else:
                    if xx2 == 2:
                        basic.show_leds("""
                            . . . . .
                            . . . . .
                            # . . . #
                            . . . . .
                            . . . . .
                            """)
                    else:
                        if xx2 == 1:
                            basic.show_leds("""
                                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
                                """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global xx1, xx2
    if xx1 > 0 and xx2 > 0:
        basic.pause(1000)
        basic.clear_screen()
        basic.pause(1000)
        if xx1 > xx2:
            if language == 1:
                basic.show_string("DICE 1 WIN")
                xx1 = 0
                xx2 = 0
                basic.clear_screen()
            else:
                if language == 2:
                    basic.show_string("X?C X?C 1 TH?NG")
                    xx1 = 0
                    xx2 = 0
                    basic.clear_screen()
                else:
                    if language == 3:
                        basic.show_string("DObbelsteen 1 WEN")
                        xx1 = 0
                        xx2 = 0
                        basic.clear_screen()
        elif xx1 < xx2:
            if language == 1:
                basic.show_string("DICE 2 WIN")
                xx1 = 0
                xx2 = 0
                basic.clear_screen()
            else:
                if language == 2:
                    basic.show_string("X?C X?C 2 TH?NG")
                    xx1 = 0
                    xx2 = 0
                    basic.clear_screen()
                else:
                    if language == 3:
                        basic.show_string("DObbelsteen 2 WEN")
                        xx1 = 0
                        xx2 = 0
                        basic.clear_screen()
        elif xx1 == xx2:
            if language == 1:
                basic.show_string("DRAW")
                xx1 = 0
                xx2 = 0
                basic.clear_screen()
            else:
                if language == 2:
                    basic.show_string("H?A")
                    xx1 = 0
                    xx2 = 0
                    basic.clear_screen()
                else:
                    if language == 3:
                        basic.show_string("BINDEN")
                        xx1 = 0
                        xx2 = 0
                        basic.clear_screen()
basic.forever(on_forever)
