
function menu() {
    choice = 0
    choice = game.askForNumber("Choose game: (1) Thick Woods, (2) Valley Grove", 1)
    gra = choice
    game.splash(convertToText(gra))
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . f f f f f f f f f f f f f f f f . . . . . . .
        . . . . . . . . f d d d d d d d d d d d d d d d d f . . . . . .
        . . . . . . . f d d d 3 3 3 3 3 3 3 3 3 3 3 3 d d d f . . . . .
        . . . . . . . f d d 3 3 3 3 3 3 3 2 3 3 2 3 3 3 d d f . . . . .
        . . . . . . . f d 3 3 2 3 3 3 3 3 3 3 3 3 3 3 3 3 d f . . . . .
        . . . . . . . f d 3 3 3 3 3 3 3 3 3 3 3 3 3 f f 3 d f f f . . .
        . . . . . . . f d 3 3 3 3 3 3 3 3 3 3 3 3 f b b f d f b b f . .
        . . . f f . . f d 3 3 3 3 3 3 3 2 3 3 3 3 f b b b f b b b f . .
        . . f b b f . f d 3 3 3 3 3 3 3 3 3 3 3 3 f b b b b b b b f . .
        . . f b b b f f d 3 3 3 2 3 3 3 3 3 3 3 f b b 1 f b 1 f b b f .
        . . . f f b b f d 3 3 3 3 3 3 3 2 3 3 3 f b b f f b f f b b f .
        . . . . . f f f d d 3 3 3 2 3 3 3 3 3 3 f b 3 b b b b b 3 b f .
        . . . . . . . f d d d 3 3 3 3 3 3 3 3 3 3 f b b f f f b b f . .
        . . . . . . f b f d d d d d d d d d d d d d f b b b b b f . . .
        . . . . . . f b b f f f f f f f f f f f f f f f f f f f . . . .
        . . . . . . f f f . . b b f . . . . . . b b f . b b f . . . . .
        . . . . . . . . . . . f f f . . . . . . f f f . f f f . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
    mySprite.x = 0
    mySprite.x = 0
    menu()
})



