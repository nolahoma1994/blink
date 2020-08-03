input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            # # # # #
            . # . # .
            . . # . .
            . # . # .
            # # # # #
            `)
        basic.pause(2000)
        basic.clearScreen()
        basic.pause(2000)
    }
})
