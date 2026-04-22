import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';


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
            }
        }
    },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: '.my-app-dark'
        }
      }
    })
  ]
};
