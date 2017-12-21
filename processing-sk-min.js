!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.ProcessingSk={})}(this,function(e){"use strict";function t(e,t,n){var o=n||[];return new re(function(){var n=null;if("function"!=typeof e?e[t]&&(n=e[t]):n=e,null==n)throw new Error("Couldn't infer function to wrap");var i=he(arguments).filter(function(e){return void 0!==e});le(t,i,function(e){return void 0===e?0:e.filter(function(e){return!e.optional}).length}(o),o.length,!1),function(e,t){t.forEach(function(t){var n=ne(t,2),o=n[0],i=n[1],r=Object.keys(i)[0];if(Array.isArray(i[r])||(i[r]=[i[r]]),!i[r].some(function(e){return!0===e||("string"==typeof e?o.tp$name===e:o instanceof e&&(!e.allowed||o in e.allowed))}))throw new se(e+": "+r+" (value: "+pe(o)+") not of type "+i[r].map(function(e){return e.tp$name}))})}(t,function(e,t,n){return i.map(function(t,o){return e(t,n[o])})}(function(e,t){return[e,t]},0,o));var r=i.filter(function(e,t){return void 0===o[t].ignored||!o[t].ignored}).map(function(e,t){var n=o[t];return n===xe?e:n.converter?n.converter(pe(e)):pe(e)}),a=n.apply(null,r);return _e(a)})}function n(e){if("string"==typeof e){var t=/#([A-F0-9]{6})/g.exec(e);if(2!==t.length)throw new ue(e+' not in the correct format for a color expecting "#AB12F4"');return parseInt(t[1],16)+4278190080}return e}function o(e){Se=function(t,n){return fe(e,function(e){return function(t,n){me(n,e)}}(t),"OptionalContextManager_"+n,[])}}function i(e,t){var n=ge(e);if(!n.includes("__call__")||!n.includes("__enter__")||!n.includes("__exit__"))throw new Error("The optional context manager needs a __call__, __enter__ and __exit__ function.");return ve(Se(e,t))}function r(e,t,n){return function(){if(Ee.has(n))return Ee.get(n);var o=e.apply(null,t);return Ee.set(n,o),o}}function a(e,t){t.__getattr__=new Qt(function(e,t){switch(qt(t)){case"frameCount":return Jt(Te.frameCount);case"frameRate":return Jt(Te.frameRate);case"height":return Jt(Te.height);case"width":return Jt(Te.width);case"online":return Jt(Te.online);case"focused":return Jt(Te.focused);default:return}})}function l(e,n){n.__init__=t(function(e){e.v=Te.__frameRate},"__init__",[xe]),n.__call__=t(function(e,t){Te.frameRate(t),e.v=t},"__call__",[xe,{rate:$t}])}function u(e,n){n.__init__=t(function(e,t){t&&(e.v=new Te.PFont(t))},"__init__",[xe,{"input ":Gn,optional:Pe}]);var o=Un("staticmethod",e),i=new Nn(function(){return new Mn(Te.PFont.list())});n.list=Hn(o,i)}function s(e,t,n,o){e.v=Te.createGraphics(t,n,o),void 0!==o&&o!==Jn&&o!==qn||(e.v.toImageData=function(t,n,o,i){t=void 0!==t?t:0,n=void 0!==n?n:0,o=void 0!==o?o:Te.width,i=void 0!==i?i:Te.height;for(var r=void 0;void 0===r;)r=e.v.externals.context.getImageData(t,n,o,i);return r})}function c(e,n){n.__init__=t(s,"__init__",[xe,{width:oo},{height:oo},{renderer:oo,allowed:[Jn,qn,Kn,Qn,$n,eo,to],optional:Pe}]),n.beginDraw=new io(function(e){e.v.beginDraw()}),n.endDraw=new io(function(e){e.v.endDraw()}),n.__getattr__=new io(function(e,t){var n=e.v[co(t)];if(void 0!==n)return"function"==typeof n?new io(function(e){var t=Array.from(arguments).map(co);return so(n.apply(e.v,t))}):so(n)})}function p(e,t,n,o){e.v=new Te.PImage(t,n,o),yo(e,"pixels",Ro(ai,e))}function _(t,n,o,i,r){var a=[n,o,i,r].filter(function(e){return void 0!==e});if(2==a.length)return t.v.get.apply(t.v,a);var l=Ro(e.PImage);return l.v=t.v.get.apply(t.v,a),yo(l,"pixels",Ro(ai,l)),l}function d(e,t,n,o){e.v.set(t,n,o)}function f(e,t,n,o,i,r,a,l,u,s){return e.v.copy(t,n,o,i,r,a,l,u,s)}function v(e,t){e.v.mask(t)}function m(e,t,n,o,i,r,a,l,u,s){e.v.blend(t,n,o,i,r,a,l,u,s)}function g(e,t,n){e.v.filter(t,n)}function h(e,t){e.v.save(t)}function E(e,t,n){e.v.save(t,n)}function S(e){e.v.loadPixels()}function P(e,t,n,o,i){e.v.updatePixels(t,n,o,i)}function x(e,o){o.__init__=t(function(e,t){e.image=t},"__init__",[xe,{image:"PImage",optional:Pe}]),o.__getitem__=t(function(e,t){return e.image.pixels[t]},"__getitem__",[xe,{index:go}]),o.__setitem__=t(function(e,t,n){return e.image.pixels[t]=n},"__setitem__",[xe,{index:go},{color:[go,Po,So,Eo],converter:n}]),o.__len__=t(function(e){return e.image.width*e.image.height},"__len__",[xe])}function y(e,o){o.__init__=t(p,"__init__",[xe,{width:[go,Eo],optional:Pe},{height:go,optional:Pe},{format:go,allowed:[1,2,4],optional:Pe}]),o.__getattr__=new mo(function(e,t){return"width"===(t=wo(t))?Oo(e.v.width):"height"===t?Oo(e.v.height):void 0}),o.get=t(_,"get",[xe,{x:go},{y:go},{width:go,optional:Pe},{height:go,optional:Pe}]),o.set=t(d,"set",[xe,{x:go},{y:go},{color:[go,Po,So,Eo],converter:n}]),o.copy=t(f,"copy",[xe,{srcImg:[go,"PImage"]},{sx:go},{sy:go},{swidth:go},{sheight:go},{dx:go},{dy:go},{dwidth:go},{dheight:go,optional:Pe}]),o.mask=t(v,"mask",[xe,{maskImg:["PImage",ho]}]),o.blend=t(m,"blend",[xe,{srcImg:[go,"PImage"]},{x:go},{y:go},{width:go},{height:go},{dx:go},{dy:go},{dwidth:go},{dheight:go},{MODE:go,optional:Pe,allowed:[ko,Lo,Do,No,Co,Mo,Go,Fo,Bo,zo,Vo,Ho,Uo,Xo,Yo]}]),o.filter=t(g,"filter",[xe,{MODE:go,allowed:[jo,Zo,Wo,Jo,qo,Ko,Qo,$o]},{srcImg:"PImage",optional:Pe}]),o.save=t(h,"save",[xe,{filename:Eo}]),o.resize=t(E,"resize",[xe,{wide:go},{high:go}]),o.loadPixels=t(S,"loadPixels"),o.updatePixels=t(P,"updatePixels",[xe,{x:go,optional:Pe},{y:go,optional:Pe},{w:go,optional:Pe},{h:go,optional:Pe}])}function T(){var e=Ro(ai);return e.image={pixels:Te.pixels},e}function A(e,t){t.__getattr__=new Ai(function(e,t){return"key"===(t=Ti(t))?yi(Te.key.toString()):"keyCode"===t?yi(Te.keyCode):"keyPressed"===t?yi(Te.__keyPressed):void 0})}function R(e,t){t.__getattr__=new Xi(function(e,t){switch(Ui(t)){case"x":return Hi(Te.mouseX);case"y":return Hi(Te.mouseY);case"px":return Hi(Te.pmouseX);case"py":return Hi(Te.pmouseY);case"pressed":return Hi(Te.__mousePressed);case"button":return Hi(Te.mouseButton);default:return}})}function I(e,t){t.__init__=new vr(function(e){e.pixels=null}),t.__getattr__=new vr(function(e,t){switch(t=cr(t)){case"height":return pr(Ca.height);case"width":return pr(Ca.width);case"pixels":return null==e.pixels&&(e.pixels=new fr(Ca.pixels.toArray())),e.pixels}})}function b(e){return e.v.isVisible()}function w(e,t){e.v.setVisible(t)}function O(e){e.v.disableStyle()}function k(e){e.v.enableStyle()}function L(t,n){var o=t.v.getChild(n);if(null!=o){var i=Sk.misceval.callsim(e.PShape);return i.v=o,i}return null}function D(e,t,n,o){e.v.translate(t.v,n.v,o.v)}function N(e,t){e.v.rotate(t)}function C(e,t){e.v.rotateX(t)}function M(e,t){e.v.rotateY(t)}function G(e,t){e.v.rotateZ(t)}function F(e,t,n,o){e.v.scale(t,n,o)}function B(n,o){o.__getattr__=new Sk.builtin.func(function(e,t){switch(t=Rr(t)){case"width":return Ir(e.v.width);case"height":return Ir(e.v.height)}}),o.isVisible=t(b,"isVisible",[xe]),o.setVisible=t(w,"setVisible"[{value:Tr}]),o.disableStyle=t(O,"disableStyle",[xe]),o.enableStyle=t(k,"enableStyle",[xe]),o.getChild=t(L,"getChild",[xe,{shape:e.PShape}]),o.translate=t(D,"translate",[xe,{x:[xr,yr]},{y:[xr,yr]},{z:[xr,yr],optional:Pe}]),o.rotate=t(N,"rotate",[xe,{angle:[xr,yr]}]),o.rotateX=t(C,"rotateX",[xe,{angle:[xr,yr]}]),o.rotateY=t(M,"rotateY",[xe,{angle:[xr,yr]}]),o.rotateZ=t(G,"rotateZ",[xe,{angle:[xr,yr]}]),o.scale=t(F,"scale"[{z:[xr,yr],optional:Pe}])}function z(e,t,n,o){e.v=new Ca.PVector(t,n,o)}function V(e,t,n,o){e.v.set(t,n,o)}function H(t){var n=ua(e.PVector);return n.v=t.v.get(),n}function U(t,n){var o=ua(e.PVector);return o.v=t.v.add(n),o}function X(t,n){var o=ua(e.PVector);return o.v=t.v.sub(n),o}function Y(t,n){var o=ua(e.PVector);return o.v=t.v.mult(n),o}function j(t,n){var o=ua(e.PVector);return o.v=t.v.div(n),o}function Z(t,n){var o=ua(e.PVector);return o.v=t.v.dot(n),o}function W(t,n){var o=ua(e.PVector);return o.v=t.v.cross(n),o}function J(t,n){var o=ua(e.PVector);return o.v=t.v.dist(n),o}function q(t,n){var o=ua(e.PVector);return o.v=t.v.angleBetween(n),o}function K(e,t){e.v.limit(t)}function Q(e,n){n.__init__=t(z,"__init__",[xe,{x:ra,optional:Pe},{y:ra,optional:Pe},{z:ra,optional:Pe}]),n.__getattr__=new Sk.builtin.func(function(e,t){return"x"===(t=Sk.ffi.remapToJs(t))?ca(e.v.x):"y"===t?ca(e.v.y):"z"===t?Sk.builtin.assk$(e.v.z):void 0}),n.get=t(H,"get",[xe]),n.set=t(V,"set",[xe,{x:ra},{x:ra,optional:Pe},{x:ra,optional:Pe}]),n.mag=t(function(e){return e.v.mag()},"mag",[xe]),n.add=t(U,"add",[xe,{vector:"PVector"}]),n.sub=t(X,"sub",[xe,{vector:"PVector"}]),n.mult=t(Y,"mult",[xe,{vector:"PVector"}]),n.div=t(j,"div",[xe,{vector:"PVector"}]),n.dist=t(J,"dist",[xe,{vector:"PVector"}]),n.dot=t(Z,"dot",[xe,{x:[ra,aa]},{y:[ra,aa],optional:Pe},{z:[ra,aa],optional:Pe}]),n.cross=t(W,"cross",[xe,{vector:"PVector"}]),n.normalize=t(function(e){return e.normalize()},"normalize",[xe]),n.limit=t(K,"limit",[xe,{value:[ra,aa]}]),n.angleBetween=t(q,"angleBetween",[xe,{vector:"PVector"}]),n.array=t(function(e){return e.v.array()},"array",[xe]),n.__repr__=t(function(e){return e.v.toString()},"repr",[xe])}function $(){return null==Ca}function ee(){Na=!0}if("function"==typeof require){var te=require("fs").readFileSync("bower_components/skulpt/skulpt.min.js").toString();(0,eval)(te)}var ne=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),oe=Sk.builtin,ie=oe.str,re=oe.func,ae=oe.NotImplementedError,le=oe.pyCheckArgs,ue=oe.ValueError,se=oe.TypeError,ce=Sk.ffi,pe=ce.remapToJs,_e=ce.remapToPy,de=Sk.misceval,fe=de.buildClass,ve=de.callsim,me=Object.assign,ge=Object.keys,he=Array.from,Ee=new Map,Se=void 0,Pe=!0,xe={self:!0},ye=new re(function(){throw new ae}),Te=(new ie("processing"),new Proxy({},{get:function(t,n){return e.processingInstance[n]}})),Ae=Sk.builtin,Re=Ae.float_,Ie=Ae.int_,be={arc:t(Te,"arc",[{x:[Ie,Re]},{y:[Ie,Re]},{width:[Ie,Re]},{height:[Ie,Re]},{start:[Ie,Re]},{stop:[Ie,Re]}]),ellipse:t(Te,"ellipse",[{x:[Ie,Re]},{y:[Ie,Re]},{width:[Ie,Re]},{height:[Ie,Re]}]),line:t(Te,"line",[{x1:[Ie,Re]},{y1:[Ie,Re]},{z1:[Ie,Re]},{x2:[Ie,Re]},{y2:[Ie,Re],optional:Pe},{z2:[Ie,Re],optional:Pe}]),point:t(Te,"point",[{x:[Ie,Re]},{y:[Ie,Re]},{z:[Ie,Re],optional:Pe}]),quad:t(Te,"quad",[{x1:[Ie,Re]},{y1:[Ie,Re]},{x2:[Ie,Re]},{y2:[Ie,Re]},{x3:[Ie,Re]},{y3:[Ie,Re]},{x4:[Ie,Re]},{y4:[Ie,Re]}]),rect:t(Te,"rect",[{x:[Ie,Re]},{y:[Ie,Re]},{width:[Ie,Re]},{height:[Ie,Re]},{tlradius:[Ie,Re],optional:Pe},{trradius:[Ie,Re],optional:Pe},{brradius:[Ie,Re],optional:Pe},{blradius:[Ie,Re],optional:Pe}]),triangle:t(Te,"triangle",[{x1:[Ie,Re]},{y1:[Ie,Re]},{x2:[Ie,Re]},{y2:[Ie,Re]},{x3:[Ie,Re]},{y3:[Ie,Re]}])},we=Sk.builtin,Oe=we.float_,ke=we.int_,Le={box:t(Te,"box",[{width:[ke,Oe]},{height:[ke,Oe],optional:Pe},{depth:[ke,Oe],optional:Pe}]),sphere:t(Te,"sphere",[{radius:[ke,Oe]}]),sphereDetail:t(Te,"sphereDetail",[{ures:ke},{vres:ke,optional:Pe}])},De=Sk.ffi.remapToPy,Ne={X:0,Y:1,Z:2,R:3,G:4,B:5,A:6,U:7,V:8,NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MAXOSX:2,LINUX:3,EPSILON:1e-4,MAX_FLOAT:3.4028235e38,MIN_FLOAT:-3.4028235e38,MAX_INT:2147483647,MIN_INT:-2147483648,PI:Math.PI,TWO_PI:2*Math.PI,TAU:2*Math.PI,HALF_PI:Math.PI/2,THIRD_PI:Math.PI/3,QUARTER_PI:Math.PI/4,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,WHITESPACE:" \t\n\r\f ",RGB:1,ARGB:2,HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1,ADD:2,SUBTRACT:4,LIGHTEST:8,DARKEST:16,DIFFERENCE:32,EXCLUSION:64,MULTIPLY:128,SCREEN:256,OVERLAY:512,HARD_LIGHT:1024,SOFT_LIGHT:2048,DODGE:4096,BURN:8192,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,CHORD:2,PIE:3,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:32768,PREC_MAXVAL:32767,PREC_ALPHA_SHIFT:9,PREC_RED_SHIFT:1,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8},Ce=Object.keys(Ne).reduce(function(e,t){return e[t]=De(Ne[t]),e},{}),Me=Sk.builtin,Ge=Me.int_,Fe=Me.str,Be=Me.float_,ze=Ce.ROUND,Ve=Ce.SQUARE,He=Ce.BUTT,Ue=Ce.MITTER,Xe=Ce.BEVEL,Ye=Ce.CENTER,je=Ce.RADIUS,Ze=Ce.CORNER,We=Ce.CORNERS,Je={ellipseMode:t(Te,"ellipseMode",[{mode:Ge,allowed:[Ye,je,Ze,We]}]),noSmooth:t(Te,"noSmooth"),smooth:t(Te,"smooth",[{level:Ge,allows:[2,4,8],ignored:!0,optional:Pe}]),rectMode:t(Te,"rectMode",[{mode:Ge,allowed:[Ye,je,Ze,We]}]),strokeCap:t(Te,"strokeCap",[{mode:Fe,allowed:[ze,Ve,He]}]),strokeJoin:t(Te,"strokeJoin",[{mode:Fe,allowed:[Ue,Xe,ze]}]),strokeWeight:t(Te,"strokeWeight",[{width:[Ge,Be]}])},qe=Sk.builtin,Ke=qe.int_,Qe=qe.float_,$e=qe.list,et={abs:t(Te,"abs",[{value:[Ke,Qe]}]),ceil:t(Te,"ceil",[{value:[Ke,Qe]}]),constrain:t(Te,"constrain",[{value:[Ke,Qe]},{min:[Ke,Qe]},{max:[Ke,Qe]}]),dist:t(Te,"dist",[{x1:[Ke,Qe]},{y1:[Ke,Qe]},{z1:[Ke,Qe]},{x2:[Ke,Qe]},{y2:[Ke,Qe],optional:Pe},{z2:[Ke,Qe],optional:Pe}]),exp:t(Te,"exp",[{value:[Ke,Qe]}]),floor:t(Te,"floor",[{value:[Ke,Qe]}]),lerp:t(Te,"lerp",[{value1:[Ke,Qe]},{value2:[Ke,Qe]},{amt:[Ke,Qe]}]),mag:t(Te,"mag",[{a:[Ke,Qe]},{a:[Ke,Qe]},{a:[Ke,Qe],optional:Pe}]),map:t(Te,"map",[{value:[Ke,Qe]},{low1:[Ke,Qe]},{high1:[Ke,Qe]},{low2:[Ke,Qe]},{high2:[Ke,Qe]}]),max:t(Te,"max",[{values:[$e,Ke,Qe]},{b:[Ke,Qe],optional:Pe},{c:[Ke,Qe],optional:Pe}]),min:t(Te,"min",[{values:[$e,Ke,Qe]},{b:[Ke,Qe],optional:Pe},{c:[Ke,Qe],optional:Pe}]),norm:t(Te,"norm",[{value:[Ke,Qe]},{low:[Ke,Qe]},{high:[Ke,Qe]}]),pow:t(Te,"pow",[{n:[Ke,Qe]},{e:[Ke,Qe]}]),round:t(Te,"round",[{value:[Ke,Qe]}]),sq:t(Te,"sq",[{value:[Ke,Qe]}]),sqrt:t(Te,"sq",[{value:[Ke,Qe]}])},tt=Sk.builtin,nt=tt.float_,ot=tt.int_,it=tt.object,rt={beginCamera:r(i,[{__call__:t(function(e){return Te.beginCamera(),e},"__call__",[xe]),__enter__:t(function(e){return e},"__enter__",[xe]),__exit__:t(function(){return Te.endCamera()},"__exit__",[xe,{exc_type:it,ignored:!0},{exc_value:it,ignored:!0},{traceback:it,ignored:!0}])},"beginCamera"],"beginCamera"),endCamera:t(Te,"endCamera"),camera:t(Te,"camera",[{eyeX:[ot,nt],optional:Pe},{eyeY:[ot,nt],optional:Pe},{eyeZ:[ot,nt],optional:Pe},{centerX:[ot,nt],optional:Pe},{centerY:[ot,nt],optional:Pe},{centerZ:[ot,nt],optional:Pe},{upX:[ot,nt],optional:Pe},{upY:[ot,nt],optional:Pe},{upZ:[ot,nt],optional:Pe}]),frustum:t(Te,"frustum",[{left:[ot,nt]},{right:[ot,nt]},{bottom:[ot,nt]},{top:[ot,nt]},{near:[ot,nt]},{far:[ot,nt]}]),ortho:t(Te,"ortho",[{left:[ot,nt],optional:Pe},{right:[ot,nt],optional:Pe},{bottom:[ot,nt],optional:Pe},{top:[ot,nt],optional:Pe},{near:[ot,nt],optional:Pe},{far:[ot,nt],optional:Pe}]),perspective:t(Te,"perspective",[{fov:[ot,nt],optional:Pe},{aspect:[ot,nt],optional:Pe},{zNear:[ot,nt],optional:Pe},{zFar:[ot,nt],optional:Pe}]),printCamera:t(Te,"printCamera"),printProjection:t(Te,"printProjection")},at=Ce.BLEND,lt=Ce.ADD,ut=Ce.SUBTRACT,st=Ce.DARKEST,ct=Ce.LIGHTEST,pt=Ce.DIFFERENCE,_t=Ce.EXLUSION,dt=Ce.MULTIPLY,ft=Ce.SCREEN,vt=Ce.OVERLAY,mt=Ce.HARD_LIGHT,gt=Ce.SOFT_LIGHT,ht=Ce.DODGE,Et=Ce.BURN,St=Sk.builtin,Pt=St.int_,xt=St.float_,yt=St.lng,Tt=St.str,At={alpha:t(Te,"alpha",[{color:[Pt,yt,xt,Tt],converter:n}]),blendColor:t(Te,"blendColor",[{c1:[Pt,yt,xt,Tt],converter:n},{c2:[Pt,yt,xt,Tt],converter:n},{mode:Pt,allowed:[at,lt,ut,st,ct,pt,_t,dt,ft,vt,mt,gt,ht,Et]}]),blue:t(Te,"blue",[{color:[Pt,yt,xt,Tt],converter:n}]),brightness:t(Te,"brightness",[{color:[Pt,yt,xt,Tt],converter:n}]),green:t(Te,"green",[{color:[Pt,yt,xt,Tt],converter:n}]),hue:t(Te,"hue",[{color:[Pt,yt,xt,Tt],converter:n}]),lerpColor:t(Te,"lerpColor",[{c1:[Pt,yt,xt,Tt],converter:n},{c2:[Pt,yt,xt,Tt],converter:n},{amt:[Pt,xt]}]),red:t(Te,"red",[{color:[Pt,yt,xt,Tt],converter:n}]),saturation:t(Te,"saturation",[{color:[Pt,yt,xt,Tt],converter:n}])},Rt=Ce.RGB,It=Ce.HSB,bt=Sk.builtin,wt=bt.int_,Ot=bt.float_,kt=bt.str,Lt=bt.lng,Dt={background:t(Te,"background",[{value1:[wt,Lt,Ot,kt],converter:n},{value2:[wt,Ot],optional:Pe},{value2:[wt,Ot],optional:Pe},{alpha:[wt,Ot],optional:Pe}]),colorMode:t(Te,"colorMode",[{mode:wt,allowed:[Rt,It]},{range1:[wt,Ot],optional:Pe},{range2:[wt,Ot],optional:Pe},{range3:[wt,Ot],optional:Pe},{range4:[wt,Ot],optional:Pe}]),fill:t(Te,"fill",[{value1:[wt,Lt,Ot,kt],converter:n},{value2:[wt,Ot],optional:Pe},{value2:[wt,Ot],optional:Pe},{alpha:[wt,Ot],optional:Pe}]),noFill:t(Te,"noFill"),noStroke:t(Te,"noStroke"),stroke:t(Te,"stroke",[{value1:[wt,Lt,Ot,kt],converter:n},{value2:[wt,Ot],optional:Pe},{value2:[wt,Ot],optional:Pe},{alpha:[wt,Ot],optional:Pe}])},Nt=Sk.builtin,Ct=Nt.float_,Mt=Nt.int_,Gt=Nt.str,Ft=Nt.lng,Bt=t(Te,"color",[{value1:[Mt,Ct,Gt,Ft],converter:n},{value2:[Mt,Ct],optional:Pe},{value3:[Mt,Ct],optional:Pe},{alpha:[Mt,Ct],optional:Pe}]),zt=Sk.builtin,Vt=zt.int_,Ht=zt.float_,Ut={modelX:t(Te,"modelX",[{x:[Vt,Ht]},{y:[Vt,Ht]},{z:[Vt,Ht]}]),modelY:t(Te,"modelY",[{x:[Vt,Ht]},{y:[Vt,Ht]},{z:[Vt,Ht]}]),modelZ:t(Te,"modelZ",[{x:[Vt,Ht]},{y:[Vt,Ht]},{z:[Vt,Ht]}]),screenX:t(Te,"screenX",[{x:[Vt,Ht]},{y:[Vt,Ht]},{z:[Vt,Ht]}]),screenY:t(Te,"screenY",[{x:[Vt,Ht]},{y:[Vt,Ht]},{z:[Vt,Ht]}]),screenZ:t(Te,"screenZ",[{x:[Vt,Ht]},{y:[Vt,Ht]},{z:[Vt,Ht]}])},Xt=Sk.builtin,Yt=Xt.int_,jt=Xt.float_,Zt={bezier:t(Te,"bezier",[{x1:[Yt,jt]},{y1:[Yt,jt]},{z1:[Yt,jt]},{cx1:[Yt,jt]},{cy1:[Yt,jt]},{cz1:[Yt,jt]},{cx2:[Yt,jt]},{cy2:[Yt,jt]},{cz2:[Yt,jt],optional:Pe},{x2:[Yt,jt],optional:Pe},{y2:[Yt,jt],optional:Pe},{z2:[Yt,jt],optional:Pe}]),bezierDetail:t(Te,"bezierDetail",[{detail:Yt}]),bezierPoint:t(Te,"bezierPoint",[{a:[Yt,jt]},{b:[Yt,jt]},{c:[Yt,jt]},{d:[Yt,jt]},{t:[Yt,jt]}]),bezierTangent:t(Te,"bezierTangent",[{a:[Yt,jt]},{b:[Yt,jt]},{c:[Yt,jt]},{d:[Yt,jt]},{t:[Yt,jt]}]),curve:t(Te,"curve",[{x1:[Yt,jt]},{y1:[Yt,jt]},{z1:[Yt,jt]},{x2:[Yt,jt]},{y2:[Yt,jt]},{z2:[Yt,jt]},{x3:[Yt,jt]},{y3:[Yt,jt]},{z3:[Yt,jt],optional:Pe},{x4:[Yt,jt],optional:Pe},{y4:[Yt,jt],optional:Pe},{z4:[Yt,jt],optional:Pe}]),curveDetail:t(Te,"curveDetail",[{detail:Yt}]),curvePoint:t(Te,"curvePoint",[{a:[Yt,jt]},{b:[Yt,jt]},{c:[Yt,jt]},{d:[Yt,jt]},{t:[Yt,jt]}]),curveTangent:t(Te,"curveTangent"[{t:[Yt,jt]}]),curveTightness:t(Te,"curveTightness",[{squishy:[Yt,jt]}])},Wt=Sk.ffi,Jt=Wt.remapToPy,qt=Wt.remapToJs,Kt=Sk.builtin,Qt=Kt.func,$t=Kt.int_,en=Sk.misceval.buildClass,tn=Ce.ARROW,nn=Ce.CROSS,on=Ce.HAND,rn=Ce.MOVE,an=Ce.TEXT,ln=Ce.WAIT,un=function(e){return en(e,a,"Environment",[])},sn=function(e){return en(e,l,"FrameRate",[$t])},cn=t(Te,"cursor",[{image:["PImage",$t],allowed:[tn,nn,on,rn,an,ln],optional:Pe},{x:$t,optional:Pe},{y:$t,optional:Pe}]),pn=t(Te,"noCursor"),_n=function(){return Jt(Te.height)},dn=function(){return Jt(Te.width)},fn=function(){return Jt(Te.frameCount)},vn=function(){return Jt(Te.focused)},mn=Sk.builtin.str,gn={loadBytes:t(Te,"loadBytes",[{filename:mn}]),loadStrings:t(Te,"loadStrings"[{filename:mn}]),createInput:ye,selectFolder:ye,selectInput:ye},hn=Ce.LEFT,En=Ce.CENTER,Sn=Ce.RIGHT,Pn=Ce.TOP,xn=Ce.BOTTOM,yn=Ce.BASELINE,Tn=Ce.MODEL,An=Ce.SCREEN,Rn=Ce.SHAPE,In=Sk.builtin,bn=In.int_,wn=In.float_,On=In.str,kn={textAlign:t(Te,"textAlign",[{ALIGN:bn,allowed:[hn,En,Sn]},{YALIGN:bn,allowed:[Pn,xn,yn,En]}]),textLeading:t(Te,"textLeading",[{dist:[bn,wn]}]),textMode:t(Te,"textMode",[{MODE:bn,allowed:[Tn,An,Rn]}]),textSize:t(Te,"textSize",[{size:[bn,wn]}]),textWidth:t(Te,"textWidth",[{width:On}])},Ln={textAscent:t(Te,"textAscent"),textDescent:t(Te,"textDescent")},Dn=Sk.builtin,Nn=Dn.func,Cn=Dn.float_,Mn=Dn.list,Gn=Dn.str,Fn=Dn.bool,Bn=Dn.int_,zn=Sk.misceval,Vn=zn.buildClass,Hn=zn.callsim,Un=zn.loadname,Xn=function(e){return Vn(e,u,"PFont",[])},Yn=t(function(t,n,o,i){var r=Te.createFont(t,n,o,i),a=Hn(e.PFont);return a.v=r,a},"createFont",[{name:Gn},{size:[Bn,Cn]},{smooth:Fn,optional:Pe},{charset:Gn,optional:Pe}]),jn=t(Te,"loadFont",[{fontname:Gn}]),Zn=t(Te,"text",[{data:[Gn,Bn,Cn]},{x:[Bn,Cn]},{y:[Bn,Cn]},{z:[Bn,Cn],optional:Pe},{height:[Bn,Cn],optional:Pe},{z:[Bn,Cn],optional:Pe}]),Wn=t(Te,"textFont",[{font:"PFont"},{size:[Bn,Cn],optional:Pe}]),Jn=Ne.P2D,qn=Ne.JAVA2D,Kn=Ne.WEBGL,Qn=Ne.P3D,$n=Ne.OPENGL,eo=Ne.PDF,to=Ne.DXF,no=Sk.builtin,oo=no.int_,io=no.func,ro=Sk.misceval,ao=ro.buildClass,lo=ro.callsim,uo=Sk.ffi,so=uo.remapToPy,co=uo.remapToJs,po=function(e){return ao(e,c,"PGraphics",[])},_o=new io(function(t,n,o){return lo(e.PGraphics,t,n,o)}),fo=new io(function(e){Te.hint(e)}),vo=Sk.builtin,mo=vo.func,go=vo.int_,ho=vo.list,Eo=vo.str,So=vo.float_,Po=vo.lng,xo=vo.IOError,yo=Sk.abstr.sattr,To=Sk.misceval,Ao=To.buildClass,Ro=To.callsim,Io=To.Suspension,bo=Sk.ffi,wo=bo.remapToJs,Oo=bo.remapToPy,ko=Ce.BLEND,Lo=Ce.ADD,Do=Ce.SUBTRACT,No=Ce.LIGHTEST,Co=Ce.DARKEST,Mo=Ce.DIFFERENCE,Go=Ce.EXCLUSION,Fo=Ce.MULTIPLY,Bo=Ce.SCREEN,zo=Ce.OVERLAY,Vo=Ce.HARD,Ho=Ce.LIGHT,Uo=Ce.SOFT_LIGHT,Xo=Ce.DODGE,Yo=Ce.BURN,jo=Ce.THRESHOLD,Zo=Ce.GRAY,Wo=Ce.INVERT,Jo=Ce.POSTERIZE,qo=Ce.BLUR,Ko=Ce.OPAQUE,Qo=Ce.ERODE,$o=Ce.DILATE,ei=Ce.CORNER,ti=Ce.CORNERS,ni=Ce.CENTER,oi=Ce.RGB,ii=Ce.ARGB,ri=Ce.ALPHA,ai=null,li=function(e){return ai=Ao(e,x,"ImageProxy",[]),Ao(e,y,"PImage",[])},ui=t(function(t,n,o){var i=Sk.misceval.callsim(e.PImage);return i.v=Te.createImage(t,n,o),yo(i,"pixels",Ro(ai,i)),i},"createFunc",[{width:go},{height:go},{format:go,allowed:[oi,ii,ri]}]),si=t(Te,"image",[{img:["PImage","PGraphics"]},{x:[go,So]},{y:[go,So]},{width:[go,So],optional:Pe},{height:[go,So],optional:Pe}]),ci=t(Te,"imageMode",[{mode:go,allowed:[ei,ti,ni]}]),pi=t(function(t){var n=t;"function"==typeof Sk.imageProxy&&(n=Sk.imageProxy(t));var o=new Io;return o.resume=function(){if(o.data.error)throw o.data.error;return o.data.result},o.data={type:"Sk.promise",promise:Promise.race([new Promise(function(e){return setTimeout(e,3e3)}),new Promise(function(t){var o=Ro(e.PImage),i=Te.loadImage(n,{},function(){o.v=i,t(o)})})]).then(function(e){if(e)return e;throw new xo("[Errno 2] No such file or directory: '"+t+"'")})},o},"loadImage",[{image:Eo},{extension:Eo,optional:Pe,ignored:!0}]),_i=t(Te,"noTint"),di=t(function(t,n){var o=Sk.misceval.callsim(e.PImage);return o.v=Te.requestImage(t,n),o},"requestImage",[{filename:Eo},{extension:Eo,optional:Pe}]),fi=t(Te,"tint",[{value1:[go,Po,So,Eo],converter:n},{value2:[go,So],optional:Pe},{value3:[go,So],optional:Pe},{alpha:[go,So],optional:Pe}]),vi=t(Te,"blend",[{srcImg:[go,"PImage"]},{x:go},{y:go},{width:go},{height:go},{dx:go},{dy:go},{dwidth:go},{dheight:go},{MODE:go,optional:Pe,allowed:[ko,Lo,Do,No,Co,Mo,Go,Fo,Bo,zo,Vo,Ho,Uo,Xo,Yo]}]),mi=t(Te,"copy",[{srcImg:[go,"PImage"]},{sx:go},{sy:go},{swidth:go},{sheight:go},{dx:go},{dy:go},{dwidth:go},{dheight:go,optional:Pe}]),gi=t(Te,"filter",[{MODE:go,allowed:[jo,Zo,Wo,Jo,qo,Ko,Qo,$o]},{srcImg:"PImage",optional:Pe}]),hi=t(Te,"get",[{x:go,optional:Pe},{y:go,optional:Pe},{width:go,optional:Pe},{height:go,optional:Pe}]),Ei=t(Te,"loadPixels"),Si=t(Te,"set",[{x:go},{y:go},{image:["PImage",go,Po,So,Eo],converter:n}]),Pi=t(Te,"updatePixels"),xi=Sk.ffi,yi=xi.remapToPy,Ti=xi.remapToJs,Ai=Sk.builtin.func,Ri=Sk.misceval.buildClass,Ii=function(e){return Ri(e,A,"Keyboard",[])},bi=function(){return yi(Te.key.toString())},wi=function(){return yi(Te.keyCode)},Oi=function(){return yi(Te.__keyPressed)},ki=Sk.builtin,Li=ki.int_,Di=ki.float_,Ni={ambientLight:t(Te,"ambientLight",[{v1:[Li,Di]},{v2:[Li,Di]},{v3:[Li,Di]},{x:[Li,Di],optional:Pe},{y:[Li,Di],optional:Pe},{z:[Li,Di],optional:Pe}]),directionalLight:t(Te,"directionalLight",[{v1:[Li,Di]},{v2:[Li,Di]},{v3:[Li,Di]},{nx:[Li,Di],optional:Pe},{ny:[Li,Di],optional:Pe},{nz:[Li,Di],optional:Pe}]),lightFalloff:t(Te,"lightFalloff",[{constant:[Li,Di]},{linear:[Li,Di]},{quardatic:[Li,Di]}]),lightSpecular:t(Te,"lightSpecular",[{v1:[Li,Di]},{v2:[Li,Di]},{v3:[Li,Di]}]),lights:t(Te,"lights"),noLights:t(Te,"noLights"),normal:t(Te,"normal",[{nx:[Li,Di]},{ny:[Li,Di]},{nz:[Li,Di]}]),pointLight:t(Te,"pointLight",[{v1:[Li,Di]},{v2:[Li,Di]},{v3:[Li,Di]},{nx:[Li,Di]},{ny:[Li,Di]},{nz:[Li,Di]}]),spotLight:t(Te,"spotLight",[{v1:[Li,Di]},{v2:[Li,Di]},{v3:[Li,Di]},{x:[Li,Di]},{y:[Li,Di]},{z:[Li,Di]},{nx:[Li,Di]},{ny:[Li,Di]},{nz:[Li,Di]},{angle:[Li,Di]},{concentration:[Li,Di]}])},Ci=Sk.builtin,Mi=Ci.int_,Gi=Ci.float_,Fi=Ci.str,Bi=Ci.lng,zi={ambient:t(Te,"ambient",[{gray:[Mi,Bi,Gi,Fi],converter:n},{v1:[Mi,Gi],optional:Pe},{v2:[Mi,Gi],optional:Pe},{v3:[Mi,Gi],optional:Pe}]),emissive:t(Te,"emissive",[{gray:[Mi,Bi,Gi,Fi],converter:n},{v1:[Mi,Gi],optional:Pe},{v2:[Mi,Gi],optional:Pe},{v3:[Mi,Gi],optional:Pe}]),shininess:t(Te,"shininess",[{shine:[Mi,Gi]}]),specular:t(Te,"specular",[{gray:[Mi,Bi,Gi,Fi],converter:n},{v1:[Mi,Gi],optional:Pe},{v2:[Mi,Gi],optional:Pe},{v3:[Mi,Gi],optional:Pe}])},Vi=Sk.ffi,Hi=Vi.remapToPy,Ui=Vi.remapToJs,Xi=Sk.builtin.func,Yi=Sk.misceval.buildClass,ji=function(e){return Yi(e,R,"Mouse",[])},Zi=function(){return Hi(Te.mouseX)},Wi=function(){return Hi(Te.mouseY)},Ji=function(){return Hi(Te.pmouseX)},qi=function(){return Hi(Te.pmouseY)},Ki=function(){return Hi(Te.__mousePressed)},Qi=function(){return Hi(Te.mouseButton)},$i=Sk.builtin,er=$i.object,tr=$i.str,nr=$i.list,or=Sk.misceval.print_,ir={println:t(function(e){or(e),or("\n")},"println",[{data:er}]),save:t(Te,"save",[{filename:tr}]),saveFrame:t(Te,"saveFrame",[{filename:tr},{ext:tr,allowed:["tif","tga","jpg","png"]}]),saveStrings:t(Te,"saveStrings",[{filename:tr},{strings:nr}]),PrintWriter:ye,beginRaw:ye,beginRecord:ye,createOutput:ye,createReader:ye,createWriter:ye,endRaw:ye,endRecord:ye,saveBytes:ye,saveStream:ye,selectOuput:ye},rr=Sk.builtin,ar=rr.float_,lr=rr.int_,ur={noise:t(Te,"noise",[{x:[lr,ar]},{y:[lr,ar],optional:Pe},{z:[lr,ar],optional:Pe}]),noiseDetail:t(Te,"noiseDetail",[{octave:lr},{falloff:[lr,ar],optional:Pe}]),noiseSeed:t(Te,"noiseSeed",[{value:lr}]),randomSeed:t(Te,"randomSeed",[{value:lr}]),random:t(Te,"random",[{low:[lr,ar]},{high:[lr,ar],optional:Pe}]),randomGaussian:t(Te,"randomGaussian")},sr=Sk.ffi,cr=sr.remapToJs,pr=sr.remapToPy,_r=Sk.misceval.buildClass,dr=Sk.builtin,fr=dr.list,vr=dr.func,mr=function(e){return _r(e,I,"Screen",[])},gr=Ce.CORNER,hr=Ce.CORNERS,Er=Ce.CENTER,Sr=Sk.builtin,Pr=Sr.str,xr=Sr.int_,yr=Sr.float_,Tr=Sr.bool,Ar=Sk.ffi,Rr=Ar.remapToJs,Ir=Ar.remapToPy,br=Sk.misceval.buildClass,wr=function(e){return br(e,B,"PShape",[])},Or={loadShape:t(Te,"loadShape",[{filename:Pr}]),shape:t(Te,"shape",[{sh:"PShape"},{x:[xr,yr]},{y:[xr,yr]},{width:[xr,yr],optional:Pe},{height:[xr,yr],optional:Pe}]),shapeMode:t(Te,"shapeMode",[{img:xr,allowed:[gr,hr,Er]}])},kr=Sk.builtin,Lr=kr.int_,Dr=kr.float_,Nr=kr.str,Cr=kr.list,Mr={join:t(Te,"join",[{stringArray:Cr},{separator:Nr}]),match:t(Te,"match",[{str:Nr},{regexp:Nr}]),matchAll:t(Te,"matchAll",[{str:Nr},{regexp:Nr}]),nf:t(Te,"nf",[{value:[Lr,Dr,Cr]},{digits:Lr},{right:Lr,optional:Pe}]),nfc:t(Te,"nfc",[{value:[Lr,Dr,Cr]},{right:Lr,optional:Pe}]),nfp:t(Te,"nfp",[{value:[Lr,Dr,Cr]},{digits:Lr},{right:Lr,optional:Pe}]),nfs:t(Te,"nfs",[{value:[Lr,Dr,Cr]},{digits:Lr},{right:Lr,optional:Pe}]),split:t(Te,"split",[{string:Nr},{delimiter:Nr}]),splitTokens:t(Te,"splitTokens",[{string:Nr},{delimiter:Nr,optional:Pe}]),trim:t(Te,"trim",[{strOrArray:[Nr,Cr]}])},Gr=Sk.builtin,Fr=Gr.int_,Br=Gr.object,zr=Ce.P2D,Vr=Ce.JAVA2D,Hr=Ce.WEBGL,Ur=Ce.P3D,Xr=Ce.OPENGL,Yr=Ce.PDF,jr=Ce.DXF,Zr={loop:t(function(){if($())throw new Sk.builtin.Exception("loop() should be called after run()");Ca.loop()},"loop"),noLoop:t(function(){if($())throw new Sk.builtin.Exception("noLoop() should be called after run()");ee()},"noLoop"),size:t(function(e,t,n){void 0!==n&&n!==zr&&n!==Vr||(Ca.toImageData=function(e,t,n,o){e=void 0!==e?e:0,t=void 0!==t?t:0,n=void 0!==n?n:Ca.width,o=void 0!==o?o:Ca.height;for(var i=void 0;void 0===i;)i=Ca.externals.context.getImageData(e,t,n,o);return i}),Ca.size(e,t,n)},"size",[{width:Fr},{height:Fr},{renderer:Fr,allowed:[zr,Vr,Hr,Ur,Xr,Yr,jr],optional:Pe}]),exit:t(Te,"exit"),redraw:t(Te,"redraw"),pushStyle:r(i,[{__call__:t(function(e){return Te.pushStyle(),e},"__call__",[xe]),__enter__:t(function(e){return e},"__enter__",[xe]),__exit__:t(function(){return Te.popStyle()},"__exit__",[xe,{exc_type:Br,ignored:!0},{exc_value:Br,ignored:!0},{traceback:Br,ignored:!0}])},"pushStyle"],"pushStyle"),popStyle:t(Te,"popStyle")},Wr={day:t(Te,"day"),hour:t(Te,"hour"),millis:t(Te,"millis"),minute:t(Te,"minute"),month:t(Te,"month"),second:t(Te,"second"),year:t(Te,"year")},Jr=Sk.builtin,qr=Jr.float_,Kr=Jr.int_,Qr=Jr.object,$r={applyMatrix:t(Te,"applyMatrix",[{n00:[Kr,qr]},{n01:[Kr,qr]},{n02:[Kr,qr]},{n03:[Kr,qr]},{n04:[Kr,qr]},{n05:[Kr,qr]},{n06:[Kr,qr]},{n07:[Kr,qr]},{n08:[Kr,qr]},{n09:[Kr,qr]},{n10:[Kr,qr]},{n11:[Kr,qr]},{n12:[Kr,qr]},{n13:[Kr,qr]},{n14:[Kr,qr]},{n15:[Kr,qr]}]),popMatrix:t(Te,"popMatrix"),printMatrix:t(Te,"printMatrix"),pushMatrix:r(i,[{__call__:t(function(e){return Te.pushMatrix(),e},"__call__",[xe]),__enter__:t(function(e){return e},"__enter__",[xe]),__exit__:t(function(){return Te.popMatrix()},"__exit__",[xe,{exc_type:Qr,ignored:!0},{exc_value:Qr,ignored:!0},{traceback:Qr,ignored:!0}])},"pushMatrix"],"pushMatrix"),resetMatrix:t(Te,"resetMatrix"),rotate:t(Te,"rotate",[{angle:[Kr,qr]}]),rotateX:t(Te,"rotateX",[{angle:[Kr,qr]}]),rotateY:t(Te,"rotateY",[{angle:[Kr,qr]}]),rotateZ:t(Te,"rotateZ",[{angle:[Kr,qr]}]),scale:t(Te,"scale",[{size:[Kr,qr]},{y:[Kr,qr],optional:Pe},{z:[Kr,qr],optional:Pe}]),translate:t(Te,"translate",[{x:[Kr,qr]},{y:[Kr,qr]},{z:[Kr,qr],optional:Pe}])},ea=Sk.builtin,ta=ea.int_,na=ea.float_,oa={degrees:t(Te,"degrees",[{angle:[ta,na]}]),radians:t(Te,"radians",[{angle:[ta,na]}]),cos:t(Te,"cos",[{angle:[ta,na]}]),sin:t(Te,"sin",[{angle:[ta,na]}]),tan:t(Te,"tan",[{angle:[ta,na]}]),acos:t(Te,"acos",[{value:[ta,na]}]),asin:t(Te,"asin",[{value:[ta,na]}]),atan:t(Te,"tan",[{angle:[ta,na]}]),atan2:t(Te,"atan2",[{x:[ta,na]},{y:[ta,na]}])},ia=Sk.builtin,ra=ia.int_,aa=ia.float_,la=Sk.misceval,ua=la.callsim,sa=la.buildClass,ca=Sk.ffi.remapToPy,pa=function(e){return sa(e,Q,"PVector",[])},_a=Sk.builtin,da=_a.float_,fa=_a.int_,va=_a.object,ma=Ce.IMAGE,ga=Ce.NORMALIZED,ha=Ce.POINTS,Ea=Ce.LINES,Sa=Ce.TRIANGLES,Pa=Ce.TRIANGLE_FAN,xa=Ce.TRIANGLE_STRIP,ya=Ce.QUADS,Ta=Ce.QUAD_STRIP,Aa=Ce.CLOSE,Ra={beginShape:r(i,[{__call__:t(function(e,t){return Te.beginShape(t),e},"__call__",[xe,{MODE:fa,allowed:[ha,Ea,Sa,Pa,xa,ya,Ta],optional:Pe}]),__enter__:t(function(e){return e},"__enter__",[xe]),__exit__:t(function(){return Te.endShape},"__exit__",[xe,{exc_type:va,ignored:!0},{exc_value:va,ignored:!0},{traceback:va,ignored:!0}])},"beginShape"],"beginShape"),beginClosedShape:r(i,[{__call__:t(function(e,t){return Te.beginShape(t),e},"__call__",[xe,{MODE:fa,allowed:[ha,Ea,Sa,Pa,xa,ya,Ta],optional:Pe}]),__enter__:t(function(e){return e},"__enter__"[xe]),__exit__:t(function(){return Te.endShape(Ne.CLOSE)},"__exit__",[xe,{exc_type:va,ignored:!0},{exc_value:va,ignored:!0},{traceback:va,ignored:!0}])},"beginClosedShape"],"beginClosedShape"),endShape:t(Te,"endShape",[{MODE:fa,allowed:[Aa],optional:Pe}]),vertex:t(Te,"vertex",[{x:[fa,da]},{y:[fa,da]},{z:[fa,da],optional:Pe},{u:[fa,da],optional:Pe},{v:[fa,da],optional:Pe}]),bezierVertex:t(Te,"bezierVertex",[{cx1:[fa,da]},{cy1:[fa,da]},{cz1:[fa,da]},{cx2:[fa,da]},{cy2:[fa,da]},{cz2:[fa,da]},{x:[fa,da],optional:Pe},{y:[fa,da],optional:Pe},{z:[fa,da],optional:Pe}]),curveVertex:t(Te,"curveVertex",[{x:[fa,da]},{y:[fa,da]},{z:[fa,da],optional:Pe}]),texture:t(Te,"texture",[{img:"PImage"}]),textureMode:t(Te,"textureMode",[{img:fa,allowed:[ma,ga]}])},Ia=Sk.builtin.str,ba={link:t(Te,"link"[{target:Ia,optional:Pe}]),status:t(Te,"status",[{text:Ia}])},wa=Sk.misceval,Oa=wa.callsim,ka=wa.asyncToPromise,La=wa.callsimOrSuspend,Da={},Na=!1;e.processingInstance={},e.PImage=void 0,e.PShape=void 0,e.PGraphics=void 0,e.PVector=void 0,e.PFont=void 0;var Ca=Te,Ma=void 0,Ga=void 0;e.isInitialised=$,e.processing=Ca,e.init=function(e,t,n){if(Ma=t,void 0!==n&&"function"!=typeof n)throw new Error("breakHandler must be a function if anything");Ga=n,Sk.externalLibraries=Sk.externalLibraries||{},Object.assign(Sk.externalLibraries,{processing:{path:e+"/__init__.js"}})},e.requestNoLoop=ee,e.main=function(){e.PImage=li(Da),e.PShape=wr(Da),e.PGraphics=po(Da),e.PVector=pa(Da),e.PFont=Xn(Da);var t=un(Da),n=sn(Da),i=Oa(n),r=Oa(t),a=ji(Da),l=Oa(a),u=Ii(Da),s=Oa(u),c=mr(Da),p=Oa(c);return o(Da),Object.assign(Da,be,Le,Je,et,rt,At,Dt,{color:Bt},Ce,Ut,Zt,{Environment:t,environment:r,cursor:cn,noCursor:pn,height:_n,width:dn,frameCount:fn,frameRate:i,focused:vn},gn,kn,Ln,{PFont:e.PFont,createFont:Yn,loadFont:jn,text:Zn,textFont:Wn},{PGraphics:e.PGraphics,createGraphics:_o,hint:fo},{PImage:e.PImage},{image:si,createImage:ui,imageMode:ci,loadImage:pi,noTint:_i,requestImage:di,tint:fi,blend:vi,copy:mi,filter:gi,get:hi,loadPixels:Ei,set:Si,updatePixels:Pi,pixels:T},{keyboard:s,Keyboard:u,keyCode:wi,key:bi,keyPressed:Oi},Ni,zi,{Mouse:a,mouse:l,mouseX:Zi,mouseY:Wi,pmouseX:Ji,pmouseY:qi,mousePressed:Ki,mouseButton:Qi},ir,ur,{Screen:c,screen:p},{PShape:e.PShape},Zr,Wr,$r,oa,{PVector:e.PVector},Ra,ba,Or,Mr),Da.run=new Sk.builtin.func(function(){function t(t){function n(e){o(e),t.exit()}var r=[],a=!0;e.processingInstance=t,t.externals.sketch.onExit=i,Sk.globals.setup?r.push(ka(function(){return La(Sk.globals.setup)},Ma)):r.push(Promise.resolve()),Sk.globals.draw?t.draw=function(){if(0!==r.length&&(Promise.all(r).then(function(){return a=!1}).catch(n),!a)){if(Na&&r.length>1)return t.noLoop(),void Promise.all(r).then(i).catch(n);if(Ga)try{Ga()}catch(e){n(e)}r.push(ka(function(){return La(Sk.globals.draw)},Ma))}}:(Ca.noLoop(),Promise.all(r).then(i).catch(n));var l=["mouseMoved","mouseClicked","mouseDragged","mouseMoved","mouseOut","mouseOver","mousePressed","mouseReleased","keyPressed","keyReleased","keyTyped"];for(var u in l)Sk.globals[l[u]]&&function(){var e=l[u];t[e]=function(){try{Sk.misceval.callsim(Sk.globals[e])}catch(e){n(e)}}}()}Na=!1;var n=new Sk.misceval.Suspension,o=null,i=null;n.resume=function(){if(n.data.error)throw n.data.error;return Sk.builtin.none.none$},n.data={type:"Sk.promise",promise:new Promise(function(e,t){o=t,i=e})};var r=document.getElementById(Sk.canvas);if("CANVAS"!==r.tagName){var a=r;for(r=document.createElement("canvas");a.firstChild;)a.removeChild(a.firstChild);a.appendChild(r)}r.style.display="block";var l=window.Processing.getInstanceById(Sk.canvas);return l&&l.exit(),setTimeout(function(){Da.p=new window.Processing(r,t)},300),n}),Da},Object.defineProperty(e,"__esModule",{value:!0})});
