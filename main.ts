sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite2.setPosition(randint(10, 110), randint(10, 110))
    mySprite3.setPosition(randint(10, 110), randint(10, 110))
})
info.onLifeZero(function () {
    game.gameOver(true)
})
info.onScore(50, function () {
    game.gameOver(true)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
scene.setBackgroundColor(9)
mySprite2 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    .........bbb........
    .........bbb........
    .....7977777777.....
    .....7777777777.....
    ......66666666......
    ......77777777......
    .....7797777777.....
    .....7977777777.....
    .....7977777777.....
    .....7777777777.....
    .....7777777777.....
    .....7777777776.....
    .....7777777776.....
    ......76666666......
    ....................
    ....................
    `, SpriteKind.Player)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(20, 26)
mySprite2.setPosition(68, 50)
mySprite3 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ........bbbb........
    ........bbbb........
    .....7977777777.....
    .....7777777777.....
    ......66666666......
    ......77777777......
    .....7797777777.....
    .....7977777777.....
    .....7977777777.....
    .....7777777777.....
    .....7777777777.....
    .....7777777776.....
    .....7777777776.....
    ......76666666......
    ....................
    ....................
    `, SpriteKind.Player)
info.setScore(0)
info.startCountdown(50)
controller.moveSprite(mySprite)
