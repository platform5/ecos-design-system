import { html } from '@microsoft/fast-element';
import { AnimatedSVG } from './index';

export const AnimatedSVGTemplate = html<AnimatedSVG>`<slot>
  <svg viewbox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
    <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
    <g id="Layer_1">
     <title>Layer 1</title>
     <path stroke="none" fill-opacity="0.2" id="svg_1" d="m${x => x.p0},404l706.00003,-${x => x.p5}l0,${x => x.p5}l-706.00003,1z"/>
     <path stroke="none" fill-opacity="0.2" id="svg_3" d="m${x => x.p0},404l706.00003,-${x => x.p4}l0,${x => x.p4}l-706.00003,0.77075z"/>
     <path stroke="none" fill-opacity="0.2" id="svg_4" d="m${x => x.p0},404l706.00003,-${x => x.p3}l0,${x => x.p3}l-706.00003,0.60797z"/>
     <path stroke="none" fill-opacity="0.2" id="svg_5" d="m${x => x.p0},404l706.00003,-${x => x.p2}l0,${x => x.p2}l-706.00003,0.36877z"/>
     <path stroke="none" fill-opacity="0.2" id="svg_7" d="m${x => x.p1},405l-${x => x.p1},-141l0,140.53159l${x => x.p1},0.46841z"/>
     <path stroke="none" fill-opacity="0.2" id="svg_9" d="m${x => x.p1},405l-${x => x.p1},-75l0,74.75085l${x => x.p1},0.24915z"/>
    </g>
   </svg>
</slot>`;