---
id: recife-fastify
title: Fastify
---

Recife Fastify is a integration of recifejs with [fastify](https://www.fastify.io/). For more details access the [repository](https://github.com/recifejs/recife-fastify).

## Install

```bash
npm install recife-fastify
# or
yarn add recife-fastify
```

## Using in RecifeJs project

Open file `config/app.ts` and insert the value `fastify` in the property `httpFramework`:

```ts
import { AppConfig } from "recife";

export const config: AppConfig = {
  // ...
  httpFramework: "fastify",
  // ...
};
```
