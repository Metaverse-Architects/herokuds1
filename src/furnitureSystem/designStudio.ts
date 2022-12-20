/*

The designStudio shall include:
-= The DesignStudio UI framework
=- An implemented furnitureSystem; inbuilt within the same class system


ToDos:
- set up UI system; copy in the coordinates of the UI system, including back and forth



*/


import { Dash_Tweaker } from "dcldash"
import { KBCulDeSac, studio_1989 } from "src/exterior.ts/kb-cul-de-sac"
import { house } from "src/homes/house"
import { house_1860, house_1989, house_2345 } from "src/homes/house_list"
import { ExitPlane } from "src/utils/exitPlane"
import { unloadStudio } from "src/utils/loadStudio"
import { movePlayerToVector3 } from "src/utils/movePlayerToVector3"
import { TriggerDoor } from "src/utils/triggerDoor"
import { bathroom_backsplash_1860, bathroom_cabinets_1860, bathroom_countertops_1860, bathroom_faucets_1860, bathroom_flooring_1860, bathroom_lights_1860, designStudioCanvas, kitchen_backsplash_1860, kitchen_cabinets_1860, kitchen_countertops_1860, kitchen_faucets_1860, kitchen_flooring_1860, kitchen_ligthing_1860 } from "./database"
import { bathroom_backsplash_1989, bathroom_cabinets_1989, bathroom_countertops_1989, bathroom_faucets_1989, bathroom_flooring_1989, bathroom_lights_1989, kitchen_backsplash_1989, kitchen_cabinets_1989, kitchen_countertops_1989, kitchen_faucets_1989, kitchen_flooring_1989, kitchen_ligthing_1989 } from "./database_1989"
import { bathroom_backsplash_2345, bathroom_cabinets_2345, bathroom_countertops_2345, bathroom_faucets_2345, bathroom_flooring_2345, bathroom_lights_2345, kitchen_backsplash_2345, kitchen_cabinets_2345, kitchen_countertops_2345, kitchen_faucets_2345, kitchen_flooring_2345, kitchen_ligthing_2345 } from "./database_2345"



export const bathroomMenuCanvas = new UICanvas()
export const kitchenMenuCanvas = new UICanvas()
designStudioCanvas.visible = false
bathroomMenuCanvas.visible = false
kitchenMenuCanvas.visible = false

export class designStudio extends Entity{

    public studioPlaceHolder1 = bathroom_faucets_1860[0]
    public studioPlaceHolder2 = bathroom_faucets_1860[1]
    public studioPlaceHolder3 = bathroom_faucets_1860[2]

    public bathroom_backsplash_choice
    public bathroom_cabinets_choice
    public bathroom_countertops_choice
    public bathroom_faucet_choice
    public bathroom_flooring_choice
    public bathroom_lighting_choice

    public kitchen_backsplash_choice
    public kitchen_cabinets_choice
    public kitchen_countertops_choice
    public kitchen_faucet_choice
    public kitchen_flooring_choice
    public kitchen_lighting_choice

    public loopLength 
    public placeHolderBack 
    public placeHolderFront 
    public placeHolderMid 
    public placeHolderMax 
    public placeHolderMin 

    public arrayChoice
    public bathroom_Trigger = new TriggerDoor()
    public bathroom_TriggerSecondary = new TriggerDoor()
    public kitchen_Trigger = new TriggerDoor()
    public furnitureHolder = new Entity()

    public  bathroom_faucet_holder = new Entity()
    public  bathroom_flooring_holder = new Entity()
    public  bathroom_lighting_holder = new Entity()
    public  bathroom_backsplash_holder = new Entity()
    public  bathroom_cabinets_holder = new Entity()
    public  bathroom_countertops_holder = new Entity()

    public  kitchen_faucet_holder = new Entity()
    public  kitchen_flooring_holder = new Entity()
    public  kitchen_lighting_holder = new Entity()
    public  kitchen_cabinets_holder = new Entity()
    public  kitchen_countertops_holder = new Entity()
    public  kitchen_sink_holder = new Entity()
    public  kitchen_backsplash_holder = new Entity()


    public middleMenu
    public farleftMenu2 
    public middlerightMenu 
    public middleleftMenu 
    public farrightMenu 
    public farleftMenu
           
    house: house

    public exitPlaneTrans
    public exitPlane = new ExitPlane()

    


    constructor(house: house){
        super()

        this.house = house
        // this.exitPlaneTrans = this.house.exitTransform
        // this.exitPlane.addComponentOrReplace(this.exitPlaneTrans)
        // this.exitPlane.setParent(this)
        // //this.exitPlane.onCameraEnter = () => this.houseExit(house.exitVec, house.exitLook)
        // this.exitPlane.onCameraEnter = () => this.houseExit(
        //     new Vector3(31.94,0.93,20.66),
        //     new Vector3(31.73,0.88,26.06),
        // )

        this.house.setParent(this)

        this.houseSetter()
        this.furnitureTransformSetter()
        // this.kitchenMenu()
    }
        // houseExit(position: Vector3, direction: Vector3){
        //     log('HOUSE EXIT HEREEE')
        //     log(position)
        //     log(direction)
        //     log('THIS IS:')
        //     log(this)
        //     // engine.removeEntity(this)
        //     // designStudioCanvas.visible = false
        //     // engine.addEntity(KBCulDeSac)
        // }
    // houseExit(position: Vector3, direction: Vector3){
    //     kitchenMenuCanvas.visible = false
    //     bathroomMenuCanvas.visible = false
    //     designStudioCanvas.visible = false
    //     unloadStudio(this)
    //     movePlayerToVector3(
    //         position,
    //         direction,
    //       )

