import{n as e,t}from"./Select-C1ZTyaq4.js";import{n,t as r}from"./play-Bn5sfyl1.js";import{n as i}from"./rolldown-runtime-DkW27tQK.js";var a,o,s,c,l;function u(){return(u=i((()=>{e(),r(),a={title:`Components/Select`,component:t},o={args:{name:`test`,label:`Your favorite framework/library`,placeholder:`Pick one`,description:`Select one option`,data:[{label:`React`,value:`react`},{label:`Angular`,value:`ng`},{label:`Vue`,value:`vue`},{label:`Svelte`,value:`svelte`}]},parameters:{form:{defaultValues:{test:`react`}}}},s={args:{name:`test`,label:`Required selection`,placeholder:`Pick one`,data:[{label:`React`,value:`react`},{label:`Angular`,value:`ng`},{label:`Vue`,value:`vue`},{label:`Svelte`,value:`svelte`}],rules:{required:{value:!0,message:`Please select a framework`}}},parameters:{form:{defaultValues:{test:null}}},play:n(`Please select a framework`)},c={args:{name:`test`,label:`Searchable select`,placeholder:`Search...`,searchable:!0,nothingFoundMessage:`No options found`,data:[{label:`React`,value:`react`},{label:`Angular`,value:`ng`},{label:`Vue`,value:`vue`},{label:`Svelte`,value:`svelte`}]},parameters:{form:{defaultValues:{test:null}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  },
  play: submitShowsError("Please select a framework")
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Primary`,`WithValidation`,`Searchable`]})))()}u();export{o as Primary,c as Searchable,s as WithValidation,l as __namedExportsOrder,a as default};