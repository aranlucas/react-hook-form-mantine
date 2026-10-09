import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./JsonInput-D_MsV7QU.js";import{n as r,r as i}from"./iframe-C-zknkM9.js";var a,o,s,c;function l(){return(l=e((()=>{r(),t(),a=i.meta({title:`Inputs/JsonInput`,component:n}),o=a.story({args:{name:`test`,label:`Your package.json`,placeholder:`Textarea will autosize to fit the content`,description:`Paste a valid JSON document`,formatOnBlur:!0,autosize:!0,minRows:4},parameters:{form:{defaultValues:{test:``}}}}),s=a.story({args:{name:`test`,label:`JSON input`,placeholder:`Enter JSON`,formatOnBlur:!0,validationError:`Invalid JSON`},parameters:{form:{defaultValues:{test:`{"name": "test", "value": 42}`}}}}),c=[`Primary`,`WithValue`],o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const Primary = () => (
  <JsonInput
    name="test"
    label="Your package.json"
    placeholder="Textarea will autosize to fit the content"
    description="Paste a valid JSON document"
    formatOnBlur
    autosize
    minRows={4}
  />
);
`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const WithValue = () => (
  <JsonInput
    name="test"
    label="JSON input"
    placeholder="Enter JSON"
    formatOnBlur
    validationError="Invalid JSON"
  />
);
`,...s.input.parameters?.docs?.source}}},o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "Your package.json",
    placeholder: "Textarea will autosize to fit the content",
    description: "Paste a valid JSON document",
    formatOnBlur: true,
    autosize: true,
    minRows: 4
  },
  parameters: {
    form: {
      defaultValues: {
        test: ""
      }
    }
  }
})`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "JSON input",
    placeholder: "Enter JSON",
    formatOnBlur: true,
    validationError: "Invalid JSON"
  },
  parameters: {
    form: {
      defaultValues: {
        test: '{"name": "test", "value": 42}'
      }
    }
  }
})`,...s.input.parameters?.docs?.source}}}})))()}l();export{o as Primary,s as WithValue,c as __namedExportsOrder};