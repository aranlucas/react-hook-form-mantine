import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-D7m7xvW4.js";import{i as n,n as r,r as i,t as a}from"./Chip-6ScumXO3.js";import{n as o,r as s}from"./iframe-mS0WItww.js";var c,l,u,d,f;function p(){return(p=e((()=>{o(),n(),r(),c=t(),l=s.meta({title:`Toggles/ChipGroup`,component:i}),u=l.story({render:e=>(0,c.jsxs)(i,{...e,children:[(0,c.jsx)(a.Item,{value:`react`,children:`React`}),(0,c.jsx)(a.Item,{value:`ng`,children:`Angular`}),(0,c.jsx)(a.Item,{value:`svelte`,children:`Svelte`}),(0,c.jsx)(a.Item,{value:`vue`,children:`Vue`})]}),args:{name:`test`,multiple:!1},parameters:{form:{defaultValues:{test:`react`}}}}),d=l.story({render:e=>(0,c.jsxs)(i,{...e,children:[(0,c.jsx)(a.Item,{value:`react`,children:`React`}),(0,c.jsx)(a.Item,{value:`ng`,children:`Angular`}),(0,c.jsx)(a.Item,{value:`svelte`,children:`Svelte`}),(0,c.jsx)(a.Item,{value:`vue`,children:`Vue`})]}),args:{name:`test`,multiple:!0},parameters:{form:{defaultValues:{test:[`react`,`vue`]}}}}),f=[`Single`,`Multiple`],u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{code:`const Single = () => (
  <ChipGroup name="test" multiple={false}>
    <Chip.Item value="react">React</Chip.Item>
    <Chip.Item value="ng">Angular</Chip.Item>
    <Chip.Item value="svelte">Svelte</Chip.Item>
    <Chip.Item value="vue">Vue</Chip.Item>
  </ChipGroup>
);
`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{code:`const Multiple = () => (
  <ChipGroup name="test" multiple>
    <Chip.Item value="react">React</Chip.Item>
    <Chip.Item value="ng">Angular</Chip.Item>
    <Chip.Item value="svelte">Svelte</Chip.Item>
    <Chip.Item value="vue">Vue</Chip.Item>
  </ChipGroup>
);
`,...d.input.parameters?.docs?.source}}},u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => <ChipGroup {...args}>
      <Chip.Item value="react">React</Chip.Item>
      <Chip.Item value="ng">Angular</Chip.Item>
      <Chip.Item value="svelte">Svelte</Chip.Item>
      <Chip.Item value="vue">Vue</Chip.Item>
    </ChipGroup>,
  args: {
    name: "test",
    multiple: false
  },
  parameters: {
    form: {
      defaultValues: {
        test: "react"
      }
    }
  }
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => <ChipGroup {...args}>
      <Chip.Item value="react">React</Chip.Item>
      <Chip.Item value="ng">Angular</Chip.Item>
      <Chip.Item value="svelte">Svelte</Chip.Item>
      <Chip.Item value="vue">Vue</Chip.Item>
    </ChipGroup>,
  args: {
    name: "test",
    multiple: true
  },
  parameters: {
    form: {
      defaultValues: {
        test: ["react", "vue"]
      }
    }
  }
})`,...d.input.parameters?.docs?.source}}}})))()}p();export{d as Multiple,u as Single,f as __namedExportsOrder};