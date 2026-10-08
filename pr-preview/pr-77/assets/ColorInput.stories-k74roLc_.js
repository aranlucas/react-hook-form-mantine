import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./ColorInput-CP3WDTJg.js";import{n as r,r as i}from"./iframe-BYGQXI30.js";var a,o,s,c;function l(){return(l=e((()=>{r(),t(),a=i.meta({title:`Color/ColorInput`,component:n,args:{eyeDropperButtonProps:{"aria-label":`Pick a color from the screen`}}}),o=a.story({args:{name:`test`,label:`Pick a color`,placeholder:`Pick color`,description:`Select or enter a color`},parameters:{form:{defaultValues:{test:`#C5D899`}}}}),s=a.story({args:{name:`test`,label:`Color input`,placeholder:`Pick color`},parameters:{form:{defaultValues:{test:``}}}}),c=[`Primary`,`Empty`],o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const Primary = () => (
  <ColorInput
    eyeDropperButtonProps={{ "aria-label": "Pick a color from the screen" }}
    name="test"
    label="Pick a color"
    placeholder="Pick color"
    description="Select or enter a color"
  />
);
`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const Empty = () => (
  <ColorInput
    eyeDropperButtonProps={{ "aria-label": "Pick a color from the screen" }}
    name="test"
    label="Color input"
    placeholder="Pick color"
  />
);
`,...s.input.parameters?.docs?.source}}},o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "Pick a color",
    placeholder: "Pick color",
    description: "Select or enter a color"
  },
  parameters: {
    form: {
      defaultValues: {
        test: "#C5D899"
      }
    }
  }
})`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "Color input",
    placeholder: "Pick color"
  },
  parameters: {
    form: {
      defaultValues: {
        test: ""
      }
    }
  }
})`,...s.input.parameters?.docs?.source}}}})))()}l();export{s as Empty,o as Primary,c as __namedExportsOrder};