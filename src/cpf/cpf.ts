import { Directive, ElementRef, forwardRef } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";

/**
 * Generated class for the CpfDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: "[cpf]", // Attribute selector,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CpfDirective),
      multi: true
    }
  ]
})
export class CpfDirective implements Validator {
  validate(c: AbstractControl): { [key: string]: any } {
    if (c.value) {
      let cpf: string = c.value;
      cpf = cpf.replace(/\D/g, "");

      if (!this.isValidCPF(cpf)) {
        return { cpf: false };
      }
    }
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {}

  isValidCPF(strCPF: string) {
    let soma;
    let resto;
    soma = 0;
    if (strCPF.length != 11) return false;
    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++)
      soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(strCPF.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++)
      soma = soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }
}
