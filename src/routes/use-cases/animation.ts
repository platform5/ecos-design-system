export class Animation {

  private static promiseAnimation(element: Element, animation: Keyframe[] | PropertyIndexedKeyframes, duration: number): Promise<void> {
    return new Promise((resolve) => {
      const anim = element.animate(animation, duration);
      anim.onfinish = () => resolve();
    });
  }

  public static slideIn(element: Element, duration: number, from: 'left' | 'right' = 'right'): Promise<void> {
    return Animation.promiseAnimation(element, { transform: [`translateX(${from === 'left' ? '-' : ''}100%)`, 'translateX(0)'] }, duration);
  }

  public static slideOut(element: Element, duration: number, to: 'left' | 'right' = 'right'): Promise<void> {
    return Animation.promiseAnimation(element, { transform: ['translateX(0)', `translateX(${to === 'left' ? '-' : ''}100%)`] }, duration);
  }

  public static scaleIn(element: Element, duration: number): Promise<void> {
    return Animation.promiseAnimation(element, { transform: [`scale(0)`, 'scale(1)'] }, duration);
  }

  public static scaleOut(element: Element, duration: number): Promise<void> {
    return Animation.promiseAnimation(element, { transform: ['scale(1)', `scale(0)`] }, duration);
  }

}