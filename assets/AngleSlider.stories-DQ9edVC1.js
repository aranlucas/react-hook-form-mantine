import{t as e}from"./react-Q1GcV6wX.js";import{C as t,E as n,M as r,T as i,d as a,f as o,g as s,ht as c,mt as l,p as u,st as d,w as f}from"./index.esm-CCQgQDTi.js";import{t as p}from"./clamp-Bd0cQ1uU.js";import{n as m,r as h}from"./use-merged-ref-BX1AE9EU.js";import{n as g,t as _}from"./use-uncontrolled-CP-PlMVx.js";import{t as v}from"./find-closest-number-PYNE6VkN.js";import{n as y,t as b}from"./useFieldController-BFqsirst.js";import{n as x}from"./rolldown-runtime-DkW27tQK.js";function S(e){return 180/Math.PI*e}function C(e){let t=e.getBoundingClientRect();return[t.left+t.width/2,t.top+t.height/2]}function w(e,t){let n=C(t),r=e[0]-n[0],i=e[1]-n[1];return 360-(S(Math.atan2(r,i))+180)}function T(e,t){return parseFloat(e.toFixed(t))}function E(e){return e.toString().split(`.`)[1]?.length||0}function D(e,t){let n=p(e,0,360),r=Math.ceil(n/t),i=Math.round(n/t);return T(r>=n/t?r*t===360?0:r*t:i*t,E(t))}function O(e,{step:t=.01,onChangeEnd:n,onScrubStart:r,onScrubEnd:i}={}){let[a,o]=(0,k.useState)(!1),s=(0,k.useRef)(null);return(0,k.useEffect)(()=>()=>{s.current?.()},[]),{ref:(0,k.useCallback)(a=>{let c=(r,i=!1)=>{if(a){a.style.userSelect=`none`;let o=D(w([r.clientX,r.clientY],a),t||1);e(o),i&&n?.(o)}},l=()=>{r?.(),o(!0),document.addEventListener(`mousemove`,f,!1),document.addEventListener(`mouseup`,p,!1),document.addEventListener(`touchmove`,m,{passive:!1}),document.addEventListener(`touchend`,h,!1)},u=()=>{i?.(),o(!1),document.removeEventListener(`mousemove`,f,!1),document.removeEventListener(`mouseup`,p,!1),document.removeEventListener(`touchmove`,m,!1),document.removeEventListener(`touchend`,h,!1)},d=e=>{l(),c(e)},f=e=>{c(e)},p=e=>{c(e,!0),u()},m=e=>{e.preventDefault(),c(e.touches[0])},h=e=>{c(e.changedTouches[0],!0),u()},g=e=>{e.preventDefault(),l(),c(e.touches[0])};return a?.addEventListener(`mousedown`,d),a?.addEventListener(`touchstart`,g,{passive:!1}),s.current=()=>{document.removeEventListener(`mousemove`,f,!1),document.removeEventListener(`mouseup`,p,!1),document.removeEventListener(`touchmove`,m,!1),document.removeEventListener(`touchend`,h,!1)},()=>{a&&(a.removeEventListener(`mousedown`,d),a.removeEventListener(`touchstart`,g))}},[e]),active:a}}var k;function A(){return(A=x((()=>{k=e()})))()}var j;function M(){return(M=x((()=>{j={root:`m_48204f9b`,marks:`m_bb9cdbad`,mark:`m_481dd586`,thumb:`m_bc02ba3d`,label:`m_bb8e875b`}})))()}var N,P,F,I,L;function R(){return(R=x((()=>{l(),i(),t(),s(),o(),M(),N=e(),A(),m(),_(),P=r(),F={step:1,withLabel:!0},I=d((e,{size:t,thumbSize:n})=>({root:{"--slider-size":c(t),"--thumb-size":c(n)}})),L=u(e=>{let t=n(`AngleSlider`,F,e),{classNames:r,className:i,style:o,styles:s,unstyled:c,vars:l,step:u,value:d,defaultValue:p,onChange:m,onMouseDown:_,withLabel:y,marks:b,thumbSize:x,restrictToMarks:S,formatLabel:C,onChangeEnd:w,disabled:T,onTouchStart:E,name:k,hiddenInputProps:A,"aria-label":M,tabIndex:L,onScrubStart:R,onScrubEnd:z,mod:B,attributes:V,ref:H,...U}=t,W=(0,N.useRef)(null),[G,K]=g({value:d,defaultValue:p,finalValue:0,onChange:m}),{ref:q}=O(e=>{if(W.current&&!T){let t=S&&Array.isArray(b)?v(e,b.map(e=>e.value)):e;K(t)}},{step:u,onChangeEnd:w,onScrubStart:R,onScrubEnd:z}),J=f({name:`AngleSlider`,classes:j,props:t,className:i,style:o,classNames:r,styles:s,unstyled:c,attributes:V,vars:l,varsResolver:I}),Y=e=>{if(T)return;let t=G;if((e.key===`ArrowLeft`||e.key===`ArrowDown`)&&(e.preventDefault(),t=G===0?359:D(G-u,u)),(e.key===`ArrowRight`||e.key===`ArrowUp`)&&(e.preventDefault(),t=G===359?0:D(G+u,u)),e.key===`Home`&&(t=0),e.key===`End`&&(t=359),S&&Array.isArray(b)){let n=b.map(e=>e.value),r=n.indexOf(G);t=r===-1?v(t,n):e.key===`ArrowLeft`||e.key===`ArrowDown`?n[r===0?n.length-1:r-1]:e.key===`ArrowRight`||e.key===`ArrowUp`?n[r===n.length-1?0:r+1]:v(t,n)}K(t),w?.(t)},X=b?.map((e,t)=>(0,N.createElement)(`div`,{...J(`mark`,{style:{"--angle":`${e.value}deg`}}),"data-label":e.label||void 0,key:t}));return(0,P.jsxs)(a,{ref:h(H,W,q),...J(`root`,{focusable:!0}),mod:[{disabled:T},B],...U,children:[X&&X.length>0&&(0,P.jsx)(`div`,{...J(`marks`),children:X}),y&&(0,P.jsx)(`div`,{...J(`label`),children:typeof C==`function`?C(G):G}),(0,P.jsx)(`div`,{tabIndex:L??(T?-1:0),role:`slider`,"aria-valuemax":360,"aria-valuemin":0,"aria-valuenow":G,onKeyDown:Y,"aria-label":M,...J(`thumb`,{style:{transform:`rotate(${G}deg)`}})}),(0,P.jsx)(`input`,{type:`hidden`,name:k,value:G,...A})]})}),L.displayName=`@mantine/core/AngleSlider`,L.classes=j,L.varsResolver=I})))()}function z(e){let{field:t,props:n}=y(e);return(0,B.jsx)(L,{...t,...n})}var B;function V(){return(V=x((()=>{b(),R(),B=r(),z.__docgenInfo={description:``,methods:[],displayName:`AngleSlider`}})))()}var H,U,W,G;function K(){return(K=x((()=>{V(),H={title:`Components/AngleSlider`,component:z},U={args:{name:`test`,marks:[{value:0,label:`0`},{value:90,label:`90`},{value:180,label:`180`},{value:270,label:`270`}],size:96},parameters:{form:{defaultValues:{test:45}}}},W={args:{name:`test`,size:120},parameters:{form:{defaultValues:{test:0}}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    name: "test",
    marks: [{
      value: 0,
      label: "0"
    }, {
      value: 90,
      label: "90"
    }, {
      value: 180,
      label: "180"
    }, {
      value: 270,
      label: "270"
    }],
    size: 96
  },
  parameters: {
    form: {
      defaultValues: {
        test: 45
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    name: "test",
    size: 120
  },
  parameters: {
    form: {
      defaultValues: {
        test: 0
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G=[`Primary`,`WithoutMarks`]})))()}K();export{U as Primary,W as WithoutMarks,G as __namedExportsOrder,H as default};