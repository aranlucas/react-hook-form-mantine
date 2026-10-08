import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CsASpNSy.js";import{n as r,t as i}from"./ColorPicker-C9V_mDAy.js";var a,o,s,c;function l(){return(l=e((()=>{t(),r(),a=n.meta({title:`Color/ColorPicker`,component:i,args:{saturationLabel:`Saturation`,hueLabel:`Hue`,alphaLabel:`Alpha`}}),o=a.story({args:{name:`test`,format:`rgba`},parameters:{form:{defaultValues:{test:`rgba(47, 119, 150, 0.7)`}}}}),s=a.story({args:{name:`test`,format:`hex`},parameters:{form:{defaultValues:{test:`#2f7796`}}}}),c=[`Primary`,`HexFormat`],o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const Primary = () => (
  <ColorPicker
    saturationLabel="Saturation"
    hueLabel="Hue"
    alphaLabel="Alpha"
    name="test"
    format="rgba"
  />
);
`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const HexFormat = () => (
  <ColorPicker
    saturationLabel="Saturation"
    hueLabel="Hue"
    alphaLabel="Alpha"
    name="test"
    format="hex"
  />
);
`,...s.input.parameters?.docs?.source}}},o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    format: "rgba"
  },
  parameters: {
    form: {
      defaultValues: {
        test: "rgba(47, 119, 150, 0.7)"
      }
    }
  }
})`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    format: "hex"
  },
  parameters: {
    form: {
      defaultValues: {
        test: "#2f7796"
      }
    }
  }
})`,...s.input.parameters?.docs?.source}}}})))()}l();export{s as HexFormat,o as Primary,c as __namedExportsOrder};