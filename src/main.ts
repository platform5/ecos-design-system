import { 
  AureliaEcosAdapter,

  EcosAnchor, 
  EcosArticle, 
  EcosArticleList, 
  EcosButton, 
  EcosButton3D,
  EcosCard,
  EcosCollection,
  EcosColorize,
  EcosDesignSystemProvider, 
  EcosDialog,
  EcosForm, 
  EcosFormRow, 
  EcosIcon,
  EcosNavbar,
  EcosSection,
  EcosSlider,
  EcosStack,
} from './ecos-design-system';
import Aurelia from 'aurelia';
import { LoggerConfiguration, LogLevel, ConsoleSink, ColorOptions } from 'aurelia';
import { RouterConfiguration } from 'aurelia-direct-router';
import { SVGAnalyzerRegistration } from '@aurelia/runtime-html';
import { EcosApp } from './ecos-app';
import { MissingPage } from './routes/missing-page';

import { User as OutlineUser } from './ecos-design-system/icons/outline';
import { User as SolidUser } from './ecos-design-system/icons/solid';
import { Adjustments as OutlineAdjustments } from './ecos-design-system/icons/outline';
import { Adjustments as SolidAdjustments } from './ecos-design-system/icons/solid';
import { ArrowNarrowRight as OutlineArrowNarrowRight } from './ecos-design-system/icons/outline';
import { ArrowNarrowRight as SolidArrowNarrowRight } from './ecos-design-system/icons/solid';
import { X as OutlineX } from './ecos-design-system/icons/outline';
import { X as SolidX } from './ecos-design-system/icons/solid';

import { EcosSettings } from './custom-elements/ecos-settings/ecos-settings';
import { AuSnippet } from './custom-elements/au-snippet/au-snippet';

EcosAnchor;
EcosArticle;
EcosArticleList;
EcosButton;
EcosButton3D;
EcosCard;
EcosCollection;
EcosColorize;
EcosDesignSystemProvider;
EcosDialog;
EcosForm;
EcosFormRow;
EcosIcon;
EcosNavbar;
EcosSection;
EcosSlider;
EcosStack;

EcosIcon.outline['User'] = OutlineUser;
EcosIcon.solid['User'] = SolidUser;
EcosIcon.outline['Adjustments'] = OutlineAdjustments;
EcosIcon.solid['Adjustments'] = SolidAdjustments;
EcosIcon.outline['ArrowNarrowRight'] = OutlineArrowNarrowRight;
EcosIcon.solid['ArrowNarrowRight'] = SolidArrowNarrowRight;
EcosIcon.outline['X'] = OutlineX;
EcosIcon.solid['X'] = SolidX;

import { WelcomePage } from './routes/welcome-page';

Aurelia
  .register(WelcomePage, MissingPage)
  .register(LoggerConfiguration.create({
    level: LogLevel.debug,
    sinks: [ConsoleSink],
    colorOptions: ColorOptions.colors
  }))
  .register(RouterConfiguration.customize({ useUrlFragmentHash: true }))
  .register(AureliaEcosAdapter)
  .register(EcosSettings)
  .register(AuSnippet)
  .register(SVGAnalyzerRegistration)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(EcosApp)
  .start();
