import twodprimitives from "./2dprimitives.js";
import threedprimitives from "./3dprimitives.js";
import attributes from "./attributes.js";
import calculation from "./calculation.js";
import camera from "./camera.js";
import ccreatingandreading from "./color-creatingandreading.js";
import csetting from "./color-setting.js";
import colorBuilder from "./color.js";
import { remappedConstants } from "./constants.js";
import coordinates from "./coordinates.js";
import curves from "./curves.js";
import { EnvironmentBuilder, cursor, noCursor, height, width, frameCount, frameRate, focused } from "./environment.js";
import files from "./files.js";
import fontattribues from "./font-attributes.js";
import fontmetrics from "./font-metrics.js";
import { PFontBuilder, createFont, loadFont, text, textFont } from "./font.js";
import { PGraphicsBuilder, createGraphics, hint } from "./graphics.js";
import PImageBuilder, { image, createImage, imageMode, loadImage, noTint, requestImage,
    tint, blend, copy, filter, get, loadPixels, set, updatePixels } from "./image.js";
import { KeyboardBuilder, keyCode, key, keyPressed } from "./keyboard.js";
import lights from "./lights.js";
import materialproperties from "./materialproperties.js";
import { MouseBuilder, mouseX, mouseY, pmouseX, pmouseY, mousePressed, mouseButton } from "./mouse.js";
import output from "./output.js";
import random from "./random.js";
import { ScreenBuilder } from "./screen.js";
import shape, { PShapeBuilder } from "./shape.js";
import structure from "./structure.js";
import timeanddate from "./timeanddate.js";
import transform from "./transform.js";
import trigonometry from "./trigonometry.js";
import vectorBuilder from "./vector.js";
import vertex from "./vertex.js";
import web from "./web.js";
import Sk from "./skulpt.js";
import { processingProxy } from "./utils.js";

const { callsim } = Sk.misceval;
const { IOError } = Sk.builtin;

let looping = true;

export let processingInstance = {};

const mod = {};

const imList = [];

export function isInitialised() {
    return processing == null;
}

export function setLooping(bool) {
    looping = bool;
}

export function pushImage(image) {
    imList.push(image);
}

export let color;
export let PImage;
export let PShape;
export let PGraphics;
export let PVector;

export let processing = processingProxy;

export function init(path) {
    Sk.externalLibraries = Sk.externalLibraries || {};

    Object.assign(Sk.externalLibraries, {
        processing: {
            path: `${path}/__init__.js`,
        },
    });
}

export function main() {
    // We need this to store a reference to the actual processing object which is not created
    // until the run function is called.  Even then the processing object is passed by the
    // processing-js sytem as a parameter to the sketchProc function.  Why not set it to None here
    //

    // See:  http://processingjs.org/reference/

    //  //////////////////////////////////////////////////////////////////////
    //  Run
    //
    //  Create the processing context and setup of calls to setup, draw etc.
    //
    //
    //  //////////////////////////////////////////////////////////////////////

    color = colorBuilder(mod);
    PImage = PImageBuilder(mod);
    PShape = PShapeBuilder(mod);
    PGraphics = PGraphicsBuilder(mod);
    PVector = vectorBuilder(mod);

    let Environment = EnvironmentBuilder(mod);
    let environment = callsim(Environment);
    let PFont = PFontBuilder(mod);
    let Mouse = MouseBuilder(mod);
    let mouse = callsim(Mouse);
    let Keyboard = KeyboardBuilder(mod);
    let keyboard = callsim(Keyboard);
    let Screen = ScreenBuilder(mod);
    let screen = callsim(Screen);

    Object.assign(mod, twodprimitives, threedprimitives, attributes, calculation, camera,
        ccreatingandreading, csetting, { color }, remappedConstants, coordinates, curves,
        { Environment, environment, cursor, noCursor, height, width, frameCount, frameRate, focused },
        files, fontattribues, fontmetrics, { PFont, createFont, loadFont, text, textFont },
        { PGraphics, createGraphics, hint }, { PImage }, { image, createImage, imageMode, loadImage,
            noTint, requestImage, tint, blend, copy, filter, get, loadPixels, set, updatePixels },
        { keyboard, Keyboard, keyCode, key, keyPressed }, lights, materialproperties, { Mouse, mouse,
            mouseX, mouseY, pmouseX, pmouseY, mousePressed, mouseButton }, output, random, { Screen, screen }, { PShape }, structure,
        timeanddate, transform, trigonometry, { PVector }, vertex, web, shape);

    mod.run = new Sk.builtin.func(function () {
        let susp = new Sk.misceval.Suspension();
        let exceptionOccurred = null;
        let finish = null;

        susp.resume = function() {
            if (susp.data["error"]) {
                throw susp.data["error"];
            }

            return Sk.builtin.none.none$;
        };

        susp.data = {
            type: "Sk.promise", promise: new Promise(function(resolve, reject) {
                exceptionOccurred = reject;
                finish = resolve;
            })
        };

        function sketchProc(proc) {
            processingInstance = proc;

            proc.externals.sketch.onExit = finish;

            // FIXME if no Sk.globals["draw"], then no need for this
            proc.draw = function () {
                // if there are pending image loads then just use the natural looping calls to
                // retry until all the images are loaded.  If noLoop was called in setup then make
                // sure to revert to that after all the images in hand.

                let wait = false;

                for (var i in imList) {
                    if (imList[i].sourceImg.width === 0) {
                        if (imList[i].sourceImg.complete) {
                            throw new IOError("couldn't load image " + imList[i].sourceImg.src);
                        }

                        wait = true;
                    }
                }

                if (wait === true) {
                    if (looping === true) {
                        return;
                    }
                    else {
                        processing.loop();
                        return;
                    }
                } else {
                    if (looping === false) {
                        processing.noLoop();
                    }
                }

                if (Sk.globals["draw"]) {
                    try {
                        Sk.misceval.callsimOrSuspend(Sk.globals["draw"]);
                    } catch (e) {
                        exceptionOccurred(e);
                        proc.exit();
                    }
                }
            };

            var callBacks = [
                "setup", "mouseMoved", "mouseClicked", "mouseDragged", "mouseMoved", "mouseOut",
                "mouseOver", "mousePressed", "mouseReleased", "keyPressed", "keyReleased", "keyTyped"
            ];

            for (var cb in callBacks) {
                if (Sk.globals[callBacks[cb]]) {
                    (() => {
                        let callback = callBacks[cb];
                        proc[callback] = () =>  {
                            try {
                                Sk.misceval.callsimOrSuspend(Sk.globals[callback]);
                            } catch(e) {
                                exceptionOccurred(e);
                                if (processingInstance) {
                                    processingInstance.exit();
                                }
                            }
                        };
                    })();
                }
            }
        }

        var canvas = document.getElementById(Sk.canvas);

        if (canvas.tagName !== "CANVAS") {
            var mydiv = canvas;
            canvas = document.createElement("canvas");
            while (mydiv.firstChild) {
                mydiv.removeChild(mydiv.firstChild);
            }
            mydiv.appendChild(canvas);
        }

        canvas.style.display = "block";

        window.Processing.logger = {
            log: function (message) {
                Sk.misceval.print_(message);
            }
        };

        // if a Processing instance already exists it's likely still running, stop it by exiting
        let instance = window.Processing.getInstanceById(Sk.canvas);
        if (instance) {
            instance.exit();
        }

        mod.p = new window.Processing(canvas, sketchProc);

        return susp;
    });

    return mod;
}