import { customElement, FASTElement, attr, observable } from '@microsoft/fast-element';
import { AnimatedSVGStyles as styles } from './styles';
import { AnimatedSVGTemplate as template } from './template';

@customElement({
  name: 'animated-svg',
  template,
  styles
})
export class AnimatedSVG extends FASTElement {
  
  @observable public p0: number;
  @observable public p1: number;
  @observable public p2: number;
  @observable public p3: number;
  @observable public p4: number;
  @observable public p5: number;

  private points = [
    96, // T1(all), bottom
    526,
    111, // T1(a), top
    183, // T1(b), top
    202, // T1(c), top
    301, // T1(d), top
  ]

  private increments = [
    0.5,
    -1,
    0.5,
    -0.4,
    0.3
  ];

  private mins = [
    115,
    360,
    10,
    20,
    30
  ];

  private maxs = [
    350,
    700,
    400,
    400,
    400
  ];

  private running = false;

  public connectedCallback(): void {
    super.connectedCallback();
    this.start();
  }

  public start(): void {
    // this.running = true;
    this.nextFrame();
  }

  public stop(): void {
    this.running = false;
  }

  public nextFrame(): void {
    window.requestAnimationFrame(() => {

      for (let index = 0; index < this.points.length; index++) {
        let value = this.points[index];
        let inc = this.increments[index] || 0;
        const min = this.mins[index] || 0;
        const max = this.maxs[index] || 800;
        if (inc && value > max && inc > 0 || value < min && inc < 0) {
          inc *= -1;
          this.increments[index] = inc;
        }
        value += inc;
        this.points[index] = value;
        this[`p${(index)}`] = value;
      }
      
      if (this.running) {
        this.nextFrame();
      }
    });
  }


}