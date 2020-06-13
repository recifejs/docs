---
id: controllers
title: Controllers
---

## Creating Controller

Use the CLI for create a new controller:

```bash
recife controller User
```

**or**

```bash
npx recife-cli controller User
```

<br />
The controller will be created in the `src/controllers` directory with the name `UserController.ts`. And it will have the following content:

```ts
import { Query, Mutation } from "recife";

class UserController {
  constructor() {
    //
  }
}

export default UserController;
```
