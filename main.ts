input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
function spawStuff () {
    pl = game.createSprite(randomNum(), randomNum())
    en = game.createSprite(randomNum(), randomNum())
    en2 = game.createSprite(randomNum(), randomNum())
    en3 = game.createSprite(randomNum(), randomNum())
    en.set(LedSpriteProperty.Brightness, 100)
    en2.set(LedSpriteProperty.Brightness, 100)
    en3.set(LedSpriteProperty.Brightness, 100)
    if (pl.isTouching(en)) {
        control.reset()
    }
    if (pl.isTouching(en2)) {
        control.reset()
    }
    if (pl.isTouching(en3)) {
        control.reset()
    }
}
function randomNum () {
    rand = randint(0, 4)
    return rand
}
let rand = 0
let en3: game.LedSprite = null
let en2: game.LedSprite = null
let en: game.LedSprite = null
let pl: game.LedSprite = null
let speed = 150
game.setScore(0)
spawStuff()
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        pl.change(LedSpriteProperty.X, -1)
        basic.pause(speed)
    }
    while (input.buttonIsPressed(Button.B)) {
        pl.change(LedSpriteProperty.X, 1)
        basic.pause(speed)
    }
    while (input.pinIsPressed(TouchPin.P2)) {
        pl.change(LedSpriteProperty.Y, 1)
        basic.pause(speed)
    }
    while (input.logoIsPressed()) {
        pl.change(LedSpriteProperty.Y, -1)
        basic.pause(speed)
    }
    if (pl.isTouching(en)) {
        en.delete()
        game.addScore(1)
    }
    if (pl.isTouching(en2)) {
        en2.delete()
        game.addScore(1)
    }
    if (pl.isTouching(en3)) {
        en3.delete()
        game.addScore(1)
    }
})
