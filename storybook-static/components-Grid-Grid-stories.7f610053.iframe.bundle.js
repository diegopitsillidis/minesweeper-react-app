"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[249],{"./src/components/Grid/Cell.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fh:()=>Cell});__webpack_require__("./node_modules/react/index.js");var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");const CellState={empty:0,bomb:9,hidden:10,flag:11,weakFlag:12};var useMouseDown=__webpack_require__("./src/hooks/useMouseDown.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Cell=_ref=>{let{children,coords,...rest}=_ref;const[mouseDown,onMouseDown,onMouseUp]=(0,useMouseDown.j)(),props={onClick:()=>rest.onClick(coords),onContextMenu:elem=>{var cell;elem.preventDefault(),cell=children,[CellState.hidden,CellState.flag,CellState.weakFlag].includes(cell)&&rest.onContextMenu(coords)},onMouseDown,onMouseUp,onMouseLeave:onMouseUp,mouseDown,"data-testid":`${coords}`};return(0,jsx_runtime.jsx)(ComponentsMap,{...props,children})},ComponentsMap=_ref2=>{let{children,...rest}=_ref2;const nonActiveCellProps={onContextMenu:rest.onContextMenu,"data-testid":rest["data-testid"]};switch(children){case CellState.empty:return(0,jsx_runtime.jsx)(RevealedFrame,{...nonActiveCellProps});case CellState.bomb:return(0,jsx_runtime.jsx)(BombFrame,{...nonActiveCellProps,children:(0,jsx_runtime.jsx)(Bomb,{})});case CellState.hidden:return(0,jsx_runtime.jsx)(ClosedFrame,{...rest});case CellState.flag:return(0,jsx_runtime.jsx)(ClosedFrame,{...rest,children:(0,jsx_runtime.jsx)(Flag,{})});case CellState.weakFlag:return(0,jsx_runtime.jsx)(ClosedFrame,{...rest,children:(0,jsx_runtime.jsx)(WeakFlag,{})});default:return(0,jsx_runtime.jsx)(RevealedFrame,{...nonActiveCellProps,children})}},ClosedFrame=emotion_styled_browser_esm.A.div`
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    width: 1.8vw;
    height: 1.8vw;
    background-color: #d1d1d1;
    border: 0.6vh solid transparent;
    border-color: ${_ref3=>{let{mouseDown=!1}=_ref3;return mouseDown?"transparent":"white #9e9e9e #9e9e9e white"}};
    &:hover {
        filter: brightness(1.1);
    }
`,colors={0:"#000",1:"#2a48ec",2:"#2bb13d",3:"#ec6561",4:"#ec6561",5:"#a6070f",6:"#e400af",7:"#906a02",8:"#fa0707",9:"rgba(0,0,0,0)",10:"rgba(0,0,0,0)",11:"rgba(0,0,0,0)",12:"rgba(0,0,0,0)"},RevealedFrame=(0,emotion_styled_browser_esm.A)(ClosedFrame)`
    border-color: #dddddd;
    cursor: default;
    color: ${_ref4=>{var _colors;let{children}=_ref4;return null!==(_colors=colors[children])&&void 0!==_colors?_colors:"rgba(0,0,0,0)"}};
    &:hover {
        filter: brightness(1);
    }
`,Bomb=emotion_styled_browser_esm.A.div`
    border-radius: 50%;
    width: 1vw;
    height: 1vw;
    background-color: #333;
`,BombFrame=(0,emotion_styled_browser_esm.A)(RevealedFrame)`
    background-color: #ec433c;
`,Flag=emotion_styled_browser_esm.A.div`
    width: 0px;
    height: 0px;
    color: ${"rgba(0,0,0,0)"};
    border-top: 0.5vw solid transparent;
    border-bottom: 0.5vw solid transparent;
    border-left: 0.5vw solid #ec433c;
`,WeakFlag=(0,emotion_styled_browser_esm.A)(Flag)`
    border-left: 0.5vw solid #f19996
`;Cell.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{children:{required:!0,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"Cell status based on the CellType"},coords:{required:!0,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"Cell coordinates"},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(coords: Coords) => void",signature:{arguments:[{type:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},name:"coords"}],return:{name:"void"}}},description:"onClick by cell handler"},onContextMenu:{required:!0,tsType:{name:"signature",type:"function",raw:"(coords: Coords) => void",signature:{arguments:[{type:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},name:"coords"}],return:{name:"void"}}},description:"onContextMenu by cell handler"}}}},"./src/components/Grid/Grid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GridExample:()=>GridExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Grid_stories});__webpack_require__("./node_modules/react/index.js");var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Cell=__webpack_require__("./src/components/Grid/Cell.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Grid=_ref=>{let{children,...rest}=_ref;return(0,jsx_runtime.jsx)(Wrapper,{size:children.length,children:children.map(((row,y)=>row.map(((cell,x)=>(0,jsx_runtime.jsx)(Cell.fh,{coords:[y,x],...rest,children:cell},`${y}_${x}_${cell}`)))))})},Wrapper=emotion_styled_browser_esm.A.div`
    display: grid;
    grid-template-columns: repeat(${_ref2=>{let{size}=_ref2;return size}}, auto);
    width: max-content;
    padding: 1vw;
`;Grid.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]}],raw:"Cell[]"}],raw:"Cell[][]"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(coords: Coords) => void",signature:{arguments:[{type:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},name:"coords"}],return:{name:"void"}}},description:""},onContextMenu:{required:!0,tsType:{name:"signature",type:"function",raw:"(coords: Coords) => void",signature:{arguments:[{type:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},name:"coords"}],return:{name:"void"}}},description:""}}};const Grid_stories={title:"Grid/Grid",component:Grid},GridExample=(args=>(0,jsx_runtime.jsx)(Grid,{...args})).bind({});GridExample.args={children:[[9,1,0],[1,1,1],[10,10,1]],onClick(coords){console.log(coords)}};const __namedExportsOrder=["GridExample"];GridExample.parameters={...GridExample.parameters,docs:{...GridExample.parameters?.docs,source:{originalSource:"args => <Grid {...args} />",...GridExample.parameters?.docs?.source}}}},"./src/hooks/useMouseDown.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>useMouseDown});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useMouseDown=()=>{const[mouseDown,setMouseDown]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(`mouseDown: ${mouseDown}`,(str=>`${str} ${(new Date).toISOString()}`));return[mouseDown,()=>setMouseDown(!0),()=>setMouseDown(!1)]}}}]);
//# sourceMappingURL=components-Grid-Grid-stories.7f610053.iframe.bundle.js.map