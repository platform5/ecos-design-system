import { IContainer } from '@aurelia/kernel';
import { IAttrMapper, NodeObserverLocator, AppTask } from '@aurelia/runtime-html';

export class ECOSAdapter {

  public static tags: {[key: string]: string[]} = {
    'CALENDAR': ['date', 'dates', 'from', 'end'],
    'DATE-FIELD': ['value']
  }

  public static register(container: IContainer): void {
    ECOSAdapter.extendTemplatingSyntax(container);
  }

  public static customize(config?: {withPrefix: string}): { register(container: IContainer): void; } {
    return {
        register(container: IContainer): void {
          ECOSAdapter.extendTemplatingSyntax(container, config);
        }
    }
  }

  private static extendTemplatingSyntax(container: IContainer, config?: {withPrefix: string}): void {
    const prefix = (config?.withPrefix || 'fast').toUpperCase();
    const valuePropertyConfig = { events: ['input', 'change'] };
    const nodeObserverConfig: {[key: string]: {[key: string]: {events: string[]}}} = {};

    for (const tag in ECOSAdapter.tags) {
      const properties = ECOSAdapter.tags[tag];
      const fullTag = `${prefix}-${tag}`;
      for (const property of properties) {
        if (!nodeObserverConfig[fullTag]) {
          nodeObserverConfig[fullTag] = {};
        }
        nodeObserverConfig[fullTag][property] = valuePropertyConfig;
      }
    }

    AppTask.beforeCreate(IContainer, container => {
      const attrSyntaxTransformer = container.get(IAttrMapper);
      const nodeObserverLocator = container.get(NodeObserverLocator);
      attrSyntaxTransformer.useTwoWay((el, property) => {
        const tag = ECOSAdapter.tags[el.tagName.substr(prefix.length + 1)];
        return tag && tag.includes(property);
      });
      // Teach Aurelia what events to use to observe properties of elements.
      nodeObserverLocator.useConfig(nodeObserverConfig);
    }).register(container);
  }

}
