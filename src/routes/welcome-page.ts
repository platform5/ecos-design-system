import { AnimatedSVG } from '../custom-elements/animated-svg';
import { AnimatedSVG2 } from '../custom-elements/animated-svg2';
import Prism from 'prismjs';
Prism;
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-typescript';

AnimatedSVG;
AnimatedSVG2;


export class WelcomePage {
  public message = 'Welcome to Aurelia 2!';
  
  public attached(): void {
    // this.highlight();
  }

  public highlight(): void {
    const test = Prism.highlight('npm install', Prism.languages['bash'], 'bash');
    console.log('test', test);
    console.log('highlight');
    const codes = document.querySelectorAll('code');
    console.log('codes', codes);
    for (let index = 0; index < codes.length; index++) {
      console.log('code', codes.item(index));
      // const result = Prism.highlightElement(codes.item(index), true, (e) => {
      //   console.log('e', e);
      // });
      // console.log('result', result);
    }
  }
}
