import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Slider-DiGZJykG.js";import{n as r,r as i}from"./iframe-BYGQXI30.js";var a,o,s,c;function l(){return(l=e((()=>{r(),t(),a=i.meta({title:`Sliders/Slider`,component:n,args:{thumbLabel:`Volume`}}),o=a.story({args:{name:`test`,marks:[{value:20,label:`20%`},{value:50,label:`50%`},{value:80,label:`80%`}]},parameters:{form:{defaultValues:{test:50}}}}),s=a.story({args:{name:`test`,marks:[{value:0,label:`0`},{value:25,label:`25`},{value:50,label:`50`},{value:75,label:`75`},{value:100,label:`100`}]},parameters:{form:{defaultValues:{test:25}}}}),c=[`Primary`,`WithMarks`],o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const Primary = () => (
  <Slider
    thumbLabel="Volume"
    name="test"
    marks={[
      { value: 20, label: "20%" },
      { value: 50, label: "50%" },
      { value: 80, label: "80%" },
    ]}
  />
);
`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const WithMarks = () => (
  <Slider
    thumbLabel="Volume"
    name="test"
    marks={[
      { value: 0, label: "0" },
      { value: 25, label: "25" },
      { value: 50, label: "50" },
      { value: 75, label: "75" },
      { value: 100, label: "100" },
    ]}
  />
);
`,...s.input.parameters?.docs?.source}}},o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    marks: [{
      value: 20,
      label: "20%"
    }, {
      value: 50,
      label: "50%"
    }, {
      value: 80,
      label: "80%"
    }]
  },
  parameters: {
    form: {
      defaultValues: {
        test: 50
      }
    }
  }
})`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    marks: [{
      value: 0,
      label: "0"
    }, {
      value: 25,
      label: "25"
    }, {
      value: 50,
      label: "50"
    }, {
      value: 75,
      label: "75"
    }, {
      value: 100,
      label: "100"
    }]
  },
  parameters: {
    form: {
      defaultValues: {
        test: 25
      }
    }
  }
})`,...s.input.parameters?.docs?.source}}}})))()}l();export{o as Primary,s as WithMarks,c as __namedExportsOrder};