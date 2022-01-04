---
id: recife-koa
title: Koa
---

Recife Koa is a integration of recifejs with [koa](https://koajs.com/). For more details access the [repository](https://github.com/recifejs/recife-koa).

## Install

```bash
npm install recife-koa
# or
yarn add recife-koa
```

## Using in RecifeJs project

Open file `config/app.ts` and insert the value `koa` in the property `httpFramework`:

```ts
import { AppConfig } from "recife";
export const config: AppConfig = {
  // ...
  httpFramework: "koa",
  // ...
};
```
