import{n as e,t}from"./MultiSelect-Cn_hVaJp.js";import{n,t as r}from"./play-Bn5sfyl1.js";import{n as i}from"./rolldown-runtime-DkW27tQK.js";var a,o,s,c;function l(){return(l=i((()=>{e(),r(),a={title:`Components/MultiSelect`,component:t},o={args:{name:`test`,label:`Your favorite frameworks/libraries`,placeholder:`Pick all that you like`,description:`Choose all that apply`,data:[`React`,`Angular`,`Vue`,`Svelte`]},parameters:{form:{defaultValues:{test:[`React`,`Vue`]}}}},s={args:{name:`test`,label:`Required selection`,placeholder:`Pick at least one`,data:[`React`,`Angular`,`Vue`,`Svelte`],rules:{required:{value:!0,message:`Please select at least one framework`}}},parameters:{form:{defaultValues:{test:[]}}},play:n(`Please select at least one framework`)},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  },
  play: submitShowsError("Please select at least one framework")
}`,...s.parameters?.docs?.source}}},c=[`Primary`,`WithValidation`]})))()}l();export{o as Primary,s as WithValidation,c as __namedExportsOrder,a as default};