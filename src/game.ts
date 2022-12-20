import { addTestCube } from "@dcl/ecs-scene-utils";
import { Dash_Tweaker } from "dcldash";
import { KBCulDeSac } from "./exterior.ts/kb-cul-de-sac";
import { designStudioCanvas } from "./furnitureSystem/database";
import { designStudio, kitchenMenuCanvas } from "./furnitureSystem/designStudio";
import { house_1860, house_2345 } from "./homes/house_list";
import { loadStudio, unloadStudio } from "./utils/loadStudio";

// export const studio_1860 = new designStudio(house_1860)
// // export const studio_2345 = new designStudio(house_2345)
// const material = new Material()
// material.albedoColor = Color3.Red()

// const magicBox = new Entity()
// magicBox.addComponent(new BoxShape())
// magicBox.addComponent(new Transform({
//     position: new Vector3(21.50,1.18,23.17)
// }))
// magicBox.addComponent(material)
// engine.addEntity(magicBox)
// magicBox.getComponent(BoxShape).withCollisions = false
// Dash_Tweaker(magicBox)

engine.addEntity(KBCulDeSac)

// designStudioCanvas.visible = true


// let cube_1 = new Entity()
// cube_1.addComponent(new BoxShape())
// cube_1.addComponent(new Transform({
//     position: new Vector3(7.11,0.88,71.73)
// }))
// cube_1.addComponent(new OnPointerDown(e=>{
//     loadStudio(studio)
// }
// )) 
// engine.addEntity(cube_1)

// let cube_2 = new Entity()
// cube_2.addComponent(new BoxShape())
// cube_2.addComponent(new Transform({
//     position: new Vector3(16.43,0.88,72.00)
// }))
// cube_2.addComponent(new OnPointerDown(e=>{
//     unloadStudio(studio)
// }
// ))
// engine.addEntity(cube_2)

// export let newArray = new Array
//     newArray['1860'][0] = 'TEST'
//     newArray['1860'][1] = 'TEST'
//     newArray['1860'][2] = 'TEST'
//     newArray['1860'][3] = 'TEST'

//     newArray['2345'][0] = 'TEST2 BABBYY'
//     newArray['2345'][1] = 'TEST2 BABBYY'
//     newArray['2345'][2] = 'TEST2 BABBYY'
//     newArray['2345'][3] = 'TEST2 BABBYY'

// log(newArray['1860'][0])
// log(newArray['2345'][0])
