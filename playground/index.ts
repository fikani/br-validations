/**
 * This is only for local test
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Component } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { CpfModule } from "../dist";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app",
  templateUrl: "app.component.html"
})
class AppComponent {
  cpf: string;
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CpfModule]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
