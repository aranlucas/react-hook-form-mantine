import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-CsASpNSy.js";import{n as r,t as i}from"./Textarea-BuarhwSO.js";import{n as a,t as o}from"./play-1vvzCiYM.js";var s,c,l,u;function d(){return(d=e((()=>{t(),r(),o(),s=n.meta({title:`Inputs/Textarea`,component:i}),c=s.story({args:{name:`test`,placeholder:`Your comment`,label:`Your comment`,description:`Share your thoughts`,autosize:!0,minRows:3,maxRows:6},parameters:{form:{defaultValues:{test:``}}}}),l=s.story({tags:[`validation`],args:{name:`test`,placeholder:`Your comment`,label:`Required comment`,rules:{required:{value:!0,message:`Comment is required`},minLength:{value:10,message:`Comment must be at least 10 characters`}}},parameters:{form:{defaultValues:{test:``}}}}),l.test(`shows the error on submit`,a(`Comment is required`)),u=[`Primary`,`WithValidation`],c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{code:`const Primary = () => (
  <Textarea
    name="test"
    placeholder="Your comment"
    label="Your comment"
    description="Share your thoughts"
    autosize
    minRows={3}
    maxRows={6}
  />
);
`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const WithValidation = () => (
  <Textarea
    name="test"
    placeholder="Your comment"
    label="Required comment"
    rules={{
      required: {
        value: true,
        message: "Comment is required",
      },
      minLength: {
        value: 10,
        message: "Comment must be at least 10 characters",
      },
    }}
  />
);
`,...l.input.parameters?.docs?.source}}},c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ["validation"],
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
  }
})`,...l.input.parameters?.docs?.source}}}})))()}d();export{c as Primary,l as WithValidation,u as __namedExportsOrder};