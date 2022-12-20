@Component("TransformData")
export class TransformData {
  bathroom_faucets: Transform
  bathroom_flooring : Transform
  bathroom_lights : Transform
  bathroom_walltile : Transform
  kitchen_cabinets : Transform     
  kitchen_countertops : Transform  
  kitchen_faucets : Transform      
  kitchen_lighting : Transform
  constructor(
    bathroom_faucets:Transform,
    bathroom_flooring : Transform,
    bathroom_lights : Transform,
    bathroom_walltile : Transform,
    kitchen_cabinets : Transform   ,  
    kitchen_countertops : Transform  ,
    kitchen_faucets : Transform    ,  
    kitchen_lighting : Transform
    
    ){
    this.bathroom_faucets = bathroom_faucets
    this.bathroom_flooring = bathroom_flooring
    this.bathroom_lights = bathroom_lights
    this.bathroom_walltile = bathroom_walltile
    this.kitchen_cabinets = kitchen_cabinets
    this.kitchen_countertops = kitchen_countertops
    this.kitchen_faucets = kitchen_faucets
    this.kitchen_lighting = kitchen_lighting
  }
}

export const transforms_0 = new TransformData(
    //bathroom_faucets
    new Transform({
        position: new Vector3(0, 0, 0),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(1, 1, 1)
    }),
    //bathroom_flooring
    new Transform({
        position: new Vector3(0, 0, 0),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(1, 1, 1)
    }),
    //bathroom_lights
    new Transform({
        position: new Vector3(0, 0, 0),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(1, 1, 1)
    }),
    //bathroom_walltile
    new Transform({
        position: new Vector3(0, 0, 0),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(1, 1, 1)
    }),
    //kitchen_cabinets
    new Transform({
        position: new Vector3(0, 0, 0),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(1, 1, 1)
    }),
    //kitchen_countertops
    new Transform({
        position: new Vector3(0, 0, 0),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(1, 1, 1)
    }),
    //kitchen_faucets
    new Transform({
        position: new Vector3(0, 0, 0),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(1, 1, 1)
    }),
    //kitchen_lighting
    new Transform({
        position: new Vector3(0, 0, 0),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(1, 1, 1)
    })
)

