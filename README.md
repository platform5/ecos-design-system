# ecos-design-system

This is a WIP experimentation to build a design system compatible with several modern development platforms. The original goal is to build something nice and fun with Aurelia 2 and Eleventy.

## Install

```shell
npm install @ecos/ecos-design-system
```

## Getting started

In order to use web-components they need to be registered. You can do this by importing each desired components. 

```ts
import { EcosDesignSystemProvider, EcosButton } from "@ecos/ecos-design-system";

/*
* Ensure that tree-shaking doesn't remove these components from the bundle.
* There are multiple ways to prevent tree shaking, of which this is one.
*/
EcosDesignSystemProvider;
EcosButton;
````

Make sure you have a Design System Provider encapsulating all the ecos components in the DOM. A common practice is to place it right after the body tag

```html
<ecos-design-system-provider use-defaults="">
  <!-- `use-defaults` is only required on the top level design-system-provider -->
  <!-- code continues here -->
</ecos-design-system-provider>
```

Use the components as native elements

```html
<ecos-design-system-provider background-color="#FFFFFF">
  <h1>Hello World</h1>
  <p>This text is supposed to motivate you to click below</p>
  <ecos-button>Click me !</ecos-button>
</ecos-design-system-provider>
```

### Aurelia adapter

The Ecos design system currently* ships with a `AureliaEcosAdapter` class. In order for the components to work smoothly with two-way bindings in Aurelia, one must teach Aurelia2 how to listen for the value changes inside custom components. This is achieved through this adapter:

```
import { AureliaEcosAdapter } from '@ecos/ecos-design-system'``

```ts
// main.ts
Aurelia.register(AureliaEcosAdapter)
````

# Contribute / setup a dev environment

1. Clone this repository  
2. Install dependencies
3. Start the web server

```shell
git clone https://github.com/ben-girardet/ecos-design-system.git #1
cd ecos-design-system
npm i #2
npm run start  #3
```

PR's are welcome

## Build the design system

```shell
npm run build
```

## Build the app 

```shell
npm run build-app
```