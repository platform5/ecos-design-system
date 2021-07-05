/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnimatedSVG2 } from './custom-elements/animated-svg2/index';
AnimatedSVG2;
import { FASTAdapter, FASTDialogRenderer, FASTDialogGlobalSettings } from 'aurelia-fast-adapter';
import Aurelia from 'aurelia';
import { LoggerConfiguration, LogLevel, ConsoleSink, ColorOptions } from 'aurelia';
import { RouterConfiguration } from 'aurelia-direct-router';
import { EcosApp } from './ecos-app';
import * as routes from './routes';
import { EcosSettings } from './custom-elements/ecos-settings/ecos-settings';
import { AuSnippet } from './custom-elements/au-snippet/au-snippet';
import './ecos-init';
import './ecos-icons';
import { AureliaEcosIconLoader } from './ecos-icons';
import { DialogConfiguration, DialogService } from '@aurelia/runtime-html';

Aurelia
  .register(routes)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  .register(DialogConfiguration.customize((settings: FASTDialogGlobalSettings) => {
    settings.startingZIndex = 3;
    settings.prefix = 'ecos';
    settings.hiddenFirst = true;
  }, [DialogService, FASTDialogRenderer, FASTDialogGlobalSettings]))
  .register(LoggerConfiguration.create({
    level: LogLevel.debug,
    sinks: [ConsoleSink],
    colorOptions: ColorOptions.colors
  }))
  .register(RouterConfiguration.customize({ 
    useUrlFragmentHash: true,
    swapOrder:'attach-next-detach-current'
  }))
  //.register(FASTAdapter.customize({withPrefix: 'ecos'}))
  .register(FASTAdapter.customize({withPrefix: 'ecos'}))
  .register(AureliaEcosIconLoader)
  .register(EcosSettings)
  .register(AuSnippet)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(EcosApp)
  .start();
