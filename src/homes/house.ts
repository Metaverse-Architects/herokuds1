import { TriggerBoxShape, TriggerComponent } from "@dcl/ecs-scene-utils"
import { Dash_Material } from "dcldash"
import { KBCulDeSac } from "src/exterior.ts/kb-cul-de-sac"
import { designStudio } from "src/furnitureSystem/designStudio"
import { ExitPlane } from "src/utils/exitPlane"
import { unloadStudio } from "src/utils/loadStudio"
import { modelList } from "src/utils/modelsClass"
import { movePlayerToVector3 } from "src/utils/movePlayerToVector3"
import { house_1860, house_1989, house_2345 } from "./house_list"
import { TransformData, transforms_0 } from "./transformData"

export class house extends Entity {
    transformData: TransformData
    models: Array<string>
    exitVec: Vector3
    exitLook: Vector3
    exitTransform: Transform

    public Exit = new ExitPlane()
  
      constructor(
        transformData: TransformData,
        models: Array<string>,
        exitVec: Vector3,
        exitLook: Vector3,
        exitTransform: Transform
      ){
          super()

          this.addComponent(new Transform())
    
          this.exitVec = exitVec
          this.exitLook = exitLook
          this.exitTransform = exitTransform

          this.transformData = transformData
          this.models = models

          this.models.forEach(model=>{
            let entity = new Entity()
            entity.addComponent(new GLTFShape(model))
            entity.setParent(this)

            if(model=='models/KB_Homes/1860/main/KBH_Interior_model1860_SlidingGlassDoor.glb'){
              let triggerbox = new TriggerBoxShape(new Vector3(4,2,7), new Vector3(13.53,1.18,13.32))
              
              let animator = new Animator()
              entity.addComponent(animator)

              const doorOpening = new AnimationState('DoorOpening', {layer:0})
              doorOpening.looping = false
              doorOpening.playing = false

              const doorClosing = new AnimationState('DoorClosing', {layer:1})
              doorClosing.looping = false
              doorClosing.playing = false

              animator.addClip(doorOpening)
              animator.addClip(doorClosing)

              entity.addComponent(new TriggerComponent(
                triggerbox,
                {
                  onCameraEnter: ()=>{
                    doorOpening.play()
                    doorClosing.stop()
                  },
                  onCameraExit: ()=>{
                    doorOpening.stop()
                    doorClosing.play()
                  }
                }

              ))
            }
          })



          // this.Exit.setParent(this)
          // this.Exit.addComponent(exitTransform)
          // this.Exit.addComponent(Dash_Material.transparent())
          // this.Exit.onCameraEnter = () =>{

          //   if(this==house_1860){
          //     unloadStudio(studio_1860, KBCulDeSac)
          //     movePlayerToVector3 (
          //       this.exitVec,
          //       this.exitLook,
          //     )

          //   }
          //   if(this==house_1989){
          //     unloadStudio(studio_1860, KBCulDeSac)
          //     movePlayerToVector3 (
          //       this.exitVec,
          //       this.exitLook,
          //     )

          //   }
          //   if(this==house_2345){
          //     unloadStudio(studio_1860, KBCulDeSac)
          //     movePlayerToVector3 (
          //       this.exitVec,
          //       this.exitLook,
          //     )
          //   }
          // }
          





            
          
      }
  }


 


 