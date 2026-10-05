import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./TextInput-ny2BbXEM.js";import{n as r,r as i}from"./iframe-p1URCet3.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{r(),t(),{expect:a}=__STORYBOOK_MODULE_TEST__,o=i.meta({title:`Inputs/TextInput`,component:n}),s=o.story({args:{name:`test`,placeholder:`Your name`,label:`Full name`,description:`First and last name`},parameters:{form:{defaultValues:{test:``}}}}),s.test(`calls your onChange and onBlur alongside the form's`,async({args:e,canvas:t,userEvent:n})=>{let r=t.getByRole(`textbox`,{name:`Full name`});await n.type(r,`Ada`),await n.tab(),await a(e.onChange).toHaveBeenCalledTimes(3),await a(e.onBlur).toHaveBeenCalledOnce(),await a(t.getByText(/"test": "Ada"/)).toBeVisible(),await a(t.getByText(`1 touched`)).toBeVisible()}),c=o.story({tags:[`validation`],args:{name:`test`,placeholder:`Your email`,label:`Email`,rules:{required:{value:!0,message:`Email is required`},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:`Invalid email address`}}},parameters:{form:{defaultValues:{test:``}}}}),c.test(`focuses the field and shows the error on submit`,async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Submit`})),await a(await e.findByText(`Email is required`)).toBeVisible(),await a(e.getByRole(`textbox`,{name:`Email`})).toHaveFocus()}),c.test(`validates the pattern as you type`,async({canvas:e,userEvent:t})=>{await t.type(e.getByRole(`textbox`,{name:`Email`}),`not-an-email`),await a(await e.findByText(`Invalid email address`)).toBeVisible(),await a(e.getByRole(`textbox`,{name:`Email`})).toHaveAttribute(`aria-invalid`,`true`)}),c.test(`submits a valid value`,async({canvas:e,userEvent:t})=>{await t.type(e.getByRole(`textbox`,{name:`Email`}),`ada@example.com`),await t.click(e.getByRole(`button`,{name:`Submit`})),await a(await e.findByText(`onSubmit result`)).toBeVisible(),await a(e.queryByText(`Invalid email address`)).not.toBeInTheDocument()}),l=o.story({args:{name:`test`,label:`Display name`},parameters:{form:{defaultValues:{test:``}}},play:async({canvas:e,userEvent:t})=>{await t.type(e.getByRole(`textbox`,{name:`Display name`}),`Grace Hopper`)}}),u=[`Primary`,`WithValidation`,`Autofilled`],s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const Primary = () => (
  <TextInput
    name="test"
    placeholder="Your name"
    label="Full name"
    description="First and last name"
  />
);
`,...s.input.parameters?.docs?.source}}},c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{code:`const WithValidation = () => (
  <TextInput
    name="test"
    placeholder="Your email"
    label="Email"
    rules={{
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    }}
  />
);
`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const Autofilled = () => <TextInput name="test" label="Display name" />;
`,...l.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    placeholder: "Your name",
    label: "Full name",
    description: "First and last name"
  },
  parameters: {
    form: {
      defaultValues: {
        test: ""
      }
    }
  }
})`,...s.input.parameters?.docs?.source}}},c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ["validation"],
  args: {
    name: "test",
    placeholder: "Your email",
    label: "Email",
    rules: {
      required: {
        value: true,
        message: "Email is required"
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
        message: "Invalid email address"
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
})`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: "test",
    label: "Display name"
  },
  parameters: {
    form: {
      defaultValues: {
        test: ""
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByRole("textbox", {
      name: "Display name"
    }), "Grace Hopper");
  }
})`,...l.input.parameters?.docs?.source},description:{story:`A play function runs when the story opens: watch it fill the field in the Interactions panel.`,...l.input.parameters?.docs?.description}}}})))()}d();export{l as Autofilled,s as Primary,c as WithValidation,u as __namedExportsOrder};