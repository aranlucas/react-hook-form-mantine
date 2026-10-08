import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-CL2Fx9K5.js";import{i as n,n as r,r as i,t as a}from"./Checkbox-Tn2AT-zn.js";import{S as o,n as s,r as c,x as l}from"./iframe-82CkjH8M.js";import{n as u,t as d}from"./play-1vvzCiYM.js";var f,p,m,h,g;function _(){return(_=e((()=>{s(),o(),n(),r(),d(),f=t(),p=c.meta({title:`Toggles/CheckboxGroup`,component:i,args:{children:(0,f.jsxs)(l,{mt:`xs`,children:[(0,f.jsx)(a.Item,{value:`react`,label:`React`}),(0,f.jsx)(a.Item,{value:`svelte`,label:`Svelte`}),(0,f.jsx)(a.Item,{value:`ng`,label:`Angular`}),(0,f.jsx)(a.Item,{value:`vue`,label:`Vue`})]})}}),m=p.story({args:{name:`test`,label:`Select your favorite frameworks/libraries`,description:`Choose all that apply`},parameters:{form:{defaultValues:{test:[`react`]}}}}),h=p.story({tags:[`validation`],args:{name:`test`,label:`Required selection`,rules:{required:{value:!0,message:`Please select at least one option`}}},parameters:{form:{defaultValues:{test:[]}}}}),h.test(`shows the error on submit`,u(`Please select at least one option`)),g=[`Primary`,`WithValidation`],m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{code:`const Primary = () => (
  <CheckboxGroup
    name="test"
    label="Select your favorite frameworks/libraries"
    description="Choose all that apply"
  >
    (
    <Group mt="xs">
      <Checkbox.Item value="react" label="React" />
      <Checkbox.Item value="svelte" label="Svelte" />
      <Checkbox.Item value="ng" label="Angular" />
      <Checkbox.Item value="vue" label="Vue" />
    </Group>
    )
  </CheckboxGroup>
);
`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{code:`const WithValidation = () => (
  <CheckboxGroup
    name="test"
    label="Required selection"
    rules={{
      required: {
        value: true,
        message: "Please select at least one option",
      },
    }}
  >
    (
    <Group mt="xs">
      <Checkbox.Item value="react" label="React" />
      <Checkbox.Item value="svelte" label="Svelte" />
      <Checkbox.Item value="ng" label="Angular" />
      <Checkbox.Item value="vue" label="Vue" />
    </Group>
    )
  </CheckboxGroup>
);
`,...h.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "Select your favorite frameworks/libraries",
    description: "Choose all that apply"
  },
  parameters: {
    form: {
      defaultValues: {
        test: ["react"]
      }
    }
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    label: "Required selection",
    rules: {
      required: {
        value: true,
        message: "Please select at least one option"
      }
    }
  },
  parameters: {
    form: {
      defaultValues: {
        test: []
      }
    }
  }
})`,...h.input.parameters?.docs?.source}}}})))()}_();export{m as Primary,h as WithValidation,g as __namedExportsOrder};