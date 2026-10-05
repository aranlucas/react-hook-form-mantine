import{n as e,t}from"./Autocomplete-Dj0EiLHD.js";import{n,t as r}from"./play-Bn5sfyl1.js";import{n as i}from"./rolldown-runtime-DkW27tQK.js";var a,o,s,c;function l(){return(l=i((()=>{e(),r(),a={title:`Components/Autocomplete`,component:t},o={args:{name:`test`,label:`Your favorite framework`,placeholder:`Pick one`,description:`Start typing to see suggestions`,data:[`React`,`Angular`,`Vue`,`Svelte`]},parameters:{form:{defaultValues:{test:`React`}}}},s={args:{name:`test`,label:`Required framework`,placeholder:`Pick one`,data:[`React`,`Angular`,`Vue`,`Svelte`],rules:{required:{value:!0,message:`Please select a framework`}}},parameters:{form:{defaultValues:{test:``}}},play:n(`Please select a framework`)},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: "test",
    label: "Your favorite framework",
    placeholder: "Pick one",
    description: "Start typing to see suggestions",
    data: ["React", "Angular", "Vue", "Svelte"]
  },
  parameters: {
    form: {
      defaultValues: {
        test: "React"
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: "test",
    label: "Required framework",
    placeholder: "Pick one",
    data: ["React", "Angular", "Vue", "Svelte"],
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
  },
  play: submitShowsError("Please select a framework")
}`,...s.parameters?.docs?.source}}},c=[`Primary`,`WithValidation`]})))()}l();export{o as Primary,s as WithValidation,c as __namedExportsOrder,a as default};