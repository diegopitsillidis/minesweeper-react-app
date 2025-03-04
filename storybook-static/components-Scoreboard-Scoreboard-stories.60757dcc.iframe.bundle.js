"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[937],{"./src/components/Scoreboard/Counter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Counter});__webpack_require__("./node_modules/react/index.js");var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Counter=_ref=>{let{children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Frame,{children})},Frame=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
    display: inline-block;
    padding: 0 0.3vw;
    color: #ec433c;
    border: 0.15vw inset;
    line-height: 2vw;
    letter-spacing: 0.05em;
    background: #333;
    text-shadow: 0 0 0.1vw #ec433c;
`;Counter.__docgenInfo={description:"",methods:[],displayName:"Counter",props:{children:{required:!0,tsType:{name:"string"},description:"Number in the counter"}}}},"./src/components/Scoreboard/Level.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Level});__webpack_require__("./node_modules/react/index.js");var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Level=_ref=>{let{children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Select,{children:children.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Option,{value:item,children:item},item)))})},Select=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.select`
    margin: 0;
    height: 2.5vw;
    border-radious:0;
    border: 0.15vw solid;
    border-color: white #9e9e9e #9e9e9e white;
    background: #d1d1d1;
`,Option=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.option`
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0 0.2vw 0.2vw;
`;Level.__docgenInfo={description:"",methods:[],displayName:"Level",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Array of possible game levels"}}}},"./src/components/Scoreboard/Reset.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Reset});__webpack_require__("./node_modules/react/index.js");var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_hooks_useMouseDown__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useMouseDown.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Reset=_ref=>{let{onReset}=_ref;const[mouseDown,onMouseDown,onMouseUp]=(0,_hooks_useMouseDown__WEBPACK_IMPORTED_MODULE_2__.j)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Button,{onMouseDown,onMouseUp,onMouseLeave:onMouseUp,onClick:onReset,children:mouseDown?"😲":"😊"})},Button=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.button`
    font-size: 1.5vw;
    cursor: pointer;
    font-weight: 700;
    border-width: 0.15vw;
    border-style: solid;
    background: #d1d1d1;
    border-color: white #9e9e9e #9e9e9e white;
`;Reset.__docgenInfo={description:"",methods:[],displayName:"Reset",props:{onReset:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Reset action handler"}}}},"./src/components/Scoreboard/Scoreboard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ScoreboardExample:()=>ScoreboardExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Scoreboard_stories});__webpack_require__("./node_modules/react/index.js");var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Counter=__webpack_require__("./src/components/Scoreboard/Counter.tsx"),Level=__webpack_require__("./src/components/Scoreboard/Level.tsx"),Reset=__webpack_require__("./src/components/Scoreboard/Reset.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Scoreboard=_ref=>{let{time,levels,mines,onReset}=_ref;return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(Counter.p,{children:time}),(0,jsx_runtime.jsx)(Level.$,{children:levels}),(0,jsx_runtime.jsx)(Reset.Y,{onReset}),(0,jsx_runtime.jsx)(Counter.p,{children:mines})]})},Wrapper=emotion_styled_browser_esm.A.div`
    display: flex;
    width: max-content;
    padding-bottom: 2vw;
    justify-content: space-between;
`;Scoreboard.__docgenInfo={description:"",methods:[],displayName:"Scoreboard",props:{time:{required:!0,tsType:{name:"string"},description:"Timer"},levels:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Possible game scenarios"},onReset:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Action handler when the GameReset button is clicked"},mines:{required:!0,tsType:{name:"string"},description:"Bombs in the field"}}};const Scoreboard_stories={title:"Scoreboard/Scoreboard",component:Scoreboard},ScoreboardExample=(args=>(0,jsx_runtime.jsx)(Scoreboard,{...args})).bind({});ScoreboardExample.args={time:"000",levels:["beginnner","intermediate","expert"],mines:"010"};const __namedExportsOrder=["ScoreboardExample"];ScoreboardExample.parameters={...ScoreboardExample.parameters,docs:{...ScoreboardExample.parameters?.docs,source:{originalSource:"args => <Scoreboard {...args} />",...ScoreboardExample.parameters?.docs?.source}}}},"./src/hooks/useMouseDown.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>useMouseDown});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useMouseDown=()=>{const[mouseDown,setMouseDown]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(`mouseDown: ${mouseDown}`,(str=>`${str} ${(new Date).toISOString()}`));return[mouseDown,()=>setMouseDown(!0),()=>setMouseDown(!1)]}}}]);
//# sourceMappingURL=components-Scoreboard-Scoreboard-stories.60757dcc.iframe.bundle.js.map