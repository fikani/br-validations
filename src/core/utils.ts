export class Utils {
  static getElement(name: string, reference: HTMLElement): Element {
    let htmlElement: HTMLElement = reference;
    while (["FORM", "BODY"].indexOf(htmlElement.tagName) == -1) {
      htmlElement = htmlElement.parentElement;
    }
    return htmlElement.querySelector(`input[name='${name}']`);
  }
}
