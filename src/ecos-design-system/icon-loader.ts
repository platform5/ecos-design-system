import { EcosIcon} from './icon';
import { Observable } from '@microsoft/fast-element';

EcosIcon.defaultSize = 'xl';
EcosIcon.defaultWeight = 1.6;

export interface EcosIconLoaderElement {
  iconName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  outlineModule: Promise<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  solidModule: Promise<any>,
}

export class EcosIconLoader {

  //public async load(icon: EcosIconLoaderElement): Promise<void>
  //public async load(icon: EcosIconLoaderElement[]): Promise<void>
  public async load(icon: string | EcosIconLoaderElement | EcosIconLoaderElement[], outlineModule?: Promise<any>, solidModule?: Promise<any>): Promise<void>  {
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

  private async loadIn(iconName: string, module: Promise<any>, variant: 'outline' | 'solid'): Promise<void> {
    return module.then((mod) => {
      if (typeof mod.default === 'string') {
        EcosIcon[variant][iconName] = mod.default;
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
