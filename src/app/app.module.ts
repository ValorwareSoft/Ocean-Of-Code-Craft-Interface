import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from "@abacritt/angularx-social-login";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider('386974580743-2br12l345q4lri5crtuomjc8cmv0mnqi.apps.googleusercontent.com', {
                            scopes: 'openid profile email',
                        }),
                    },
                ],
                onError: (err) => {
                    console.error(err);
                },
            } as SocialAuthServiceConfig,
        },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        SocialLoginModule,
        NgxIntlTelInputModule,
        ToastrModule.forRoot({
            preventDuplicates: true,
            timeOut: 2000,
            maxOpened: 1
        }),
    ]
})
export class AppModule { }
