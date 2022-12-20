import { Dash_Material } from "dcldash";
import { modelList } from "src/utils/modelsClass";


export const models_1860 = new Array
models_1860[0] = 'models/KB_Homes/1860/main/KBH_Interior_model1860_MainGeo.glb'
models_1860[1] = 'models/KB_Homes/1860/main/KBH_interior_1860_furniture2.glb'
models_1860[2] = 'models/KB_Homes/interior-1860/custom_assets/KBH_Interior_model1860_FloorSecond1.glb'
models_1860[3] = 'models/KB_Homes/Cul-de-Sac/GLTF_files_01_-_Exterior-CulDeSac-Yards/KBH_Interior_model1860_yard.gltf'
models_1860[4] = 'models/KB_Homes/1860/main/KBH_Interior_model1860_fixtures.glb'
models_1860[5] = 'models/KB_Homes/1860/main/KBH_Interior_model1860_colliders.glb'
models_1860[6] = 'models/KB_Homes/1860/main/KBH_Interior_model1860_Flooring_Carpet.glb'
models_1860[7] = 'models/KB_Homes/1860/main/KBH_Interior_model1860_SlidingGlassDoor.glb'
models_1860[8] = 'empty'
models_1860[9] = 'empty'
models_1860[10] = 'empty'


export function createExitDoor(house) {
    [this.house].forEach(ExitPlane => {
        ExitPlane.setParent(house)
        ExitPlane.addComponent(Dash_Material.transparent())
    })

    this.house.getComponent()

    this.kbInterior1860ExitDoor.addComponentOrReplace(new Transform({
        position: new Vector3(22.520, 1.180, 30.940),
        scale: new Vector3(3.400, 1.400, 3.000),
        rotation: new Quaternion().setEuler(1.000, 341.000, 92.000),
    }))
    this.kbInterior1860ExitDoor.onCameraEnter = () => this.exitToCulDeSac(
        new Vector3(46.91, 1.03, 25.59),
        new Vector3(42.24, 0.88, 33.10),
    )
}