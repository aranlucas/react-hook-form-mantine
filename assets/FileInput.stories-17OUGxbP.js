import{n as e,t}from"./FileInput-B13Q0AMq.js";import{n,t as r}from"./play-Bn5sfyl1.js";import{n as i}from"./rolldown-runtime-DkW27tQK.js";var a,o,s,c;function l(){return(l=i((()=>{e(),r(),a={title:`Components/FileInput`,component:t},o={args:{name:`test`,label:`Your Resume`,placeholder:`Pick file`,description:`Upload your resume (PDF, DOC, DOCX)`,accept:`.pdf,.doc,.docx`},parameters:{form:{defaultValues:{test:null}}}},s={args:{name:`test`,label:`Upload file`,placeholder:`Pick file`,description:`Required file upload`,rules:{required:{value:!0,message:`File is required`}}},parameters:{form:{defaultValues:{test:null}}},play:n(`File is required`)},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: "test",
    label: "Your Resume",
    placeholder: "Pick file",
    description: "Upload your resume (PDF, DOC, DOCX)",
    accept: ".pdf,.doc,.docx"
  },
  parameters: {
    form: {
      defaultValues: {
        test: null
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: "test",
    label: "Upload file",
    placeholder: "Pick file",
    description: "Required file upload",
    rules: {
      required: {
        value: true,
        message: "File is required"
      }
    }
  },
  parameters: {
    form: {
      defaultValues: {
        test: null
      }
    }
  },
  play: submitShowsError("File is required")
}`,...s.parameters?.docs?.source}}},c=[`Primary`,`WithValidation`]})))()}l();export{o as Primary,s as WithValidation,c as __namedExportsOrder,a as default};