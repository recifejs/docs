---
id: validators
title: Validators
---

## Creating Validator

Use the CLI for create a new validator:

```bash
recife validator User
```

**or**

```bash
npx recife-cli validator User
```

<br />
The validator will be created in the `src/validators` directory with the name `UserValidator.ts`. And it will have the following content:

```ts
class UserValidator {
  constructor() {
    //
  }
}

export default UserValidator;
```
