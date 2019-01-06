import{ MatButtonModule, 
         MatCheckboxModule,
         MatToolbarModule,
         MatSidenavModule,
         MatCardModule,
         MatSelectModule,
         MatInputModule,
         MatDialogModule,
         MatRippleModule} from '@angular/material';
         import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[ MatButtonModule,
         MatCheckboxModule,
         MatToolbarModule,
         MatSidenavModule,
         MatCardModule,
         MatSelectModule,
         MatCardModule,
         MatInputModule,
         MatIconModule,
         MatDialogModule,
         MatRippleModule],

    exports:[ MatButtonModule, 
        MatCheckboxModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatSelectModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatRippleModule],
})
export class MaterialModule{}