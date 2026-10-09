import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./PasswordInput-CngOX5h-.js";import{n as r,r as i}from"./iframe-QCABrxee.js";import{n as a,t as o}from"./play-1vvzCiYM.js";var s,c,l,u;function d(){return(d=e((()=>{r(),t(),o(),s=i.meta({title:`Inputs/PasswordInput`,component:n}),c=s.story({args:{name:`test`,placeholder:`Password`,label:`Password`,description:`Password must include at least one letter, number and special character`,visible:!1},parameters:{form:{defaultValues:{test:``}}}}),l=s.story({tags:[`validation`],args:{name:`test`,placeholder:`Password`,label:`Password`,rules:{required:{value:!0,message:`Password is required`},minLength:{value:8,message:`Password must be at least 8 characters`}}},parameters:{form:{defaultValues:{test:``}}}}),l.test(`shows the error on submit`,a(`Password is required`)),u=[`Primary`,`WithValidation`],c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{code:`const Primary = () => (
  <PasswordInput
    name="test"
    placeholder="Password"
    label="Password"
    description="Password must include at least one letter, number and special character"
    visible={false}
  />
);
`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const WithValidation = () => (
  <PasswordInput
    name="test"
    placeholder="Password"
    label="Password"
    rules={{
      required: {
        value: true,
        message: "Password is required",
      },
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters",
      },
    }}
  />
);
`,...l.input.parameters?.docs?.source}}},c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ["validation"],
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
  }
})`,...l.input.parameters?.docs?.source}}}})))()}d();export{c as Primary,l as WithValidation,u as __namedExportsOrder};