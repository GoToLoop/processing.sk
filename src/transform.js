import Sk from "./skulpt.js";
import { processingProxy, makeFunc, optional, constructOptionalContectManager } from "./utils.js";

const { float_, int_ } = Sk.builtin;

export default {
    applyMatrix: makeFunc(processingProxy, "applyMatrix", [
        { "n00": [ int_, float_ ] },
        { "n01": [ int_, float_ ] },
        { "n02": [ int_, float_ ] },
        { "n03": [ int_, float_ ] },
        { "n04": [ int_, float_ ] },
        { "n05": [ int_, float_ ] },
        { "n06": [ int_, float_ ] },
        { "n07": [ int_, float_ ] },
        { "n08": [ int_, float_ ] },
        { "n09": [ int_, float_ ] },
        { "n10": [ int_, float_ ] },
        { "n11": [ int_, float_ ] },
        { "n12": [ int_, float_ ] },
        { "n13": [ int_, float_ ] },
        { "n14": [ int_, float_ ] },
        { "n15": [ int_, float_ ] }
    ]),

    popMatrix: makeFunc(processingProxy, "popMatrix"),
    printMatrix: makeFunc(processingProxy, "printMatrix"),

    pushMatrix: constructOptionalContectManager({
        __call__: makeFunc(() => processingProxy.pushMatrix(), "__call__", [ self ]),
        __enter__: makeFunc(() => processingProxy.pushMatrix(), "__enter__", [ self ]),
        __exit__: makeFunc(() => processingProxy.popMatrix(), "__exit__", [ self ])
    }, "pushMatrix"),

    resetMatrix: makeFunc(processingProxy, "resetMatrix"),

    rotate: makeFunc(processingProxy, "rotate", [
        { "angle": [ int_, float_ ] }
    ]),

    rotateX: makeFunc(processingProxy, "rotateX", [
        { "angle": [ int_, float_ ] }
    ]),

    rotateY: makeFunc(processingProxy, "rotateY", [
        { "angle": [ int_, float_ ] }
    ]),

    rotateZ: makeFunc(processingProxy, "rotateZ", [
        { "angle": [ int_, float_ ] }
    ]),

    scale: makeFunc(processingProxy, "scale", [
        { "size": [ int_, float_ ] },
        { "y": [ int_, float_ ], optional },
        { "z": [ int_, float_ ], optional }
    ]),

    translate: makeFunc(processingProxy, "translate", [
        { "x": [ int_, float_ ] },
        { "y": [ int_, float_ ] },
        { "z": [ int_, float_ ], optional }
    ])
};