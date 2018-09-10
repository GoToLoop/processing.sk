!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.ProcessingSk={})}(this,function(p){"use strict";function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==l.return||l.return()}finally{if(i)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}if("function"==typeof require){var e=require("fs").readFileSync("bower_components/skulpt/skulpt.min.js").toString();(0,eval)(e)}var i,t=Sk.builtin,n=t.str,o=t.func,r=t.NotImplementedError,f=t.pyCheckArgs,a=t.ValueError,v=t.TypeError,l=Sk.ffi,m=l.remapToJs,g=l.remapToPy,u=Sk.misceval,s=u.buildClass,c=u.callsim,h=Object.assign,E=Object.keys,S=Array.from,P=new Map,x="__isinitialised__";function y(u,s,e){var c=e||[];return new o(function(){var e=null;if("function"!=typeof u){if(!u[x])throw new Error('cannot call "'.concat(s,'" outside "draw", "setup" or event handlers'));u[s]&&(e=u[s])}else e=u;if(null==e)throw new Error("Couldn't infer function to wrap");var t,r,n,o,i=S(arguments).filter(function(e){return void 0!==e});f(s,i,void 0===(t=c)?0:t.filter(function(e){return!e.optional}).length,c.length,!1),r=s,n=function(e,t){return[e,t]},o=c,i.map(function(e,t){return n(e,o[t])}).forEach(function(e){var t=d(e,2),n=t[0],o=t[1],i=Object.keys(o)[0];if(Array.isArray(o[i])||(o[i]=[o[i]]),!o[i].some(function(e){return!0===e||("string"==typeof e?n.tp$name===e:n instanceof e&&(!e.allowed||n in e.allowed))}))throw new v("".concat(r,": ").concat(i," (value: ").concat(m(n),") not of type ").concat(o[i].map(function(e){return e.tp$name})))});var a=i.filter(function(e,t){return void 0===c[t].ignored||!c[t].ignored}).map(function(e,t){var n=c[t];return n===b?e:n.converter?n.converter(m(e)):m(e)}),l=e.apply(null,a);return g(l)})}function T(e){if("string"!=typeof e)return e;var t=/#([A-F0-9]{6})/g.exec(e);if(2!==t.length)throw new a("".concat(e,' not in the correct format for a color expecting "#AB12F4"'));return parseInt(t[1],16)+4278190080}var A=!0,R=!0,b={self:!0},I=new o(function(){throw new r}),w=(new n("processing"),new Proxy({},{get:function(e,t){return t===x?null===p.processingInstance:p.processingInstance[t]}}));function k(o){i=function(e,t){return s(o,(n=e,function(e,t){h(t,n)}),"OptionalContextManager_"+t,[]);var n}}function O(e,t){var n=E(e);if(!n.includes("__call__")||!n.includes("__enter__")||!n.includes("__exit__"))throw new Error("The optional context manager needs a __call__, __enter__ and __exit__ function.");return c(i(e,t))}function D(t,n,o){return function(){if(P.has(o))return P.get(o);var e=t.apply(null,n);return P.set(o,e),e}}var L=Sk.builtin,C=L.float_,N=L.int_,M={arc:y(w,"arc",[{x:[N,C]},{y:[N,C]},{width:[N,C]},{height:[N,C]},{start:[N,C]},{stop:[N,C]}]),ellipse:y(w,"ellipse",[{x:[N,C]},{y:[N,C]},{width:[N,C]},{height:[N,C]}]),line:y(w,"line",[{x1:[N,C]},{y1:[N,C]},{z1:[N,C]},{x2:[N,C]},{y2:[N,C],optional:A},{z2:[N,C],optional:A}]),point:y(w,"point",[{x:[N,C]},{y:[N,C]},{z:[N,C],optional:A}]),quad:y(w,"quad",[{x1:[N,C]},{y1:[N,C]},{x2:[N,C]},{y2:[N,C]},{x3:[N,C]},{y3:[N,C]},{x4:[N,C]},{y4:[N,C]}]),rect:y(w,"rect",[{x:[N,C]},{y:[N,C]},{width:[N,C]},{height:[N,C]},{tlradius:[N,C],optional:A},{trradius:[N,C],optional:A},{brradius:[N,C],optional:A},{blradius:[N,C],optional:A}]),triangle:y(w,"triangle",[{x1:[N,C]},{y1:[N,C]},{x2:[N,C]},{y2:[N,C]},{x3:[N,C]},{y3:[N,C]}])},G=Sk.builtin,B=G.float_,F=G.int_,z={box:y(w,"box",[{width:[F,B]},{height:[F,B],optional:A},{depth:[F,B],optional:A}]),sphere:y(w,"sphere",[{radius:[F,B]}]),sphereDetail:y(w,"sphereDetail",[{ures:F},{vres:F,optional:A}])},V=Sk.ffi.remapToPy,H={X:0,Y:1,Z:2,R:3,G:4,B:5,A:6,U:7,V:8,NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MAXOSX:2,LINUX:3,EPSILON:1e-4,MAX_FLOAT:34028235e31,MIN_FLOAT:-34028235e31,MAX_INT:2147483647,MIN_INT:-2147483648,PI:Math.PI,TWO_PI:2*Math.PI,TAU:2*Math.PI,HALF_PI:Math.PI/2,THIRD_PI:Math.PI/3,QUARTER_PI:Math.PI/4,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,WHITESPACE:" \t\n\r\f ",RGB:1,ARGB:2,HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1,ADD:2,SUBTRACT:4,LIGHTEST:8,DARKEST:16,DIFFERENCE:32,EXCLUSION:64,MULTIPLY:128,SCREEN:256,OVERLAY:512,HARD_LIGHT:1024,SOFT_LIGHT:2048,DODGE:4096,BURN:8192,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,CHORD:2,PIE:3,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:32768,PREC_MAXVAL:32767,PREC_ALPHA_SHIFT:9,PREC_RED_SHIFT:1,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8},U=Object.keys(H).reduce(function(e,t){return e[t]=V(H[t]),e},{}),X=Sk.builtin,Y=X.int_,j=X.str,Z=X.float_,W=U.ROUND,J=U.SQUARE,K=U.BUTT,q=U.MITTER,Q=U.BEVEL,$=U.CENTER,ee=U.RADIUS,te=U.CORNER,ne=U.CORNERS,oe={ellipseMode:y(w,"ellipseMode",[{mode:Y,allowed:[$,ee,te,ne]}]),noSmooth:y(w,"noSmooth"),smooth:y(w,"smooth",[{level:Y,allows:[2,4,8],ignored:R,optional:A}]),rectMode:y(w,"rectMode",[{mode:Y,allowed:[$,ee,te,ne]}]),strokeCap:y(w,"strokeCap",[{mode:j,allowed:[W,J,K]}]),strokeJoin:y(w,"strokeJoin",[{mode:j,allowed:[q,Q,W]}]),strokeWeight:y(w,"strokeWeight",[{width:[Y,Z]}])},ie=Sk.builtin,re=ie.int_,ae=ie.float_,le=ie.list,ue={abs:y(w,"abs",[{value:[re,ae]}]),ceil:y(w,"ceil",[{value:[re,ae]}]),constrain:y(w,"constrain",[{value:[re,ae]},{min:[re,ae]},{max:[re,ae]}]),dist:y(w,"dist",[{x1:[re,ae]},{y1:[re,ae]},{z1:[re,ae]},{x2:[re,ae]},{y2:[re,ae],optional:A},{z2:[re,ae],optional:A}]),exp:y(w,"exp",[{value:[re,ae]}]),floor:y(w,"floor",[{value:[re,ae]}]),lerp:y(w,"lerp",[{value1:[re,ae]},{value2:[re,ae]},{amt:[re,ae]}]),mag:y(w,"mag",[{a:[re,ae]},{a:[re,ae]},{a:[re,ae],optional:A}]),map:y(w,"map",[{value:[re,ae]},{low1:[re,ae]},{high1:[re,ae]},{low2:[re,ae]},{high2:[re,ae]}]),max:y(w,"max",[{values:[le,re,ae]},{b:[re,ae],optional:A},{c:[re,ae],optional:A}]),min:y(w,"min",[{values:[le,re,ae]},{b:[re,ae],optional:A},{c:[re,ae],optional:A}]),norm:y(w,"norm",[{value:[re,ae]},{low:[re,ae]},{high:[re,ae]}]),pow:y(w,"pow",[{n:[re,ae]},{e:[re,ae]}]),round:y(w,"round",[{value:[re,ae]}]),sq:y(w,"sq",[{value:[re,ae]}]),sqrt:y(w,"sq",[{value:[re,ae]}])},se=Sk.builtin,ce=se.float_,pe=se.int_,_e=se.object,de={beginCamera:D(O,[{__call__:y(function(e){return w.beginCamera(),e},"__call__",[b]),__enter__:y(function(e){return e},"__enter__",[b]),__exit__:y(function(){return w.endCamera()},"__exit__",[b,{exc_type:_e,ignored:R},{exc_value:_e,ignored:R},{traceback:_e,ignored:R}])},"beginCamera"],"beginCamera"),endCamera:y(w,"endCamera"),camera:y(w,"camera",[{eyeX:[pe,ce],optional:A},{eyeY:[pe,ce],optional:A},{eyeZ:[pe,ce],optional:A},{centerX:[pe,ce],optional:A},{centerY:[pe,ce],optional:A},{centerZ:[pe,ce],optional:A},{upX:[pe,ce],optional:A},{upY:[pe,ce],optional:A},{upZ:[pe,ce],optional:A}]),frustum:y(w,"frustum",[{left:[pe,ce]},{right:[pe,ce]},{bottom:[pe,ce]},{top:[pe,ce]},{near:[pe,ce]},{far:[pe,ce]}]),ortho:y(w,"ortho",[{left:[pe,ce],optional:A},{right:[pe,ce],optional:A},{bottom:[pe,ce],optional:A},{top:[pe,ce],optional:A},{near:[pe,ce],optional:A},{far:[pe,ce],optional:A}]),perspective:y(w,"perspective",[{fov:[pe,ce],optional:A},{aspect:[pe,ce],optional:A},{zNear:[pe,ce],optional:A},{zFar:[pe,ce],optional:A}]),printCamera:y(w,"printCamera"),printProjection:y(w,"printProjection")},fe=U.BLEND,ve=U.ADD,me=U.SUBTRACT,ge=U.DARKEST,he=U.LIGHTEST,Ee=U.DIFFERENCE,Se=U.EXLUSION,Pe=U.MULTIPLY,xe=U.SCREEN,ye=U.OVERLAY,Te=U.HARD_LIGHT,Ae=U.SOFT_LIGHT,Re=U.DODGE,be=U.BURN,Ie=Sk.builtin,we=Ie.int_,ke=Ie.float_,Oe=Ie.lng,De=Ie.str,Le={alpha:y(w,"alpha",[{color:[we,Oe,ke,De],converter:T}]),blendColor:y(w,"blendColor",[{c1:[we,Oe,ke,De],converter:T},{c2:[we,Oe,ke,De],converter:T},{mode:we,allowed:[fe,ve,me,ge,he,Ee,Se,Pe,xe,ye,Te,Ae,Re,be]}]),blue:y(w,"blue",[{color:[we,Oe,ke,De],converter:T}]),brightness:y(w,"brightness",[{color:[we,Oe,ke,De],converter:T}]),green:y(w,"green",[{color:[we,Oe,ke,De],converter:T}]),hue:y(w,"hue",[{color:[we,Oe,ke,De],converter:T}]),lerpColor:y(w,"lerpColor",[{c1:[we,Oe,ke,De],converter:T},{c2:[we,Oe,ke,De],converter:T},{amt:[we,ke]}]),red:y(w,"red",[{color:[we,Oe,ke,De],converter:T}]),saturation:y(w,"saturation",[{color:[we,Oe,ke,De],converter:T}])},Ce=U.RGB,Ne=U.HSB,Me=Sk.builtin,Ge=Me.int_,Be=Me.float_,Fe=Me.str,ze=Me.lng,Ve={background:y(w,"background",[{value1:[Ge,ze,Be,Fe,"PImage"],converter:T},{value2:[Ge,Be],optional:A},{value2:[Ge,Be],optional:A},{alpha:[Ge,Be],optional:A}]),colorMode:y(w,"colorMode",[{mode:Ge,allowed:[Ce,Ne]},{range1:[Ge,Be],optional:A},{range2:[Ge,Be],optional:A},{range3:[Ge,Be],optional:A},{range4:[Ge,Be],optional:A}]),fill:y(w,"fill",[{value1:[Ge,ze,Be,Fe],converter:T},{value2:[Ge,Be],optional:A},{value2:[Ge,Be],optional:A},{alpha:[Ge,Be],optional:A}]),noFill:y(w,"noFill"),noStroke:y(w,"noStroke"),stroke:y(w,"stroke",[{value1:[Ge,ze,Be,Fe],converter:T},{value2:[Ge,Be],optional:A},{value2:[Ge,Be],optional:A},{alpha:[Ge,Be],optional:A}])},He=Sk.builtin,Ue=He.float_,Xe=He.int_,Ye=He.str,je=He.lng,Ze=y(w,"color",[{value1:[Xe,Ue,Ye,je],converter:T},{value2:[Xe,Ue],optional:A},{value3:[Xe,Ue],optional:A},{alpha:[Xe,Ue],optional:A}]),We=Sk.builtin,Je=We.int_,Ke=We.float_,qe={modelX:y(w,"modelX",[{x:[Je,Ke]},{y:[Je,Ke]},{z:[Je,Ke]}]),modelY:y(w,"modelY",[{x:[Je,Ke]},{y:[Je,Ke]},{z:[Je,Ke]}]),modelZ:y(w,"modelZ",[{x:[Je,Ke]},{y:[Je,Ke]},{z:[Je,Ke]}]),screenX:y(w,"screenX",[{x:[Je,Ke]},{y:[Je,Ke]},{z:[Je,Ke]}]),screenY:y(w,"screenY",[{x:[Je,Ke]},{y:[Je,Ke]},{z:[Je,Ke]}]),screenZ:y(w,"screenZ",[{x:[Je,Ke]},{y:[Je,Ke]},{z:[Je,Ke]}])},Qe=Sk.builtin,$e=Qe.int_,et=Qe.float_,tt={bezier:y(w,"bezier",[{x1:[$e,et]},{y1:[$e,et]},{z1:[$e,et]},{cx1:[$e,et]},{cy1:[$e,et]},{cz1:[$e,et]},{cx2:[$e,et]},{cy2:[$e,et]},{cz2:[$e,et],optional:A},{x2:[$e,et],optional:A},{y2:[$e,et],optional:A},{z2:[$e,et],optional:A}]),bezierDetail:y(w,"bezierDetail",[{detail:$e}]),bezierPoint:y(w,"bezierPoint",[{a:[$e,et]},{b:[$e,et]},{c:[$e,et]},{d:[$e,et]},{t:[$e,et]}]),bezierTangent:y(w,"bezierTangent",[{a:[$e,et]},{b:[$e,et]},{c:[$e,et]},{d:[$e,et]},{t:[$e,et]}]),curve:y(w,"curve",[{x1:[$e,et]},{y1:[$e,et]},{z1:[$e,et]},{x2:[$e,et]},{y2:[$e,et]},{z2:[$e,et]},{x3:[$e,et]},{y3:[$e,et]},{z3:[$e,et],optional:A},{x4:[$e,et],optional:A},{y4:[$e,et],optional:A},{z4:[$e,et],optional:A}]),curveDetail:y(w,"curveDetail",[{detail:$e}]),curvePoint:y(w,"curvePoint",[{a:[$e,et]},{b:[$e,et]},{c:[$e,et]},{d:[$e,et]},{t:[$e,et]}]),curveTangent:y(w,"curveTangent"[{t:[$e,et]}]),curveTightness:y(w,"curveTightness",[{squishy:[$e,et]}])},nt=Sk.ffi,ot=nt.remapToPy,it=nt.remapToJs,rt=Sk.builtin,at=rt.func,lt=rt.int_,ut=Sk.misceval.buildClass,st=U.ARROW,ct=U.CROSS,pt=U.HAND,_t=U.MOVE,dt=U.TEXT,ft=U.WAIT;function vt(e,t){t.__getattr__=new at(function(e,t){switch(it(t)){case"frameCount":return ot(w.frameCount);case"frameRate":return ot(w.frameRate);case"height":return ot(w.height);case"width":return ot(w.width);case"online":return ot(w.online);case"focused":return ot(w.focused);default:return}})}function mt(e,t){t.__init__=y(function(e){e.v=w.__frameRate},"__init__",[b]),t.__call__=y(function(e,t){w.frameRate(t),e.v=t},"__call__",[b,{rate:lt}])}var gt=y(w,"cursor",[{image:["PImage",lt],allowed:[st,ct,pt,_t,dt,ft],optional:A},{x:lt,optional:A},{y:lt,optional:A}]),ht=y(w,"noCursor"),Et=function(){return ot(w.height)},St=function(){return ot(w.width)},Pt=function(){return ot(w.frameCount)},xt=function(){return ot(w.focused)},yt=Sk.builtin.str,Tt={loadBytes:y(w,"loadBytes",[{filename:yt}]),loadStrings:y(w,"loadStrings"[{filename:yt}]),createInput:I,selectFolder:I,selectInput:I},At=U.LEFT,Rt=U.CENTER,bt=U.RIGHT,It=U.TOP,wt=U.BOTTOM,kt=U.BASELINE,Ot=U.MODEL,Dt=U.SCREEN,Lt=U.SHAPE,Ct=Sk.builtin,Nt=Ct.int_,Mt=Ct.float_,Gt=Ct.str,Bt={textAlign:y(w,"textAlign",[{ALIGN:Nt,allowed:[At,Rt,bt]},{YALIGN:Nt,allowed:[It,wt,kt,Rt]}]),textLeading:y(w,"textLeading",[{dist:[Nt,Mt]}]),textMode:y(w,"textMode",[{MODE:Nt,allowed:[Ot,Dt,Lt]}]),textSize:y(w,"textSize",[{size:[Nt,Mt]}]),textWidth:y(w,"textWidth",[{width:Gt}])},Ft={textAscent:y(w,"textAscent"),textDescent:y(w,"textDescent")},zt=Sk.builtin,Vt=zt.func,Ht=zt.float_,Ut=zt.list,Xt=zt.str,Yt=zt.bool,jt=zt.int_,Zt=Sk.misceval,Wt=Zt.buildClass,Jt=Zt.callsim,Kt=Zt.loadname;function qt(e,t){t.__init__=y(function(e,t){t&&(e.v=new w.PFont(t))},"__init__",[b,{"input ":Xt,optional:A}]);var n=Kt("staticmethod",e),o=new Vt(function(){return new Ut(w.PFont.list())});t.list=Jt(n,o)}var Qt=y(function(e,t,n,o){var i=w.createFont(e,t,n,o),r=Jt(p.PFont);return r.v=i,r},"createFont",[{name:Xt},{size:[jt,Ht]},{smooth:Yt,optional:A},{charset:Xt,optional:A}]),$t=y(w,"loadFont",[{fontname:Xt}]),en=y(w,"text",[{data:[Xt,jt,Ht]},{x:[jt,Ht]},{y:[jt,Ht]},{z:[jt,Ht],optional:A},{height:[jt,Ht],optional:A},{z:[jt,Ht],optional:A}]),tn=y(w,"textFont",[{font:"PFont"},{size:[jt,Ht],optional:A}]),nn=H.P2D,on=H.JAVA2D,rn=H.WEBGL,an=H.P3D,ln=H.OPENGL,un=H.PDF,sn=H.DXF,cn=Sk.builtin,pn=cn.int_,_n=cn.func,dn=Sk.misceval,fn=dn.buildClass,vn=dn.callsim,mn=Sk.ffi,gn=mn.remapToPy,hn=mn.remapToJs;function En(r,e,t,n){r.v=w.createGraphics(e,t,n),void 0!==n&&n!==nn&&n!==on||(r.v.toImageData=function(e,t,n,o){e=void 0!==e?e:0,t=void 0!==t?t:0,n=void 0!==n?n:w.width,o=void 0!==o?o:w.height;for(var i=void 0;void 0===i;)i=r.v.externals.context.getImageData(e,t,n,o);return i})}function Sn(e,t){t.__init__=y(En,"__init__",[b,{width:pn},{height:pn},{renderer:pn,allowed:[nn,on,rn,an,ln,un,sn],optional:A}]),t.beginDraw=new _n(function(e){e.v.beginDraw()}),t.endDraw=new _n(function(e){e.v.endDraw()}),t.__getattr__=new _n(function(e,t){var n=e.v[hn(t)];if(void 0!==n)return"function"==typeof n?new _n(function(e){var t=Array.from(arguments).map(hn);return gn(n.apply(e.v,t))}):gn(n)})}var Pn=new _n(function(e,t,n){return vn(p.PGraphics,e,t,n)}),xn=new _n(function(e){w.hint(e)}),yn=Sk.builtin,Tn=yn.func,An=yn.int_,Rn=yn.list,bn=yn.str,In=yn.float_,wn=yn.lng,kn=yn.IOError,On=yn.list_iter_,Dn=Sk.misceval,Ln=Dn.buildClass,Cn=Dn.callsim,Nn=Dn.Suspension,Mn=Sk.ffi,Gn=Mn.remapToJs,Bn=Mn.remapToPy,Fn=U.BLEND,zn=U.ADD,Vn=U.SUBTRACT,Hn=U.LIGHTEST,Un=U.DARKEST,Xn=U.DIFFERENCE,Yn=U.EXCLUSION,jn=U.MULTIPLY,Zn=U.SCREEN,Wn=U.OVERLAY,Jn=U.HARD,Kn=U.LIGHT,qn=U.SOFT_LIGHT,Qn=U.DODGE,$n=U.BURN,eo=U.THRESHOLD,to=U.GRAY,no=U.INVERT,oo=U.POSTERIZE,io=U.BLUR,ro=U.OPAQUE,ao=U.ERODE,lo=U.DILATE,uo=U.CORNER,so=U.CORNERS,co=U.CENTER,po=U.RGB,_o=U.ARGB,fo=U.ALPHA,vo=null;function mo(e,t,n,o){e.v=new w.PImage(t,n,o)}function go(e,t,n,o,i){var r=[t,n,o,i].filter(function(e){return void 0!==e});if(2==r.length)return e.v.get.apply(e.v,r);var a=Cn(p.PImage);return a.v=e.v.get.apply(e.v,r),a}function ho(e,t,n,o){e.v.set(t,n,o)}function Eo(e,t,n,o,i,r,a,l,u,s){return e.v.copy(t,n,o,i,r,a,l,u,s)}function So(e,t){e.v.mask(t)}function Po(e,t,n,o,i,r,a,l,u,s){e.v.blend(t,n,o,i,r,a,l,u,s)}function xo(e,t,n){e.v.filter(t,n)}function yo(e,t){e.v.save(t)}function To(e,t,n){e.v.save(t,n)}function Ao(e){e.v.loadPixels()}function Ro(e,t,n,o,i){e.v.updatePixels(t,n,o,i)}function bo(e,t){t.__init__=y(function(e,t){e.image=t},"__init__",[b,{image:"PImage",optional:A}]),t.__getitem__=y(function(e,t){return e.image.pixels.getPixel(t)},"__getitem__",[b,{index:An}]),t.__setitem__=y(function(e,t,n){return e.image.pixels.setPixel(t,n)},"__setitem__",[b,{index:An},{color:[An,wn,In,bn],converter:T}]),t.__iter__=new Sk.builtin.func(function(e){return Sk.builtin.pyCheckArgs("__iter__",arguments,0,0,!0,!1),new On(new Rn(e.image.pixels.toArray()))}),t.__repr__=y(function(e){return"array('i', [".concat(e.image.pixels.toArray().join(", "),"])")},"__repr__",[b]),t.__len__=y(function(e){return e.image.width*e.image.height},"__len__",[b])}function Io(e,t){t.__init__=y(mo,"__init__",[b,{width:[An,bn],optional:A},{height:An,optional:A},{format:An,allowed:[1,2,4],optional:A}]),t.__getattr__=new Tn(function(e,t){return"width"===(t=Gn(t))?Bn(e.v.width):"height"===t?Bn(e.v.height):"pixels"===t?Cn(vo,e):void 0}),t.get=y(go,"get",[b,{x:An},{y:An},{width:An,optional:A},{height:An,optional:A}]),t.set=y(ho,"set",[b,{x:An},{y:An},{color:[An,wn,In,bn],converter:T}]),t.copy=y(Eo,"copy",[b,{srcImg:[An,"PImage"]},{sx:An},{sy:An},{swidth:An},{sheight:An},{dx:An},{dy:An},{dwidth:An},{dheight:An,optional:A}]),t.mask=y(So,"mask",[b,{maskImg:["PImage",Rn]}]),t.blend=y(Po,"blend",[b,{srcImg:[An,"PImage"]},{x:An},{y:An},{width:An},{height:An},{dx:An},{dy:An},{dwidth:An},{dheight:An},{MODE:An,optional:A,allowed:[Fn,zn,Vn,Hn,Un,Xn,Yn,jn,Zn,Wn,Jn,Kn,qn,Qn,$n]}]),t.filter=y(xo,"filter",[b,{MODE:An,allowed:[eo,to,no,oo,io,ro,ao,lo]},{srcImg:"PImage",optional:A}]),t.save=y(yo,"save",[b,{filename:bn}]),t.resize=y(To,"resize",[b,{wide:An},{high:An}]),t.loadPixels=y(Ao,"loadPixels",[b]),t.updatePixels=y(Ro,"updatePixels",[b,{x:An,optional:A},{y:An,optional:A},{w:An,optional:A},{h:An,optional:A}])}var wo=y(function(e,t,n){var o=Sk.misceval.callsim(p.PImage);return o.v=w.createImage(e,t,n),o},"createFunc",[{width:An},{height:An},{format:An,allowed:[po,_o,fo]}]),ko=y(w,"image",[{img:["PImage","PGraphics"]},{x:[An,In]},{y:[An,In]},{width:[An,In],optional:A},{height:[An,In],optional:A}]),Oo=y(w,"imageMode",[{mode:An,allowed:[uo,so,co]}]),Do=y(function(t){var o=t;"function"==typeof Sk.imageProxy&&(o=Sk.imageProxy(t));var e=new Nn;return e.resume=function(){if(e.data.error)throw e.data.error;return e.data.result},e.data={type:"Sk.promise",promise:Promise.race([new Promise(function(e){return setTimeout(e,3e3)}),new Promise(function(e){var t=Cn(p.PImage),n=w.loadImage(o,{},function(){t.v=n,e(t)})})]).then(function(e){if(e)return e;throw new kn("[Errno 2] No such file or directory: '".concat(t,"'"))})},e},"loadImage",[{image:bn},{extension:bn,optional:A,ignored:R}]),Lo=y(w,"noTint"),Co=y(function(e,t){var n=Sk.misceval.callsim(p.PImage);return n.v=w.requestImage(e,t),n},"requestImage",[{filename:bn},{extension:bn,optional:A}]),No=y(w,"tint",[{value1:[An,wn,In,bn],converter:T},{value2:[An,In],optional:A},{value3:[An,In],optional:A},{alpha:[An,In],optional:A}]),Mo=y(w,"blend",[{srcImg:[An,"PImage"]},{x:An},{y:An},{width:An},{height:An},{dx:An},{dy:An},{dwidth:An},{dheight:An},{MODE:An,optional:A,allowed:[Fn,zn,Vn,Hn,Un,Xn,Yn,jn,Zn,Wn,Jn,Kn,qn,Qn,$n]}]),Go=y(w,"copy",[{srcImg:[An,"PImage"]},{sx:An},{sy:An},{swidth:An},{sheight:An},{dx:An},{dy:An},{dwidth:An},{dheight:An,optional:A}]),Bo=y(w,"filter",[{MODE:An,allowed:[eo,to,no,oo,io,ro,ao,lo]},{srcImg:"PImage",optional:A}]),Fo=y(w,"get",[{x:An,optional:A},{y:An,optional:A},{width:An,optional:A},{height:An,optional:A}]),zo=y(w,"loadPixels"),Vo=y(w,"set",[{x:An},{y:An},{image:["PImage",An,wn,In,bn],converter:T}]),Ho=y(w,"updatePixels");function Uo(){var e=Cn(vo);return e.image={pixels:w.pixels},e}var Xo=H.CODED,Yo=Sk.ffi,jo=Yo.remapToPy,Zo=Yo.remapToJs,Wo=Sk.builtin.func,Jo=Sk.misceval.buildClass;function Ko(e,t){t.__getattr__=new Wo(function(e,t){var n=Zo(t);return"key"===n?qo():"keyCode"===n?Qo():"keyPressed"===n?$o():void 0})}var qo=function(){return w.key.code===Xo?jo(w.key.code):jo(w.key.toString())},Qo=function(){return jo(w.keyCode)},$o=function(){return jo(w.__keyPressed)},ei=Sk.builtin,ti=ei.int_,ni=ei.float_,oi={ambientLight:y(w,"ambientLight",[{v1:[ti,ni]},{v2:[ti,ni]},{v3:[ti,ni]},{x:[ti,ni],optional:A},{y:[ti,ni],optional:A},{z:[ti,ni],optional:A}]),directionalLight:y(w,"directionalLight",[{v1:[ti,ni]},{v2:[ti,ni]},{v3:[ti,ni]},{nx:[ti,ni],optional:A},{ny:[ti,ni],optional:A},{nz:[ti,ni],optional:A}]),lightFalloff:y(w,"lightFalloff",[{constant:[ti,ni]},{linear:[ti,ni]},{quardatic:[ti,ni]}]),lightSpecular:y(w,"lightSpecular",[{v1:[ti,ni]},{v2:[ti,ni]},{v3:[ti,ni]}]),lights:y(w,"lights"),noLights:y(w,"noLights"),normal:y(w,"normal",[{nx:[ti,ni]},{ny:[ti,ni]},{nz:[ti,ni]}]),pointLight:y(w,"pointLight",[{v1:[ti,ni]},{v2:[ti,ni]},{v3:[ti,ni]},{nx:[ti,ni]},{ny:[ti,ni]},{nz:[ti,ni]}]),spotLight:y(w,"spotLight",[{v1:[ti,ni]},{v2:[ti,ni]},{v3:[ti,ni]},{x:[ti,ni]},{y:[ti,ni]},{z:[ti,ni]},{nx:[ti,ni]},{ny:[ti,ni]},{nz:[ti,ni]},{angle:[ti,ni]},{concentration:[ti,ni]}])},ii=Sk.builtin,ri=ii.int_,ai=ii.float_,li=ii.str,ui=ii.lng,si={ambient:y(w,"ambient",[{gray:[ri,ui,ai,li],converter:T},{v1:[ri,ai],optional:A},{v2:[ri,ai],optional:A},{v3:[ri,ai],optional:A}]),emissive:y(w,"emissive",[{gray:[ri,ui,ai,li],converter:T},{v1:[ri,ai],optional:A},{v2:[ri,ai],optional:A},{v3:[ri,ai],optional:A}]),shininess:y(w,"shininess",[{shine:[ri,ai]}]),specular:y(w,"specular",[{gray:[ri,ui,ai,li],converter:T},{v1:[ri,ai],optional:A},{v2:[ri,ai],optional:A},{v3:[ri,ai],optional:A}])},ci=Sk.ffi,pi=ci.remapToPy,_i=ci.remapToJs,di=Sk.builtin.func,fi=Sk.misceval.buildClass;function vi(e,t){t.__getattr__=new di(function(e,t){switch(_i(t)){case"x":return pi(w.mouseX);case"y":return pi(w.mouseY);case"px":return pi(w.pmouseX);case"py":return pi(w.pmouseY);case"pressed":return pi(w.__mousePressed);case"button":return pi(w.mouseButton);default:return}})}var mi=function(){return pi(w.mouseX)},gi=function(){return pi(w.mouseY)},hi=function(){return pi(w.pmouseX)},Ei=function(){return pi(w.pmouseY)},Si=function(){return pi(w.__mousePressed)},Pi=function(){return pi(w.mouseButton)},xi=Sk.builtin,yi=xi.object,Ti=xi.str,Ai=xi.list,Ri=Sk.misceval.print_,bi={println:y(function(e){Ri(e),Ri("\n")},"println",[{data:yi}]),save:y(w,"save",[{filename:Ti}]),saveFrame:y(w,"saveFrame",[{filename:Ti},{ext:Ti,allowed:["tif","tga","jpg","png"]}]),saveStrings:y(w,"saveStrings",[{filename:Ti},{strings:Ai}]),PrintWriter:I,beginRaw:I,beginRecord:I,createOutput:I,createReader:I,createWriter:I,endRaw:I,endRecord:I,saveBytes:I,saveStream:I,selectOuput:I},Ii=Sk.builtin,wi=Ii.float_,ki=Ii.int_,Oi={noise:y(w,"noise",[{x:[ki,wi]},{y:[ki,wi],optional:A},{z:[ki,wi],optional:A}]),noiseDetail:y(w,"noiseDetail",[{octave:ki},{falloff:[ki,wi],optional:A}]),noiseSeed:y(w,"noiseSeed",[{value:ki}]),randomSeed:y(w,"randomSeed",[{value:ki}]),random:y(w,"random",[{low:[ki,wi]},{high:[ki,wi],optional:A}]),randomGaussian:y(w,"randomGaussian")},Di=Sk.ffi,Li=Di.remapToJs,Ci=Di.remapToPy,Ni=Sk.misceval.buildClass,Mi=Sk.builtin,Gi=Mi.list,Bi=Mi.func;function Fi(e,t){t.__init__=new Bi(function(e){e.pixels=null}),t.__getattr__=new Bi(function(e,t){switch(t=Li(t)){case"height":return Ci(Ia.height);case"width":return Ci(Ia.width);case"pixels":return null==e.pixels&&(e.pixels=new Gi(Ia.pixels.toArray())),e.pixels}})}var zi=U.CORNER,Vi=U.CORNERS,Hi=U.CENTER,Ui=Sk.builtin,Xi=Ui.str,Yi=Ui.int_,ji=Ui.float_,Zi=Ui.bool,Wi=Sk.ffi,Ji=Wi.remapToJs,Ki=Wi.remapToPy,qi=Sk.misceval.buildClass;function Qi(e){return e.v.isVisible()}function $i(e,t){e.v.setVisible(t)}function er(e){e.v.disableStyle()}function tr(e){e.v.enableStyle()}function nr(e,t){var n=e.v.getChild(t);if(null==n)return null;var o=Sk.misceval.callsim(p.PShape);return o.v=n,o}function or(e,t,n,o){e.v.translate(t.v,n.v,o.v)}function ir(e,t){e.v.rotate(t)}function rr(e,t){e.v.rotateX(t)}function ar(e,t){e.v.rotateY(t)}function lr(e,t){e.v.rotateZ(t)}function ur(e,t,n,o){e.v.scale(t,n,o)}function sr(e,t){t.__getattr__=new Sk.builtin.func(function(e,t){switch(t=Ji(t)){case"width":return Ki(e.v.width);case"height":return Ki(e.v.height)}}),t.isVisible=y(Qi,"isVisible",[b]),t.setVisible=y($i,"setVisible"[{value:Zi}]),t.disableStyle=y(er,"disableStyle",[b]),t.enableStyle=y(tr,"enableStyle",[b]),t.getChild=y(nr,"getChild",[b,{shape:p.PShape}]),t.translate=y(or,"translate",[b,{x:[Yi,ji]},{y:[Yi,ji]},{z:[Yi,ji],optional:A}]),t.rotate=y(ir,"rotate",[b,{angle:[Yi,ji]}]),t.rotateX=y(rr,"rotateX",[b,{angle:[Yi,ji]}]),t.rotateY=y(ar,"rotateY",[b,{angle:[Yi,ji]}]),t.rotateZ=y(lr,"rotateZ",[b,{angle:[Yi,ji]}]),t.scale=y(ur,"scale"[{z:[Yi,ji],optional:A}])}var cr={loadShape:y(w,"loadShape",[{filename:Xi}]),shape:y(w,"shape",[{sh:"PShape"},{x:[Yi,ji]},{y:[Yi,ji]},{width:[Yi,ji],optional:A},{height:[Yi,ji],optional:A}]),shapeMode:y(w,"shapeMode",[{img:Yi,allowed:[zi,Vi,Hi]}])},pr=Sk.builtin,_r=pr.int_,dr=pr.float_,fr=pr.str,vr=pr.list,mr={join:y(w,"join",[{stringArray:vr},{separator:fr}]),match:y(w,"match",[{str:fr},{regexp:fr}]),matchAll:y(w,"matchAll",[{str:fr},{regexp:fr}]),nf:y(w,"nf",[{value:[_r,dr,vr]},{digits:_r},{right:_r,optional:A}]),nfc:y(w,"nfc",[{value:[_r,dr,vr]},{right:_r,optional:A}]),nfp:y(w,"nfp",[{value:[_r,dr,vr]},{digits:_r},{right:_r,optional:A}]),nfs:y(w,"nfs",[{value:[_r,dr,vr]},{digits:_r},{right:_r,optional:A}]),split:y(w,"split",[{string:fr},{delimiter:fr}]),splitTokens:y(w,"splitTokens",[{string:fr},{delimiter:fr,optional:A}]),trim:y(w,"trim",[{strOrArray:[fr,vr]}])},gr=Sk.builtin,hr=gr.int_,Er=gr.object,Sr=U.P2D,Pr=U.JAVA2D,xr=U.WEBGL,yr=U.P3D,Tr=U.OPENGL,Ar=U.PDF,Rr=U.DXF;var br={loop:y(function(){if(w[x])throw new Sk.builtin.Exception("loop() should be called after run()");Ia.loop()},"loop"),noLoop:y(function(){if(w[x])throw new Sk.builtin.Exception("noLoop() should be called after run()");w.noLoop()},"noLoop"),size:y(function(e,t,n){void 0!==n&&n!==Sr&&n!==Pr||(Ia.toImageData=function(e,t,n,o){e=void 0!==e?e:0,t=void 0!==t?t:0,n=void 0!==n?n:Ia.width,o=void 0!==o?o:Ia.height;for(var i=void 0;void 0===i;)i=Ia.externals.context.getImageData(e,t,n,o);return i}),Ia.size(e,t,n)},"size",[{width:hr},{height:hr},{renderer:hr,allowed:[Sr,Pr,xr,yr,Tr,Ar,Rr],optional:A}]),exit:y(w,"exit"),redraw:y(w,"redraw"),pushStyle:D(O,[{__call__:y(function(e){return w.pushStyle(),e},"__call__",[b]),__enter__:y(function(e){return e},"__enter__",[b]),__exit__:y(function(){return w.popStyle()},"__exit__",[b,{exc_type:Er,ignored:R},{exc_value:Er,ignored:R},{traceback:Er,ignored:R}])},"pushStyle"],"pushStyle"),popStyle:y(w,"popStyle")},Ir={day:y(w,"day"),hour:y(w,"hour"),millis:y(w,"millis"),minute:y(w,"minute"),month:y(w,"month"),second:y(w,"second"),year:y(w,"year")},wr=Sk.builtin,kr=wr.float_,Or=wr.int_,Dr=wr.object,Lr={applyMatrix:y(w,"applyMatrix",[{n00:[Or,kr]},{n01:[Or,kr]},{n02:[Or,kr]},{n03:[Or,kr]},{n04:[Or,kr]},{n05:[Or,kr]},{n06:[Or,kr]},{n07:[Or,kr]},{n08:[Or,kr]},{n09:[Or,kr]},{n10:[Or,kr]},{n11:[Or,kr]},{n12:[Or,kr]},{n13:[Or,kr]},{n14:[Or,kr]},{n15:[Or,kr]}]),popMatrix:y(w,"popMatrix"),printMatrix:y(w,"printMatrix"),pushMatrix:D(O,[{__call__:y(function(e){return w.pushMatrix(),e},"__call__",[b]),__enter__:y(function(e){return e},"__enter__",[b]),__exit__:y(function(){return w.popMatrix()},"__exit__",[b,{exc_type:Dr,ignored:R},{exc_value:Dr,ignored:R},{traceback:Dr,ignored:R}])},"pushMatrix"],"pushMatrix"),resetMatrix:y(w,"resetMatrix"),rotate:y(w,"rotate",[{angle:[Or,kr]}]),rotateX:y(w,"rotateX",[{angle:[Or,kr]}]),rotateY:y(w,"rotateY",[{angle:[Or,kr]}]),rotateZ:y(w,"rotateZ",[{angle:[Or,kr]}]),scale:y(w,"scale",[{size:[Or,kr]},{y:[Or,kr],optional:A},{z:[Or,kr],optional:A}]),translate:y(w,"translate",[{x:[Or,kr]},{y:[Or,kr]},{z:[Or,kr],optional:A}])},Cr=Sk.builtin,Nr=Cr.int_,Mr=Cr.float_,Gr={degrees:y(w,"degrees",[{angle:[Nr,Mr]}]),radians:y(w,"radians",[{angle:[Nr,Mr]}]),cos:y(w,"cos",[{angle:[Nr,Mr]}]),sin:y(w,"sin",[{angle:[Nr,Mr]}]),tan:y(w,"tan",[{angle:[Nr,Mr]}]),acos:y(w,"acos",[{value:[Nr,Mr]}]),asin:y(w,"asin",[{value:[Nr,Mr]}]),atan:y(w,"tan",[{angle:[Nr,Mr]}]),atan2:y(w,"atan2",[{x:[Nr,Mr]},{y:[Nr,Mr]}])},Br=Sk.builtin,Fr=Br.int_,zr=Br.float_,Vr=Sk.misceval,Hr=Vr.callsim,Ur=Vr.buildClass,Xr=Sk.ffi.remapToPy;function Yr(e,t,n,o){e.v=new Ia.PVector(t,n,o)}function jr(e,t,n,o){e.v.set(t,n,o)}function Zr(e){var t=Hr(p.PVector);return t.v=e.v.get(),t}function Wr(e,t){var n=Hr(p.PVector);return n.v=e.v.add(t),n}function Jr(e,t){var n=Hr(p.PVector);return n.v=e.v.sub(t),n}function Kr(e,t){var n=Hr(p.PVector);return n.v=e.v.mult(t),n}function qr(e,t){var n=Hr(p.PVector);return n.v=e.v.div(t),n}function Qr(e,t){var n=Hr(p.PVector);return n.v=e.v.dot(t),n}function $r(e,t){var n=Hr(p.PVector);return n.v=e.v.cross(t),n}function ea(e,t){var n=Hr(p.PVector);return n.v=e.v.dist(t),n}function ta(e,t){var n=Hr(p.PVector);return n.v=e.v.angleBetween(t),n}function na(e,t){e.v.limit(t)}function oa(e,t){t.__init__=y(Yr,"__init__",[b,{x:Fr,optional:A},{y:Fr,optional:A},{z:Fr,optional:A}]),t.__getattr__=new Sk.builtin.func(function(e,t){return"x"===(t=Sk.ffi.remapToJs(t))?Xr(e.v.x):"y"===t?Xr(e.v.y):"z"===t?Sk.builtin.assk$(e.v.z):void 0}),t.get=y(Zr,"get",[b]),t.set=y(jr,"set",[b,{x:Fr},{x:Fr,optional:A},{x:Fr,optional:A}]),t.mag=y(function(e){return e.v.mag()},"mag",[b]),t.add=y(Wr,"add",[b,{vector:"PVector"}]),t.sub=y(Jr,"sub",[b,{vector:"PVector"}]),t.mult=y(Kr,"mult",[b,{vector:"PVector"}]),t.div=y(qr,"div",[b,{vector:"PVector"}]),t.dist=y(ea,"dist",[b,{vector:"PVector"}]),t.dot=y(Qr,"dot",[b,{x:[Fr,zr]},{y:[Fr,zr],optional:A},{z:[Fr,zr],optional:A}]),t.cross=y($r,"cross",[b,{vector:"PVector"}]),t.normalize=y(function(e){return e.normalize()},"normalize",[b]),t.limit=y(na,"limit",[b,{value:[Fr,zr]}]),t.angleBetween=y(ta,"angleBetween",[b,{vector:"PVector"}]),t.array=y(function(e){return e.v.array()},"array",[b]),t.__repr__=y(function(e){return e.v.toString()},"repr",[b])}var ia=Sk.builtin,ra=ia.float_,aa=ia.int_,la=ia.object,ua=U.IMAGE,sa=U.NORMALIZED,ca=U.POINTS,pa=U.LINES,_a=U.TRIANGLES,da=U.TRIANGLE_FAN,fa=U.TRIANGLE_STRIP,va=U.QUADS,ma=U.QUAD_STRIP,ga=U.CLOSE,ha={beginShape:D(O,[{__call__:y(function(e,t){return w.beginShape(t),e},"__call__",[b,{MODE:aa,allowed:[ca,pa,_a,da,fa,va,ma],optional:A}]),__enter__:y(function(e){return e},"__enter__",[b]),__exit__:y(function(){return w.endShape},"__exit__",[b,{exc_type:la,ignored:R},{exc_value:la,ignored:R},{traceback:la,ignored:R}])},"beginShape"],"beginShape"),beginClosedShape:D(O,[{__call__:y(function(e,t){return w.beginShape(t),e},"__call__",[b,{MODE:aa,allowed:[ca,pa,_a,da,fa,va,ma],optional:A}]),__enter__:y(function(e){return e},"__enter__"[b]),__exit__:y(function(){return w.endShape(H.CLOSE)},"__exit__",[b,{exc_type:la,ignored:R},{exc_value:la,ignored:R},{traceback:la,ignored:R}])},"beginClosedShape"],"beginClosedShape"),endShape:y(w,"endShape",[{MODE:aa,allowed:[ga],optional:A}]),vertex:y(w,"vertex",[{x:[aa,ra]},{y:[aa,ra]},{z:[aa,ra],optional:A},{u:[aa,ra],optional:A},{v:[aa,ra],optional:A}]),bezierVertex:y(w,"bezierVertex",[{cx1:[aa,ra]},{cy1:[aa,ra]},{cz1:[aa,ra]},{cx2:[aa,ra]},{cy2:[aa,ra]},{cz2:[aa,ra]},{x:[aa,ra],optional:A},{y:[aa,ra],optional:A},{z:[aa,ra],optional:A}]),curveVertex:y(w,"curveVertex",[{x:[aa,ra]},{y:[aa,ra]},{z:[aa,ra],optional:A}]),texture:y(w,"texture",[{img:"PImage"}]),textureMode:y(w,"textureMode",[{img:aa,allowed:[ua,sa]}])},Ea=Sk.builtin.str,Sa={link:y(w,"link"[{target:Ea,optional:A}]),status:y(w,"status",[{text:Ea}])},Pa=Sk.misceval,xa=Pa.callsim,ya=Pa.asyncToPromise,Ta=Pa.callsimOrSuspend,Aa={};p.processingInstance=null;var Ra,ba,Ia=w,wa=null,ka=!0,Oa=function(){return!0};p.processing=Ia,p.init=function(e,t,n,o){if(Ra=t,void 0!==n&&"function"!=typeof n)throw new Error("breakHandler must be a function if anything");ba=n,Sk.externalLibraries=Sk.externalLibraries||{},_(Sk.externalLibraries,{"./processing/__init__.js":{path:"".concat(e,"/__init__.js")}}),"function"==typeof o&&(Oa=o)},p.main=function(){var e;p.PImage=(vo=Ln(e=Aa,bo,"ImageProxy",[]),Ln(e,Io,"PImage",[])),p.PShape=qi(Aa,sr,"PShape",[]),p.PGraphics=fn(Aa,Sn,"PGraphics",[]),p.PVector=Ur(Aa,oa,"PVector",[]),p.PFont=Wt(Aa,qt,"PFont",[]);var t=ut(Aa,vt,"Environment",[]),n=ut(Aa,mt,"FrameRate",[lt]),o=xa(n),i=xa(t),r=fi(Aa,vi,"Mouse",[]),a=xa(r),l=Jo(Aa,Ko,"Keyboard",[]),u=xa(l),s=Ni(Aa,Fi,"Screen",[]),c=xa(s);return k(Aa),_(Aa,M,z,oe,ue,de,Le,Ve,{color:Ze},U,qe,tt,{Environment:t,environment:i,cursor:gt,noCursor:ht,height:Et,width:St,frameCount:Pt,frameRate:o,focused:xt},Tt,Bt,Ft,{PFont:p.PFont,createFont:Qt,loadFont:$t,text:en,textFont:tn},{PGraphics:p.PGraphics,createGraphics:Pn,hint:xn},{PImage:p.PImage},{image:ko,createImage:wo,imageMode:Oo,loadImage:Do,noTint:Lo,requestImage:Co,tint:No,blend:Mo,copy:Go,filter:Bo,get:Fo,loadPixels:zo,set:Vo,updatePixels:Ho,pixels:Uo},{keyboard:u,Keyboard:l,keyCode:Qo,key:qo,keyPressed:$o},oi,si,{Mouse:r,mouse:a,mouseX:mi,mouseY:gi,pmouseX:hi,pmouseY:Ei,mousePressed:Si,mouseButton:Pi},bi,Oi,{Screen:s,screen:c},{PShape:p.PShape},br,Ir,Lr,Gr,{PVector:p.PVector},ha,Sa,cr,mr),Aa.disableDoubleBuffer=new Sk.builtin.func(function(){return ka=!1,Sk.builtin.none.none$}),Aa.run=new Sk.builtin.func(function(){var e=new Sk.misceval.Suspension,a=null,n=null,t=null,o=null;e.resume=function(){if(e.data.error)throw e.data.error;return Sk.builtin.none.none$},e.data={type:"Sk.promise",promise:new Promise(function(e,t){a=t,n=e})};var i=new window.Processing.Sketch(function(n){function o(e){a(e),n.exit()}p.processingInstance=n,Sk.globals.setup&&(n.setup=function(){return ya(function(){return Ta(Sk.globals.setup)},Ra)}),Sk.globals.draw&&(n.draw=function(){if(ba)try{ba()}catch(e){o(e)}return ya(function(){return Ta(Sk.globals.draw)},Ra)});var i=["mouseMoved","mouseClicked","mouseDragged","mouseMoved","mouseOut","mouseOver","mousePressed","mouseReleased","keyPressed","keyReleased","keyTyped"];for(var r in i)Sk.globals[i[r]]&&function(){var e=i[r],t=Sk.globals[e];"keyPressed"==e&&(Sk.globals[e]=$o),"mousePressed"==e&&(Sk.globals[e]=Si),n[e]=function(){return ya(function(){return Sk.misceval.callsimOrSuspend(t)},Ra).catch(function(e){return o(e)})}}()});i.options.globalKeyEvents=!0,i.options.eventPredicate=Oa,i.onExit=function(e){e?a(e):n()},i.onSetup=function(e){e&&a(e)};var r=document.getElementById(Sk.canvas);for("CANVAS"===r.tagName&&((o=r.parentNode).removeChild(r),r=o),(t=document.createElement("canvas")).id=Sk.canvas+"-psk";r.firstChild;)r.removeChild(r.firstChild);ka?(t.style="display:none",wa=document.createElement("canvas"),r.appendChild(wa)):r.appendChild(t);var l=window.Processing.getInstanceById(Sk.canvas+"-psk");return l&&l.exit(),i.options.focusElement=r,setTimeout(function(){Aa.p=new window.Processing(t,i,null,wa)},300),e}),Aa},Object.defineProperty(p,"__esModule",{value:!0})});