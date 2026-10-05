import{n as e,t}from"./PasswordInput-Dzz3CXO5.js";import{n,t as r}from"./play-Bn5sfyl1.js";import{n as i}from"./rolldown-runtime-DkW27tQK.js";var a,o,s,c;function l(){return(l=i((()=>{e(),r(),a={title:`Components/PasswordInput`,component:t},o={args:{name:`test`,placeholder:`Password`,label:`Password`,description:`Password must include at least one letter, number and special character`,visible:!1},parameters:{form:{defaultValues:{test:``}}}},s={args:{name:`test`,placeholder:`Password`,label:`Password`,rules:{required:{value:!0,message:`Password is required`},minLength:{value:8,message:`Password must be at least 8 characters`}}},parameters:{form:{defaultValues:{test:``}}},play:n(`Password is required`)},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: "test",
    placeholder: "Password",
    label: "Password",
    description: "Password must include at least one letter, number and special character",
    visible: false
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
    placeholder: "Password",
    label: "Password",
    rules: {
      required: {
        value: true,
        message: "Password is required"
      },
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters"
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
  play: submitShowsError("Password is required")
}`,...s.parameters?.docs?.source}}},c=[`Primary`,`WithValidation`]})))()}l();export{o as Primary,s as WithValidation,c as __namedExportsOrder,a as default};