---
id: recife-express
title: Express
---

Recife Express is a integration of recifejs with [express](https://expressjs.com/). For more details access the [repository](https://github.com/recifejs/recife-express).

## Install

```bash
npm install recife-express
# or
yarn add recife-express
```

## Using in RecifeJs project

Open file `config/app.ts` and insert the value `express` in the property `httpFramework`:

```ts
import { AppConfig } from "recife";
export const config: AppConfig = {
  // ...
  httpFramework: "express",
  // ...
};
```
