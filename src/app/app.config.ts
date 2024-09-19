import { provideClientHydration } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules, withComponentInputBinding } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ApplicationConfig } from '@angular/core';
import { provideAuth, getAuth } from '@angular/fire/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCgTsD5li_SL47pvVm5BnHbw9P0aWpIYoQ",
    authDomain: "adotepoa-29413.firebaseapp.com",
    projectId: "adotepoa-29413",
    storageBucket: "adotepoa-29413.appspot.com",
    messagingSenderId: "444196826081",
    appId: "1:444196826081:web:6c35794f000b1f31dc40a0"
};

export const appConfig: ApplicationConfig = {
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideIonicAngular({ mode: 'md' }),
        provideRouter(routes, withPreloading(PreloadAllModules),
            withComponentInputBinding()),
        provideClientHydration(),
        provideHttpClient(),
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()), 
    ],
}