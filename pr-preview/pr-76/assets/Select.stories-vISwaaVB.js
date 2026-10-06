import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Select-XYw3IB4i.js";import{n as r,r as i}from"./iframe-FQwbPnXb.js";import{n as a,t as o}from"./play-1vvzCiYM.js";var s,c,l,u,d;function f(){return(f=e((()=>{r(),t(),o(),s=i.meta({title:`Combobox/Select`,component:n}),c=s.story({args:{name:`test`,label:`Your favorite framework/library`,placeholder:`Pick one`,description:`Select one option`,data:[{label:`React`,value:`react`},{label:`Angular`,value:`ng`},{label:`Vue`,value:`vue`},{label:`Svelte`,value:`svelte`}]},parameters:{form:{defaultValues:{test:`react`}}}}),l=s.story({tags:[`validation`],args:{name:`test`,label:`Required selection`,placeholder:`Pick one`,data:[{label:`React`,value:`react`},{label:`Angular`,value:`ng`},{label:`Vue`,value:`vue`},{label:`Svelte`,value:`svelte`}],rules:{required:{value:!0,message:`Please select a framework`}}},parameters:{form:{defaultValues:{test:null}}}}),l.test(`shows the error on submit`,a(`Please select a framework`)),u=s.story({args:{name:`test`,label:`Searchable select`,placeholder:`Search...`,searchable:!0,nothingFoundMessage:`No options found`,data:[{label:`React`,value:`react`},{label:`Angular`,value:`ng`},{label:`Vue`,value:`vue`},{label:`Svelte`,value:`svelte`}]},parameters:{form:{defaultValues:{test:null}}}}),d=[`Primary`,`WithValidation`,`Searchable`],c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{code:`const Primary = () => (
  <Select
    name="test"
    label="Your favorite framework/library"
    placeholder="Pick one"
    description="Select one option"
    data={[
      { label: "React", value: "react" },
      { label: "Angular", value: "ng" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ]}
  />
);
`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const WithValidation = () => (
  <Select
    name="test"
    label="Required selection"
    placeholder="Pick one"
    data={[
      { label: "React", value: "react" },
      { label: "Angular", value: "ng" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ]}
    rules={{
      required: {
        value: true,
        message: "Please select a framework",
      },
    }}
  />
);
`,...l.input.parameters?.docs?.source}}},u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{code:`const Searchable = () => (
  <Select
    name="test"
    label="Searchable select"
    placeholder="Search..."
    searchable
    nothingFoundMessage="No options found"
    data={[
      { label: "React", value: "react" },
      { label: "Angular", value: "ng" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ]}
  />
);
`,...u.input.parameters?.docs?.source}}},c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "Your favorite framework/library",
    placeholder: "Pick one",
    description: "Select one option",
    data: [{
      label: "React",
      value: "react"
    }, {
      label: "Angular",
      value: "ng"
    }, {
      label: "Vue",
      value: "vue"
    }, {
      label: "Svelte",
      value: "svelte"
    }]
  },
  parameters: {
    form: {
      defaultValues: {
        test: "react"
      }
    }
  }
})`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    label: "Required selection",
    placeholder: "Pick one",
    data: [{
      label: "React",
      value: "react"
    }, {
      label: "Angular",
      value: "ng"
    }, {
      label: "Vue",
      value: "vue"
    }, {
      label: "Svelte",
      value: "svelte"
    }],
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
        test: null
      }
    }
  }
})`,...l.input.parameters?.docs?.source}}},u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "Searchable select",
    placeholder: "Search...",
    searchable: true,
    nothingFoundMessage: "No options found",
    data: [{
      label: "React",
      value: "react"
    }, {
      label: "Angular",
      value: "ng"
    }, {
      label: "Vue",
      value: "vue"
    }, {
      label: "Svelte",
      value: "svelte"
    }]
  },
  parameters: {
    form: {
      defaultValues: {
        test: null
      }
    }
  }
})`,...u.input.parameters?.docs?.source}}}})))()}f();export{c as Primary,u as Searchable,l as WithValidation,d as __namedExportsOrder};