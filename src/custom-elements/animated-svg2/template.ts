import { html, repeat } from '@microsoft/fast-element';
import { AnimatedSVG2 } from './index';

export const AnimatedSVGTemplate = html<AnimatedSVG2>`
  <svg viewbox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
    ${repeat(x => x.paths, html<{p1: number, p2: number, p3: number}>`
    <svg>
      <path 
        stroke="none" 
        fill-opacity="0.2"
        d="
          M${(x, c) => c.parent.getX(x.p1)},${(x, c) => c.parent.getY(x.p1)}
          L${(x, c) => c.parent.getX(x.p2)},${(x, c) => c.parent.getY(x.p2)}
          L${(x, c) => c.parent.getX(x.p3)},${(x, c) => c.parent.getY(x.p3)}
          z" ></path></svg>
          `)}     
  </svg>
`;