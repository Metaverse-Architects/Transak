export class Button extends Entity {
  // private shape = new GLTFShape('')
  public onClick: () => void = () => {}
  private message: string = 'Click'
  constructor() {
    super()

    this.addComponent(new Transform())
    // this.addComponent(this.shape)
    this.updateOnPointerDown()
  }

  private updateOnPointerDown() {
    this.addComponentOrReplace(
      new OnPointerDown(
        () => {
          this.onClick()
        },
        {
          hoverText: this.message,
          distance: 4
        }
      )
    )
  }

  setMessage(message: string) {
    this.message = message
    this.updateOnPointerDown()
  }
}
