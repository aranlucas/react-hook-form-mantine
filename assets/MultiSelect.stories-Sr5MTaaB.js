import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./MultiSelect-rxbUwXr3.js";import{n as r,r as i}from"./iframe-DIQjEERb.js";import{n as a,t as o}from"./play-1vvzCiYM.js";var s,c,l,u;function d(){return(d=e((()=>{r(),t(),o(),s=i.meta({title:`Combobox/MultiSelect`,component:n}),c=s.story({args:{name:`test`,label:`Your favorite frameworks/libraries`,placeholder:`Pick all that you like`,description:`Choose all that apply`,data:[`React`,`Angular`,`Vue`,`Svelte`]},parameters:{form:{defaultValues:{test:[`React`,`Vue`]}}}}),l=s.story({tags:[`validation`],args:{name:`test`,label:`Required selection`,placeholder:`Pick at least one`,data:[`React`,`Angular`,`Vue`,`Svelte`],rules:{required:{value:!0,message:`Please select at least one framework`}}},parameters:{form:{defaultValues:{test:[]}}}}),l.test(`shows the error on submit`,a(`Please select at least one framework`)),u=[`Primary`,`WithValidation`],c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{code:`const Primary = () => (
  <MultiSelect
    name="test"
    label="Your favorite frameworks/libraries"
    placeholder="Pick all that you like"
    description="Choose all that apply"
    data={["React", "Angular", "Vue", "Svelte"]}
  />
);
`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const WithValidation = () => (
  <MultiSelect
    name="test"
    label="Required selection"
    placeholder="Pick at least one"
    data={["React", "Angular", "Vue", "Svelte"]}
    rules={{
      required: {
        value: true,
        message: "Please select at least one framework",
      },
    }}
  />
);
`,...l.input.parameters?.docs?.source}}},c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick all that you like",
    description: "Choose all that apply",
    data: ["React", "Angular", "Vue", "Svelte"]
  },
  parameters: {
    form: {
      defaultValues: {
        test: ["React", "Vue"]
      }
    }
  }
})`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    label: "Required selection",
    placeholder: "Pick at least one",
    data: ["React", "Angular", "Vue", "Svelte"],
    rules: {
      required: {
        value: true,
        message: "Please select at least one framework"
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
})`,...l.input.parameters?.docs?.source}}}})))()}d();export{c as Primary,l as WithValidation,u as __namedExportsOrder};