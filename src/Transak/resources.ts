export default {
  ui: {
    //Scene0
    clicktostart: new GLTFShape('models/TransakUn2/Transak_UI_z_0.glb'),

    //MainMenu [1]
    MainMenu: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_01.glb'),
    buycryptobutton: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_01B1.glb'),
    sellcrypto: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_01B2.glb'),
    aboutransak: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_01B3.glb'),
    becomepartner: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_01B4.glb'),

    //NewUserWelcome! [2]
    newuser: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_02.glb'),
    tutorialyes: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_02B1.glb'),
    tutorialno: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_02B2.glb'),

    //Screen [3]
    tutorialstep1: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_03.glb'),
    tutorialstep1but: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_03B.glb'),

    //screen [4]
    tutorialstep2: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_04.glb'),
    tutorialstep2but: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_04B.glb'),

    //Screen [5]
    tutorialstep3: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_05.glb'),
    tutorialstep3but: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_05B.glb'),

    //Screen [6]
    about_transak_1: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_06.glb'),
    about_transak_1b: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_06B.glb'),

    //Screen [7]
    about_transak_2: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_07.glb'),
    about_transak_2b: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_07B.glb'),

    //Screen [8]
    about_transak_3: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_08.glb'),
    about_transak_3b1: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_08B1.glb'),
    about_transak_3b2: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_08B2.glb'),
    about_transak_3b3: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_08B3.glb'),

    //Screen [9]
    screen_9: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_09.glb'),
    screen_9b: new GLTFShape('models/Transak_UI_Y/Transak_UI_Y_09B.glb')
  },
  models: {
    atm: new GLTFShape('models/TransakUn2/Transak_ATM_01B.glb')
  },
  buttonlocs: {
    buttonyes: new Transform({
      position: new Vector3(8.13, 1.4, 7.42),
      scale: new Vector3(0.2, 0.1, 0.1),
      rotation: new Quaternion().setEuler(0.0, 0.0, 0.0)
    })
  }
}
