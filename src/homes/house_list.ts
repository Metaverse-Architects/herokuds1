import { models_1860 } from "src/forARCHITECTS/models/1860_models"
import { models_1989 } from "src/forARCHITECTS/models/1989_models"
import { models_2345 } from "src/forARCHITECTS/models/2345_models"
import { designStudio } from "src/furnitureSystem/designStudio"
import { house } from "./house"
import { TransformData, transforms_0 } from "./transformData"



  let planeExit1860_transform = new Transform({
    position: new Vector3(22.520, 1.180, 30.940),
    scale: new Vector3(3.400, 1.400, 3.000),
    rotation: new Quaternion().setEuler(1.000, 341.000, 92.000),
  })
  let exit_1860 = new Vector3(46.91, 1.03, 25.59)
  let exit_look_1860 = new Vector3(42.24, 0.88, 33.10)


export const house_1860 = new house(
  transforms_0,
  models_1860,
  exit_1860,
  exit_look_1860,
  planeExit1860_transform
)

let planeExit1989_transform = new Transform({
  position: new Vector3(15.960, 1.180, 22.650),
  scale: new Vector3(3.400, 1.000, 2.000),
  rotation: new Quaternion().setEuler(1.000, 71.000, 92.000),
})
  let exit_1989 = new Vector3(17.71,0.98,25.72)
  let exit_look_1989 = new Vector3(26.40,1.04,33.98)


export const house_1989 = new house(
  transforms_0,
  models_1989,
  exit_1989,
  exit_look_1989,
  planeExit1989_transform
)

let planeExit2345_transform = new Transform({
  position: new Vector3(32.560, 1.180, 40.360),
  scale: new Vector3(3.400, 1.400, 2.000),
  rotation: new Quaternion().setEuler(356.000, 181.000, 92.000),
})

  let exit_2345 = new Vector3(31.94,0.93,20.66)
  let exit_look_2345 = new Vector3(31.73,0.88,26.06)


export const house_2345 = new house(
  transforms_0,
  models_2345,
  exit_2345,
  exit_look_2345,
  planeExit2345_transform
)