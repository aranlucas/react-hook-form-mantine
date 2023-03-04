
# RHF Mantine

RHF-Mantine is a simple and intuitive library that allows you to easily connect Mantine components to React Hook Form by enriching them with a required "name" prop. By importing your form components from 'rhf-mantine' instead of Mantine and setting their "name" prop, your components become seamlessly connected and synced with the corresponding form field.

The library provides bindings for several Mantine components and does not affect their feature-rich nature or the ability to customize their visual presentation. Additionally, the Mantine component APIs remain unchanged, allowing you to leverage their full power and flexibility. For more information on using Mantine components with RHF-Mantine, please refer to the Mantine documentation.

## Demo

<https://aranlucas.github.io/rhf-mantine>

## Getting Started

```
npm install rhf-mantine
```

## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

## License

MIT
