export default {
  //Screens are numbered in an Clockwise Fashion.

  screen1: {
    startboxLoc: new Transform({
      position: new Vector3(-0.01, 1.75, -0.58),
      scale: new Vector3(0.64, 0.8, 0.1),
      rotation: new Quaternion().setEuler(18.9, 360.0, 360.0)
    }),

    hideLoc: new Transform({
      position: new Vector3(0, 0.01, 0.02)
    }),

    showLoc: new Transform({
      position: new Vector3(0, 0.01, -0.03)
    })
  },

  screen2: {
    startboxLoc: new Transform({
      position: new Vector3(0.01, 1.75, -0.6),
      scale: new Vector3(0.7, 0.9, 0.1),
      rotation: new Quaternion().setEuler(18.9, 360.0, 360.0)
    }),

    hideLoc: new Transform({
      position: new Vector3(0.1, 0.0, 0.02),
      scale: new Vector3(1.0, 1.0, 1.0),
      rotation: new Quaternion().setEuler(0.0, 90.0, 0.0)
    }),
    showLoc: new Transform({
      position: new Vector3(-0.03, 0.0, 0.02),
      scale: new Vector3(1.0, 1.0, 1.0),
      rotation: new Quaternion().setEuler(0.0, 90.0, 0.0)
    })
  },

  screen3: {
    startboxLoc: new Transform({
      position: new Vector3(-0.02, 1.75, -0.5),
      scale: new Vector3(0.702, 0.9, 0.1),
      rotation: new Quaternion().setEuler(18.9, 360.0, 360.0)
    }),

    hideLoc: new Transform({
      position: new Vector3(-0.03, 0.0, -0.01),
      scale: new Vector3(1.0, 1.0, 1.0),
      rotation: new Quaternion().setEuler(0.0, 180.0, 0.0)
    }),

    showLoc: new Transform({
      position: new Vector3(-0.03, 0.0, 0.02),
      scale: new Vector3(1.0, 1.0, 1.0),
      rotation: new Quaternion().setEuler(0.0, 180.0, 0.0)
    })
  },

  screen4: {
    startboxLoc: new Transform({
      position: new Vector3(-0.01, 1.75, -0.5),
      scale: new Vector3(0.702, 0.9, 0.1),
      rotation: new Quaternion().setEuler(18.9, 360.0, 360.0)
    }),

    hideLoc: new Transform({
      position: new Vector3(-0.01, 0.0, 0.02),
      scale: new Vector3(1.0, 1.0, 1.0),
      rotation: new Quaternion().setEuler(0.0, 270.0, 0.0)
    }),

    showLoc: new Transform({
      position: new Vector3(0.04, 0.0, 0.02),
      scale: new Vector3(1.0, 1.0, 1.0),
      rotation: new Quaternion().setEuler(0.0, 270.0, 0.0)
    })
  }
}
