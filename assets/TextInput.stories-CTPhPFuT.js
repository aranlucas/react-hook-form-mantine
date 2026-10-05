import{n as e,t}from"./TextInput-Bs525aZt.js";import{n}from"./rolldown-runtime-DkW27tQK.js";var r,i,a,o,s,c,l;function u(){return(u=n((()=>{e(),{expect:r,userEvent:i,within:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/TextInput`,component:t},s={args:{name:`test`,placeholder:`Your name`,label:`Full name`,description:`First and last name`},parameters:{form:{defaultValues:{test:``}}}},c={args:{name:`test`,placeholder:`Your email`,label:`Email`,rules:{required:{value:!0,message:`Email is required`},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:`Invalid email address`}}},parameters:{form:{defaultValues:{test:``}}},play:async({canvasElement:e})=>{let t=a(e),n=t.getByRole(`textbox`,{name:`Email`}),o=t.getByRole(`button`,{name:`Submit`});await i.click(o),await r(await t.findByText(`Email is required`)).toBeVisible(),await r(n).toHaveFocus(),await i.type(n,`not-an-email`),await r(await t.findByText(`Invalid email address`)).toBeVisible(),await i.clear(n),await i.type(n,`ada@example.com`),await i.click(o),await r(await t.findByText(`onSubmit result`)).toBeVisible()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", {
      name: "Email"
    });
    const submit = canvas.getByRole("button", {
      name: "Submit"
    });
    await userEvent.click(submit);
    await expect(await canvas.findByText("Email is required")).toBeVisible();
    await expect(input).toHaveFocus();
    await userEvent.type(input, "not-an-email");
    await expect(await canvas.findByText("Invalid email address")).toBeVisible();
    await userEvent.clear(input);
    await userEvent.type(input, "ada@example.com");
    await userEvent.click(submit);
    await expect(await canvas.findByText("onSubmit result")).toBeVisible();
  }
}`,...c.parameters?.docs?.source}}},l=[`Primary`,`WithValidation`]})))()}u();export{s as Primary,c as WithValidation,l as __namedExportsOrder,o as default};