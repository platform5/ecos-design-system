I've got a 2.0.0 question about extending components.
Prior to 2.0.0 here is what I used to do: 

```
// import everything needed, including `template` and `styles` from foundation/components packages

// create some new tagged template styles
const extendedStyles = css`
  :host { background: red };
`;

// create an extended component like:
@customElement({
  name: "extended-dialog",
  template: template,
  styles: [styles, extendedStyles]
})
export class EcosDialog extends FASTDialog {}
``` 

With this in place, the new component would have all the styles, both from fast-components and the extendedStyles
Now in 2.0.0 I'm discovering the .compose() way of creating a component and a new EagerOrLazyFoundationOption<...> type for template  and styles
What would be now the right / best way to create an extended version of a component when it comes to simply adding some CSS styles ?

nicholasrice — Aujourd’hui à 16:48
There are a few ways. First though, compose() is generally intended to be used by library authors, so if you're authoring an application component (or otherwise don't need the flexibility introduced with .compose()) then feel free to still use @customElement to define the component

bengirardet — Aujourd’hui à 16:50
cool to know. It's however in the context of a library so compose()  probably makes sense

nicholasrice — Aujourd’hui à 16:51
if you do want to use .compose(), then one way is to simply interpolate in the existing styles into a new stylesheet provided to the override:

```
const definition = EcosDialog.compose({baseName: "extended-dialog", template, styles: css`${fastDialogStyles}${extendedStyles}`})
```
or, if the styles being overriden are a function...
```
const overrideStyles(context: ElementDefinitionContext, definition: FoundationElementDefinition) {
  return css`
    ${fastDialogStyles(context, definition)}
    ${extendedStyles}
  `
}
```
alternatively, you can always use the 
```
$fastController.addStyles()
```

API if that makes sense for your scenario, and add the styles imperatively

bengirardet — Aujourd’hui à 16:55
Thanks :thumbsup:  will look into this. What are the purpose of the function styles including context  and definition ? These are for resolving design token values ?

nicholasrice — Aujourd’hui à 16:58
They're useful for knowing how elements are defined. For the purposes of styling and templating, the context object allows you to get the configured tag for a custom element by it's backing class, so you can write selectors like .some-class ${context.tagFor(FASTButton)} { color: red}, where the product of tagFor() can be configured by app authors using the DesignSystem: 

```
DesignSystem.getOrCreate().register(fastButton({prefix: "my-prefix"}))
```

in the above, the resulting selector would be .some-class my-prefix-button { color: red}

bengirardet — Aujourd’hui à 17:03
Which means that the new way of registering a component in an application is by calling 
DesignSystem.getOrCreate().register(fastButton({prefix: "my-prefix"}))
 
(instead of doing
import { FASTDialog } from '...'; 
FASTDialog;
 ??