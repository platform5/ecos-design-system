import { EcosIcon} from './ecos-design-system';
import { IModuleLoader, IModule, AnalyzedModule } from '@aurelia/kernel';
import { Observable } from '@microsoft/fast-element';

export interface AureliaEcosIconLoaderElement {
  iconName: string;
  outlineModule: Promise<IModule>,
  solidModule: Promise<IModule>,
}

export class AureliaEcosIconLoader {
  public constructor(@IModuleLoader private loader: IModuleLoader) {

  }

  //public async load(icon: AureliaEcosIconLoaderElement): Promise<void>
  //public async load(icon: AureliaEcosIconLoaderElement[]): Promise<void>
  public async load(icon: string | AureliaEcosIconLoaderElement | AureliaEcosIconLoaderElement[], outlineModule?: Promise<IModule>, solidModule?: Promise<IModule>): Promise<void>  {
    if (Array.isArray(icon)) {
      for (const i of icon) {
        this.load(i);
      }
      return;
    }
    if (typeof icon === 'string') {
      icon = {
        iconName: icon,
        outlineModule: outlineModule,
        solidModule: solidModule
      }
    }
    if (icon.outlineModule) {
      this.loadIn(icon.iconName, icon.outlineModule, 'outline');
    }
    if (icon.solidModule) {
      this.loadIn(icon.iconName, icon.solidModule, 'solid');
    }
  
  }

  private async loadIn(iconName: string, module: Promise<IModule>, variant: 'outline' | 'solid'): Promise<void> {
    return (this.loader.load(module) as Promise<AnalyzedModule>).then((mod) => {
      if (typeof mod.raw.default === 'string') {
        EcosIcon[variant][iconName] = mod.raw.default;
        Observable.notify(EcosIcon, variant);
      } else {
        throw new Error('Invalid icon module');
      }
    }).catch((error) => {
      console.warn('Error while loading icon', iconName, variant);
      console.error(error);
    });
  }
}