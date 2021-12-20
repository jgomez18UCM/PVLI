import Button from "./button.js"

export default class RestartButton extends Button {
    constructor(scene, x, y) {
        super(scene, x, y, 'boton', 'Reiniciar', 0.95, 0.95);//0.95

        this.sprite.on("pointerdown", this.exit, this);
    }

    exit() {
        this.scene.scene.stop("Scene");
        this.scene.scene.start("menu");
    }
}