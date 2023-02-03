import resources from './resources'
import { Screen } from './screen'
import { getUserPublicKey } from '@decentraland/Identity'
import locations from './locations'

export class ATM extends Entity {
  private model = new Entity()
  private avatarModifier = new Entity()
  private Screen1 = new Screen(locations.screen1.startboxLoc, locations.screen1.hideLoc, locations.screen1.showLoc)
  private Screen2 = new Screen(locations.screen2.startboxLoc, locations.screen2.hideLoc, locations.screen2.showLoc)
  private Screen3 = new Screen(locations.screen3.startboxLoc, locations.screen3.hideLoc, locations.screen3.showLoc)
  private Screen4 = new Screen(locations.screen4.startboxLoc, locations.screen4.hideLoc, locations.screen4.showLoc)

  constructor() {
    super()
    this.model.addComponent(resources.models.atm)
    this.avatarModifier.addComponent(
      new CameraModeArea({
        area: { box: new Vector3(10, 10, 10) },
        cameraMode: CameraMode.FirstPerson
      })
    )
    this.avatarModifier.addComponent(
      new Transform({
        position: new Vector3(0.0, 2.0, 0.0),
        scale: new Vector3(4.8, 4.8, 4.8),
        rotation: new Quaternion().setEuler(0.0, 0.0, 0.0)
      })
    )
    this.Screen1.setParent(this.model)
    this.Screen2.setParent(this.model)
    this.Screen3.setParent(this.model)
    this.Screen4.setParent(this.model)
    this.model.setParent(this)
  }
}
