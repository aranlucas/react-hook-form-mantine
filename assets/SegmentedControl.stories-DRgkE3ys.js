import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-D7m7xvW4.js";import{n,t as r}from"./SegmentedControl-aUQkR1Ha.js";import{n as i,t as a}from"./Input-LBb-M_Td.js";import{n as o,o as s,r as c,u as l}from"./iframe-BoFjpqsV.js";import{n as u,t as d}from"./play-1vvzCiYM.js";var f,p,m,h,g;function _(){return(_=e((()=>{o(),n(),d(),i(),s(),f=t(),p=c.meta({title:`Toggles/SegmentedControl`,component:r}),m=p.story({args:{name:`test`,data:[{label:`React`,value:`react`},{label:`Angular`,value:`ng`},{label:`Vue`,value:`vue`},{label:`Svelte`,value:`svelte`}]},parameters:{form:{defaultValues:{test:`react`}}}}),h=p.story({tags:[`validation`],args:{name:`test`,data:[{label:`React`,value:`react`},{label:`Angular`,value:`ng`},{label:`Vue`,value:`vue`}],rules:{required:{value:!0,message:`Please select an option`}}},parameters:{form:{defaultValues:{test:``}}},render:function(e){let{formState:t,getFieldState:n}=l(),{error:i}=n(e.name,t);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{...e}),i&&(0,f.jsx)(a.Error,{mt:5,children:i.message})]})}}),h.test(`shows the error on submit`,u(`Please select an option`)),g=[`Primary`,`WithValidation`],m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{code:`const Primary = () => (
  <SegmentedControl
    name="test"
    data={[
      { label: "React", value: "react" },
      { label: "Angular", value: "ng" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ]}
  />
);
`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{code:`const WithValidation = (args) => {
  const { formState, getFieldState } = useFormContext();
  const { error } = getFieldState(args.name, formState);

  return (
    <>
      <SegmentedControl
        name="test"
        data={[
          { label: "React", value: "react" },
          { label: "Angular", value: "ng" },
          { label: "Vue", value: "vue" },
        ]}
        rules={{
          required: {
            value: true,
            message: "Please select an option",
          },
        }}
      />
      {error && <Input.Error mt={5}>{error.message}</Input.Error>}
    </>
  );
};
`,...h.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
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
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    data: [{
      label: "React",
      value: "react"
    }, {
      label: "Angular",
      value: "ng"
    }, {
      label: "Vue",
      value: "vue"
    }],
    rules: {
      required: {
        value: true,
        message: "Please select an option"
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
  // SegmentedControl has no error prop, so the story renders the message itself.
  render: function Render(args) {
    const {
      formState,
      getFieldState
    } = useFormContext();
    const {
      error
    } = getFieldState(args.name, formState);
    return <>
        <SegmentedControl {...args} />
        {error && <Input.Error mt={5}>{error.message}</Input.Error>}
      </>;
  }
})`,...h.input.parameters?.docs?.source}}}})))()}_();export{m as Primary,h as WithValidation,g as __namedExportsOrder};