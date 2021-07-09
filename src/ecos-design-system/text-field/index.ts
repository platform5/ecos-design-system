import { textFieldStyles as styles, TextField} from '@microsoft/fast-components';
import { css } from '@microsoft/fast-element';
import { textFieldTemplate as template, ElementDefinitionContext, FoundationElementDefinition } from '@microsoft/fast-foundation';
import { textFieldCalendarStyles } from './styles';

const overrideStyles = (context: ElementDefinitionContext, definition: FoundationElementDefinition) => {
  return css`
    ${styles(context, definition)}
    ${textFieldCalendarStyles}
  `
}

export const ecosTextField = TextField.compose({
  baseName: 'text-field',
  template,
  styles: overrideStyles
});