    // }
    houseSetter(){

            if(house_1860.alive){
           

            this.bathroom_backsplash_choice = bathroom_backsplash_1860
            this.bathroom_cabinets_choice = bathroom_cabinets_1860
            this.bathroom_countertops_choice = bathroom_countertops_1860
            this.bathroom_faucet_choice = bathroom_faucets_1860
            this.bathroom_flooring_choice = bathroom_flooring_1860
            this.bathroom_lighting_choice = bathroom_lights_1860
            this.kitchen_backsplash_choice = kitchen_backsplash_1860
            this.kitchen_cabinets_choice = kitchen_cabinets_1860
            this.kitchen_countertops_choice = kitchen_countertops_1860
            this.kitchen_faucet_choice = kitchen_faucets_1860
            this.kitchen_flooring_choice = kitchen_flooring_1860
            this.kitchen_lighting_choice = kitchen_ligthing_1860
            
        }

            if(house_1989.alive){

                this.bathroom_backsplash_choice = bathroom_backsplash_1989
                this.bathroom_cabinets_choice = bathroom_cabinets_1989
                this.bathroom_countertops_choice = bathroom_countertops_1989
                this.bathroom_faucet_choice = bathroom_faucets_1989
                this.bathroom_flooring_choice = bathroom_flooring_1989
                this.bathroom_lighting_choice = bathroom_lights_1989
                this.kitchen_backsplash_choice = kitchen_backsplash_1989
                this.kitchen_cabinets_choice = kitchen_cabinets_1989
                this.kitchen_countertops_choice = kitchen_countertops_1989
                this.kitchen_faucet_choice = kitchen_faucets_1989
                this.kitchen_flooring_choice = kitchen_flooring_1989
                this.kitchen_lighting_choice = kitchen_ligthing_1989
            }


            if(house_2345.alive){

            this.bathroom_backsplash_choice = bathroom_backsplash_2345
            this.bathroom_cabinets_choice = bathroom_cabinets_2345
            this.bathroom_countertops_choice = bathroom_countertops_2345
            this.bathroom_faucet_choice = bathroom_faucets_2345
            this.bathroom_flooring_choice = bathroom_flooring_2345
            this.bathroom_lighting_choice = bathroom_lights_2345

            this.kitchen_backsplash_choice = kitchen_backsplash_2345
            this.kitchen_cabinets_choice = kitchen_cabinets_2345
            this.kitchen_countertops_choice = kitchen_countertops_2345
            this.kitchen_faucet_choice = kitchen_faucets_2345
            this.kitchen_flooring_choice = kitchen_flooring_2345
            this.kitchen_lighting_choice = kitchen_ligthing_2345
            }
    
         
    }
    bathroomMenu(){
        if(kitchenMenuCanvas.visible == true){
            kitchenMenuCanvas.visible = false
            this.farleftMenu2.visible = false
            this.farleftMenu.visible = false
            this.farrightMenu.visible = false
            this.middleMenu.visible = false
            this.middleleftMenu.visible = false
            this.middlerightMenu.visible = false

            this.studioPlaceHolder1.uiImage.visible = false
            this.studioPlaceHolder2.visible = false
            this.studioPlaceHolder3.visible = false
        }
    
        this.middleMenu = new UIImage(bathroomMenuCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Catagories/bathroom_cabinets_menu.png'))
        this.middleMenu.width = "10%"
        this.middleMenu.height = "6%"
        this.middleMenu.sourceWidth = 564
        this.middleMenu.sourceHeight = 168
        this.middleMenu.vAlign = "top"
        this.middleMenu.positionX = "0%"
        this.middleMenu.positionY = "0%"
        this.middleMenu.opacity = 1
        this.middleMenu.visible = true
        this.middleMenu.isPointerBlocker = true
        this.middleMenu.onClick = new OnPointerDown(()=>{
            this.uiCycleData(this.bathroom_cabinets_choice)
        })

        this.middlerightMenu = new UIImage(bathroomMenuCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Catagories/bathroom_countertop_menu.png'))
        this.middlerightMenu.width = "10%"
        this.middlerightMenu.height = "6%"
        this.middlerightMenu.sourceWidth = 564
        this.middlerightMenu.sourceHeight = 168
        this.middlerightMenu.vAlign = "top"
        this.middlerightMenu.positionX = "12%"
        this.middlerightMenu.positionY = "0%"
        this.middlerightMenu.opacity = 1
        this.middlerightMenu.visible = true
        this.middlerightMenu.isPointerBlocker = true
        this.middlerightMenu.onClick = new OnPointerDown(()=>{
            this.uiCycleData(this.bathroom_countertops_choice)
        })

        this.middleleftMenu = new UIImage(bathroomMenuCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Catagories/bathroom_faucets_menu.png'))
        this.middleleftMenu.width = "10%"
        this.middleleftMenu.height = "6%"
        this.middleleftMenu.sourceWidth = 564
        this.middleleftMenu.sourceHeight = 168
        this.middleleftMenu.vAlign = "top"
        this.middleleftMenu.positionX = "-12%"
        this.middleleftMenu.positionY = "0%"
        this.middleleftMenu.opacity = 1
        this.middleleftMenu.visible = true
        this.middleleftMenu.isPointerBlocker = true
        this.middleleftMenu.onClick = new OnPointerDown(()=>{
            this.uiCycleData(this.bathroom_faucet_choice)
        })
 
         this.farrightMenu = new UIImage(bathroomMenuCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Catagories/bathroom_flooring_menu.png'))
         this.farrightMenu.width = "10%"
         this.farrightMenu.height = "6%"
         this.farrightMenu.sourceWidth = 564
         this.farrightMenu.sourceHeight = 168
         this.farrightMenu.vAlign = "top"
         this.farrightMenu.positionX = "24%"
         this.farrightMenu.positionY = "0%"
         this.farrightMenu.opacity = 1
         this.farrightMenu.visible = true
         this.farrightMenu.isPointerBlocker = true
            this.farrightMenu.onClick = new OnPointerDown(()=>{
                this.uiCycleData(this.bathroom_flooring_choice)
            })
 
         this.farleftMenu = new UIImage(bathroomMenuCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Catagories/bathroom_lighting_menu.png'))
         this.farleftMenu.width = "10%"
         this.farleftMenu.height = "6%"
         this.farleftMenu.sourceWidth = 564
         this.farleftMenu.sourceHeight = 168
         this.farleftMenu.vAlign = "top"
         this.farleftMenu.positionX = "-24%"
         this.farleftMenu.positionY = "0%"
         this.farleftMenu.opacity = 1
         this.farleftMenu.visible = true
         this.farleftMenu.isPointerBlocker = true
            this.farleftMenu.onClick = new OnPointerDown(()=>{
                this.uiCycleData(this.bathroom_lighting_choice)
            })

         

         this.farleftMenu2 = new UIImage(bathroomMenuCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Catagories/kitchen_categories_backsplash.png'))
         this.farleftMenu2.width = "10%"
         this.farleftMenu2.height = "6%"
         this.farleftMenu2.sourceWidth = 564
         this.farleftMenu2.sourceHeight = 168
         this.farleftMenu2.vAlign = "top"
         this.farleftMenu2.positionX = "36%"
         this.farleftMenu2.positionY = "0%"
         this.farleftMenu2.opacity = 1
         this.farleftMenu2.visible = true
         this.farleftMenu2.isPointerBlocker = true
 
         this.farleftMenu2.onClick = new OnPointerDown(()=>{
             this.uiCycleData(this.bathroom_backsplash_choice)
         })
    }

    kitchenMenu(){
        if(bathroomMenuCanvas.visible == true){
            bathroomMenuCanvas.visible = false
            this.middleMenu.visible = false
            this.farleftMenu2.visible = false
            this.farleftMenu.visible = false
            this.farrightMenu.visible = false
            this.middleleftMenu.visible = false
            this.middlerightMenu.visible = false
        }

        //Flooring
        this.middleMenu = new UIImage(kitchenMenuCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Catagories/kitchen_categories_flooring.png'))
        this.middleMenu.width = "10%"
        this.middleMenu.height = "6%"
        this.middleMenu.sourceWidth = 564
        this.middleMenu.sourceHeight = 168
        this.middleMenu.vAlign = "top"
        this.middleMenu.positionX = "0%"
        this.middleMenu.positionY = "0%"
        this.middleMenu.opacity = 1
        this.middleMenu.visible = true
        this.middleMenu.isPointerBlocker = true
        this.middleMenu.onClick = new OnPointerDown(()=>{
            this.uiCycleData(this.kitchen_flooring_choice)
        })
        //Cabinets
        this.middlerightMenu = new UIImage(kitchenMenuCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Catagories/kitchen_categories_cabinets.png'))
        this.middlerightMenu.width = "10%"
        this.middlerightMenu.height = "6%"
        this.middlerightMenu.sourceWidth = 564
        this.middlerightMenu.sourceHeight = 168
        this.middlerightMenu.vAlign = "top"
        this.middlerightMenu.positionX = "12%"
        this.middlerightMenu.positionY = "0%"
        this.middlerightMenu.opacity = 1
        this.middlerightMenu.visible = true
        this.middlerightMenu.isPointerBlocker = true
        this.middlerightMenu.onClick = new OnPointerDown(()=>{
            this.uiCycleData(this.kitchen_cabinets_choice)
        })


        //Countertops
        this.middleleftMenu = new UIImage(kitchenMenuCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Catagories/kitchen_categories_countertop.png'))
        this.middleleftMenu.width = "10%"
        this.middleleftMenu.height = "6%"
        this.middleleftMenu.sourceWidth = 564
        this.middleleftMenu.sourceHeight = 168
        this.middleleftMenu.vAlign = "top"
        this.middleleftMenu.positionX = "-12%"
        this.middleleftMenu.positionY = "0%"
        this.middleleftMenu.opacity = 1
        this.middleleftMenu.visible = true
        this.middleleftMenu.isPointerBlocker = true
        this.middleleftMenu.onClick = new OnPointerDown(()=>{
            this.uiCycleData(this.kitchen_countertops_choice)
        })
         //Faucets
         this.farrightMenu = new UIImage(kitchenMenuCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Catagories/kitchen_categories_faucets.png'))
         this.farrightMenu.width = "10%"
         this.farrightMenu.height = "6%"
         this.farrightMenu.sourceWidth = 564
         this.farrightMenu.sourceHeight = 168
         this.farrightMenu.vAlign = "top"
         this.farrightMenu.positionX = "24%"
         this.farrightMenu.positionY = "0%"
         this.farrightMenu.opacity = 1
         this.farrightMenu.visible = true
         this.farrightMenu.isPointerBlocker = true
         this.farrightMenu.onClick = new OnPointerDown(()=>{
             this.uiCycleData(this.kitchen_faucet_choice)
         })
 
         //Backsplash
         this.farleftMenu = new UIImage(kitchenMenuCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Catagories/kitchen_categories_backsplash.png'))
         this.farleftMenu.width = "10%"
         this.farleftMenu.height = "6%"
         this.farleftMenu.sourceWidth = 564
         this.farleftMenu.sourceHeight = 168
         this.farleftMenu.vAlign = "top"
         this.farleftMenu.positionX = "-24%"
         this.farleftMenu.positionY = "0%"
         this.farleftMenu.opacity = 1
         this.farleftMenu.visible = true
         this.farleftMenu.isPointerBlocker = true
         this.farleftMenu.onClick = new OnPointerDown(()=>{
             this.uiCycleData(this.kitchen_backsplash_choice)
         })
 
         //Lighting
         this.farleftMenu2 = new UIImage(kitchenMenuCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Catagories/kitchen_categories_lighting.png'))
         this.farleftMenu2.width = "10%"
         this.farleftMenu2.height = "6%"
         this.farleftMenu2.sourceWidth = 564
         this.farleftMenu2.sourceHeight = 168
         this.farleftMenu2.vAlign = "top"
         this.farleftMenu2.positionX = "36%"
         this.farleftMenu2.positionY = "0%"
         this.farleftMenu2.opacity = 1
         this.farleftMenu2.visible = true
         this.farleftMenu2.isPointerBlocker = true
 
         this.farleftMenu2.onClick = new OnPointerDown(()=>{
             this.uiCycleData(this.kitchen_lighting_choice)
         })
     }

    dynamicUIinterface(){
 

        this.studioPlaceHolder1.uiImage.width = "11%"
        this.studioPlaceHolder1.uiImage.height = "38%"
        this.studioPlaceHolder1.uiImage.sourceWidth = 759
        this.studioPlaceHolder1.uiImage.sourceHeight = 1322
        this.studioPlaceHolder1.uiImage.vAlign = "bottom"
        this.studioPlaceHolder1.uiImage.positionX = "-12%"
        this.studioPlaceHolder1.uiImage.positionY = "-5.5%"
        this.studioPlaceHolder1.uiImage.opacity = 0.85
        this.studioPlaceHolder1.uiImage.visible = true
        this.studioPlaceHolder1.uiImage.isPointerBlocker = true

        this.studioPlaceHolder1.uiImage.onClick = new OnPointerDown(()=>{
            this.furnitureSystem(this.studioPlaceHolder1)
        })

        this.studioPlaceHolder2.uiImage.width = "11%"
        this.studioPlaceHolder2.uiImage.height = "38%"
        this.studioPlaceHolder2.uiImage.sourceWidth = 759
        this.studioPlaceHolder2.uiImage.sourceHeight = 1322
        this.studioPlaceHolder2.uiImage.vAlign = "bottom"
        this.studioPlaceHolder2.uiImage.positionX = 0
        this.studioPlaceHolder2.uiImage.positionY = "-5.5%"
        this.studioPlaceHolder2.uiImage.opacity = 0.9
        this.studioPlaceHolder2.uiImage.visible = true
        this.studioPlaceHolder2.uiImage.isPointerBlocker = true

        this.studioPlaceHolder2.uiImage.onClick = new OnPointerDown(()=>{
            this.furnitureSystem(this.studioPlaceHolder2)
        })

        this.studioPlaceHolder3.uiImage.width = "11%"
        this.studioPlaceHolder3.uiImage.height = "38%"
        this.studioPlaceHolder3.uiImage.sourceWidth = 759
        this.studioPlaceHolder3.uiImage.sourceHeight = 1322
        this.studioPlaceHolder3.uiImage.vAlign = "bottom"
        this.studioPlaceHolder3.uiImage.positionX = "12%"
        this.studioPlaceHolder3.uiImage.positionY = "-5.5%"
        this.studioPlaceHolder3.uiImage.opacity = 0.85
        this.studioPlaceHolder3.uiImage.visible = true
        this.studioPlaceHolder3.uiImage.isPointerBlocker = true

        this.studioPlaceHolder3.uiImage.onClick = new OnPointerDown(()=>{
            this.furnitureSystem(this.studioPlaceHolder3)
        })

        //50px = 7.5%

        let interfaceBack = new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Studio_Interface/KBHOMES_ChoicesUI-58.png'))
        interfaceBack.width = "3.75%"
        interfaceBack.height = "7.5%"
        interfaceBack.sourceWidth = 168
        interfaceBack.sourceHeight = 168
        interfaceBack.vAlign = "bottom"
        interfaceBack.positionY = "7.25%"
        interfaceBack.positionX = "-20%"
        interfaceBack.visible = true
        interfaceBack.isPointerBlocker = true
        interfaceBack.onClick = new OnPointerDown(()=>{

            this.uiCycleBack()
        })


        let interfaceForward = new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Studio_Interface/KBHOMES_ChoicesUI-59.png'))
        interfaceForward.width = "3.75%"
        interfaceForward.height = "7.5%"
        interfaceForward.sourceWidth = 168
        interfaceForward.sourceHeight = 168
        interfaceForward.vAlign = "bottom"
        interfaceForward.positionY = "7.25%"
        interfaceForward.positionX = "20%"
        interfaceForward.visible = true
        interfaceForward.isPointerBlocker = true
        interfaceForward.onClick = new OnPointerDown(()=>{
            this.uiCycleForward()
        }
        )


    }

    uiCycleData(array){
        this.houseSetter()
        if(designStudioCanvas.visible == false){
            designStudioCanvas.visible = true
        }
        this.arrayChoice = array
        this.loopLength = array.length

        this.studioPlaceHolder1.uiImage.visible = false
        this.studioPlaceHolder2.uiImage.visible = false
        this.studioPlaceHolder3.uiImage.visible = false

        this.studioPlaceHolder1 = array[0]
        this.studioPlaceHolder2 = array[1]
        this.studioPlaceHolder3 = array[2]

        this.placeHolderMin = 0 //first point in array
        this.placeHolderMax = this.loopLength - 1 //last point in array

        this.placeHolderBack = 0 //studioPlaceHolder1
        this.placeHolderMid = 1 //studioPlaceHolder2
        this.placeHolderFront = 2 //studioPlaceHolder3


        this.dynamicUIinterface()
    }

    uiCycleBack(){
        this.studioPlaceHolder1.uiImage.visible = false
        this.studioPlaceHolder2.uiImage.visible = false
        this.studioPlaceHolder3.uiImage.visible = false


        //log('Cycle Array Choice:')
        //log(this.arrayChoice)

        //log('Cycle Array Length:')
        //log(this.loopLength)

        //log('PlaceHolderMax:' + this.placeHolderMax)

        //log('cycleBackPre:')
        //log('back:' +this.placeHolderBack)
        //log('mid:' +this.placeHolderMid)
        //log('front:' +this.placeHolderFront)

        if(this.placeHolderBack <= this.placeHolderMin){

            this.placeHolderBack = this.placeHolderMax
            this.placeHolderMid = this.placeHolderMid -1
            this.placeHolderFront = this.placeHolderFront -1
        }else{

            if(this.placeHolderMid <= this.placeHolderMin){
                    this.placeHolderMid = this.placeHolderMax
                    this.placeHolderFront = this.placeHolderFront -1
                    this.placeHolderBack = this.placeHolderBack -1

            }else{
        
                    if(this.placeHolderFront <= this.placeHolderMin){
                        this.placeHolderFront = this.placeHolderMax
                        this.placeHolderBack = this.placeHolderBack -1
                        this.placeHolderMid = this.placeHolderMid -1
                    }else{
                        this.placeHolderBack = this.placeHolderBack -1
                        this.placeHolderMid = this.placeHolderMid -1
                        this.placeHolderFront = this.placeHolderFront -1
                    }
            }
        }

        //log('cycleBackPost:')
        //log('back:' +this.placeHolderBack)
        //log('mid:' +this.placeHolderMid)
        //log('front:' +this.placeHolderFront)

        this.studioPlaceHolder1 = this.arrayChoice[this.placeHolderBack]
        this.studioPlaceHolder2 = this.arrayChoice[this.placeHolderMid]
        this.studioPlaceHolder3 = this.arrayChoice[this.placeHolderFront]
        this.dynamicUIinterface()
    }

    uiCycleForward(){
        this.studioPlaceHolder1.uiImage.visible = false
        this.studioPlaceHolder2.uiImage.visible = false
        this.studioPlaceHolder3.uiImage.visible = false

        //log('Cycle Array Choice forwards:')
        //log(this.arrayChoice)

        //log('Cycle Array Length:')
        //log(this.loopLength)

        //log('PlaceHolderMax:' + this.placeHolderMax)

        //log('cycleBackPre:')
        //log('back:' +this.placeHolderBack)
        //log('mid:' +this.placeHolderMid)
        //log('front:' +this.placeHolderFront)

        if(this.placeHolderFront >= this.placeHolderMax){

            this.placeHolderFront = this.placeHolderMin
            this.placeHolderMid = this.placeHolderMid +1
            this.placeHolderBack = this.placeHolderBack +1
        }else{

            if(this.placeHolderMid >= this.placeHolderMax){
                    this.placeHolderMid = this.placeHolderMin
                    this.placeHolderFront = this.placeHolderFront +1
                    this.placeHolderBack = this.placeHolderBack +1

            }else{
        
                    if(this.placeHolderBack >= this.placeHolderMax){
                        this.placeHolderBack = this.placeHolderMin
                        this.placeHolderFront = this.placeHolderFront +1
                        this.placeHolderMid = this.placeHolderMid +1
                    }else{
                        this.placeHolderBack = this.placeHolderBack +1
                        this.placeHolderMid = this.placeHolderMid +1
                        this.placeHolderFront = this.placeHolderFront +1
                    }
            }
        }
        this.studioPlaceHolder1 = this.arrayChoice[this.placeHolderBack]
        this.studioPlaceHolder2 = this.arrayChoice[this.placeHolderMid]
        this.studioPlaceHolder3 = this.arrayChoice[this.placeHolderFront]
        this.dynamicUIinterface()
    }

    furnitureTransformSetter(){

        this.bathroom_faucet_holder       .addComponentOrReplace(new Transform({position: new Vector3(0,0,0)}))  
        this.bathroom_flooring_holder     .addComponentOrReplace(new Transform({position: new Vector3(0,0,0)}))  
        this.bathroom_lighting_holder     .addComponentOrReplace(new Transform({position: new Vector3(0,0,0)}))  
        this.bathroom_backsplash_holder   .addComponentOrReplace(new Transform({position: new Vector3(0,0,0)}))
        this.bathroom_cabinets_holder     .addComponentOrReplace(new Transform({position: new Vector3(0,0,0)}))
        this.bathroom_countertops_holder  .addComponentOrReplace(new Transform({position: new Vector3(0,0,0)}))
        this.kitchen_faucet_holder        .addComponentOrReplace(new Transform({position: new Vector3(0,0,0)}))      
        this.kitchen_flooring_holder      .addComponentOrReplace(new Transform({position: new Vector3(0,0,0)}))  
        this.kitchen_lighting_holder      .addComponentOrReplace(new Transform({position: new Vector3(0,-0.3,0,)}))

        this.kitchen_cabinets_holder      .addComponentOrReplace(new Transform({position: new Vector3(0,0,0)}))      
        this.kitchen_countertops_holder   .addComponentOrReplace(new Transform({position: new Vector3(0,0,0)}))   
        this.kitchen_backsplash_holder    .addComponentOrReplace(new Transform({position: new Vector3(0,0,0)}))

        // if(this.house == house_1860){

        // this.bathroom_faucet_holder       .addComponentOrReplace(new GLTFShape('models/KB_Homes/1860/custom/bathroom_faucets/faucet_Cia_nickel.glb'))
        // this.bathroom_lighting_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/1860/custom/bathroom_lights/Light_Windom_black.glb'))
        // this.bathroom_flooring_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/1860/custom/bathroom_flooring/Floor_LaytonLakeSilverDollar_.glb'))
        // this.bathroom_backsplash_holder   .addComponentOrReplace(new GLTFShape('models/KB_Homes/1860/custom/bathroom_backsplash/BP_BackplashCenterLinearwhite.glb'))
        // this.bathroom_cabinets_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/1860/custom/bathroom_cabinets/Cabinets_Truffle._.glb'))
        // this.bathroom_countertops_holder  .addComponentOrReplace(new GLTFShape('models/KB_Homes/1860/custom/bathroom_countertops/Countertops_GraniteCaledonia_.glb'))
        // this.kitchen_faucet_holder        .addComponentOrReplace(new GLTFShape('models/KB_Homes/1860/custom/kitchen_faucets/faucet_AlignSRS.glb'))
        // this.kitchen_flooring_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/1860/custom/kitchen_flooring/Floor_WatercrestPinePlusReclaimedPine.glb'))
        // this.kitchen_lighting_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/1860/custom/kitchen_lighting/Light_ArildaBrushedNickel.glb'))
        // this.kitchen_cabinets_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/1860/custom/kitchen_cabinets/cabinets_truffle.glb'))
        // this.kitchen_countertops_holder   .addComponentOrReplace(new GLTFShape('models/KB_Homes/1860/custom/kitchen_countertops/Countertops_GraniteCaledonia.glb'))
        // this.kitchen_backsplash_holder    .addComponentOrReplace(new GLTFShape('models/KB_Homes/1860/custom/kitchen_backsplash/BP_MarbleObsessionArabescato.glb'))

        //     // if(house_1860.alive == true){
        //     // engine.addEntity(this.bathroom_lighting_holder)
        //     // engine.addEntity(this.bathroom_backsplash_holder)
        //     // engine.addEntity(this.bathroom_faucet_holder)
        //     // engine.addEntity(this.bathroom_flooring_holder)
        //     // engine.addEntity(this.bathroom_cabinets_holder)
        //     // engine.addEntity(this.bathroom_countertops_holder)
        //     // engine.addEntity(this.kitchen_faucet_holder)
        //     // engine.addEntity(this.kitchen_flooring_holder)
        //     // engine.addEntity(this.kitchen_lighting_holder)
        //     // engine.addEntity(this.kitchen_cabinets_holder)
        // //     // engine.addEntity(this.kitchen_countertops_holder)
        // //     // engine.addEntity(this.kitchen_backsplash_holder)
        // //     // }
        // }

        // if(this.house == house_1989){
        
        // this.bathroom_faucet_holder       .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/bathroom_faucets/faucet_Cia_nickel.glb'))
        // this.bathroom_lighting_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/bathroom_lights/Light_Windom_black.glb'))
        // this.bathroom_flooring_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/bathroom_flooring/Floor_LaytonLakeSilverDollar_.glb'))
        // this.bathroom_backsplash_holder   .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/bathroom_backsplash/BP_BackplashCenterLinearwhite.glb'))
        // this.bathroom_cabinets_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/bathroom_cabinets/Cabinets_Truffle._.glb'))
        // this.bathroom_countertops_holder  .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/bathroom_countertops/Countertops_GraniteCaledonia_.glb'))
        // this.kitchen_faucet_holder        .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/kitchen_faucets/faucet_AlignSRS.glb'))
        // this.kitchen_flooring_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/kitchen_flooring/Floor_LaytonLakeSilverDollar.glb'))
        // this.kitchen_lighting_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/kitchen_lighting/Light_ArildaBrushedNickel.glb'))
        // this.kitchen_cabinets_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/kitchen_cabinets/cabinets_truffle.glb'))
        // this.kitchen_countertops_holder   .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/kitchen_countertops/Countertops_GraniteCaledonia.glb'))
        // this.kitchen_backsplash_holder    .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/kitchen_backsplash/BP_MarbleObsessionArabescato.glb'))

        //     // if(house_1989.alive == true){
        //     //     engine.addEntity(this.bathroom_lighting_holder)
        //     //     engine.addEntity(this.bathroom_backsplash_holder)
        //     //     engine.addEntity(this.bathroom_faucet_holder)
        //     //     engine.addEntity(this.bathroom_flooring_holder)
        //     //     engine.addEntity(this.bathroom_cabinets_holder)
        //     //     engine.addEntity(this.bathroom_countertops_holder)
        //     //     engine.addEntity(this.kitchen_faucet_holder)
        //     //     engine.addEntity(this.kitchen_flooring_holder)
        //     //     engine.addEntity(this.kitchen_lighting_holder)
        //     //     engine.addEntity(this.kitchen_cabinets_holder)
        //     //     engine.addEntity(this.kitchen_countertops_holder)
        //     //     engine.addEntity(this.kitchen_backsplash_holder)
        //     // }
                

        // }

        // if(this.house == house_2345){
        //     log('SETTING TO DEFUALTS!!!!')

        // this.bathroom_faucet_holder       .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/bathroom_faucets/faucet_Cia_nickel.glb'))
        // this.bathroom_lighting_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/bathroom_lights/Light_Windom_black.glb'))
        // this.bathroom_flooring_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/bathroom_flooring/Floor_LaytonLakeSilverDollar_.glb'))
        // this.bathroom_backsplash_holder   .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/bathroom_backsplash/BP_BackplashCenterLinearwhite.glb'))
        // this.bathroom_cabinets_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/bathroom_cabinets/Cabinets_Truffle._.glb'))
        // this.bathroom_countertops_holder  .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/bathroom_countertops/Countertops_GraniteCaledonia_.glb'))
        // this.kitchen_faucet_holder        .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/kitchen_faucets/faucet_AlignSRS.glb'))
        // this.kitchen_flooring_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/kitchen_flooring/Floor_WatercrestPinePlusReclaimedPine.glb'))
        // this.kitchen_lighting_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/kitchen_lighting/Light_ArildaBrushedNickel.glb'))
        // this.kitchen_cabinets_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/kitchen_cabinets/cabinets_truffle.glb'))
        // this.kitchen_countertops_holder   .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/kitchen_countertops/Countertops_GraniteCaledonia.glb'))
        // this.kitchen_backsplash_holder    .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/kitchen_backsplash/BP_MarbleObsessionArabescato.glb'))

        //     // if(house_2345.alive == true){
        //     //     log('SETTING TO DEFUALTS ENGINE!!!!')
        //     //     engine.addEntity(this.bathroom_lighting_holder)
        //     //     engine.addEntity(this.bathroom_backsplash_holder)
        //     //     engine.addEntity(this.bathroom_faucet_holder)
        //     //     engine.addEntity(this.bathroom_flooring_holder)
        //     //     engine.addEntity(this.bathroom_cabinets_holder)
        //     //     engine.addEntity(this.bathroom_countertops_holder)
        //     //     engine.addEntity(this.kitchen_faucet_holder)
        //     //     engine.addEntity(this.kitchen_flooring_holder)
        //     //     engine.addEntity(this.kitchen_lighting_holder)
        //     //     engine.addEntity(this.kitchen_cabinets_holder)
        //     //     engine.addEntity(this.kitchen_countertops_holder)
        //     //     engine.addEntity(this.kitchen_backsplash_holder)
        //     // }



        // }

        // this.kitchen_sink_holder.addComponent(new Transform({position: new Vector3(0,0,0)}))
        // this.kitchen_sink_holder.addComponent(new GLTFShape('models/KB_Homes/design_studio_models/kitchen_countertops/Countertop_Sink.glb'))
        // this.kitchen_sink_holder.setParent(this)


    }

    furnitureSystem(uiClicked){
        this.houseSetter()

        if(uiClicked == 1860){
            this.bathroom_faucet_holder       .addComponentOrReplace(new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_faucet_GibsonChrome.gltf'))
            this.bathroom_lighting_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_Light_Windom_chrome.gltf'))
            this.bathroom_flooring_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_Floor_LaytonLakeSilverDollar_.gltf'))
            this.bathroom_backsplash_holder   .addComponentOrReplace(new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_BP_BackplashMarbleWinterFrost.gltf'))
            this.bathroom_cabinets_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_Cabinets_Truffle_.gltf'))
            this.bathroom_countertops_holder  .addComponentOrReplace(new GLTFShape('models/KB_Homes/Changeable_assets/1860_bathroom_Countertops_GraniteCaledonia_.gltf'))
            this.kitchen_faucet_holder        .addComponentOrReplace(new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_faucet_AlignSRS.gltf'))
            this.kitchen_flooring_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Floor_WatercrestPinePlusReclaimedPine.gltf'))
            this.kitchen_lighting_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Light_ArildaBrushedNickel.gltf'))
            this.kitchen_cabinets_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_cabinets_truffle.gltf'))
            this.kitchen_countertops_holder   .addComponentOrReplace(new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_Countertops_GraniteCaledonia.gltf'))
            this.kitchen_backsplash_holder    .addComponentOrReplace(new GLTFShape('models/KB_Homes/Changeable_assets/1860_kitchen_BP_MarbleObsessionArabescato.gltf'))
            engine.addEntity(this.bathroom_lighting_holder)
            engine.addEntity(this.bathroom_backsplash_holder)
            engine.addEntity(this.bathroom_faucet_holder)
            engine.addEntity(this.bathroom_flooring_holder)
            engine.addEntity(this.bathroom_cabinets_holder)
            engine.addEntity(this.bathroom_countertops_holder)
            engine.addEntity(this.kitchen_faucet_holder)
            engine.addEntity(this.kitchen_flooring_holder)
            engine.addEntity(this.kitchen_lighting_holder)
            engine.addEntity(this.kitchen_cabinets_holder)
            engine.addEntity(this.kitchen_countertops_holder)
            engine.addEntity(this.kitchen_backsplash_holder)
            this.bathroomloader_1860()
            this.kitchenloader_1860()
        }

        if(uiClicked == 1989){
            this.bathroom_faucet_holder       .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/bathroom_faucets/faucet_Cia_nickel.glb'))
            this.bathroom_lighting_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/bathroom_lights/Light_Windom_black.glb'))
            this.bathroom_flooring_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/bathroom_flooring/Floor_LaytonLakeSilverDollar_.glb'))
            this.bathroom_backsplash_holder   .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/bathroom_backsplash/BP_BackplashCenterLinearwhite.glb'))
            this.bathroom_cabinets_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/bathroom_cabinets/Cabinets_Truffle._.glb'))
            this.bathroom_countertops_holder  .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/bathroom_countertops/Countertops_GraniteCaledonia_.glb'))
            this.kitchen_faucet_holder        .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/kitchen_faucets/faucet_AlignSRS.glb'))
            this.kitchen_flooring_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/kitchen_flooring/Floor_LaytonLakeSilverDollar.glb'))
            this.kitchen_lighting_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/kitchen_lighting/Light_ArildaBrushedNickel.glb'))
            this.kitchen_cabinets_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/kitchen_cabinets/cabinets_truffle.glb'))
            this.kitchen_countertops_holder   .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/kitchen_countertops/Countertops_GraniteCaledonia.glb'))
            this.kitchen_backsplash_holder    .addComponentOrReplace(new GLTFShape('models/KB_Homes/1989/custom/kitchen_backsplash/BP_MarbleObsessionArabescato.glb'))
            engine.addEntity(this.bathroom_lighting_holder)
            engine.addEntity(this.bathroom_backsplash_holder)
            engine.addEntity(this.bathroom_faucet_holder)
            engine.addEntity(this.bathroom_flooring_holder)
            engine.addEntity(this.bathroom_cabinets_holder)
            engine.addEntity(this.bathroom_countertops_holder)
            engine.addEntity(this.kitchen_faucet_holder)
            engine.addEntity(this.kitchen_flooring_holder)
            engine.addEntity(this.kitchen_lighting_holder)
            engine.addEntity(this.kitchen_cabinets_holder)
            engine.addEntity(this.kitchen_countertops_holder)
            engine.addEntity(this.kitchen_backsplash_holder)

            this.bathroomloader_1989()
            this.kitchenloader_1989()
        }

        if(uiClicked == 2345){
            this.bathroom_faucet_holder       .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/bathroom_faucets/faucet_Cia_nickel.glb'))
            this.bathroom_lighting_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/bathroom_lights/Light_Windom_black.glb'))
            this.bathroom_flooring_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/bathroom_flooring/Floor_LaytonLakeSilverDollar_.glb'))
            this.bathroom_backsplash_holder   .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/bathroom_backsplash/BP_BackplashCenterLinearwhite.glb'))
            this.bathroom_cabinets_holder     .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/bathroom_cabinets/Cabinets_Truffle._.glb'))
            this.bathroom_countertops_holder  .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/bathroom_countertops/Countertops_GraniteCaledonia_.glb'))
            this.kitchen_faucet_holder        .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/kitchen_faucets/faucet_AlignSRS.glb'))
            this.kitchen_flooring_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/kitchen_flooring/Floor_WatercrestPinePlusReclaimedPine.glb'))
            this.kitchen_lighting_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/kitchen_lighting/Light_ArildaBrushedNickel.glb'))
            this.kitchen_cabinets_holder      .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/kitchen_cabinets/cabinets_truffle.glb'))
            this.kitchen_countertops_holder   .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/kitchen_countertops/Countertops_GraniteCaledonia.glb'))
            this.kitchen_backsplash_holder    .addComponentOrReplace(new GLTFShape('models/KB_Homes/2345/custom/kitchen_backsplash/BP_MarbleObsessionArabescato.glb'))
            engine.addEntity(this.bathroom_lighting_holder)
            engine.addEntity(this.bathroom_backsplash_holder)
            engine.addEntity(this.bathroom_faucet_holder)
            engine.addEntity(this.bathroom_flooring_holder)
            engine.addEntity(this.bathroom_cabinets_holder)
            engine.addEntity(this.bathroom_countertops_holder)
            engine.addEntity(this.kitchen_faucet_holder)
            engine.addEntity(this.kitchen_flooring_holder)
            engine.addEntity(this.kitchen_lighting_holder)
            engine.addEntity(this.kitchen_cabinets_holder)
            engine.addEntity(this.kitchen_countertops_holder)
            engine.addEntity(this.kitchen_backsplash_holder)

            this.bathroomloader_2345()
            this.kitchenloader_2345()
        }

        if(this.arrayChoice == this.kitchen_faucet_choice){
            engine.removeEntity(this.kitchen_faucet_holder)
            this.bathroom_faucet_holder.addComponentOrReplace(uiClicked.shape)
            engine.addEntity(this.bathroom_faucet_holder)
        }

        if(this.arrayChoice == this.kitchen_flooring_choice){
            engine.removeEntity(this.kitchen_flooring_holder)
            this.kitchen_flooring_holder.addComponentOrReplace(uiClicked.shape)
            engine.addEntity(this.kitchen_flooring_holder)
        }

        if(this.arrayChoice == this.kitchen_lighting_choice){
            engine.removeEntity(this.kitchen_lighting_holder)
            this.kitchen_lighting_holder.addComponentOrReplace(uiClicked.shape)
            engine.addEntity(this.kitchen_lighting_holder)
        }

        if(this.arrayChoice == this.kitchen_cabinets_choice){
            engine.removeEntity(this.kitchen_cabinets_holder)
            log('cabinets removed')
            this.kitchen_cabinets_holder.addComponentOrReplace(uiClicked.shape)
            engine.addEntity(this.kitchen_cabinets_holder)
        }

        if(this.arrayChoice == this.kitchen_countertops_choice){
            engine.removeEntity(this.kitchen_countertops_holder)
            this.kitchen_countertops_holder.addComponentOrReplace(uiClicked.shape)
            engine.addEntity(this.kitchen_countertops_holder)
        }

        if(this.arrayChoice == this.kitchen_backsplash_choice){
            engine.removeEntity(this.kitchen_backsplash_holder)
            this.kitchen_backsplash_holder.addComponentOrReplace(uiClicked.shape)
            engine.addEntity(this.kitchen_backsplash_holder)
        }

        if(this.arrayChoice == this.bathroom_faucet_choice){
            engine.removeEntity(this.bathroom_faucet_holder)
            this.bathroom_faucet_holder.addComponentOrReplace(uiClicked.shape)
            engine.addEntity(this.bathroom_faucet_holder)
        }

        if(this.arrayChoice == this.bathroom_lighting_choice){
            engine.removeEntity(this.bathroom_lighting_holder)
            this.bathroom_lighting_holder.addComponentOrReplace(uiClicked.shape)
            engine.addEntity(this.bathroom_lighting_holder)
        }

        if(this.arrayChoice == this.bathroom_backsplash_choice){
            this.bathroom_backsplash_holder.addComponentOrReplace(uiClicked.shape)
            engine.addEntity(this.bathroom_backsplash_holder)
        }

        if(this.arrayChoice == this.bathroom_flooring_choice){
            engine.removeEntity(this.bathroom_flooring_holder)
            this.bathroom_flooring_holder.addComponentOrReplace(uiClicked.shape)
            engine.addEntity(this.bathroom_flooring_holder)
        }

        if(this.arrayChoice == this.bathroom_cabinets_choice){
            engine.removeEntity(this.bathroom_cabinets_holder)
            this.bathroom_cabinets_holder.addComponentOrReplace(uiClicked.shape)
            engine.addEntity(this.bathroom_cabinets_holder)
        }

        if(this.arrayChoice == this.bathroom_countertops_choice){
            engine.removeEntity(this.bathroom_countertops_holder)
            this.bathroom_countertops_holder.addComponentOrReplace(uiClicked.shape)
            engine.addEntity(this.bathroom_countertops_holder)
        
    }



}
studioUnloader(){
        this.bathroom_lighting_holder.removeComponent(GLTFShape)
        this.bathroom_backsplash_holder.removeComponent(GLTFShape)
        this.bathroom_faucet_holder.removeComponent(GLTFShape)
        this.bathroom_flooring_holder.removeComponent(GLTFShape)
        this.bathroom_cabinets_holder.removeComponent(GLTFShape)
        this.bathroom_countertops_holder.removeComponent(GLTFShape)
        this.kitchen_faucet_holder.removeComponent(GLTFShape)
        this.kitchen_flooring_holder.removeComponent(GLTFShape)
        this.kitchen_lighting_holder.removeComponent(GLTFShape)
        this.kitchen_cabinets_holder.removeComponent(GLTFShape)
        this.kitchen_countertops_holder.removeComponent(GLTFShape)
        this.kitchen_backsplash_holder.removeComponent(GLTFShape)
        engine.removeEntity(this.bathroom_lighting_holder)
        engine.removeEntity(this.bathroom_backsplash_holder)
        engine.removeEntity(this.bathroom_faucet_holder)
        engine.removeEntity(this.bathroom_flooring_holder)
        engine.removeEntity(this.bathroom_cabinets_holder)
        engine.removeEntity(this.bathroom_countertops_holder)

        engine.removeEntity(this.kitchen_faucet_holder)
        engine.removeEntity(this.kitchen_flooring_holder)
        engine.removeEntity(this.kitchen_lighting_holder)
        engine.removeEntity(this.kitchen_cabinets_holder)
        engine.removeEntity(this.kitchen_countertops_holder)
        engine.removeEntity(this.kitchen_backsplash_holder)

        engine.removeEntity(this.bathroom_Trigger)
        engine.removeEntity(this.bathroom_TriggerSecondary)
        engine.removeEntity(this.kitchen_Trigger)

        kitchenMenuCanvas.visible = false
        bathroomMenuCanvas.visible = false
        
}

kitchenloader_1860(){
    this.kitchen_Trigger.addComponentOrReplace(new Transform({
        position: new Vector3(16.500, 2.180, 19.170),
        scale: new Vector3(13.000, 4.000, 12.000),
        rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
     })) 
     this.kitchen_Trigger.onCameraEnter = () => {
        this.kitchenMenu()
        designStudioCanvas.visible = true
     }
     this.kitchen_Trigger.onCameraExit = () => {
        designStudioCanvas.visible = false
     }
     this.kitchen_Trigger.setSize()
     engine.addEntity(this.kitchen_Trigger)

}
bathroomloader_1860(){
    this.bathroom_Trigger.addComponentOrReplace(new Transform({
        position: new Vector3(26.500, 1.180, 15.870),
        scale: new Vector3(4.600, 4.000, 5.800),
        rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
     })) 
     this.bathroom_Trigger.onCameraEnter = () => {
        this.bathroomMenu()
        designStudioCanvas.visible = true
     }
     this.bathroom_Trigger.onCameraExit = () => {
        designStudioCanvas.visible = false
     }
     this.bathroom_Trigger.setSize()
     engine.addEntity(this.bathroom_Trigger)
}
kitchenloader_1989(){
    this.kitchen_Trigger.addComponentOrReplace(new Transform({
        position: new Vector3(31.500, 1.180, 23.770),
        scale: new Vector3(17.100, 4.000, 15.100),
        rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
     })) 
     this.kitchen_Trigger.onCameraEnter = () => {
        this.kitchenMenu()
        designStudioCanvas.visible = true
     }
     this.kitchen_Trigger.onCameraExit = () => {
        designStudioCanvas.visible = false
     }
     this.kitchen_Trigger.setSize()
     engine.addEntity(this.kitchen_Trigger)

}
bathroomloader_1989(){
    this.bathroom_Trigger.addComponentOrReplace(new Transform({
        position: new Vector3(18.500, 1.180, 28.970),
        scale: new Vector3(4.000, 3.400, 5.000),
        rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
     })) 
     this.bathroom_Trigger.onCameraEnter = () => {
        this.bathroomMenu()
        designStudioCanvas.visible = true
     }
     this.bathroom_Trigger.onCameraExit = () => {
        designStudioCanvas.visible = false
     }
     this.bathroom_Trigger.setSize()
     engine.addEntity(this.bathroom_Trigger)
//secondarytrigger
     this.bathroom_TriggerSecondary.addComponentOrReplace(new Transform({
        position: new Vector3(31.600, 1.180, 12.970),
        scale: new Vector3(6.500, 4.800, 5.410),
        rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
     }) ) 
     this.bathroom_TriggerSecondary.onCameraEnter = () => {
        designStudioCanvas.visible = true
        this.bathroomMenu()
     }
     this.bathroom_TriggerSecondary.onCameraExit = () => {
        designStudioCanvas.visible = false
     }
     this.bathroom_TriggerSecondary.setSize()
     engine.addEntity(this.bathroom_TriggerSecondary)
}
kitchenloader_2345(){
    this.kitchen_Trigger.addComponentOrReplace(new Transform({
        position: new Vector3(30.700, 2.180, 25.170),
        scale: new Vector3(21.000, 3.700, 10.000),
        rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
     })) 
     this.kitchen_Trigger.onCameraEnter = () => {
        this.bathroomMenu()
        designStudioCanvas.visible = true
     }
     this.kitchen_Trigger.onCameraExit = () => {
        designStudioCanvas.visible = false
     }
     this.kitchen_Trigger.setSize()
     engine.addEntity(this.kitchen_Trigger)
}
bathroomloader_2345(){
    this.bathroom_Trigger.addComponentOrReplace(new Transform({
        position: new Vector3(24.700, 6.180, 28.370),
        scale: new Vector3(5.200, 1.700, 2.700),
        rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
     })) 
     this.bathroom_Trigger.onCameraEnter = () => {
        this.bathroomMenu()
        designStudioCanvas.visible = true
     }
     this.bathroom_Trigger.onCameraExit = () => {
        designStudioCanvas.visible = false
     }
     this.bathroom_Trigger.setSize()
     engine.addEntity(this.bathroom_Trigger)
//secondarytrigger
     this.bathroom_TriggerSecondary.addComponentOrReplace(new Transform({
        position: new Vector3(38.700, 2.180, 36.370),
        scale: new Vector3(2.200, 4.700, 2.700),
        rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
     })) 
     this.bathroom_TriggerSecondary.onCameraEnter = () => {
        designStudioCanvas.visible = true
        this.bathroomMenu()
     }
     this.bathroom_TriggerSecondary.onCameraExit = () => {
        designStudioCanvas.visible = false
     }
     this.bathroom_TriggerSecondary.setSize()
     engine.addEntity(this.bathroom_TriggerSecondary)
}
}


/*

The furnitureSystem shall include:
Change/Update the GLBs

*/
