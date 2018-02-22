import { NgModule } from "@angular/core";
import { MinWordsDirective } from "./min-words.directive";
import { EqualsToDirective } from "./equals-to.directive";
import { TogglePasswordDirective } from "./toggle-passwd.directive";

@NgModule({
  imports: [],
  exports: [MinWordsDirective, EqualsToDirective, TogglePasswordDirective],
  declarations: [MinWordsDirective, EqualsToDirective, TogglePasswordDirective],
  providers: []
})
export class FikaniFormsModule {}
