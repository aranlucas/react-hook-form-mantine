import{M as e,c as t,i as n}from"./index.esm-CCQgQDTi.js";import{n as r,t as i}from"./SegmentedControl-DMWbPR30.js";import{n as a,t as o}from"./Input-DES346TC.js";import{n as s,t as c}from"./play-Bn5sfyl1.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m;function h(){return(h=l((()=>{r(),c(),a(),n(),u=e(),d={title:`Components/SegmentedControl`,component:i},f={args:{name:`test`,data:[{label:`React`,value:`react`},{label:`Angular`,value:`ng`},{label:`Vue`,value:`vue`},{label:`Svelte`,value:`svelte`}]},parameters:{form:{defaultValues:{test:`react`}}}},p={args:{name:`test`,data:[{label:`React`,value:`react`},{label:`Angular`,value:`ng`},{label:`Vue`,value:`vue`}],rules:{required:{value:!0,message:`Please select an option`}}},parameters:{form:{defaultValues:{test:``}}},render:function(e){let{formState:n,getFieldState:r}=t(),{error:a}=r(e.name,n);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{...e}),a&&(0,u.jsx)(o.Error,{mt:5,children:a.message})]})},play:s(`Please select an option`)},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  },
  play: submitShowsError("Please select an option")
}`,...p.parameters?.docs?.source}}},m=[`Primary`,`WithValidation`]})))()}h();export{f as Primary,p as WithValidation,m as __namedExportsOrder,d as default};