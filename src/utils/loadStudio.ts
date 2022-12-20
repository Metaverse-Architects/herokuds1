
import { KBCulDeSac } from "src/exterior.ts/kb-cul-de-sac";
import { designStudioCanvas } from "src/furnitureSystem/database";
import { designStudio, kitchenMenuCanvas } from "src/furnitureSystem/designStudio";

export function loadStudio(designStudio: designStudio, pastEntity: Entity){
    engine.removeEntity(pastEntity)
    engine.addEntity(designStudio)
    // designStudioCanvas.visible = true
}

export function unloadStudio(designStudio: designStudio){
    engine.removeEntity(designStudio)
    designStudioCanvas.visible = false
    engine.addEntity(KBCulDeSac)
}