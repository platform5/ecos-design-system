import { IContainer, IAttrMapper, NodeObserverLocator, AppTask } from 'aurelia';

export class AureliaEcosAdapter {

  public static register(container: IContainer): void {
    AureliaEcosAdapter.extendTemplatingSyntax(container);
  }

  private static extendTemplatingSyntax(container: IContainer): void {
    AppTask.beforeCreate(IContainer, container => {
      const attrSyntaxTransformer = container.get(IAttrMapper);
      const nodeObserverLocator = container.get(NodeObserverLocator);
      attrSyntaxTransformer.useTwoWay((el, property) => {
        switch (el.tagName) {
          case 'ECOS-SELECT':
          case 'ECOS-SLIDER':
          case 'ECOS-TEXT-FIELD':
          case 'ECOS-TEXT-AREA':
            return property === 'value';
          case 'ECOS-CHECKBOX':
          case 'ECOS-RADIO':
          case 'ECOS-RADIO-GROUP':
          case 'ECOS-MENU-ITEM':
          case 'ECOS-SWITCH':
            return property === 'checked';
          case 'ECOS-TABS':
            return property === 'activeid';
          default:
            return false;
        }
      });
      // Teach Aurelia what events to use to observe properties of elements.
      const valuePropertyConfig = { events: ['input', 'change'] };
      nodeObserverLocator.useConfig({
        'ECOS-CHECKBOX': {
          value: valuePropertyConfig
        },
        'ECOS-RADIO': {
          value: valuePropertyConfig
        },
        'ECOS-RADIO-GROUP': {
          value: valuePropertyConfig
        },
        'ECOS-SELECT': {
          value: valuePropertyConfig
        },
        'ECOS-SLIDER': {
          value: valuePropertyConfig
        },
        'ECOS-MENU-ITEM': {
          checked: valuePropertyConfig
        },
        'ECOS-SWITCH': {
          checked: valuePropertyConfig
        },
        'ECOS-TABS': {
          activeid: valuePropertyConfig
        },
        'ECOS-TEXT-FIELD': {
          value: valuePropertyConfig
        },
        'ECOS-TEXT-AREA': {
          value: valuePropertyConfig
        }
      });
    }).register(container);
  }

}
