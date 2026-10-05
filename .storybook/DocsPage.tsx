import {
  Controls,
  Description,
  Primary,
  Source,
  Stories,
  Subtitle,
  Title,
  useOf,
} from "@storybook/addon-docs/blocks";
import { entryForTitle, sourceUrl } from "./catalog";

const pill = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "3px 10px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 600,
  textDecoration: "none",
  border: "1px solid #e9ecef",
  color: "#495057",
  background: "#f8f9fa",
} as const;

/** The autodocs page for every component: what it wraps, how to import it, then its stories. */
export function DocsPage() {
  const { preparedMeta } = useOf("meta", ["meta"]);
  const entry = entryForTitle(preparedMeta.title);

  if (!entry) {
    return (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <Controls />
        <Stories />
      </>
    );
  }

  const mantinePackage = entry.mantine.startsWith("dates/") ? "@mantine/dates" : "@mantine/core";

  return (
    <>
      <Title />
      <p style={{ fontSize: 16, color: "#495057", margin: "4px 0 16px" }}>{entry.summary}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        <span style={{ ...pill, color: "#c2255c", background: "#fff0f6", borderColor: "#fcc2d7" }}>
          {entry.category}
        </span>
        <a
          style={pill}
          href={`https://mantine.dev/${entry.mantine}/`}
          target="_blank"
          rel="noreferrer"
        >
          Wraps {mantinePackage} ↗
        </a>
        <a style={pill} href={sourceUrl(entry)} target="_blank" rel="noreferrer">
          Source ↗
        </a>
      </div>
      <Source
        language="tsx"
        dark
        code={`import { useForm } from "react-hook-form";
import { ${entry.name} } from "react-hook-form-mantine";

const { control } = useForm();

// Every ${mantinePackage} prop works; the form owns the value and the error.
<${entry.name} name="field" control={control} rules={{ required: "Required" }} />`}
      />
      <Primary />
      <Controls />
      <Stories includePrimary={false} />
    </>
  );
}
