
import {CdkTableModule } from '@angular/cdk/table';
import { JsonpInterceptingModule } from './httpInterceptor'
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule } from '@angular/common/http';
import { DatePipe, registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatDialog, MatDialogRef, MatDialogTitle, MAT_DIALOG_DATA, MatDialogClose, MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioButton, MatRadioGroup, MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
  
import { TurnComponent } from './com/TurnManage/turn.component';

import { postService } from  './com/services/postService';

import { MyFilterPipe } from './pipe/prop.filter'


import lcoaleHe from '@angular/common/locales/he';


registerLocaleData(lcoaleHe);
const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'turn', component: TurnComponent }
];
@NgModule({

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    JsonpInterceptingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,

    MatStepperModule,
 
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
 
   // MAT_DIALOG_DATA
   
  ],
  declarations: [AppComponent, TurnComponent, MyFilterPipe],
  bootstrap: [AppComponent],
  //entryComponents: [CustomInputComponent, ValidateFieldsComponent, ModalUpdateRequestComponent, ModalUpdateDetailsComponent, modalTimeOut, ModalReportReadComponent, ModalAccountSettingComponent, ModalWaitComponent, RegisterResultsComponent, ModalDeleteComponent, ModalUpdateUserComponent],
  providers: [DatePipe, postService, MyFilterPipe,
    { provide: APP_BASE_HREF, useValue: '/src' },
    
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: 'he' },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
    ]

})

export class AppModule { }
