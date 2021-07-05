import { menuStyles as styles} from '@microsoft/fast-components';
import { css } from '@microsoft/fast-element';
import { menuTemplate as template, Menu, ElementDefinitionContext, FoundationElementDefinition } from '@microsoft/fast-foundation';
import { menuSeparatedStyles, menuBorderedStyles } from './styles';

const overrideStyles = (context: ElementDefinitionContext, definition: FoundationElementDefinition) => {
  return css`
    ${styles(context, definition)}
    ${menuSeparatedStyles}
    ${menuBorderedStyles}
  `
}

export const ecosMenu = Menu.compose({
  baseName: 'menu',
  template,
  styles: overrideStyles
});
