---
id: decorators
title: Decorators
---

The RecifeJs uses decorators to identify some aspects to create graphql schemas. These decorators may have some specific configuration, but these settings are usually not needed.

## Query

Identifies whether a controller method will become a graphql query.

### Example

See an example of its use:

in typescript:

```ts
import { Query } from "recife";
import { UserFilter } from "../input/UserInput";
import UserModel from "../models/UserModel";

class UserController {
  @Query()
  async listUser(filter: UserFilter): UserModel[] {
    return await UserModel.list(filter);
  }
}

export default UserController;
```

in graphql:

```graphql
extend type Query {
  getUser(filter: UserFilter): [User]!
}
```

### Attributes

It is possible to insert some attributes in Query to personalize it. These attributes are passed in the first argument, which is an object.

| Name          | Type       | Description              |
| ------------- | ---------- | ------------------------ |
| `name`        | `string`   | Modifies the schema name |
| `middlewares` | `string[]` | Run local middlewares    |

## Mutation

Identifies whether a controller method will become a graphql mutation.

### Example

See an example of its use:

in typescript:

```ts
import { Mutation } from "recife";
import { UserCreateInput } from "../input/UserInput";
import UserModel from "../models/UserModel";

class UserController {
  @Mutation()
  async createUser(input: UserCreateInput): UserModel {
    return await UserModel.createUser(filter);
  }
}

export default UserController;
```

in graphql:

```graphql
extend type Mutation {
  createUser(input: UserCreateInput): User!
}
```

### Attributes

It is possible to insert some attributes in Mutation to personalize it. These attributes are passed in the first argument, which is an object.

| Name          | Type       | Description              |
| ------------- | ---------- | ------------------------ |
| `name`        | `string`   | Modifies the schema name |
| `middlewares` | `string[]` | Run local middlewares    |

## Subscription

Identifies whether a controller method will become a graphql subscription.

### Example

`to do`

### Attributes

It is possible to insert some attributes in Subscription to personalize it. These attributes are passed in the first argument, which is an object.

| Name          | Type       | Description              |
| ------------- | ---------- | ------------------------ |
| `name`        | `string`   | Modifies the schema name |
| `middlewares` | `string[]` | Run local middlewares    |

## Input

Identifies whether a class in the models folder will become a graphql type.

### Example

See an example of its use:

in typescript:

```ts
import { Type } from "recife";

@Type()
class User {
  name: String;
  email: String;
  picture?: String;
}

export default User;
```

in graphql:

```graphql
type User {
  name: String!
  email: String!
  picture: String
}
```

### Attributes

It is possible to insert some attributes in Type to personalize it. These attributes are passed in the first argument, which is an object.

| Name           | Type      | Description                                                |
| -------------- | --------- | ---------------------------------------------------------- |
| `name`         | `string`  | Modifies the schema name                                   |
| `onlyHeritage` | `boolean` | Identifies whether the type will only exist as an heritage |

## Field

Insert custom settings in a field of a type.

### Example

See an example of its use:

in typescript:

```ts
import { Type, Field } from "recife";

@Type()
class User {
  name: String;
  email: String;
  @Field("Int")
  age?: Number;
}

export default User;
```

in graphql:

```graphql
type User {
  name: String!
  email: String!
  age: Int
}
```

### Attributes

`to do`
