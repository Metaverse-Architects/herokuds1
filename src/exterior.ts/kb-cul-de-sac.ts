import { Dash_Material, Dash_Tweaker, Dash_Wait } from "dcldash"
import { bathroomMenuCanvas, designStudio, kitchenMenuCanvas } from "src/furnitureSystem/designStudio"
import { house_1860, house_1989, house_2345 } from "src/homes/house_list"
import { ExitPlane } from "src/utils/exitPlane"
import { loadStudio, unloadStudio } from "src/utils/loadStudio"
import { movePlayerToVector3 } from "src/utils/movePlayerToVector3"
import { TriggerButton } from "src/utils/triggerButton"
import * as utils from '@dcl/ecs-scene-utils'
import { designStudioCanvas } from "src/furnitureSystem/database"
import { TransformData } from "src/homes/transformData"
import { Lynn } from "src/lynn"

// export const studio_1860 = new designStudio(house_1860)

export const studio_2345 = new designStudio(house_2345)
export const studio_1860 = new designStudio(house_1860)
export const studio_1989 = new designStudio(house_1989)

export class exitBox extends Entity {

    private shape: PlaneShape = new PlaneShape()
    public onCameraEnter : () => void = () => {}
    private triggerBox = new utils.TriggerBoxShape()
  
    
    constructor(){
        super()
        this.addComponent(new Transform())
        this.addComponent(this.shape)
        this.updateOnTrigger()
    }
  
    private updateOnTrigger(){
        this.addComponentOrReplace(
            new utils.TriggerComponent(
              this.triggerBox, //shape
              {
                onCameraEnter : () => {

                if(studio_1860.alive == true){
                    log('1860 is alive')
                    studio_1860.studioUnloader()
                    studio_2345.studioUnloader()
                    studio_1989.studioUnloader()
                    engine.addEntity(studio_1989)
                    engine.removeEntity(studio_1989)
                    engine.removeEntity(studio_1860)
                    log('1860 was removed')
                    engine.removeEntity(this)
                    designStudioCanvas.visible = false

                    engine.addEntity(KBCulDeSac)
                }
                if(studio_1989.alive == true){
                    log('1989 is alive')
                    studio_1860.studioUnloader()
                    studio_1989.studioUnloader()
                    studio_2345.studioUnloader()
                    engine.removeEntity(studio_1989)
                    log('1989 was removed')
                    engine.removeEntity(this)
                    designStudioCanvas.visible = false
                    engine.addEntity(KBCulDeSac)
                }
                if(studio_2345.alive == true){
                    log('2345 is alive')
                    studio_1860.studioUnloader()
                    studio_2345.studioUnloader()
                    studio_1989.studioUnloader()
                    engine.addEntity(studio_1989)
                    engine.removeEntity(studio_1989)
                    engine.removeEntity(studio_2345)
                    log('2345 was removed')
                    engine.removeEntity(this)
                    designStudioCanvas.visible = false
                    kitchenMenuCanvas.visible = false
                    bathroomMenuCanvas.visible = false
                    engine.addEntity(KBCulDeSac)
                }
                
                this.onCameraEnter()
                }
                
                
                
              }
            )
          )
    }
  }

class KBCulDeSacInstance extends Entity {

    //environment
    private kBCulDeSacGeo = new Entity()
    private KbCulDeSacLandScape = new Entity()
    private elevation1860 = new Entity()
    private elevation2345 = new Entity()
    private elevation1989 = new Entity()

    //utils
    private triggerDoor1860 = new ExitPlane()
    private triggerElevation1860Button3 = new TriggerButton()
    private triggerElevation1860Button2 = new TriggerButton()
    private triggerGeneralButton1860 = new TriggerButton()

    private triggerDoor1989 = new ExitPlane()
    private triggerSpanishButton1989 = new TriggerButton()
    private triggerCraftsmanButton1989 = new TriggerButton()
    private triggerGeneralButton1989 = new TriggerButton()

    private triggerDoor2345 = new ExitPlane()
    private triggerSpanishButton2345 = new TriggerButton()
    private triggerCraftsmanButton2345 = new TriggerButton()
    private triggerFarmHouseButton2345 = new TriggerButton()

