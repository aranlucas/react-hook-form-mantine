import{n as e,t}from"./NumberInput-Dm01mBaw.js";import{n,t as r}from"./play-Bn5sfyl1.js";import{n as i}from"./rolldown-runtime-DkW27tQK.js";var a,o,s,c;function l(){return(l=i((()=>{e(),r(),a={title:`Components/NumberInput`,component:t},o={args:{name:`test`,placeholder:`Your age`,label:`Your age`,description:`Must be 18 or older`,min:0,max:120},parameters:{form:{defaultValues:{test:18}}}},s={args:{name:`test`,placeholder:`Quantity`,label:`Quantity`,min:1,max:10,rules:{required:{value:!0,message:`Quantity is required`}}},parameters:{form:{defaultValues:{test:``}}},play:n(`Quantity is required`)},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: "test",
    placeholder: "Your age",
    label: "Your age",
    description: "Must be 18 or older",
    min: 0,
    max: 120
  },
  parameters: {
    form: {
      defaultValues: {
        test: 18
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: "test",
    placeholder: "Quantity",
    label: "Quantity",
    min: 1,
    max: 10,
    rules: {
      required: {
        value: true,
        message: "Quantity is required"
      }
    }
  },
  parameters: {
    form: {
      defaultValues: {
        test: ""
      }
    }
  },
  play: submitShowsError("Quantity is required")
}`,...s.parameters?.docs?.source}}},c=[`Primary`,`WithValidation`]})))()}l();export{o as Primary,s as WithValidation,c as __namedExportsOrder,a as default};