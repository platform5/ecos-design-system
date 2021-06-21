/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnimatedSVG2 } from './custom-elements/animated-svg2/index';
AnimatedSVG2;
import { AureliaEcosAdapter} from './aurelia2/ecos-aurelia-adapter';
import Aurelia from 'aurelia';
import { LoggerConfiguration, LogLevel, ConsoleSink, ColorOptions } from 'aurelia';
import { RouterConfiguration } from 'aurelia-direct-router';
import { EcosApp } from './ecos-app';
import * as routes from './routes';
import { EcosSettings } from './custom-elements/ecos-settings/ecos-settings';
import { AuSnippet } from './custom-elements/au-snippet/au-snippet';
import './ecos-init';
import './ecos-icons';
import { EcosDialogRenderer } from './routes/ecos-dialog-renderer';
import { AureliaEcosIconLoader } from './ecos-icons';

import { DialogConfiguration, DialogService, DefaultDialogGlobalSettings } from '@aurelia/runtime-html';

Aurelia
  .register(routes)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  .register(DialogConfiguration.customize(settings => {
    settings.startingZIndex = 3;
  }, [DialogService, EcosDialogRenderer, DefaultDialogGlobalSettings]))
  .register(LoggerConfiguration.create({
    level: LogLevel.debug,
    sinks: [ConsoleSink],
    colorOptions: ColorOptions.colors
  }))
  .register(RouterConfiguration.customize({ 
    useUrlFragmentHash: true,
    swapOrder:'attach-next-detach-current'
  }))
  .register(AureliaEcosAdapter)
  .register(AureliaEcosIconLoader)
  .register(EcosSettings)
  .register(AuSnippet)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(EcosApp)
  .start();
