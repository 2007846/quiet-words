controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.setBackgroundImage(assets.image`Tittle screen`)
let mySprite = sprites.create(assets.image`Little boy front`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
