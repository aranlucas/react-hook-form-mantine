import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Switch-BcXfQ3wh.js";import{n as r,r as i}from"./iframe-BnI2VmzM.js";var a,o,s,c;function l(){return(l=e((()=>{r(),t(),a=i.meta({title:`Toggles/Switch`,component:n}),o=a.story({args:{name:`test`,label:`Enable notifications`,description:`Receive email notifications`},parameters:{form:{defaultValues:{test:!0}}}}),s=a.story({args:{name:`test`,label:`Dark mode`,description:`Use dark theme`,thumbIcon:`🌙`},parameters:{form:{defaultValues:{test:!1}}}}),c=[`Primary`,`WithLabel`],o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const Primary = () => (
  <Switch
    name="test"
    label="Enable notifications"
    description="Receive email notifications"
  />
);
`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const WithLabel = () => (
  <Switch
    name="test"
    label="Dark mode"
    description="Use dark theme"
    thumbIcon="🌙"
  />
);
`,...s.input.parameters?.docs?.source}}},o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "Enable notifications",
    description: "Receive email notifications"
  },
  parameters: {
    form: {
      defaultValues: {
        test: true
      }
    }
  }
})`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "Dark mode",
    description: "Use dark theme",
    thumbIcon: "🌙"
  },
  parameters: {
    form: {
      defaultValues: {
        test: false
      }
    }
  }
})`,...s.input.parameters?.docs?.source}}}})))()}l();export{o as Primary,s as WithLabel,c as __namedExportsOrder};