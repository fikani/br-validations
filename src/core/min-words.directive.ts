import {
  Directive,
  forwardRef,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidatorFn
} from "@angular/forms";
import { FikaniValidators } from "./validators";

@Directive({
  selector: "[minwords]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinWordsDirective),
      multi: true
    }
  ]
})
export class MinWordsDirective implements Validator, OnChanges {
  _onChange: () => void;
  _validator: ValidatorFn;
  @Input() minwords: number;

  _createValidator(): any {
    this._validator = FikaniValidators.minWords(this.minwords);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ("minwords" in changes) {
      this._createValidator();
      if (this._onChange) this._onChange();
    }
  }

  validate(c: AbstractControl): { [key: string]: any } {
    return this._validator(c);
  }
  registerOnValidatorChange?(fn: () => void): void {
    this._onChange = fn;
    this._createValidator();
    this._onChange();
  }
  constructor() {}
}
