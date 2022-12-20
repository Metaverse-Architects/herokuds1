import * as utils from '@dcl/ecs-scene-utils'
import { Dash_Material } from 'dcldash'

export class TriggerDoor extends Entity {
  private shape: BoxShape = new BoxShape()
  public onCameraEnter: () => void = () => { }
  public onCameraExit: () => void = () => { }

  private triggerBox = new utils.TriggerBoxShape(new Vector3(3, 3, 3))

  constructor() {
    super()
    this.addComponent(this.shape)
    this.addComponent(new Transform())
    this.getComponent(BoxShape).visible = false
    this.getComponent(BoxShape).withCollisions = false
    this.updateOnTrigger()
  
  }


  private updateOnTrigger() {
    this.addComponentOrReplace(
      new utils.TriggerComponent(
        this.triggerBox, //shape
        {
          onCameraEnter: () => {
            log('triggered!')
            this.onCameraEnter()
          },
          onCameraExit: () => {
            log('Exit!')
            this.onCameraExit()
          }
          
        }
        ,



      )
    )
  }
  setSize(){
      
    let size = this.getComponent(Transform).scale
    this.triggerBox.size = size

  }
}