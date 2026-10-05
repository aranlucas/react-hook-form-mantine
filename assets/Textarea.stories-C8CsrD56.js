import{n as e,t}from"./Textarea-DEmmwVXU.js";import{n,t as r}from"./play-Bn5sfyl1.js";import{n as i}from"./rolldown-runtime-DkW27tQK.js";var a,o,s,c;function l(){return(l=i((()=>{e(),r(),a={title:`Components/Textarea`,component:t},o={args:{name:`test`,placeholder:`Your comment`,label:`Your comment`,description:`Share your thoughts`,autosize:!0,minRows:3,maxRows:6},parameters:{form:{defaultValues:{test:``}}}},s={args:{name:`test`,placeholder:`Your comment`,label:`Required comment`,rules:{required:{value:!0,message:`Comment is required`},minLength:{value:10,message:`Comment must be at least 10 characters`}}},parameters:{form:{defaultValues:{test:``}}},play:n(`Comment is required`)},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: "test",
    placeholder: "Your comment",
    label: "Your comment",
    description: "Share your thoughts",
    autosize: true,
    minRows: 3,
    maxRows: 6
  },
  parameters: {
    form: {
      defaultValues: {
        test: ""
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: "test",
    placeholder: "Your comment",
    label: "Required comment",
    rules: {
      required: {
        value: true,
        message: "Comment is required"
      },
      minLength: {
        value: 10,
        message: "Comment must be at least 10 characters"
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
  play: submitShowsError("Comment is required")
}`,...s.parameters?.docs?.source}}},c=[`Primary`,`WithValidation`]})))()}l();export{o as Primary,s as WithValidation,c as __namedExportsOrder,a as default};