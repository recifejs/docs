---
id: models
title: Models
---

The `models` are part of the MVC(model–view–controller) architectural pattern, being the representation of the data layer. In RecifeJs model representation will also be used to define the graphql types.

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
  id?: string;
}

export default UserModel;
```

## Using the GraphQL

RecifeJs uses decorators to identify the class of the models that will represent the graphql types. See more about decorators [here](decorators.md).

See the example below:

```ts
import { Type, Field } from "recife";

@Type()
class UserModel {
  id: string;
  name: string;
  cash?: Number;
  @Field("Int")
  age: Number;
  createdAt: Date;
  updatedAt?: Date;
}

export default UserModel;
```

From this model, the GraphQL type will be created. See how the type looks:

```graphql
type User {
  id: String!
  name: String!
  cash: Float
  age: Int!
  createdAt: Date!
  updatedAt: Date
}
```

### Heritage

`to do`

### Field decorator

`to do`
