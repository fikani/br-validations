import { NgModule } from "@angular/core";
import { MinWordsDirective } from "./min-words.directive";
import { EqualsToDirective } from "./equals-to.directive";

@NgModule({
  imports: [],
  exports: [MinWordsDirective, EqualsToDirective],
  declarations: [MinWordsDirective, EqualsToDirective],
  providers: []
})
export class FikaniFormsModule {}