    private lynn = new Lynn()

    constructor() {
        super()
        this.addComponent(new GLTFShape("models/KB_Homes/Cul-de-Sac/KBH_Cul-de-sac_collider.glb"))
        this.kBCulDeSacGeo.addComponent(new GLTFShape('models/KB_Homes/Cul-de-Sac/GLTF_files_01_-_Exterior-CulDeSac-Yards/KBH_Cul-de-sac_MainGeo.gltf'))
        this.KbCulDeSacLandScape.addComponent(new GLTFShape("models/KB_Homes/Cul-de-Sac/GLTF_files_01_-_Exterior-CulDeSac-Yards/KBH_Cul-de-sac_landscape.gltf"))
        this.elevation1860.addComponent(new GLTFShape('models/KB_Homes/Cul-de-Sac/elevation_1860/KBH_Elevation_1860_1.glb'))
        this.elevation2345.addComponent(new GLTFShape('models/KB_Homes/Cul-de-Sac/elevation_2345/KBhomes_2345_elevation_farmhouse.glb'))
        this.elevation1989.addComponent(new GLTFShape('models/KB_Homes/Cul-de-Sac/elevation_1989/KBhomes_1989_elevation_farmhouse.glb'))

        this.kBCulDeSacGeo.setParent(this)
        this.KbCulDeSacLandScape.setParent(this)
        this.elevation1860.setParent(this)
        this.elevation2345.setParent(this)
        this.elevation1989.setParent(this)

        this.triggerDoors1860()
        this.triggerDoors1989()
        this.triggerDoors2345()
        this.createTriggerButtons()
        this.preloads()
        this.createNPC()

        engine.addEntity(this)
    }
    createNPC() {
        engine.addEntity(this.lynn)
        this.lynn.setParent(this)
    }
    preloads(){
        [
            house_1860,
            house_2345,
            house_1989
        ].forEach(house=>{
            house.getComponent(Transform).scale.setAll(0.001)
            engine.addEntity(house)
            Dash_Wait(()=>{
                engine.removeEntity(house) 
                house.getComponent(Transform).scale.setAll(1)},5)
        })
    }

    triggerDoors1860() {
        [this.triggerDoor1860].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.triggerDoor1860.addComponentOrReplace(new Transform({
            position: new Vector3(49.200, 1.280, 23.820),
            scale: new Vector3(1.400, 2.000, 3.000),
            rotation: new Quaternion().setEuler(1.000, 311.000, 2.000),
        }))
        this.triggerDoor1860.onCameraEnter = () => this.enter1860(
            new Vector3(22.73, 1.18, 27.68),
            new Vector3(22.51, 1.18, 21.04),
        )
    }
    enter1860(position: Vector3, direction: Vector3) {
        let exitPlane = new exitBox()
        exitPlane.addComponentOrReplace(new Transform({
            position: new Vector3(22.21,1.58,31.31),
            scale: new Vector3(1.400, 2.000, 3.000),
            rotation: new Quaternion().setEuler(1.000, 311.000, 2.000),
        }))
        exitPlane.onCameraEnter =()=> movePlayerToVector3(house_1860.exitVec, house_1860.exitLook)
        engine.addEntity(exitPlane)
        loadStudio(studio_1860, this)
        studio_1860.furnitureTransformSetter()
        studio_1989.furnitureSystem(1860)
        movePlayerToVector3(position, direction)
    }
    triggerDoors2345() {
        [this.triggerDoor2345].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.triggerDoor2345.addComponentOrReplace(new Transform({
            position: new Vector3(33.140, 1.180, 15.270),
            scale: new Vector3(2.600, 4.700, 1.000),
            rotation: new Quaternion().setEuler(1.000, 356.000, 272.000),
        }))
        this.triggerDoor2345.onCameraEnter = () => this.enter2345(
            new Vector3(32.31,1.18,37.52),
            new Vector3(32.44, 1.18, 34.47),
        )

    }
    enter2345(position: Vector3, direction: Vector3) {
        let exitPlane = new exitBox()
        exitPlane.addComponentOrReplace(new Transform({
            position: new Vector3(32.54,1.18,40.08),
            scale: new Vector3(1.400, 2.000, 3.000),
            rotation: new Quaternion().setEuler(1.000, 311.000, 2.000),
        }))
        exitPlane.onCameraEnter =()=> movePlayerToVector3(house_2345.exitVec, house_2345.exitLook)
        engine.addEntity(exitPlane)
        loadStudio(studio_2345,this)
        studio_2345.furnitureTransformSetter()
        studio_1989.furnitureSystem(2345)
        movePlayerToVector3(position, direction)
    }
    triggerDoors1989() {
        [this.triggerDoor1989].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.triggerDoor1989.addComponentOrReplace(new Transform({
            position: new Vector3(16.310, 1.680, 23.640),
            scale: new Vector3(4.400, 2.000, 3.000),
            rotation: new Quaternion().setEuler(1.000, 41.000, 2.000),
        }))
        this.triggerDoor1989.onCameraEnter = () => this.enter1989(
            new Vector3(17.55,1.18,22.91),
            new Vector3(33.24,1.18,22.38),
        )

    }
    enter1989(position: Vector3, direction: Vector3) {
        let exitPlane = new exitBox()
        exitPlane.addComponentOrReplace(new Transform({
            position: new Vector3(15.71,1.18,22.70),
            scale: new Vector3(1.400, 2.000, 3.000),
            rotation: new Quaternion().setEuler(1.000, 311.000, 2.000),
        }))
        exitPlane.onCameraEnter =()=> movePlayerToVector3(house_1989.exitVec, house_1989.exitLook)
        engine.addEntity(exitPlane)
        loadStudio(studio_1989, this)
        studio_1989.furnitureTransformSetter()
        studio_1989.furnitureSystem(1989)
        movePlayerToVector3(position, direction)
    }


