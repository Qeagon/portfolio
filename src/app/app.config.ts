import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { MissingTranslationHandler } from '@ngx-translate/core';
import { MyMissingTranslationHandler } from './missing-translation.handler';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { contactFeature } from './contact/store/contact.feature';
import { ContactEffects } from './contact/store/contact.effects';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                primary: {
                    color: '{purple.600}',
                    inverseColor: '#ffffff',
                    hoverColor: '{purple.700}',
                    activeColor: '{purple.800}'
                },
                surface: {
                    0: '#ffffff',
                },
            },
            dark: {
                primary: {
                    color: '{pink.400}',
                    inverseColor: '{purple.950}',
                    hoverColor: '{pink.300}',
                    activeColor: '{pink.200}'
                },
                surface: {
                    0: '#121212',
                },
                text: {
                  color: '{surface.100}',
                  mutedColor: '{surface.400}',
                }
            }
        }
    },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideStore({ [contactFeature.name]: contactFeature.reducer }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideTranslateService({
      fallbackLang: 'en',
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MyMissingTranslationHandler
      }
    }),
    provideTranslateHttpLoader({
      prefix: '/i18n/',
      suffix: '.json'
    }),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: '.my-app-dark'
        }
      }
    }),
    provideEffects([ContactEffects]),          
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
