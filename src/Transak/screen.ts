import { Button } from './button'
import resources from './resources'
import { Dash_Material, Dash_Wait } from 'dcldash'
import { getUserPublicKey } from '@decentraland/Identity'
import locations from './locations'

export class Screen extends Entity {
  private clicktostart = new Entity()

  private MainMenu = new Entity()
  private buycryptobutton = new Button()
  private abouttransakbutotn = new Button()
  private sellcrypto = new Button()
  private becomepartner = new Button()

  //Screen [2]
  private newuserpage = new Entity()
  private tutorialyes = new Button()
  private tutorialno = new Button()

  //Screen [3]
  private tutorialstep1 = new Entity()
  private tutorialstep1b = new Button()

  //Screen [4]
  private tutorialstep2 = new Entity()
  private tutorialstep2b = new Button()

  //Screen [5]
  private tutorialstep3 = new Entity()
  private tutorialstep3b = new Button()

  //Screen [6]
  private about_transak_1 = new Entity()
  private about_transak_1b = new Button()

  //Screen 7
  private about_transak_2 = new Entity()
  private about_transak_2b = new Button()

  //Screen 8
  private about_transak_3 = new Entity()
  private about_transak_3b1 = new Button()
  private about_transak_3b2 = new Button()
  private about_transak_3b3 = new Button()

  //Screen 9
  private screen_9 = new Entity()
  private screen_9b = new Button()

  constructor(public startLoc: Transform, private hideLoc: Transform, public showLoc: Transform) {
    super()

    //Screen Holder
    this.addComponent(new GLTFShape('models/TransakUn2/Transak_UI_solidBG.glb'))
    const hideLoc1 = this.hideLoc
    this.addComponent(hideLoc1)

    this.clicktostart.addComponent(new BoxShape())
    this.clicktostart.setParent(this)
    this.clicktostart.addComponent(this.startLoc)

    this.clicktostart.addComponent(
      new OnPointerDown((e) => {
        this.startTrigger()
      })
    )

    this.clicktostart.addComponent(Dash_Material.transparent())

    engine.addEntity(this)

    this.menuCaller()
    this.publicKey()
  }

  menuCaller() {
    this.MainMenu.addComponent(resources.ui.MainMenu)
    this.MainMenu.setParent(this)
    this.newuserpage.addComponent(resources.ui.newuser)
    this.newuserpage.setParent(this)

    this.tutorialstep1.addComponent(resources.ui.tutorialstep1)
    this.tutorialstep1.setParent(this)
    this.tutorialstep2.addComponent(resources.ui.tutorialstep2)
    this.tutorialstep2.setParent(this)
    this.tutorialstep3.addComponent(resources.ui.tutorialstep3)
    this.tutorialstep3.setParent(this)

    this.about_transak_1.addComponent(resources.ui.about_transak_1)
    this.about_transak_1.setParent(this)

    this.about_transak_2.addComponent(resources.ui.about_transak_2)
    this.about_transak_2.setParent(this)

    this.about_transak_3.addComponent(resources.ui.about_transak_3)
    this.about_transak_3.setParent(this)

    this.screen_9.addComponent(resources.ui.screen_9)
    this.screen_9.setParent(this)

    this.buttonCaller()
  }

  buttonCaller() {
    this.buycryptobutton.addComponent(resources.ui.buycryptobutton)
    this.buycryptobutton.setParent(this.MainMenu)
    this.abouttransakbutotn.addComponent(resources.ui.aboutransak)
    this.abouttransakbutotn.setParent(this.MainMenu)
    this.sellcrypto.addComponent(resources.ui.sellcrypto)
    this.sellcrypto.setMessage('Coming Soon')
    this.sellcrypto.setParent(this.MainMenu)
    this.becomepartner.addComponent(resources.ui.becomepartner)
    this.becomepartner.setParent(this.MainMenu)

    this.tutorialyes.addComponent(resources.ui.tutorialyes)
    this.tutorialyes.setParent(this.newuserpage)
    this.tutorialno.addComponent(resources.ui.tutorialno)
    this.tutorialno.setParent(this.newuserpage)

    this.tutorialstep1b.addComponent(resources.ui.tutorialstep1but)
    this.tutorialstep1b.setParent(this.tutorialstep1)
    this.tutorialstep2b.addComponent(resources.ui.tutorialstep2but)
    this.tutorialstep2b.setParent(this.tutorialstep2)
    this.tutorialstep3b.addComponent(resources.ui.tutorialstep3but)
    this.tutorialstep3b.setParent(this.tutorialstep3)

    this.about_transak_1b.addComponent(resources.ui.about_transak_1b)
    this.about_transak_1b.setParent(this.about_transak_1)

    this.about_transak_2b.addComponent(resources.ui.about_transak_2b)
    this.about_transak_2b.setParent(this.about_transak_2)

    this.about_transak_3b1.addComponent(resources.ui.about_transak_3)
    this.about_transak_3b2.addComponent(resources.ui.about_transak_3b2)
    this.about_transak_3b3.addComponent(resources.ui.about_transak_3b3)
    this.about_transak_3b1.setParent(this.about_transak_3)
    this.about_transak_3b2.setParent(this.about_transak_3)
    this.about_transak_3b3.setParent(this.about_transak_3)

    this.screen_9b.addComponent(resources.ui.screen_9b)
    this.screen_9b.setParent(this.screen_9)

    this.entityHider()
    this.buttonPathing()
  }

