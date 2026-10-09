import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./FileInput-C1ymozUC.js";import{n as r,r as i}from"./iframe-CffhhRjh.js";import{n as a,t as o}from"./play-1vvzCiYM.js";var s,c,l,u;function d(){return(d=e((()=>{r(),t(),o(),s=i.meta({title:`Inputs/FileInput`,component:n}),c=s.story({args:{name:`test`,label:`Your Resume`,placeholder:`Pick file`,description:`Upload your resume (PDF, DOC, DOCX)`,accept:`.pdf,.doc,.docx`},parameters:{form:{defaultValues:{test:null}}}}),l=s.story({tags:[`validation`],args:{name:`test`,label:`Upload file`,placeholder:`Pick file`,description:`Required file upload`,rules:{required:{value:!0,message:`File is required`}}},parameters:{form:{defaultValues:{test:null}}}}),l.test(`shows the error on submit`,a(`File is required`)),u=[`Primary`,`WithValidation`],c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{code:`const Primary = () => (
  <FileInput
    name="test"
    label="Your Resume"
    placeholder="Pick file"
    description="Upload your resume (PDF, DOC, DOCX)"
    accept=".pdf,.doc,.docx"
  />
);
`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const WithValidation = () => (
  <FileInput
    name="test"
    label="Upload file"
    placeholder="Pick file"
    description="Required file upload"
    rules={{
      required: {
        value: true,
        message: "File is required",
      },
    }}
  />
);
`,...l.input.parameters?.docs?.source}}},c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ["validation"],
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
  }
})`,...l.input.parameters?.docs?.source}}}})))()}d();export{c as Primary,l as WithValidation,u as __namedExportsOrder};