import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./TagsInput-CqL7ycfY.js";import{n as r,r as i}from"./iframe-Dro4v1tS.js";var a,o,s,c;function l(){return(l=e((()=>{r(),t(),a=i.meta({title:`Combobox/TagsInput`,component:n}),o=a.story({args:{name:`test`,label:`Tags`,placeholder:`Enter tags`,description:`Press Enter to add a tag`,data:[`React`,`Angular`,`Vue`,`Svelte`]},parameters:{form:{defaultValues:{test:[`React`]}}}}),s=a.story({args:{name:`test`,label:`Tags input`,placeholder:`Type and press Enter`,data:[`React`,`Angular`,`Vue`,`Svelte`]},parameters:{form:{defaultValues:{test:[]}}}}),c=[`Primary`,`Empty`],o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const Primary = () => (
  <TagsInput
    name="test"
    label="Tags"
    placeholder="Enter tags"
    description="Press Enter to add a tag"
    data={["React", "Angular", "Vue", "Svelte"]}
  />
);
`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const Empty = () => (
  <TagsInput
    name="test"
    label="Tags input"
    placeholder="Type and press Enter"
    data={["React", "Angular", "Vue", "Svelte"]}
  />
);
`,...s.input.parameters?.docs?.source}}},o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "Tags",
    placeholder: "Enter tags",
    description: "Press Enter to add a tag",
    data: ["React", "Angular", "Vue", "Svelte"]
  },
  parameters: {
    form: {
      defaultValues: {
        test: ["React"]
      }
    }
  }
})`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "Tags input",
    placeholder: "Type and press Enter",
    data: ["React", "Angular", "Vue", "Svelte"]
  },
  parameters: {
    form: {
      defaultValues: {
        test: []
      }
    }
  }
})`,...s.input.parameters?.docs?.source}}}})))()}l();export{s as Empty,o as Primary,c as __namedExportsOrder};