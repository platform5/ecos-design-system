import { selectStyles as styles} from '@microsoft/fast-components';
import { css } from '@microsoft/fast-element';
import { selectTemplate as template, Select, SelectOptions, ElementDefinitionContext, FoundationElementDefinition } from '@microsoft/fast-foundation';
import { selectStartStyles } from './styles';

const overrideStyles = (context: ElementDefinitionContext, definition: FoundationElementDefinition) => {
  return css`
    ${styles(context, definition)}
    ${selectStartStyles}
  `
}

export const ecosSelect = Select.compose<SelectOptions>({
  baseName: 'select',
  template,
  styles: overrideStyles,
  indicator: `
        <svg
            class="select-indicator"
            part="select-indicator"
            viewBox="0 0 12 7"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"
            />
        </svg>
    `,
});
