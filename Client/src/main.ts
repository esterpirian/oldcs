//import {CdkTableModule } from '@angular/cdk/table';
//import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule } from '@angular/common/http';
//import { DatePipe, registerLocaleData } from '@angular/common';
//import { NgModule, provide, LOCALE_ID} from '@angular/core';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { RouterModule, Routes, ROUTER_PROVIDERS} from '@angular/router';
//import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
//import {bootstrap } from '@angular/platform/browser';
//import {
//    MatAutocompleteModule,
//    MatButtonModule,
//    MatButtonToggleModule,
//    MatCardModule,
//    MatCheckboxModule,
//    MatChipsModule,
//    MatDatepickerModule,
//    MatDialogModule,
//    MatDividerModule,
//    MatExpansionModule,
//    MatGridListModule,
//    MatIconModule,
//    MatInputModule,
//    MatListModule,
//    MatMenuModule,
//    MatNativeDateModule,
//    MatPaginatorModule,
//    MatProgressBarModule,
//    MatProgressSpinnerModule,
//    MatRadioModule,
//    MatRippleModule,
//    MatSelectModule,
//    MatSidenavModule,
//    MatSliderModule,
//    MatSlideToggleModule,
//    MatSnackBarModule,
//    MatSortModule,
//    MatStepperModule,
//    MatTableModule,
//    MatTabsModule,
//    MatToolbarModule,
//    MatTooltipModule,
//    NativeDateAdapter,
//    DateAdapter,
//    MD_DATE_FORMATS
//} from '@angular/material';
//import { BrowserModule } from '@angular/platform-browser';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AppComponent } from 'app/app.component';
//import { BOHttpInterceptor, BOJsonpInterceptor } from 'app/httpInterceptor'
//import { LoginComponent } from 'app/com/login/login';
//import { CustomInputComponent } from 'app/com/customInput/customInput';
//import { MainContentComponent } from 'app/com/mainContent/mainContent';
//import { BusinessSiteComponent} from 'app/com/businessSite/businessSite'
//import { RegistrationDetailsComponent } from 'app/com/businessSite/registrationDetails/registrationDetails';
//import { ValidateFieldsComponent } from 'app/com/validateFields/validateFields';
//import { SearchRequestsComponent } from 'app/com/businessSite/requests/searchRequests';
//import { RequestsResultsComponent } from 'app/com/businessSite/requests/tableResults/tableResults';
//import { ModalUpdateRequestComponent } from 'app/com/businessSite/requests/modalUpdateRequest/modalUpdateRequest';
//import { LettersComponent } from 'app/com/letters/letters';
//import { SearchLettersComponent } from 'app/com/letters/searchLetters/searchLetters';
//import { LettersResultsComponent } from 'app/com/letters/searchLetters/tableResults/tableResults';
//import { ModalReportReadComponent } from 'app/com/letters/searchLetters/modalReportRead/modalReportRead';
//import { SharedService } from  'app/com/services/formService';
//import { AccountSettingComponent } from 'app/com/letters/accountSetting/accountSetting';
//import { AccountSettingResultsComponent } from 'app/com/letters/accountSetting/tableResults/tableResults';
//import { AppDateAdapter } from 'app/com/extendClasses/dateAdapter';
//import { FilterPipe } from 'app/scripts/hebrewDateFilter';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { ModalAccountSettingComponent } from 'app/com/letters/accountSetting/modalAccountSetting/modalAccountSetting';
//import lcoaleHe from '@angular/common/locales/he';


//registerLocaleData(lcoaleHe);


 
//const appRoutes: Routes = [
//    { path: '', redirectTo: 'login', pathMatch: 'full' },
//    { path: 'login', component: LoginComponent },
//    { path: 'mainContent', component: MainContentComponent }
//];
//@NgModule({
//    exports: [
//        CdkTableModule,
//        MatAutocompleteModule,
//        MatButtonModule,
//        MatButtonToggleModule,
//        MatCardModule,
//        MatCheckboxModule,
//        MatChipsModule,
//        MatDatepickerModule,
//        MatDialogModule,
//        MatDividerModule,
//        MatExpansionModule,
//        MatGridListModule,
//        MatIconModule,
//        MatInputModule,
//        MatListModule,
//        MatMenuModule,
//        MatNativeDateModule,
//        MatPaginatorModule,
//        MatProgressBarModule,
//        MatProgressSpinnerModule,
//        MatRadioModule,
//        MatRippleModule,
//        MatSelectModule,
//        MatSidenavModule,
//        MatSliderModule,
//        MatSlideToggleModule,
//        MatSnackBarModule,
//        MatSortModule,
//        MatStepperModule,
//        MatTableModule,
//        MatTabsModule,
//        MatToolbarModule,
//        MatTooltipModule,
//    ]
//})
//export class BackOfficeModule {}

//@NgModule({
//    imports: [
//        BrowserModule,
//        RouterModule.forRoot(appRoutes),
//        BrowserAnimationsModule,
//        FormsModule,
//        HttpClientModule,
//        HttpClientJsonpModule,
//        BackOfficeModule,
//        MatNativeDateModule,
//        ReactiveFormsModule,
//        NgbModule.forRoot(), 
//    ],
//    declarations: [AppComponent, LoginComponent, CustomInputComponent, MainContentComponent, BusinessSiteComponent, RegistrationDetailsComponent, ValidateFieldsComponent, SearchRequestsComponent, RequestsResultsComponent, ModalUpdateRequestComponent, FilterPipe, LettersComponent, SearchLettersComponent, LettersResultsComponent, ModalReportReadComponent, AccountSettingComponent, AccountSettingResultsComponent, ModalAccountSettingComponent],
//    bootstrap: [AppComponent],
//    entryComponents: [ModalUpdateRequestComponent, ModalReportReadComponent, ModalAccountSettingComponent, CustomInputComponent, ValidateFieldsComponent],
//    providers: [DatePipe,
//        { provide: APP_BASE_HREF, useValue: '/src' },
//        { provide: HTTP_INTERCEPTORS, useClass: BOHttpInterceptor, multi: true },
       
//        { provide: DateAdapter, useClass: AppDateAdapter },
//        {
//            provide: LocationStrategy, useClass: HashLocationStrategy
//        },
//        { provide: LOCALE_ID, useValue: "he" }, 
     


//    ]

//})

//export class AppModule { }

//if (environment.production) {
//    NgModule();
//}
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//if (environment.production) {
//    enableProdMode();
//}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));


