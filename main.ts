input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
function endGame () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        basic.pause(100)
    }
    game.gameOver()
}
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
function moveEnemy (theEnemy: game.LedSprite) {
    theEnemy.set(LedSpriteProperty.X, randomNum())
    theEnemy.set(LedSpriteProperty.Y, randomNum())
    if (pl.isTouching(theEnemy)) {
        moveEnemy(theEnemy)
    }
}
function randomNum () {
    rand = randint(0, 4)
    return rand
}
function moveAllEnemies () {
    if (!(en.isDeleted())) {
        moveEnemy(en)
    }
    if (!(en2.isDeleted())) {
        moveEnemy(en2)
    }
    if (!(en3.isDeleted())) {
        moveEnemy(en3)
    }
}
let rand = 0
let en3: game.LedSprite = null
let en2: game.LedSprite = null
let en: game.LedSprite = null
let pl: game.LedSprite = null
let speed = 100
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
    if (en.isDeleted()) {
        if (en2.isDeleted()) {
            if (en3.isDeleted()) {
                endGame()
            }
        }
    }
})
loops.everyInterval(3000, function () {
    moveAllEnemies()
})
