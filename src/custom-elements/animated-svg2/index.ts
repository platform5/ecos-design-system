import { customElement, FASTElement, attr, observable } from '@microsoft/fast-element';
import { AnimatedSVGStyles as styles } from './styles';
import { AnimatedSVGTemplate as template } from './template';

@customElement({
  name: 'animated-svg2',
  template,
  styles
})
export class AnimatedSVG2 extends FASTElement {

  /* viewbox: 800 x 400 */
  /* total length of border = 800 * 2 + 400 * 2 = 2400 */
  
  @observable public paths: {p1: number, p2: number, p3: number}[] = [];
  public nbPaths = 12;
  public constraints: {path: number, p1: number, p2:number, p3min: number, p3max: number}[] = [
    {path: 0, p1: 1200, p2: 1800, p3min: 1000, p3max: 1200},
    //{path: 1, p1: 1200, p2: 1800, p3min: 900, p3max: 1100},
    //{path: 2, p1: 1200, p2: 1800, p3min: 850, p3max: 1000},
    {path: 3, p1: 1200, p2: 1800, p3min: 800, p3max: 900},
    {path: 4, p1: 2000, p2: 1400, p3min: 2200, p3max: 2400},
    //{path: 5, p1: 2000, p2: 1400, p3min: 2100, p3max: 2300},
    {path: 6, p1: 2000, p2: 1400, p3min: 2000, p3max: 2200},

    //{path: 7, p1: 0, p2: 500, p3min: 1000, p3max: 1200},
    {path: 8, p1: 0, p2: 500, p3min: 900, p3max: 1100},
    {path: 9, p1: 0, p2: 500, p3min: 800, p3max: 900},
    {path: 10, p1: 800, p2: 300, p3min: 2200, p3max: 2400},
    //{path: 11, p1: 800, p2: 300, p3min: 2000, p3max: 2200},
  ];

  private increments: number[] = [];
  private running = false;

  public connectedCallback(): void {
    super.connectedCallback();
    this.init();
    this.start();
  }

  public start(): void {
    this.running = true;
    this.nextFrame();
  }

  public stop(): void {
    this.running = false;
  }

  public getX(point: number): number {
    // break points: 800 / 1200 / 2000

    // 2000 - 2400
    if (point > 2000) {
      return 0;
    }
    // 1200 - 2000
    if (point > 1200) {
      return 800 - (point - 1200);
    }
    // 800 - 1200
    if (point > 800) {
      return 800;
    }
    // 0 - 800
    return point;
  }

  public getY(point: number): number {
    // break points: 800 / 1200 / 2000

    // 2000 - 2400
    if (point > 2000) {
      return 400 - (point - 2000);
    }
    // 1200 - 2000
    if (point > 1200) {
      return 400;
    }
    // 800 - 1200
    if (point > 800) {
      return point - 800
    }
    // 0 - 800
    return 0;
  }

  public init(): void {
    for (let index = 0; index < this.nbPaths; index++) {
      const seg1 = Math.round(Math.random() * 3);
      const seg2 = Math.round(Math.random() * 3);
      let seg3 = Math.round(Math.random() * 3);
      if (seg3 === seg2 && seg3 === seg1) {
        seg3 = seg3 === 3 ? 0 : seg3 + 1;
      }
      const path: {p1: number, p2: number, p3: number} = {
        p1: this.randomPointOnSegement(seg1),
        p2: this.randomPointOnSegement(seg2),
        p3: this.randomPointOnSegement(seg3),
      };
      this.paths.push(path);
      this.increments.push(this.randomInc());
      this.increments.push(this.randomInc());
      this.increments.push(this.randomInc());
    }
  }

  private setRandomIncrements() {

    for (const index in this.increments) {
      const whatToDo = Math.random();
      if (whatToDo > 0.5) {
        // do nothing
      } else if (whatToDo > 0.25) {
        // inverse
        this.increments[index] *= -1;
      } else {
        // set new
        this.increments[index] = this.randomInc();
      }
    }

  }

  private randomInc() {
    return Math.random() - 0.5;
  }

  private randomPointOnSegement(segment: number) {
    if (segment === 0) {
      return Math.round(Math.random() * 800);
    } else if (segment === 1) {
      return Math.round(Math.random() * 400) + 800;
    } else if (segment === 2) {
      return Math.round(Math.random() * 800) + 1200;
    } else if (segment === 3) {
      return Math.round(Math.random() * 400) + 2000;
    }
  }

  public nextFrame(): void {
    window.requestAnimationFrame(() => {
      for (let index = 0; index < this.paths.length; index++) {
        const p1 = this.paths[index].p1 + this.increments[(index * 3) + 0];
        const p2 = this.paths[index].p2 + this.increments[(index * 3) + 1];
        const p3 = this.paths[index].p3 + this.increments[(index * 3) + 2];
        this.paths.splice(index, 1, {p1, p2, p3});
      }
      const shouldSetNewIncrement = Math.random() < 0.01;
      if (shouldSetNewIncrement) {
        this.setRandomIncrements();
      }
      this.applyConstraints()
      this.nextFrame();
    });
  }

  public applyConstraints(): void {
    for (let index = 0; index < this.paths.length; index++) {
      const constraint = this.constraints.find(c => c.path === index);
      if (!constraint) {
        continue;
      }
      const p1 = constraint.p1;
      const p2 = constraint.p2;
      const p3 = Math.max(Math.min(this.paths[index].p3, constraint.p3max), constraint.p3min);

      if (p3 === constraint.p3min && this.increments[(index * 3) + 2] < 0
        || p3 === constraint.p3max && this.increments[(index * 3) + 2] > 0) {
        this.increments[(index * 3) + 2] *= -1
      }

      this.paths.splice(index, 1, {p1, p2, p3});
    }
  }


}