    //Connect to UI Choices
    createTriggerButtons() {
        [this.triggerSpanishButton1989, this.triggerCraftsmanButton1989, this.triggerGeneralButton1989,
        this.triggerGeneralButton1860, this.triggerElevation1860Button2, this.triggerElevation1860Button3,
        this.triggerFarmHouseButton2345, this.triggerCraftsmanButton2345, this.triggerSpanishButton2345].forEach(models => {
            models.setParent(this)
        })
        //1860
        this.triggerGeneralButton1860.addComponentOrReplace(new Transform({
        }))
        this.triggerGeneralButton1860.onClick = () => this.general1860()
        this.triggerGeneralButton1860.setMessage("Main")
        this.triggerGeneralButton1860.addComponentOrReplace(new GLTFShape('models/KB_Homes/Cul-de-Sac/buttons/1860_craftsman_elevation_selection.gltf'))

        this.triggerElevation1860Button2.addComponentOrReplace(new Transform({
        }))
        this.triggerElevation1860Button2.addComponentOrReplace(new GLTFShape('models/KB_Homes/Cul-de-Sac/buttons/1860_farmhouse_elevation_selection.gltf'))
        this.triggerElevation1860Button2.onClick = () => this.ranch1860()
        this.triggerElevation1860Button2.setMessage("Ranch")

        this.triggerElevation1860Button3.addComponentOrReplace(new Transform({
        }))
        this.triggerElevation1860Button3.addComponentOrReplace(new GLTFShape('models/KB_Homes/Cul-de-Sac/buttons/1860_spanish_elevation_selection.gltf'))
        this.triggerElevation1860Button3.onClick = () => this.springMountain1860()
        this.triggerElevation1860Button3.setMessage("Spring Mountain")

        //1989
        this.triggerSpanishButton1989.addComponentOrReplace(new Transform({
        }))
        this.triggerSpanishButton1989.addComponentOrReplace(new GLTFShape('models/KB_Homes/Cul-de-Sac/buttons/1989_spanish_elevation_selection.gltf'))
        this.triggerSpanishButton1989.onClick = () => this.spanish1989()
        this.triggerSpanishButton1989.setMessage("Spanish")

        this.triggerCraftsmanButton1989.addComponentOrReplace(new Transform({
        }))
        this.triggerCraftsmanButton1989.addComponentOrReplace(new GLTFShape('models/KB_Homes/Cul-de-Sac/buttons/1989_craftsman_elevation_selection.gltf'))
        this.triggerCraftsmanButton1989.onClick = () => this.craftsman1989()
        this.triggerCraftsmanButton1989.setMessage("Craftsman")

        this.triggerGeneralButton1989.addComponentOrReplace(new Transform({
        }))
        this.triggerGeneralButton1989.addComponentOrReplace(new GLTFShape('models/KB_Homes/Cul-de-Sac/buttons/1989_contemporary_elevation_selection.gltf'))
        this.triggerGeneralButton1989.onClick = () => this.farmhouse1989()
        this.triggerGeneralButton1989.setMessage("Farm House")

        //2345
        this.triggerSpanishButton2345.addComponentOrReplace(new Transform({
        }))
        this.triggerSpanishButton2345.addComponentOrReplace(new GLTFShape('models/KB_Homes/Cul-de-Sac/buttons/2345_spanish_elevation_selection.gltf'))
        this.triggerSpanishButton2345.onClick = () => this.spanish2345()
        this.triggerSpanishButton2345.setMessage("Spanish")

        this.triggerCraftsmanButton2345.addComponentOrReplace(new Transform({
        }))
        this.triggerCraftsmanButton2345.addComponentOrReplace(new GLTFShape('models/KB_Homes/Cul-de-Sac/buttons/2345_craftsman_elevation_selection.gltf'))
        this.triggerCraftsmanButton2345.onClick = () => this.craftsman2345()
        this.triggerCraftsmanButton2345.setMessage("Craftsman")

        this.triggerFarmHouseButton2345.addComponentOrReplace(new Transform({
        }))
        this.triggerFarmHouseButton2345.addComponentOrReplace(new GLTFShape('models/KB_Homes/Cul-de-Sac/buttons/2345_farmhouse_elevation_selection.gltf'))
        this.triggerFarmHouseButton2345.onClick = () => this.farmhouse2345()
        this.triggerFarmHouseButton2345.setMessage("Farm House")


    }
    //1860
    general1860() {
        this.elevation1860.addComponentOrReplace(new GLTFShape('models/KB_Homes/Cul-de-Sac/elevation_1860/KBH_Elevation_1860_1.glb'))
    }
    ranch1860() {
        this.elevation1860.addComponentOrReplace(new GLTFShape('models/KB_Homes/Cul-de-Sac/elevation_1860/KBhomes_1860_elevation_ranch.glb'))
    }
    springMountain1860() {
        this.elevation1860.addComponentOrReplace(new GLTFShape('models/KB_Homes/Cul-de-Sac/elevation_1860/KBhomes_1860_elevation_spring_mountain.glb'))
    }