  entityHider() {
    ;[
      this.newuserpage,
      this.tutorialstep1,
      this.tutorialstep2,
      this.tutorialstep3,
      this.about_transak_1,
      this.about_transak_2,
      this.about_transak_3,
      this.screen_9
    ].forEach((entity) => {
      entity.getComponentOrCreate(Transform).scale.set(0, 0, 0)
    })
  }
  publicKey() {
    const publicKeyRequest = executeTask(async () => {
      const publicKey = await getUserPublicKey()
      log(publicKey)
      return publicKey
    })

    this.tutorialno.onClick = () => {
      openExternalURL(``),
        this.hide(this.newuserpage),
        this.show(this.MainMenu),
        Dash_Wait(() => {
          this.endTrigger()
        }, 2)
    }
    this.tutorialstep3b.onClick = () => {
      openExternalURL(``),
        this.hide(this.tutorialstep3),
        this.show(this.MainMenu),
        Dash_Wait(() => {
          this.endTrigger()
        }, 2)
    }
  }
  buttonPathing() {
    this.buycryptobutton.onClick = () => {
      log('this was clicked'), this.hide(this.MainMenu), this.show(this.newuserpage)
    }

    this.tutorialyes.onClick = () => {
      this.show(this.tutorialstep1), this.hide(this.newuserpage)
    }

    this.tutorialstep1b.onClick = () => {
      this.hide(this.tutorialstep1), this.show(this.tutorialstep2)
    }
    this.tutorialstep2b.onClick = () => {
      this.hide(this.tutorialstep2), this.show(this.tutorialstep3)
    }
    this.tutorialstep3b.onClick = () => {
      this.hide(this.tutorialstep3), this.show(this.MainMenu), openExternalURL('')
    }

    this.abouttransakbutotn.onClick = () => {
      this.hide(this.MainMenu), this.show(this.about_transak_1)
    }
    this.about_transak_1b.onClick = () => {
      this.hide(this.about_transak_1), this.show(this.about_transak_2)
    }
    this.about_transak_2b.onClick = () => {
      this.hide(this.about_transak_2), this.show(this.about_transak_3)
    }

    this.about_transak_3b1.onClick = () => {
      this.hide(this.about_transak_3), openExternalURL(''), this.show(this.MainMenu)
    }
    this.about_transak_3b2.onClick = () => {
      this.hide(this.about_transak_3), this.show(this.screen_9)
    }
    this.about_transak_3b3.onClick = () => {
      this.hide(this.about_transak_3), this.show(this.MainMenu)
    }

    this.screen_9b.onClick = () => {
      this.hide(this.screen_9), this.show(this.MainMenu)
    }

    this.sellcrypto.onClick = () => {
      openExternalURL('https://transak.com/')
    }
  }

  show(entity: Entity) {
    entity.getComponentOrCreate(Transform).scale.set(1, 1, 1)
  }
  hide(entity: Entity) {
    entity.getComponentOrCreate(Transform).scale.set(0, 0, 0)
  }

  startTrigger() {
    this.clicktostart.getComponent(Transform).scale.set(0, 0, 0)

    this.removeComponent(Transform)
    this.addComponent(this.showLoc)
  }

  endTrigger() {
    this.removeComponent(Transform)
    this.addComponent(this.hideLoc)
    this.clicktostart.getComponent(Transform).scale.set(1, 1, 1)
  }
}
