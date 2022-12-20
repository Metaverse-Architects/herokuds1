
    
    export enum cabinets{
        cabinet1,
        cabinet2,
        cabinet3,
        cabinet4,
        cabinet5,
        cabinet6
    }
  
    export enum flooring{
        flooring1,
        flooring2,
        flooring3,
        flooring4,
        flooring5
    }
  
    export enum lighting{
        lighting1,
        lighting2,
        lighting3,
        lighting4,
        lighting5
    }
  
    export enum backsplash{
        backsplash1,
        backsplash2,
        backsplash3,
        backsplash4,
        backsplash5
    }

    export let furniture = new Array
    furniture[0] = cabinets
    furniture[1] = flooring
    furniture[2] = lighting
    furniture[3] = backsplash



// let test = new Entity()
// test.addComponent(new GLTFShape(`models/${backsplash[0]}`))

export function getRandomInt(min:number, max:number) : number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }


  export const designStudioCanvas = new UICanvas()
  designStudioCanvas.visible = false

  class dataPoint {
      constructor(
      public uiImage: UIImage,
      public shape: GLTFShape
    ) {}
  }

    export let bathroom_backsplash_1860 = new Array
    bathroom_backsplash_1860[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_backsplash/bathroom_backsplash_center.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_BP_BackplashCenterLinearwhite.gltf'))
    bathroom_backsplash_1860[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_backsplash/bathroom_backsplash_marble.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_BP_BackplashMarbleWinterFrost.gltf'))
    bathroom_backsplash_1860[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_backsplash/bathroom_backsplash_sculpture.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_BP_BackplashSculptureOro.gltf'))
    bathroom_backsplash_1860[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_backsplash/bathroom_backsplash_sweden.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_BP_BackplashSwedenVadretPolished.gltf'))
    bathroom_backsplash_1860[4] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_backsplash/bathroom_backsplash_zellige.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_BP_BackplashZelligeMystique.gltf'))

    export let bathroom_cabinets_1860 = new Array
    bathroom_cabinets_1860[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Cabinets/kitchen_cabinets_stone.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_Cabinets_Bolder_.gltf'))
    bathroom_cabinets_1860[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Cabinets/kitchen_cabinets_espresso.png')), new GLTFShape('models/KB_Homes/1860/custom/bathroom_cabinets/Cabinets_Epresso_.glb'))
    bathroom_cabinets_1860[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Cabinets/kitchen_cabinets_linen.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_Cabinets_Linen_.gltf'))
    bathroom_cabinets_1860[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Cabinets/kitchen_cabinets_truffle.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_Cabinets_Truffle._.gltf'))

    export let bathroom_countertops_1860 = new Array
    bathroom_countertops_1860[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_arctic_white.png')), new GLTFShape('models/KB_Homes/1860/custom/bathroom_countertops/Countertops_QuartzArcticWhite_.glb'))
    bathroom_countertops_1860[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_calacatta.png')), new GLTFShape('models/KB_Homes/1860/custom/bathroom_countertops/Countertops_QuartzCalacattaUltra_.glb'))
    bathroom_countertops_1860[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_et_noir.png')), new GLTFShape('models/KB_Homes/1860/custom/bathroom_countertops/Countertops_QuartzEtNoir_.glb'))
    bathroom_countertops_1860[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_expo_gray_ceontino.png')), new GLTFShape('models/KB_Homes/1860/custom/bathroom_countertops/Countertops_QuartzExpoGray_.glb'))
    bathroom_countertops_1860[4] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_karmelo.png')), new GLTFShape('models/KB_Homes/1860/custom/bathroom_countertops/Countertops_QuartzCalacattaKarmelo_.glb'))
    bathroom_countertops_1860[5] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_msi_celdonia.png')), new GLTFShape('models/KB_Homes/1860/custom/bathroom_countertops/Countertops_GraniteCaledonia_.glb'))
    bathroom_countertops_1860[6] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_valle_nevado_msi.png')), new GLTFShape('models/KB_Homes/1860/custom/bathroom_countertops/Countertops_GraniteValleNevado_.glb'))

    export let bathroom_faucets_1860 = new Array
    bathroom_faucets_1860[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Faucets/faucet_brushed_nickel.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_faucet_Cia_nickel.gltf'))
    bathroom_faucets_1860[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Faucets/faucet_finish_chrome.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_faucet_GibsonChrome.gltf'))
    bathroom_faucets_1860[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Faucets/faucet_finish_matte_black.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_faucet_GibsonMateBlack.gltf'))
    bathroom_faucets_1860[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Faucets/faucet_satin_brass.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_faucet_Cia_gold.gltf'))

    export let bathroom_flooring_1860 = new Array
    bathroom_flooring_1860[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Flooring/floor_castine_oak.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_Floor_CastineCovePlus7WhitefillOak_.gltf'))
    bathroom_flooring_1860[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Flooring/floor_rivergrove_valor_oak.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_Floor_RivergroveValorOak_.gltf'))
    bathroom_flooring_1860[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Flooring/floor_watercest_pine.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_Floor_WatercrestPinePlusReclaimedPine_.gltf'))
    bathroom_flooring_1860[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Flooring/layton_lake.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_Floor_LaytonLakeSilverDollar_.gltf'))

    export let bathroom_lights_1860 = new Array
    bathroom_lights_1860[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Lights/bathroom_lights_syden_brass.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_Light_syden_gold.gltf'))
    bathroom_lights_1860[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Lights/bathroom_lights_syden_nickel.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_Light_syden_black.gltf'))
    bathroom_lights_1860[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Lights/bathroom_lights_windom_chrome.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_Light_Windom_chrome.gltf'))
    bathroom_lights_1860[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Lights/bathroom_lights_windom_midnight.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_Light_Windom_black.gltf'))

    export let kitchen_backsplash_1860 = new Array
    kitchen_backsplash_1860[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Backsplash/kitchen_backsplash_bianco_gioia_mosiac.png')), new GLTFShape('models/KB_Homes/Changeable_assets/backsplashes1860/KBH_Interior_model1860_Kitchen_Backsplash_pinwheel.glb'))
    kitchen_backsplash_1860[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Backsplash/kitchen_backsplash_dalite_graceful_fan.png')), new GLTFShape('models/KB_Homes/Changeable_assets/backsplashes1860/KBH_Interior_model1860_kitchen_Backsplash_fan.glb'))
    kitchen_backsplash_1860[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Backsplash/kitchen_backsplash_dalitile_gray_herringbone.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_BP_Artezen_Ideal_Gray_Herringbone.gltf'))
    kitchen_backsplash_1860[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Backsplash/kitchen_backsplash_emser_glossy.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_BP_CatchIISiliconGloss.gltf'))
    kitchen_backsplash_1860[4] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Backsplash/kitchen_backsplash_emser_omni_navy.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_BP_OmniNavyGlossyPicket.gltf'))
    kitchen_backsplash_1860[5] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Backsplash/kitchen_backsplash_marble_obsession_arabscato.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_BP_MarbleObsessionArabescato.gltf'))
    kitchen_backsplash_1860[6] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Backsplash/kitchen_backsplash_passion_verde.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_BP_PassionVerde.gltf'))

    export let kitchen_cabinets_1860 = new Array
    kitchen_cabinets_1860[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Cabinets/kitchen_cabinets_espresso.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_cabinets_espresso.gltf'))
    kitchen_cabinets_1860[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Cabinets/kitchen_cabinets_linen.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_cabinets_linen.gltf'))
    kitchen_cabinets_1860[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Cabinets/kitchen_cabinets_stone.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_cabinets_bolder.gltf'))
    kitchen_cabinets_1860[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Cabinets/kitchen_cabinets_truffle.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_cabinets_truffle.gltf'))

    export let kitchen_countertops_1860 = new Array
    kitchen_countertops_1860[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_arctic_white.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Countertops_QuartzArcticWhite.gltf'))
    kitchen_countertops_1860[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_calacatta.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Countertops_QuartzCalacattaUltra.gltf'))
    kitchen_countertops_1860[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_et_noir.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Countertops_QuartzEtNoir.gltf'))
    kitchen_countertops_1860[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_expo_gray_ceontino.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Countertops_GraniteValleNevado.gltf'))
    kitchen_countertops_1860[4] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_karmelo.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Countertops_QuartzCalacattaKarmelo.gltf'))
    kitchen_countertops_1860[5] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_msi_celdonia.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Countertops_GraniteCaledonia.gltf'))
    kitchen_countertops_1860[6] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_valle_nevado_msi.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Countertops_GraniteValleNevado.gltf'))

    export let kitchen_faucets_1860 = new Array
    kitchen_faucets_1860[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Faucets/kitchen_faucets_align_brushed_gold.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_faucet_AlignBrushedGold.gltf'))
    kitchen_faucets_1860[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Faucets/kitchen_faucets_align_chrome.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_faucet_AlignChrome.gltf'))
    kitchen_faucets_1860[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Faucets/kitchen_faucets_align_matte_black.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_faucet_AlignMatteBlack.gltf'))
    kitchen_faucets_1860[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Faucets/kitchen_faucets_align_srs.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_faucet_AlignSRS.gltf'))


    export let kitchen_flooring_1860 = new Array
    kitchen_flooring_1860[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Flooring/floor_castine_oak.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Floor_CastinePlusWhitefillOak.gltf'))
    kitchen_flooring_1860[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Flooring/floor_rivergrove_valor_oak.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Floor_WatercrestPinePlusReclaimedPine.gltf'))
    kitchen_flooring_1860[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Flooring/floor_watercest_pine.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Floor_RivergroveValorOak.gltf'))
    kitchen_flooring_1860[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Flooring/layton_lake.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Floor_LaytonLakeSilverDollar.gltf'))

    export let kitchen_ligthing_1860 = new Array
    kitchen_ligthing_1860[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Lighting/KBHOMES_ChoicesUI-18.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Light_OdenMidnightBlack.gltf'))
    kitchen_ligthing_1860[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Lighting/KBHOMES_ChoicesUI-19.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Light_ArildaBrushedNickel.gltf'))
    kitchen_ligthing_1860[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Lighting/KBHOMES_ChoicesUI-20.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Light_ZireMidnightBlack.gltf'))
    kitchen_ligthing_1860[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Lighting/KBHOMES_ChoicesUI-21.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Light_HeathWhite_Brass.gltf'))
    kitchen_ligthing_1860[4] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Lighting/KBHOMES_ChoicesUI-22.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Light_DiannaSatinBrass.gltf'))
  



    export let furnitureArrayDB = new Array

    furnitureArrayDB[0] = bathroom_faucets_1860
    furnitureArrayDB[1] = bathroom_flooring_1860
    furnitureArrayDB[2] = bathroom_lights_1860
    furnitureArrayDB[3] = bathroom_backsplash_1860
    furnitureArrayDB[4] = bathroom_cabinets_1860
    furnitureArrayDB[5] = bathroom_countertops_1860
    furnitureArrayDB[6] = bathroom_flooring_1860

    furnitureArrayDB[7] = kitchen_cabinets_1860
    furnitureArrayDB[8] = kitchen_countertops_1860
    furnitureArrayDB[9] = kitchen_faucets_1860
    furnitureArrayDB[10] = kitchen_flooring_1860
    furnitureArrayDB[11] = kitchen_ligthing_1860
    furnitureArrayDB[12] = kitchen_backsplash_1860