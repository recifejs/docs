---
id: controllers
title: Controllers
---

The `controllers` are part of the MVC(model–view–controller) architectural pattern, being responsible for receive user requests and controlling the use of models and views. In RecifeJs the controllers will also be used to assemble the graphql schemes.

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

## Using the GraphQL

RecifeJs uses decorators to identify the methods of the controllers that will represent the graphql schemes. See more about decorators [here](decorators.md).

See the example below:

```ts
import { Query, Mutation } from "recife";
import UserModel from "../models/UserModel";

class UserController {
  constructor() {
    //
  }

  @Query()
  async getUser(): UserModel {
    return await UserModel.findOne();
  }
}

export default UserController;
```

From this method, the GraphQL schema will be created. See how the query looks:

```graphql
extend type Query {
  getUser: User!
}
```

### Parameters

`to do`

### Values not required

`to do`
