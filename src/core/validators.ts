import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export class FikaniValidators {
  public static minWords(min: number): ValidatorFn {
    const validator = (c: AbstractControl): ValidationErrors | null => {
      let text: string = c.value;

      if (text) {
        let words = text.split(" ");
        let validWords = words.length - words.filter(s => !s).length;

        if (validWords < min) {
          return {
            minwords: { minWordsLength: min, actualWordsLength: validWords }
          };
        }
      }
      return null;
    };
    return validator;
  }
}
