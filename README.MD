# @fikani/forms

## Installation

To install this library, run:

```bash
$ npm install @fikani/forms --save
```

## Consuming this library

From your Angular `AppModule`:

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { CpfModule } from "@fikani/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    //import here
    CpfModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Once the library is imported, you can use its directives in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<input type="text" placeholder="CPF" cpf #cpfInput="ngModel" name="cpf" [(ngModel)]="cpf" />
{{cpfInput.valid}}
{{cpfInput.errors | json}}
```

## CPF validation

You should use the `CpfDirective` [cpf].

* You can use any input mask but only numbers are considered
* if you have `111.111.111-11`, it is read the same way as `111 111 111 11` and `11111111111`.

example :

```html
 <input type="text" placeholder="CPF" cpf #cpfInput="ngModel" name="cpf" [(ngModel)]="cpf" />
{{cpfInput.valid}} // true or false
{{cpfInput.errors | json}} //null or { "cpf": false } if it has error
```

## License

MIT © [Afif Fikani](mailto:afif.fikani@gmail.com)
