import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./iframe-BpncRmjc.js";import{n as r,t as i}from"./DatePickerInput-BC7UkAKn.js";var a,o,s,c;function l(){return(l=e((()=>{t(),r(),a=n.meta({title:`Dates/DatePickerInput`,component:i}),o=a.story({args:{name:`test`,label:`Pick date`,placeholder:`Pick date`,description:`Select a date from the calendar`,valueFormat:`YYYY-MM-DD`},parameters:{form:{defaultValues:{test:null}}}}),s=a.story({args:{name:`test`,label:`Date input`,placeholder:`Pick date`,valueFormat:`MMMM DD, YYYY`},parameters:{form:{defaultValues:{test:`2026-01-15`}}}}),c=[`Primary`,`WithValue`],o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const Primary = () => (
  <DatePickerInput
    name="test"
    label="Pick date"
    placeholder="Pick date"
    description="Select a date from the calendar"
    valueFormat="YYYY-MM-DD"
  />
);
`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const WithValue = () => (
  <DatePickerInput
    name="test"
    label="Date input"
    placeholder="Pick date"
    valueFormat="MMMM DD, YYYY"
  />
);
`,...s.input.parameters?.docs?.source}}},o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "Pick date",
    placeholder: "Pick date",
    description: "Select a date from the calendar",
    valueFormat: "YYYY-MM-DD"
  },
  parameters: {
    form: {
      defaultValues: {
        test: null
      }
    }
  }
})`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "Date input",
    placeholder: "Pick date",
    valueFormat: "MMMM DD, YYYY"
  },
  parameters: {
    form: {
      defaultValues: {
        test: "2026-01-15"
      }
    }
  }
})`,...s.input.parameters?.docs?.source}}}})))()}l();export{o as Primary,s as WithValue,c as __namedExportsOrder};