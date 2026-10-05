import{E as e,M as t,T as n,at as r,g as i,ot as a,p as o}from"./index.esm-CCQgQDTi.js";import{n as s,t as c}from"./use-resolved-styles-api-DU99zb0p.js";import{n as l,t as u}from"./InputBase-BYU0P8L5.js";import{n as d,t as f}from"./useFieldController-BFqsirst.js";import{n as p}from"./rolldown-runtime-DkW27tQK.js";var m;function h(){return(h=p((()=>{m={input:`m_468e7eda`}})))()}var g,_;function v(){return(v=p((()=>{h(),g=t(),a(),l(),i(),n(),c(),_=o(t=>{let n=e([`Input`,`InputWrapper`,`TimeInput`],null,t),{classNames:i,styles:a,unstyled:o,vars:c,withSeconds:l,minTime:d,maxTime:f,value:p,onChange:h,step:_,...v}=n,{resolvedClassNames:y,resolvedStyles:b}=s({classNames:i,styles:a,props:n}),x=e=>{if(d!==void 0||f!==void 0){let[t,n,r]=e.split(`:`).map(Number);if(d){let[e,i,a]=d.split(`:`).map(Number);if(t<e||t===e&&n<i||l&&t===e&&n===i&&r<a)return-1}if(f){let[e,i,a]=f.split(`:`).map(Number);if(t>e||t===e&&n>i||l&&t===e&&n===i&&r>a)return 1}}return 0},S=e=>{if(n.onBlur?.(e),d!==void 0||f!==void 0){let t=e.currentTarget.value;if(t){let r=x(t);r===1?(f&&(e.currentTarget.value=f),n.onChange?.(e)):r===-1&&(d&&(e.currentTarget.value=d),n.onChange?.(e))}}};return(0,g.jsx)(u,{classNames:{...y,input:r(m.input,y?.input)},styles:b,unstyled:o,value:p,step:_??(l?1:60),...v,onChange:h,onBlur:S,type:`time`,__staticSelector:`TimeInput`})}),_.classes=u.classes,_.displayName=`@mantine/dates/TimeInput`})))()}function y(e){let{field:t,fieldState:n,props:r}=d(e);return(0,b.jsx)(_,{...t,error:n.error?.message,...r})}var b;function x(){return(x=p((()=>{f(),v(),b=t(),y.__docgenInfo={description:``,methods:[],displayName:`TimeInput`}})))()}var S,C,w,T;function E(){return(E=p((()=>{x(),S={title:`Components/TimeInput`,component:y},C={args:{name:`test`,label:`Pick a time`,placeholder:`Pick a time`,description:`Select a time`},parameters:{form:{defaultValues:{test:``}}}},w={args:{name:`test`,label:`Time input`,placeholder:`Pick a time`},parameters:{form:{defaultValues:{test:`14:30`}}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    name: "test",
    label: "Pick a time",
    placeholder: "Pick a time",
    description: "Select a time"
  },
  parameters: {
    form: {
      defaultValues: {
        test: ""
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    name: "test",
    label: "Time input",
    placeholder: "Pick a time"
  },
  parameters: {
    form: {
      defaultValues: {
        test: "14:30"
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T=[`Primary`,`WithValue`]})))()}E();export{C as Primary,w as WithValue,T as __namedExportsOrder,S as default};