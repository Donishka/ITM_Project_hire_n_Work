// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://cryptic-wildwood-49687.herokuapp.com/api/',
  firebaseConfig: {
    apiKey: 'AIzaSyAJrDC8z-hbfuXfN_PUSKkfTOQpYYiem2Y',
    authDomain: 'work-n-hire.firebaseapp.com',
    databaseURL: 'https://work-n-hire.firebaseio.com',
    projectId: 'work-n-hire',
    storageBucket: 'work-n-hire.appspot.com',
    messagingSenderId: '271599120685'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
