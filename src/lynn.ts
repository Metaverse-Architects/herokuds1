import { TriggerBoxShape, TriggerComponent } from "@dcl/ecs-scene-utils"
import { canvas, CustomPrompt, CustomPromptButton } from "@dcl/ui-scene-utils"
import { OnClick } from "node_modules/decentraland-ecs/dist/index"

import * as ui from '@dcl/ui-scene-utils'
import resources from "src/utils/resources"
import { movePlayerToVector3 } from "src/utils/movePlayerToVector3"
import { movePlayerTo } from "@decentraland/RestrictedActions"

/*

LYNN is our very own AI-packeged NPC Entity. 

Within LYNN, we will store:
-> UI Information
-> Triggers for a sub-class UI system for the home
-> Dialogue
-> Animation


*/


export class Lynn extends Entity {


    //Lynn's public variables are important for her UI system to work.
    public scriptChoice = 0 //Rotates between Intro[0], Script[1], Script[2], Script[3]
    public dialogueNumb = 1 //Rotates between dialogueNumbers
    public housepicked = 0
    public branch = 0
    public lynnPose = 0 //Rotates between Lynn Poses
    public isTalking = false
    public openUI = true

    //Lynn's TriggerZone is important for her proximity-based UI system to work.
    // -> Dev Note: Consider adding a billboard status to Lynn on CameraEnter, and remove on CameraExit
    public triggerZone = new TriggerComponent(new TriggerBoxShape((new Vector3(4, 4, 4))), { enableDebug: false })
    public audio = new Entity()
    constructor() {
        super()
        //Initialising Lynn's shape, position and animations
        this.addComponent(new GLTFShape("models/KPMG/npc/lynn.glb"))
        this.addComponent(new Transform({
            position: new Vector3(31.23, 0.7, 62.05),
            scale: new Vector3(1.1, 1.1, 1.1),
            rotation: new Quaternion().setEuler(0, 370, 0),
        }))
        this.addComponent(new Animator())
        this.getComponent(Animator).addClip(new AnimationState("anim_talk_01"))
        this.getComponent(Animator).addClip(new AnimationState("anim_idle_01"))

        //Initialising Lynn's trigger zone
        this.addComponent(this.triggerZone)
        this.addComponent(new Billboard(false, true ,false))

        this.triggerZone.onCameraEnter = () => {
            if (this.openUI == true) {
                this.openUI = false
                this.talk()
                this.uiSystem()
            }
        }

        this.triggerZone.onCameraExit = () => {
            this.idle()
            this.openUI = true
        }
        engine.addEntity(this)
        this.audio.setParent(this)

    }
    //Talk is just a simple function to play varying animations according to proximity
    //-> Dev Note: update to play talking ONCE on a UI pop up, then switch to Idle.
    talk() {
        this.getComponent(Animator).getClip("anim_talk_01").play()
        this.getComponent(Animator).getClip("anim_talk_01").looping = true
    }
    idle() {
        this.getComponent(Animator).getClip("anim_idle_01").play()
        this.getComponent(Animator).getClip("anim_idle_01").looping = true
    }
    /*
    
    uiSystem is a function that creates a UI image, which is updated onclick. These updates are
    controlled scriptChoice and dialogueNum

    uiSystem allows us to rotate between different UIs with ease. It simplifies the amount of
    code required to build out a complex UI system, by making different branches a modular addition.
    
    */

