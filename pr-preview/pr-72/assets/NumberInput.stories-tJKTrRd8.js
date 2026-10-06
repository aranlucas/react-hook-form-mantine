import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./NumberInput-pA0NVX0v.js";import{n as r,r as i}from"./iframe-Dro4v1tS.js";import{n as a,t as o}from"./play-1vvzCiYM.js";var s,c,l,u;function d(){return(d=e((()=>{r(),t(),o(),s=i.meta({title:`Inputs/NumberInput`,component:n}),c=s.story({args:{name:`test`,placeholder:`Your age`,label:`Your age`,description:`Must be 18 or older`,min:0,max:120},parameters:{form:{defaultValues:{test:18}}}}),l=s.story({tags:[`validation`],args:{name:`test`,placeholder:`Quantity`,label:`Quantity`,min:1,max:10,rules:{required:{value:!0,message:`Quantity is required`}}},parameters:{form:{defaultValues:{test:``}}}}),l.test(`shows the error on submit`,a(`Quantity is required`)),u=[`Primary`,`WithValidation`],c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{code:`const Primary = () => (
  <NumberInput
    name="test"
    placeholder="Your age"
    label="Your age"
    description="Must be 18 or older"
    min={0}
    max={120}
  />
);
`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const WithValidation = () => (
  <NumberInput
    name="test"
    placeholder="Quantity"
    label="Quantity"
    min={1}
    max={10}
    rules={{
      required: {
        value: true,
        message: "Quantity is required",
      },
    }}
  />
);
`,...l.input.parameters?.docs?.source}}},c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    placeholder: "Your age",
    label: "Your age",
    description: "Must be 18 or older",
    min: 0,
    max: 120
  },
  parameters: {
    form: {
      defaultValues: {
        test: 18
      }
    }
  }
})`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    placeholder: "Quantity",
    label: "Quantity",
    min: 1,
    max: 10,
    rules: {
      required: {
        value: true,
        message: "Quantity is required"
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