controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -150
})
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
let cloudSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.vy = 100
tiles.setCurrentTilemap(tilemap`level`)
tiles.setTileAt(tiles.getTileLocation(0, 14), assets.tile`myTile`)
tiles.setTileAt(tiles.getTileLocation(0, 15), assets.tile`myTile`)
tiles.setTileAt(tiles.getTileLocation(1, 14), assets.tile`myTile`)
