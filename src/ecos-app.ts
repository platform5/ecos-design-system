import { ICustomElementViewModel, customElement, Key } from 'aurelia';
import { IRouterConfiguration, Navigation, RoutingInstruction, IRouter } from 'aurelia-direct-router';
import template from './ecos-app.html';
import components from './routes/components/components.json';

@customElement({name: 'ecos-app', template})
export class EcosApp implements ICustomElementViewModel {

  public displayComponentsList = false;
  public isUseCaseRouterInUse = false;
  public componentsList = components;

  public constructor(
    @IRouterConfiguration private routerConfiguration: IRouterConfiguration,
    @IRouter private router: IRouter
    ) {
      this.handleUrlRoutes();
    this.routerConfiguration.addHook((instructions: RoutingInstruction[], navigation: Navigation) => {
      // when routing we want to scroll the viewport up again
      const vp = document.querySelector('au-viewport');
      if (vp) {
        const child = vp.firstChild;
        if (child instanceof Element) {
          child.scrollIntoView();
        }
      }
      return true;
    });
    this.routerConfiguration.addHook((instructions: RoutingInstruction[], navigation: Navigation) => {
      this.displayComponentsList = instructions.find(i => i.viewport.name === 'components-viewport') !== undefined && instructions.find(i => i.component.name === 'components-list') === undefined;
      this.isUseCaseRouterInUse = instructions.find(i => i.viewport.name === 'use-cases-viewport') !== undefined && instructions.find(i => i.component.name === 'use-cases-list') === undefined;
      this.handleBodyStyles();
      return true;
    });
  }

  private handleUrlRoutes() {
    this.routerConfiguration.addHook(
          (url: string) => {
            return url;
          },
          { type: 'transformFromUrl' }
    );
    this.routerConfiguration.addHook(
      (instructions: string | RoutingInstruction[]) => {
        return instructions;
      },
      { type: 'transformToUrl'}
    );
  }

  private handleBodyStyles() {
    if (this.isUseCaseRouterInUse) {
      setTimeout(() => {
        document.body.classList.add('use-cases-on');
      }, 150);
    } else {
      document.body.classList.remove('use-cases-on');
    }
  }

}
