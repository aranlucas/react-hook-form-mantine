import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./RangeSlider-DWmTcZgq.js";import{n as r,r as i}from"./iframe-BYGQXI30.js";var a,o,s,c;function l(){return(l=e((()=>{r(),t(),a=i.meta({title:`Sliders/RangeSlider`,component:n,args:{thumbFromLabel:`Minimum price`,thumbToLabel:`Maximum price`}}),o=a.story({args:{name:`test`,min:0,max:100,minRange:5,marks:[{value:0,label:`$0`},{value:50,label:`$50`},{value:100,label:`$100`}]},parameters:{form:{defaultValues:{test:[20,80]}}}}),s=a.story({args:{name:`test`,min:0,max:100,step:10,minRange:20},parameters:{form:{defaultValues:{test:[30,70]}}}}),c=[`Primary`,`WithStep`],o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const Primary = () => (
  <RangeSlider
    thumbFromLabel="Minimum price"
    thumbToLabel="Maximum price"
    name="test"
    min={0}
    max={100}
    minRange={5}
    marks={[
      { value: 0, label: "$0" },
      { value: 50, label: "$50" },
      { value: 100, label: "$100" },
    ]}
  />
);
`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const WithStep = () => (
  <RangeSlider
    thumbFromLabel="Minimum price"
    thumbToLabel="Maximum price"
    name="test"
    min={0}
    max={100}
    step={10}
    minRange={20}
  />
);
`,...s.input.parameters?.docs?.source}}},o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    min: 0,
    max: 100,
    minRange: 5,
    marks: [{
      value: 0,
      label: "$0"
    }, {
      value: 50,
      label: "$50"
    }, {
      value: 100,
      label: "$100"
    }]
  },
  parameters: {
    form: {
      defaultValues: {
        test: [20, 80]
      }
    }
  }
})`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    min: 0,
    max: 100,
    step: 10,
    minRange: 20
  },
  parameters: {
    form: {
      defaultValues: {
        test: [30, 70]
      }
    }
  }
})`,...s.input.parameters?.docs?.source}}}})))()}l();export{o as Primary,s as WithStep,c as __namedExportsOrder};