import{M as e}from"./index.esm-CCQgQDTi.js";import{i as t,n,r,t as i}from"./Checkbox-Cea3sT8c.js";import{d as a,u as o}from"./iframe-BB3Nd-IK.js";import{n as s,t as c}from"./play-Bn5sfyl1.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m;function h(){return(h=l((()=>{a(),t(),n(),c(),u=e(),d={title:`Components/CheckboxGroup`,component:r},f={render:e=>(0,u.jsx)(r,{...e,children:(0,u.jsxs)(o,{mt:`xs`,children:[(0,u.jsx)(i.Item,{value:`react`,label:`React`}),(0,u.jsx)(i.Item,{value:`svelte`,label:`Svelte`}),(0,u.jsx)(i.Item,{value:`ng`,label:`Angular`}),(0,u.jsx)(i.Item,{value:`vue`,label:`Vue`})]})}),args:{name:`test`,label:`Select your favorite frameworks/libraries`,description:`Choose all that apply`},parameters:{form:{defaultValues:{test:[`react`]}}}},p={render:e=>(0,u.jsx)(r,{...e,children:(0,u.jsxs)(o,{mt:`xs`,children:[(0,u.jsx)(i.Item,{value:`react`,label:`React`}),(0,u.jsx)(i.Item,{value:`svelte`,label:`Svelte`}),(0,u.jsx)(i.Item,{value:`ng`,label:`Angular`}),(0,u.jsx)(i.Item,{value:`vue`,label:`Vue`})]})}),args:{name:`test`,label:`Required selection`,rules:{required:{value:!0,message:`Please select at least one option`}}},parameters:{form:{defaultValues:{test:[]}}},play:s(`Please select at least one option`)},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <CheckboxGroup {...args}>
      <Group mt="xs">
        <Checkbox.Item value="react" label="React" />
        <Checkbox.Item value="svelte" label="Svelte" />
        <Checkbox.Item value="ng" label="Angular" />
        <Checkbox.Item value="vue" label="Vue" />
      </Group>
    </CheckboxGroup>,
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <CheckboxGroup {...args}>
      <Group mt="xs">
        <Checkbox.Item value="react" label="React" />
        <Checkbox.Item value="svelte" label="Svelte" />
        <Checkbox.Item value="ng" label="Angular" />
        <Checkbox.Item value="vue" label="Vue" />
      </Group>
    </CheckboxGroup>,
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
  },
  play: submitShowsError("Please select at least one option")
}`,...p.parameters?.docs?.source}}},m=[`Primary`,`WithValidation`]})))()}h();export{f as Primary,p as WithValidation,m as __namedExportsOrder,d as default};