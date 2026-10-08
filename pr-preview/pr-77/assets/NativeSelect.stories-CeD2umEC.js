import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./NativeSelect-B1y--RuK.js";import{n as r,r as i}from"./iframe-B0D3O9M3.js";import{n as a,t as o}from"./play-1vvzCiYM.js";var s,c,l,u;function d(){return(d=e((()=>{r(),t(),o(),s=i.meta({title:`Combobox/NativeSelect`,component:n}),c=s.story({args:{name:`test`,label:`Select your favorite framework/library`,description:`This is anonymous`,data:[`React`,`Vue`,`Angular`,`Svelte`]},parameters:{form:{defaultValues:{test:`React`}}}}),l=s.story({tags:[`validation`],args:{name:`test`,label:`Required selection`,data:[`React`,`Vue`,`Angular`,`Svelte`],rules:{required:{value:!0,message:`Please select a framework`}}},parameters:{form:{defaultValues:{test:``}}}}),l.test(`shows the error on submit`,a(`Please select a framework`)),u=[`Primary`,`WithValidation`],c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{code:`const Primary = () => (
  <NativeSelect
    name="test"
    label="Select your favorite framework/library"
    description="This is anonymous"
    data={["React", "Vue", "Angular", "Svelte"]}
  />
);
`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const WithValidation = () => (
  <NativeSelect
    name="test"
    label="Required selection"
    data={["React", "Vue", "Angular", "Svelte"]}
    rules={{
      required: {
        value: true,
        message: "Please select a framework",
      },
    }}
  />
);
`,...l.input.parameters?.docs?.source}}},c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "Select your favorite framework/library",
    description: "This is anonymous",
    data: ["React", "Vue", "Angular", "Svelte"]
  },
  parameters: {
    form: {
      defaultValues: {
        test: "React"
      }
    }
  }
})`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    label: "Required selection",
    data: ["React", "Vue", "Angular", "Svelte"],
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
})`,...l.input.parameters?.docs?.source}}}})))()}d();export{c as Primary,l as WithValidation,u as __namedExportsOrder};