    //1989
    spanish1989() {
        log("spanish house")
        this.elevation1989.addComponentOrReplace(new GLTFShape("models/KB_Homes/Cul-de-Sac/elevation_1989/KBhomes_1989_elevation_spanish.glb"))
    }
    craftsman1989() {
        log("craftsman house")
        this.elevation1989.addComponentOrReplace(new GLTFShape("models/KB_Homes/Cul-de-Sac/elevation_1989/KBhomes_1989_elevation_craftsman.glb"))
    }
    farmhouse1989() {
        log("farm house")
        this.elevation1989.addComponentOrReplace(new GLTFShape('models/KB_Homes/Cul-de-Sac/elevation_1989/KBhomes_1989_elevation_farmhouse.glb'))
    }

    //2345

    spanish2345() {
        log("spanish house")
        this.elevation2345.addComponentOrReplace(new GLTFShape("models/KB_Homes/Cul-de-Sac/elevation_2345/KBhomes_2345_elevation_spanish.glb"))
    }
    craftsman2345() {
        log("craftsman house")
        this.elevation2345.addComponentOrReplace(new GLTFShape("models/KB_Homes/Cul-de-Sac/elevation_2345/KBhomes_2345_elevation_craftsman.glb"))
    }
    farmhouse2345() {
        log("farm house")
        this.elevation2345.addComponentOrReplace(new GLTFShape('models/KB_Homes/Cul-de-Sac/elevation_2345/KBhomes_2345_elevation_farmhouse.glb'))
    }
}



export const KBCulDeSac = new KBCulDeSacInstance()

