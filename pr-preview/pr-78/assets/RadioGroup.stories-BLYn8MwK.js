import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-D7m7xvW4.js";import{i as n,n as r,r as i,t as a}from"./Radio-BxI03NLm.js";import{S as o,n as s,r as c,x as l}from"./iframe-QCABrxee.js";import{n as u,t as d}from"./play-1vvzCiYM.js";var f,p,m,h,g;function _(){return(_=e((()=>{s(),n(),o(),r(),d(),f=t(),p=c.meta({title:`Toggles/RadioGroup`,component:i,args:{children:(0,f.jsxs)(l,{mt:`xs`,children:[(0,f.jsx)(a.Item,{value:`react`,label:`React`}),(0,f.jsx)(a.Item,{value:`svelte`,label:`Svelte`}),(0,f.jsx)(a.Item,{value:`ng`,label:`Angular`}),(0,f.jsx)(a.Item,{value:`vue`,label:`Vue`})]})}}),m=p.story({args:{name:`test`,label:`Select your favorite framework/library`,description:`This is anonymous`},parameters:{form:{defaultValues:{test:`react`}}}}),h=p.story({tags:[`validation`],args:{name:`test`,label:`Pick a framework`,rules:{required:{value:!0,message:`Please select a framework`}}},parameters:{form:{defaultValues:{test:``}}}}),h.test(`shows the error on submit`,u(`Please select a framework`)),g=[`Primary`,`WithValidation`],m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{code:`const Primary = () => (
  <RadioGroup
    name="test"
    label="Select your favorite framework/library"
    description="This is anonymous"
  >
    (
    <Group mt="xs">
      <Radio.Item value="react" label="React" />
      <Radio.Item value="svelte" label="Svelte" />
      <Radio.Item value="ng" label="Angular" />
      <Radio.Item value="vue" label="Vue" />
    </Group>
    )
  </RadioGroup>
);
`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{code:`const WithValidation = () => (
  <RadioGroup
    name="test"
    label="Pick a framework"
    rules={{
      required: {
        value: true,
        message: "Please select a framework",
      },
    }}
  >
    (
    <Group mt="xs">
      <Radio.Item value="react" label="React" />
      <Radio.Item value="svelte" label="Svelte" />
      <Radio.Item value="ng" label="Angular" />
      <Radio.Item value="vue" label="Vue" />
    </Group>
    )
  </RadioGroup>
);
`,...h.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "Select your favorite framework/library",
    description: "This is anonymous"
  },
  parameters: {
    form: {
      defaultValues: {
        test: "react"
      }
    }
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    label: "Pick a framework",
    rules: {
      required: {
        value: true,
        message: "Please select a framework"
      }
    }
  },
  parameters: {
    form: {
      defaultValues: {
        test: ""
      }
    }
  }
})`,...h.input.parameters?.docs?.source}}}})))()}_();export{m as Primary,h as WithValidation,g as __namedExportsOrder};