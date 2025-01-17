scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    mySprite.vy = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (canJump == 1) {
        mySprite.vy = -160
        canJump = 0
        mySprite.vy = 0
        pause(3000)
        canJump = 1
    }
})
let canJump = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . 1 1 1 1 1 1 . . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    . . 2 2 2 2 3 3 2 3 . . . . . . 
    . 2 2 3 2 3 3 3 2 3 3 3 . . . . 
    . 2 2 3 2 2 3 3 3 2 3 3 3 . . . 
    . 2 2 2 3 3 3 3 2 2 2 2 . . . . 
    . . . 3 3 3 3 3 3 3 3 . . . . . 
    . . 2 2 2 1 2 2 2 . . . . . . . 
    . 2 2 2 2 1 2 2 1 2 2 2 . . . . 
    2 2 2 2 2 1 1 1 1 2 2 2 2 . . . 
    3 3 3 2 1 3 1 1 3 1 2 3 3 . . . 
    3 3 3 3 1 1 1 1 1 1 3 3 3 . . . 
    3 3 3 1 1 1 1 1 1 1 1 3 3 . . . 
    . . 1 1 1 1 . 1 1 1 1 . . . . . 
    . 2 2 2 2 . . . 2 2 2 2 . . . . 
    2 2 2 2 2 . . . 2 2 2 2 2 . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 13))
controller.moveSprite(mySprite, 100, 0)
mySprite.vy = 100
tiles.setCurrentTilemap(tilemap`level`)
tiles.setTileAt(tiles.getTileLocation(0, 14), assets.tile`myTile`)
tiles.setTileAt(tiles.getTileLocation(0, 15), assets.tile`myTile`)
tiles.setTileAt(tiles.getTileLocation(1, 14), assets.tile`myTile`)
scene.cameraFollowSprite(mySprite)
canJump = 1
forever(function () {
    mySprite.y += 2
})
