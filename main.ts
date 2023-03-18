controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game_State == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`kid walking left`,
        100,
        true
        )
        Player_Direction = 1
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (Game_State == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (Game_State == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game_State == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`kid walking right`,
        100,
        true
        )
        Player_Direction = 0
    }
})
function Title_Screen () {
    Game_State = 0
    scene.setBackgroundImage(assets.image`Tittle screen`)
    pauseUntil(() => controller.A.isPressed())
    Nav_Screen()
}
function Nav_Screen () {
    Game_State = 1
    scene.setBackgroundImage(assets.image`myImage`)
    mySprite = sprites.create(assets.image`Little boy front`, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 100)
    mySprite.setStayInScreen(true)
}
let Player_Direction = 0
let mySprite: Sprite = null
let Game_State = 0
Title_Screen()
