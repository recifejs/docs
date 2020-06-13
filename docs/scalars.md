---
id: scalars
title: Scalars
---

## Creating Scalar

Use the CLI for create a new scalar:

```bash
recife scalar Url
```

**or**

```bash
npx recife-cli scalar Url
```

<br />
The scalar will be created in the `src/scalars` directory with the name `UrlScalar.ts`. And it will have the following content:

```ts
import { Kind, GraphQLError } from "graphql";
import ScalarType from "recife";

const UrlScalar: ScalarType = {
  name: "url",
  description: "A url scalar",
  parseValue: value => {
    return value;
  },
  serialize: value => {
    return value;
  },
  parseLiteral: ast => {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(`This "${ast}" is not a string`);
    }

    return ast.value;
  }
};

export default UrlScalar;
```
