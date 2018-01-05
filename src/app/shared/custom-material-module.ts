import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule } from '@angular/material';
@NgModule({
	imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule],
	exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule],
})
export class MyOwnCustomMaterialModule { }