import { ATM } from './Transak/atm'

const atm = new ATM()
atm.addComponent(new Transform({ position: new Vector3(5.68, -0.12, 6.5), scale: new Vector3(1, 1, 1) }))
engine.addEntity(atm)
