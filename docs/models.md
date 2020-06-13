---
id: models
title: Models
---

## Creating Model

Use the CLI for create a new model:

```bash
recife model User
```

**or**

```bash
npx recife-cli model User
```

<br />
The model will be created in the `src/models` directory with the name `UserModel.ts`. And it will have the following content:

```ts
import { Type } from "recife";

@Type()
class UserModel {
  id?: String;
}

export default UserModel;
```