    uiSystem() {

        //SCRIPT 0
        if (this.scriptChoice == 0) {
            let prompt = new UIImage(ui.canvas, new Texture(`imagesUI/script0/NPCScript0-UI-0${this.dialogueNumb}.png`))
            prompt.height = 200
            prompt.width = 500
            prompt.hAlign = 'center'
            prompt.vAlign = 'bottom'
            prompt.sourceHeight = 270
            prompt.sourceWidth = 666
            prompt.visible = true

            let minimizeLynn = new UIImage(ui.canvas, new Texture(`imagesUI/Lynn_Poses/${this.lynnPose}.png`))
            minimizeLynn.height = 320
            minimizeLynn.width = 320
            minimizeLynn.hAlign = 'right'
            minimizeLynn.vAlign = 'bottom'
            minimizeLynn.positionX = '-200'
            minimizeLynn.positionY = '-100'
            minimizeLynn.sourceHeight = 1080
            minimizeLynn.sourceWidth = 1080
            minimizeLynn.visible = false
            minimizeLynn.onClick = new OnPointerDown(async () => {
                minimizeLynn.visible = false
                this.lynnPose=2
                this.uiSystem()
            })
            //buttons
            let nextButton = new UIImage(ui.canvas, new Texture('imagesUI/buttons/next.png'))
            nextButton.width = "70px"
            nextButton.height = "30"
            nextButton.sourceHeight = 143
            nextButton.sourceWidth = 360
            nextButton.positionX = "0"
            nextButton.positionY = "-267"
            nextButton.isPointerBlocker = true
            nextButton.hAlign = 'bottom'
            nextButton.vAlign = 'center'
            nextButton.onClick = new OnPointerDown(async () => {
                nextButton.visible = false
                closeButton.visible = false
                if (this.dialogueNumb <= 7) {
                    this.dialogueNumb++
                    this.uiSystem()
                    prompt.visible = false
                }
                if (this.dialogueNumb >= 3) {
                    stepByStepButton.visible = false
                }
            })
            let yesButton = new UIImage(canvas, new Texture('imagesUI/buttons/yes.png'))
            yesButton.width = "60px"
            yesButton.height = "25"
            yesButton.sourceHeight = 143
            yesButton.sourceWidth = 360
            yesButton.positionX = "-37"
            yesButton.positionY = "-232"
            yesButton.isPointerBlocker = true
            yesButton.visible = false
            yesButton.onClick = new OnPointerDown(async () => {
                this.goMiddle()
                this.removeLynn()
                this.lynnPose++
                yesButton.visible = false
                noButton.visible = false
                prompt.visible = false
                closeButton.visible = false
                if (this.dialogueNumb < 7) {
                    this.dialogueNumb++
                    this.uiSystem()

                }
            })
            let noButton = new UIImage(canvas, new Texture('imagesUI/buttons/no.png'))
            noButton.width = "60px"
            noButton.height = "25"
            noButton.sourceHeight = 143
            noButton.sourceWidth = 360
            noButton.positionX = "37"
            noButton.positionY = "-232"
            noButton.isPointerBlocker = true
            noButton.visible = false
            noButton.onClick = new OnPointerDown(async () => {
                prompt.visible = false
                closeButton.visible = false
                noButton.visible = false
                yesButton.visible = false
                this.dialogueNumb = 8
                this.uiSystem()
            })
            let leftButton = new UIImage(canvas, new Texture('imagesUI/buttons/left home.png'))
            leftButton.width = "63px"
            leftButton.height = "20"
            leftButton.sourceHeight = 35
            leftButton.sourceWidth = 125
            leftButton.positionX = "-120"
            leftButton.positionY = "-250"
            leftButton.isPointerBlocker = true
            leftButton.visible = false
            leftButton.onClick = new OnPointerDown(async () => {
                closeButton.visible = false
                rightButton.visible = false
                middleButton.visible = false
                leftButton.visible = false
                prompt.visible = false
                this.lynnPose++
                this.dialogueNumb = 9
                this.goHouse(1)
            })
            let middleButton = new UIImage(canvas, new Texture('imagesUI/buttons/middlehome.png'))
            middleButton.width = "71px"
            middleButton.height = "20"
            middleButton.sourceHeight = 35
            middleButton.sourceWidth = 142
            middleButton.positionX = "0"
            middleButton.positionY = "-250"
            middleButton.isPointerBlocker = true
            middleButton.visible = false
            middleButton.onClick = new OnPointerDown(async () => {
                closeButton.visible = false
                rightButton.visible = false
                middleButton.visible = false
                leftButton.visible = false
                prompt.visible = false
                this.lynnPose++
                this.dialogueNumb = 9
                this.goHouse(2)
            })
            let rightButton = new UIImage(canvas, new Texture('imagesUI/buttons/righthome.png'))
            rightButton.width = "63px"
            rightButton.height = "20"
            rightButton.sourceHeight = 35
            rightButton.sourceWidth = 125
            rightButton.positionX = "120"
            rightButton.positionY = "-250"
            rightButton.isPointerBlocker = true
            rightButton.visible = false
            rightButton.onClick = new OnPointerDown(async () => {
                closeButton.visible = false
                rightButton.visible = false
                middleButton.visible = false
                leftButton.visible = false
                prompt.visible = false
                this.lynnPose++
                this.dialogueNumb = 9
                this.goHouse(3)

            })
            let stepByStepButton = new UIImage(canvas, new Texture('imagesUI/buttons/stepbystep.png'))
            stepByStepButton.width = "140px"
            stepByStepButton.height = "32px"
            stepByStepButton.sourceHeight = 57
            stepByStepButton.sourceWidth = 275
            stepByStepButton.positionX = "0"
            stepByStepButton.positionY = "-220"
            stepByStepButton.isPointerBlocker = true
            stepByStepButton.visible = false
            stepByStepButton.onClick = new OnPointerDown(async () => {
                stepByStepButton.visible = false
                //Open plane shape with the video below
                openExternalURL("https://www.youtube.com/watch?v=XQ4Cb72d85o&t=3s")
            })

            let closeButton = new UIImage(canvas, new Texture('imagesUI/buttons/closebutton.png'))
            closeButton.width = "18px"
            closeButton.height = "18"
            closeButton.sourceHeight = 34
            closeButton.sourceWidth = 34
            closeButton.positionX = "220"
            closeButton.positionY = "-130"
            closeButton.isPointerBlocker = true
            closeButton.visible = false
            closeButton.onClick = new OnPointerDown(async () => {
                this.audio.getComponent(AudioSource).playing = false
                this.lynnPose = 1
                closeButton.visible = false
                nextButton.visible = false
                stepByStepButton.visible = false
                rightButton.visible = false
                leftButton.visible = false
                middleButton.visible = false
                yesButton.visible = false
                noButton.visible = false
                prompt.visible = false
                this.dialogueNumb = 1
                this.openUI = false
            })



            //Conditions
            if (this.dialogueNumb == 1) {
                this.audio.addComponentOrReplace(new AudioSource(resources.sounds.Introduction1))
                this.audio.getComponent(AudioSource).playOnce()
                nextButton.visible = true
                stepByStepButton.visible = false
                closeButton.visible = true
                minimizeLynn.visible = false
            }
            if (this.dialogueNumb == 2) {
                this.audio.addComponentOrReplace(new AudioSource(resources.sounds.Introduction2))
                this.audio.getComponent(AudioSource).playOnce()
                nextButton.visible = true
                stepByStepButton.visible = false
                closeButton.visible = true
                minimizeLynn.visible = false
            }
            if (this.dialogueNumb == 3) {
                this.audio.addComponentOrReplace(new AudioSource(resources.sounds.Introduction3))
                this.audio.getComponent(AudioSource).playOnce()
                nextButton.visible = true
                closeButton.visible = true
                stepByStepButton.visible = true
                minimizeLynn.visible = false
            }
            if (this.dialogueNumb == 4) {
                this.audio.addComponentOrReplace(new AudioSource(resources.sounds.Introduction4))
                this.audio.getComponent(AudioSource).playOnce()
                nextButton.positionY = "-268"
                closeButton.visible = true
                minimizeLynn.visible = false
            }
            if (this.dialogueNumb == 5) {
                this.audio.addComponentOrReplace(new AudioSource(resources.sounds.Introduction5))
                this.audio.getComponent(AudioSource).playOnce()
                nextButton.positionY = "-280"
                stepByStepButton.visible = false
                closeButton.visible = true
                minimizeLynn.visible = false
            }
            if (this.dialogueNumb == 6) {
                this.audio.addComponentOrReplace(new AudioSource(resources.sounds.Introduction6))
                this.audio.getComponent(AudioSource).playOnce()
                nextButton.visible = false
                yesButton.visible = true
                noButton.visible = true
                stepByStepButton.visible = false
                closeButton.visible = true
                minimizeLynn.visible = false
            }
            if (this.dialogueNumb == 7) {
                this.audio.addComponentOrReplace(new AudioSource(resources.sounds.Introduction8))
                this.audio.getComponent(AudioSource).playOnce()
                minimizeLynn.visible = true
                prompt.height = 220
                prompt.width = 400
                prompt.hAlign = 'center'
                prompt.vAlign = 'bottom'
                prompt.sourceHeight = 364
                prompt.sourceWidth = 667
                nextButton.visible = false
                stepByStepButton.visible = false
                leftButton.visible = true
                middleButton.visible = true
                rightButton.visible = true
                closeButton.visible = true
                closeButton.positionX = '180'
                closeButton.positionY = '-100'
                if (this.lynnPose == 5) {
                    this.lynnPose = 1
                }
            }
            if (this.dialogueNumb == 8) {
                this.audio.addComponentOrReplace(new AudioSource(resources.sounds.Script2_14))
                this.audio.getComponent(AudioSource).playOnce()
                nextButton.visible = false
                stepByStepButton.visible = false
                closeButton.visible = true
                minimizeLynn.visible = false
            }
            if (this.dialogueNumb == 9) {
                prompt.visible = false
                nextButton.visible = false
                stepByStepButton.visible = false
                leftButton.visible = false
                middleButton.visible = false
                rightButton.visible = false
                closeButton.visible = false
                minimizeLynn.visible = false
                // this.scriptChoice = 1
                this.audio.getComponent(AudioSource).playing = false
                this.dialogueNumb = 1
                this.uiSystem()
            }


        }
        // SCRIPT 1
        if (this.scriptChoice == 1) {
            let prompt = new UIImage(ui.canvas, new Texture(`imagesUI/script1/NPCScript1-UI-${this.branch}${this.dialogueNumb}.png`))
            prompt.height = 200
            prompt.width = 500
            prompt.hAlign = 'center'
            prompt.vAlign = 'bottom'
            prompt.sourceHeight = 270
            prompt.sourceWidth = 666
            prompt.visible = true

            let minimizeLynn = new UIImage(ui.canvas, new Texture(`imagesUI/Lynn_Poses/${this.lynnPose}.png`))
            minimizeLynn.height = 320
            minimizeLynn.width = 320
            minimizeLynn.hAlign = 'right'
            minimizeLynn.vAlign = 'bottom'
            minimizeLynn.positionX = '-200'
            minimizeLynn.positionY = '-100'
            minimizeLynn.sourceHeight = 1080
            minimizeLynn.sourceWidth = 1080
            minimizeLynn.visible = false
            minimizeLynn.onClick = new OnPointerDown(async () => {
                minimizeLynn.visible = false
                this.lynnPose=1
                this.uiSystem()
            })

            let nextButton = new UIImage(ui.canvas, new Texture('imagesUI/buttons/next.png'))
            nextButton.width = "70px"
            nextButton.height = "30"
            nextButton.sourceHeight = 143
            nextButton.sourceWidth = 360
            nextButton.positionX = "0"
            nextButton.positionY = "-267"
            nextButton.isPointerBlocker = true
            nextButton.hAlign = 'bottom'
            nextButton.vAlign = 'center'
            nextButton.onClick = new OnPointerDown(async () => {
                nextButton.visible = false
                if (this.dialogueNumb < 15) {
                    this.dialogueNumb++
                    this.uiSystem()
                    prompt.visible = false
                    log(this.dialogueNumb)
                }
            })
            let contemporaryTagButton = new UIImage(canvas, new Texture('imagesUI/buttons/contemporary.png'))
            contemporaryTagButton.width = "100px"
            contemporaryTagButton.height = "30"
            contemporaryTagButton.sourceHeight = 142
            contemporaryTagButton.sourceWidth = 719
            contemporaryTagButton.positionX = "-185"
            contemporaryTagButton.positionY = "-256.6"
            contemporaryTagButton.hAlign = 'bottom'
            contemporaryTagButton.vAlign = 'center'
            contemporaryTagButton.isPointerBlocker = true
            contemporaryTagButton.visible = false
            contemporaryTagButton.onClick = new OnPointerDown(async () => {
                contemporaryTagButton.visible = false
                farmhouseTagButton.visible = false
                craftsmanTagButton.visible = false
                prompt.visible = false
                if (this.dialogueNumb < 15) {

                    this.dialogueNumb = 3
                    this.branch = 1
                    this.housepicked = 1
                    this.uiSystem()
                }
            })
            let craftsmanTagButton = new UIImage(canvas, new Texture('imagesUI/buttons/craftsman.png'))
            craftsmanTagButton.width = "100px"
            craftsmanTagButton.height = "30"
            craftsmanTagButton.sourceHeight = 142
            craftsmanTagButton.sourceWidth = 526
            craftsmanTagButton.positionX = "-50"
            craftsmanTagButton.positionY = "-256.6"
            craftsmanTagButton.hAlign = 'bottom'
            craftsmanTagButton.vAlign = 'center'
            craftsmanTagButton.isPointerBlocker = true
            craftsmanTagButton.visible = false
            craftsmanTagButton.onClick = new OnPointerDown(async () => {

                contemporaryTagButton.visible = false
                farmhouseTagButton.visible = false
                craftsmanTagButton.visible = false
                prompt.visible = false

                if (this.dialogueNumb < 15) {
                    this.dialogueNumb = 3
                    this.branch = 2
                    this.housepicked = 2
                    this.uiSystem()
                }
            })
            let farmhouseTagButton = new UIImage(canvas, new Texture('imagesUI/buttons/farmhouse.png'))
            farmhouseTagButton.width = "100px"
            farmhouseTagButton.height = "30"
            farmhouseTagButton.sourceHeight = 142
            farmhouseTagButton.sourceWidth = 526
            farmhouseTagButton.positionX = "185"
            farmhouseTagButton.positionY = "-256.6"
            farmhouseTagButton.hAlign = 'bottom'
            farmhouseTagButton.vAlign = 'center'
            farmhouseTagButton.isPointerBlocker = true
            farmhouseTagButton.visible = false
            farmhouseTagButton.onClick = new OnPointerDown(async () => {
                contemporaryTagButton.visible = false
                farmhouseTagButton.visible = false
                craftsmanTagButton.visible = false

                prompt.visible = false
                if (this.dialogueNumb < 15) {
                    this.dialogueNumb = 3
                    this.branch = 3
                    this.housepicked = 3
                    this.uiSystem()
                }
            })
            let spanishHouseTagButton = new UIImage(canvas, new Texture('imagesUI/buttons/spanish.png'))
            spanishHouseTagButton.width = "100px"
            spanishHouseTagButton.height = "30"
            spanishHouseTagButton.sourceHeight = 142
            spanishHouseTagButton.sourceWidth = 526
            spanishHouseTagButton.positionX = "62"
            spanishHouseTagButton.positionY = "-256.6"
            spanishHouseTagButton.hAlign = 'bottom'
            spanishHouseTagButton.vAlign = 'center'
            spanishHouseTagButton.isPointerBlocker = true
            spanishHouseTagButton.visible = false
            spanishHouseTagButton.onClick = new OnPointerDown(async () => {
                contemporaryTagButton.visible = false
                farmhouseTagButton.visible = false
                craftsmanTagButton.visible = false
                spanishHouseTagButton.visible = false

                prompt.visible = false
                if (this.dialogueNumb < 15) {
                    this.dialogueNumb = 3
                    this.branch = 4
                    this.housepicked = 3
                    this.uiSystem()
                }
            })
            let videoButton = new UIImage(canvas, new Texture('imagesUI/buttons/videobutton.png'))
            videoButton.width = "200px"
            videoButton.height = "45"
            videoButton.sourceHeight = 56
            videoButton.sourceWidth = 361
            videoButton.positionX = "-37"
            videoButton.positionY = "-232"
            videoButton.isPointerBlocker = true
            videoButton.visible = false
            videoButton.onClick = new OnPointerDown(async () => {

                videoButton.visible = false
                prompt.visible = false
                if (this.dialogueNumb < 15) {
                    this.dialogueNumb++
                    this.uiSystem()
                }
            })
            let noButton = new UIImage(canvas, new Texture('imagesUI/buttons/no.png'))
            noButton.width = "60px"
            noButton.height = "25"
            noButton.sourceHeight = 143
            noButton.sourceWidth = 360
            noButton.positionX = "37"
            noButton.positionY = "-232"
            noButton.isPointerBlocker = true
            noButton.visible = false
            noButton.onClick = new OnPointerDown(async () => {

                if (this.dialogueNumb < 15) {
                    this.dialogueNumb++
                    this.uiSystem()
                    prompt.visible = false
                    log(this.dialogueNumb)
                }


            })

            let yesButton = new UIImage(canvas, new Texture('imagesUI/buttons/yes.png'))
            yesButton.width = "60px"
            yesButton.height = "25"
            yesButton.sourceHeight = 143
            yesButton.sourceWidth = 360
            yesButton.positionX = "-37"
            yesButton.positionY = "-232"
            yesButton.isPointerBlocker = true
            yesButton.visible = false
            yesButton.onClick = new OnPointerDown(async () => {
                this.goMiddle()
                yesButton.visible = false
                noButton.visible = false
                prompt.visible = false
            })

            let lastButton = new UIImage(canvas, new Texture('imagesUI/buttons/lastbutton.png'))
            lastButton.width = "200px"
            lastButton.height = "45"
            lastButton.sourceHeight = 56
            lastButton.sourceWidth = 466
            lastButton.positionX = "-37"
            lastButton.positionY = "-232"
            lastButton.isPointerBlocker = true
            lastButton.visible = false
            lastButton.onClick = new OnPointerDown(async () => {
                openExternalURL('https://www.kbhome.com/?utm_source=metaverse&amp;utm_medium=metaverse')
                prompt.visible = false
                lastButton.visible = false

            })
            let closeButton = new UIImage(canvas, new Texture('imagesUI/buttons/closebutton.png'))
            closeButton.width = "18px"
            closeButton.height = "18"
            closeButton.sourceHeight = 34
            closeButton.sourceWidth = 34
            closeButton.positionX = "220"
            closeButton.positionY = "-130"
            closeButton.isPointerBlocker = true
            closeButton.visible = false
            closeButton.onClick = new OnPointerDown(async () => {
                this.audio.getComponent(AudioSource).playing = false
                prompt.visible=false
                closeButton.visible = false
                nextButton.visible=false
                this.lynnPose = 1
            })
            if (this.dialogueNumb == 1) {
                this.audio.addComponentOrReplace(new AudioSource(resources.sounds.Script1_1))
                this.audio.getComponent(AudioSource).playOnce()
                nextButton.visible = true
                closeButton.visible=true
                minimizeLynn.visible= true
            }
            if (this.dialogueNumb == 2) {
                // this.audio.addComponentOrReplace(new AudioSource(resources.sounds.Introduction2))
                // this.audio.getComponent(AudioSource).playOnce()
                nextButton.visible = false
                prompt.sourceHeight = 497
                prompt.sourceWidth = 828
                prompt.width = 421
                prompt.height = 250
                contemporaryTagButton.visible = true
                craftsmanTagButton.visible = true
                farmhouseTagButton.visible = true
                spanishHouseTagButton.visible = true

            }
            if (this.dialogueNumb == 3) {
                // this.audio.addComponentOrReplace(new AudioSource(resources.sounds.Introduction3))
                // this.audio.getComponent(AudioSource).playOnce()
                nextButton.visible = true
                this.branch = 0


            }
            if (this.dialogueNumb == 4) {
                // this.audio.addComponentOrReplace(new AudioSource(resources.sounds.Introduction4))
                // this.audio.getComponent(AudioSource).playOnce()
                nextButton.positionY = "-268"
                prompt.sourceHeight = 1123
                prompt.sourceWidth = 2774
            }
            if (this.dialogueNumb == 5) {
                // this.audio.addComponentOrReplace(new AudioSource(resources.sounds.Introduction5))
                // this.audio.getComponent(AudioSource).playOnce()
                nextButton.visible = true
                prompt.sourceHeight = 1407
                prompt.sourceWidth = 2775

                this.goHouse(this.housepicked)
                log(this.housepicked)
            }
            if (this.dialogueNumb == 6) {
                // this.audio.addComponentOrReplace(new AudioSource(resources.sounds.Introduction6))
                // this.audio.getComponent(AudioSource).playOnce()
                nextButton.visible = true
                prompt.sourceHeight = 1407
                prompt.sourceWidth = 2775

            }
            if (this.dialogueNumb == 7) {
                // this.audio.addComponentOrReplace(new AudioSource(resources.sounds.Introduction8))
                // this.audio.getComponent(AudioSource).playOnce()
                nextButton.visible = true
                prompt.sourceHeight = 1407
                prompt.sourceWidth = 2775
            }
            if (this.dialogueNumb == 8) {
                // this.audio.addComponentOrReplace(new AudioSource(resources.sounds.Script2_14))
                // this.audio.getComponent(AudioSource).playOnce()
                nextButton.visible = true
                videoButton.visible = true
                prompt.sourceHeight = 1407
                prompt.sourceWidth = 2775

            }
            if (this.dialogueNumb == 9) {
                nextButton.visible = true
                prompt.sourceHeight = 1123
                prompt.sourceWidth = 2775

            }

            if (this.dialogueNumb == 10) {
                nextButton.visible = true
                nextButton.positionY = "-286"
                prompt.sourceHeight = 1123
                prompt.sourceWidth = 2775


            }
            // this need to be triggered some how after the player clicks a couple of things

            if (this.dialogueNumb == 11) {
                nextButton.visible = true
                prompt.sourceHeight = 1123
                prompt.sourceWidth = 2775
                this.branch = this.housepicked

            }
            if (this.dialogueNumb == 12) {

                nextButton.visible = true
                prompt.sourceHeight = 338
                prompt.sourceWidth = 666

                this.branch = 0


            }
            if (this.dialogueNumb == 13) {

                yesButton.visible = true
                noButton.visible = true
                nextButton.visible = false
                prompt.sourceHeight = 1123
                prompt.sourceWidth = 2775

            }
            if (this.dialogueNumb == 14) {

                yesButton.visible = false
                noButton.visible = false
                lastButton.visible = true
                nextButton.visible = false
                prompt.sourceHeight = 1407
                prompt.sourceWidth = 2775
                prompt.visible = true
            }

        }
    }
    goMiddle() {
        movePlayerToVector3(new Vector3(31.37, 0.88, 41.71), new Vector3(31.14, 0.88, 32.60))
    }
    goHouse(housepicked: number) {

        if (housepicked == 1) {
            log("teleported to house 1")
            movePlayerToVector3(new Vector3(44.36, 0.88, 29.95), new Vector3(46.05, 1.03, 27.34))
        }
        if (housepicked == 2) {
            log("teleported to house 2")
            movePlayerToVector3(new Vector3(31.60, 0.88, 24.12), new Vector3(31.34, 0.88, 20.97))
        }

        if (housepicked == 3) {
            movePlayerToVector3(new Vector3(20.06, 0.88, 29.25), new Vector3(18.88, 0.88, 27.75))
        }
    }

    removeLynn() {
        this.removeComponent(GLTFShape)
        this.audio.setParent(Attachable.FIRST_PERSON_CAMERA)
    }

}
