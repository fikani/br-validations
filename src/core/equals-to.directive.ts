import {
  Directive,
  forwardRef,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  OnDestroy
} from "@angular/core";
import {
  NgModel,
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  FormControl
} from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

@Directive({
  selector:
    "[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EqualsToDirective),
      multi: true
    }
  ]
})
export class EqualsToDirective implements Validator, OnDestroy {
  @Input() validateEqual: string;
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  sub: Subscription;
  value: any;

  constructor(private el: ElementRef) {}
  validate(c: AbstractControl): { [key: string]: any } {
    // self value (e.g. retype password)
    this;
    this.value = c.value;
    // control value (e.g. password)
    let e: FormControl = c.root.get(this.validateEqual) as FormControl;
    if (e) {
      this.sub =
        this.sub ||
        e.valueChanges.subscribe(_ => {
          console.log(_);
          this.el.nativeElement.dispatchEvent(new Event("input"), "");
        });
      // value not equal
      if (this.value !== e.value)
        return {
          validateEqual: false
        };
    }
    return null;
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
