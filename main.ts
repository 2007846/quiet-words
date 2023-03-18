controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`kid walking left`,
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`kid walking right`,
    100,
    true
    )
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Tittle screen`)
pauseUntil(() => controller.A.isPressed())
scene.setBackgroundImage(assets.image`myImage`)
mySprite = sprites.create(assets.image`Little boy front`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
