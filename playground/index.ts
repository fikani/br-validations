/**
 * This is only for local test
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Component } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { FormsModule } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import { CpfModule, FikaniFormsModule } from "../dist";

@Component({
  selector: "app",
  templateUrl: "app.component.html"
})
class AppComponent {
  cpf: string;
  words: string;
  validateEqual: string;
  minwords: number = 3;

  constructor() {}
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CpfModule, FikaniFormsModule]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
