import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Checkbox-C5fdJeGV.js";import{n as r,r as i}from"./iframe-_KJsLn_T.js";var a,o,s,c;function l(){return(l=e((()=>{r(),t(),a=i.meta({title:`Toggles/Checkbox`,component:n}),o=a.story({args:{name:`test`,label:`I agree to sell my privacy`,description:`You can unsubscribe at any time`},parameters:{form:{defaultValues:{test:!0}}}}),s=a.story({tags:[`validation`],args:{name:`test`,label:`I accept the terms and conditions`,rules:{required:{value:!0,message:`You must accept the terms`}}},parameters:{form:{defaultValues:{test:!1}}}}),c=[`Primary`,`Required`],o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const Primary = () => (
  <Checkbox
    name="test"
    label="I agree to sell my privacy"
    description="You can unsubscribe at any time"
  />
);
`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const Required = () => (
  <Checkbox
    name="test"
    label="I accept the terms and conditions"
    rules={{
      required: {
        value: true,
        message: "You must accept the terms",
      },
    }}
  />
);
`,...s.input.parameters?.docs?.source}}},o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "I agree to sell my privacy",
    description: "You can unsubscribe at any time"
  },
  parameters: {
    form: {
      defaultValues: {
        test: true
      }
    }
  }
})`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    label: "I accept the terms and conditions",
    rules: {
      required: {
        value: true,
        message: "You must accept the terms"
      }
    }
  },
  parameters: {
    form: {
      defaultValues: {
        test: false
      }
    }
  }
})`,...s.input.parameters?.docs?.source}}}})))()}l();export{o as Primary,s as Required,c as __namedExportsOrder};