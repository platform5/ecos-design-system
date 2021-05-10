import { ICustomElementViewModel, customElement, Key } from 'aurelia';
import { IRouterConfiguration, Navigation, RoutingInstruction, IRouter } from 'aurelia-direct-router';
import template from './ecos-app.html';
import components from './routes/components/components.json';

// const mainRoutes: IRoute[] = [
//   {id: 'home', path:'', component: import('./routes/welcome-page'), title: 'Welcome at Ecos'},
//   {id: 'components', path:'components', component: import('./routes/components/components-list'), title: 'Components'},
//   {path:'the-project', component: import('./routes/the-project'), title: 'The Ecos Project'},
//   {path:'use-cases', component: import('./routes/use-cases'), title: 'Use Cases'},
//   {path:'use-cases/blog', component: import('./routes/use-cases/blog-page'), title: 'Use Cases / Blog'},
//   {path:'use-cases/website', component: import('./routes/use-cases/one-page-website'), title: 'Use Cases / One page website'},
//   {path:'use-cases/dashboard', component: import('./routes/use-cases/admin-dashboard'), title: 'Use Cases / Admin Dashboard'},
// ];

// const componentsRoutes: IRoute[] = components.map((component) => {
//   {return {path: `components/${component.load}`, component: import(`./routes/components/${component.load}-component`), title: `${component.name} component`}}
// });

// @routes([...mainRoutes, ...componentsRoutes])
@customElement({name: 'ecos-app', template})
export class EcosApp implements ICustomElementViewModel {

  public isWelcomePath = false;
  public isComponentsPath = false;
  public isUseCasesPath = false;

  public displayComponentsList = false;
  public componentsList = components;

  public isUseCaseRouterInUse = false;

  public constructor(
    @IRouterConfiguration private routerConfiguration: IRouterConfiguration,
    @IRouter private router: IRouter
    ) {
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
      console.log('instructions', instructions);
      console.log('navigation', navigation);
      console.log('navigation.path', navigation.path);
      this.isComponentsPath = navigation.path && navigation.path.includes('components');
      this.displayComponentsList = navigation.path && navigation.path.includes('components/');
      this.isWelcomePath = !navigation.path;
      this.isUseCasesPath = navigation.path && navigation.path.includes('use-cases');
      this.isUseCaseRouterInUse = navigation.path && navigation.path.includes('use-cases/');
      console.log('isUseCaseRouterInUse', this.isUseCaseRouterInUse);
      this.handleBodyStyles();
      return true;
    });
  }

  private handleBodyStyles() {
    document.body.classList.toggle('body-fixed', this.isUseCaseRouterInUse);
  }

}
