This project is std react-native project with three new files and one line in `index.android.js`. Please see discussion at https://github.com/Microsoft/TypeScript/issues/8528#issuecomment-221349748.

The main purpose is to show that react-native won't compile with the suggestions of the mentioned issue, neither will do intellisense and navigation in VSCode.

System: OSX El Capitan, 10.11.5
VSCode: 1.1.1-insider
Typescript: Version 1.9.0-dev.20160523-1.0

Uncomment lines with `// <-- This works` and comment lines with `// <-- This won't work` to make RN project work in android device. 

## New & modified files

**tsconfig.json**

```json
{
    "compilerOptions": {
        "allowJs": true,
        "baseUrl": "./"
    },
    "exclude": [
        "node_modules"
    ]
}
```

**src/something.js**

```javascript
export const here = () => {
    console.log('something is working');
}
```

**src/thisWorks.js**
```javascript
import { here } from './something';

export default function() {
    console.log('Try to make cmd+click to "here" or "./something" and intellisense or navigation will work');
}
```

**src/settings/index.js**
```javascript
import { here } from 'src/something'; // <-- This won't work
// import { here } from '../something'; // <-- This works

export default function settings() {
    console.log('this is not working, try to make cmd+click on "here" or "src/something"');
    console.log('Replace "src/something" with "../something" to make it work');
    something.here();
}

```

**index.android.js#L13**
```javascript
import settings from 'src/settings'; // <-- This won't work
// import settings from './src/settings'; // <-- This works
```

**android/build.gradle#L8**
```
        // ERROR: Unable to upload some APKs. see https://github.com/facebook/react-native/issues/2720
        // classpath 'com.android.tools.build:gradle:1.3.1'
        classpath 'com.android.tools.build:gradle:1.2.3'
```

## Output "Debug Android" in VSCode

```
Requiring unknown module "src/settings".If you are sure the module is there, try restarting the packager or running "npm install".
Module AppRegistry is not a registered callable module.
Module AppRegistry is not a registered callable module.
```

## Output for `tsc -traceResolution`

```
$ tsc --traceResolution
======== Resolving module 'react' from '/Volumes/DATA/Test/index.android.js'. ========
Module resolution kind is not specified, using 'NodeJs'.
'baseUrl' option is set to '/Volumes/DATA/Test', using this value to resolve non-relative module name 'react'
Resolving module name 'react' relative to base url '/Volumes/DATA/Test' - '/Volumes/DATA/Test/react'.
Loading module as file / folder, candidate module location '/Volumes/DATA/Test/react'.
File '/Volumes/DATA/Test/react.ts' does not exist.
File '/Volumes/DATA/Test/react.tsx' does not exist.
File '/Volumes/DATA/Test/react.d.ts' does not exist.
File '/Volumes/DATA/Test/react.js' does not exist.
File '/Volumes/DATA/Test/react.jsx' does not exist.
File '/Volumes/DATA/Test/react/package.json' does not exist.
File '/Volumes/DATA/Test/react/index.ts' does not exist.
File '/Volumes/DATA/Test/react/index.tsx' does not exist.
File '/Volumes/DATA/Test/react/index.d.ts' does not exist.
File '/Volumes/DATA/Test/react/index.js' does not exist.
File '/Volumes/DATA/Test/react/index.jsx' does not exist.
Loading module 'react' from 'node_modules' folder.
File '/Volumes/DATA/Test/node_modules/react.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/react.tsx' does not exist.
File '/Volumes/DATA/Test/node_modules/react.d.ts' does not exist.
Found 'package.json' at '/Volumes/DATA/Test/node_modules/react/package.json'.
'package.json' does not have 'types' field.
File '/Volumes/DATA/Test/node_modules/react/index.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/react/index.tsx' does not exist.
File '/Volumes/DATA/Test/node_modules/react/index.d.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react.tsx' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react.d.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react/package.json' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react/index.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react/index.tsx' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react/index.d.ts' does not exist.
File '/Volumes/DATA/node_modules/react.ts' does not exist.
File '/Volumes/DATA/node_modules/react.tsx' does not exist.
File '/Volumes/DATA/node_modules/react.d.ts' does not exist.
File '/Volumes/DATA/node_modules/react/package.json' does not exist.
File '/Volumes/DATA/node_modules/react/index.ts' does not exist.
File '/Volumes/DATA/node_modules/react/index.tsx' does not exist.
File '/Volumes/DATA/node_modules/react/index.d.ts' does not exist.
File '/Volumes/DATA/node_modules/@types/react.ts' does not exist.
File '/Volumes/DATA/node_modules/@types/react.tsx' does not exist.
File '/Volumes/DATA/node_modules/@types/react.d.ts' does not exist.
File '/Volumes/DATA/node_modules/@types/react/package.json' does not exist.
File '/Volumes/DATA/node_modules/@types/react/index.ts' does not exist.
File '/Volumes/DATA/node_modules/@types/react/index.tsx' does not exist.
File '/Volumes/DATA/node_modules/@types/react/index.d.ts' does not exist.
File '/Volumes/node_modules/react.ts' does not exist.
File '/Volumes/node_modules/react.tsx' does not exist.
File '/Volumes/node_modules/react.d.ts' does not exist.
File '/Volumes/node_modules/react/package.json' does not exist.
File '/Volumes/node_modules/react/index.ts' does not exist.
File '/Volumes/node_modules/react/index.tsx' does not exist.
File '/Volumes/node_modules/react/index.d.ts' does not exist.
File '/Volumes/node_modules/@types/react.ts' does not exist.
File '/Volumes/node_modules/@types/react.tsx' does not exist.
File '/Volumes/node_modules/@types/react.d.ts' does not exist.
File '/Volumes/node_modules/@types/react/package.json' does not exist.
File '/Volumes/node_modules/@types/react/index.ts' does not exist.
File '/Volumes/node_modules/@types/react/index.tsx' does not exist.
File '/Volumes/node_modules/@types/react/index.d.ts' does not exist.
File '/node_modules/react.ts' does not exist.
File '/node_modules/react.tsx' does not exist.
File '/node_modules/react.d.ts' does not exist.
File '/node_modules/react/package.json' does not exist.
File '/node_modules/react/index.ts' does not exist.
File '/node_modules/react/index.tsx' does not exist.
File '/node_modules/react/index.d.ts' does not exist.
File '/node_modules/@types/react.ts' does not exist.
File '/node_modules/@types/react.tsx' does not exist.
File '/node_modules/@types/react.d.ts' does not exist.
File '/node_modules/@types/react/package.json' does not exist.
File '/node_modules/@types/react/index.ts' does not exist.
File '/node_modules/@types/react/index.tsx' does not exist.
File '/node_modules/@types/react/index.d.ts' does not exist.
======== Module name 'react' was not resolved. ========
======== Resolving module 'react-native' from '/Volumes/DATA/Test/index.android.js'. ========
Module resolution kind is not specified, using 'NodeJs'.
'baseUrl' option is set to '/Volumes/DATA/Test', using this value to resolve non-relative module name 'react-native'
Resolving module name 'react-native' relative to base url '/Volumes/DATA/Test' - '/Volumes/DATA/Test/react-native'.
Loading module as file / folder, candidate module location '/Volumes/DATA/Test/react-native'.
File '/Volumes/DATA/Test/react-native.ts' does not exist.
File '/Volumes/DATA/Test/react-native.tsx' does not exist.
File '/Volumes/DATA/Test/react-native.d.ts' does not exist.
File '/Volumes/DATA/Test/react-native.js' does not exist.
File '/Volumes/DATA/Test/react-native.jsx' does not exist.
File '/Volumes/DATA/Test/react-native/package.json' does not exist.
File '/Volumes/DATA/Test/react-native/index.ts' does not exist.
File '/Volumes/DATA/Test/react-native/index.tsx' does not exist.
File '/Volumes/DATA/Test/react-native/index.d.ts' does not exist.
File '/Volumes/DATA/Test/react-native/index.js' does not exist.
File '/Volumes/DATA/Test/react-native/index.jsx' does not exist.
Loading module 'react-native' from 'node_modules' folder.
File '/Volumes/DATA/Test/node_modules/react-native.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/react-native.tsx' does not exist.
File '/Volumes/DATA/Test/node_modules/react-native.d.ts' does not exist.
Found 'package.json' at '/Volumes/DATA/Test/node_modules/react-native/package.json'.
'package.json' does not have 'types' field.
File '/Volumes/DATA/Test/node_modules/react-native/index.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/react-native/index.tsx' does not exist.
File '/Volumes/DATA/Test/node_modules/react-native/index.d.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react-native.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react-native.tsx' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react-native.d.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react-native/package.json' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react-native/index.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react-native/index.tsx' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react-native/index.d.ts' does not exist.
File '/Volumes/DATA/node_modules/react-native.ts' does not exist.
File '/Volumes/DATA/node_modules/react-native.tsx' does not exist.
File '/Volumes/DATA/node_modules/react-native.d.ts' does not exist.
File '/Volumes/DATA/node_modules/react-native/package.json' does not exist.
File '/Volumes/DATA/node_modules/react-native/index.ts' does not exist.
File '/Volumes/DATA/node_modules/react-native/index.tsx' does not exist.
File '/Volumes/DATA/node_modules/react-native/index.d.ts' does not exist.
File '/Volumes/DATA/node_modules/@types/react-native.ts' does not exist.
File '/Volumes/DATA/node_modules/@types/react-native.tsx' does not exist.
File '/Volumes/DATA/node_modules/@types/react-native.d.ts' does not exist.
File '/Volumes/DATA/node_modules/@types/react-native/package.json' does not exist.
File '/Volumes/DATA/node_modules/@types/react-native/index.ts' does not exist.
File '/Volumes/DATA/node_modules/@types/react-native/index.tsx' does not exist.
File '/Volumes/DATA/node_modules/@types/react-native/index.d.ts' does not exist.
File '/Volumes/node_modules/react-native.ts' does not exist.
File '/Volumes/node_modules/react-native.tsx' does not exist.
File '/Volumes/node_modules/react-native.d.ts' does not exist.
File '/Volumes/node_modules/react-native/package.json' does not exist.
File '/Volumes/node_modules/react-native/index.ts' does not exist.
File '/Volumes/node_modules/react-native/index.tsx' does not exist.
File '/Volumes/node_modules/react-native/index.d.ts' does not exist.
File '/Volumes/node_modules/@types/react-native.ts' does not exist.
File '/Volumes/node_modules/@types/react-native.tsx' does not exist.
File '/Volumes/node_modules/@types/react-native.d.ts' does not exist.
File '/Volumes/node_modules/@types/react-native/package.json' does not exist.
File '/Volumes/node_modules/@types/react-native/index.ts' does not exist.
File '/Volumes/node_modules/@types/react-native/index.tsx' does not exist.
File '/Volumes/node_modules/@types/react-native/index.d.ts' does not exist.
File '/node_modules/react-native.ts' does not exist.
File '/node_modules/react-native.tsx' does not exist.
File '/node_modules/react-native.d.ts' does not exist.
File '/node_modules/react-native/package.json' does not exist.
File '/node_modules/react-native/index.ts' does not exist.
File '/node_modules/react-native/index.tsx' does not exist.
File '/node_modules/react-native/index.d.ts' does not exist.
File '/node_modules/@types/react-native.ts' does not exist.
File '/node_modules/@types/react-native.tsx' does not exist.
File '/node_modules/@types/react-native.d.ts' does not exist.
File '/node_modules/@types/react-native/package.json' does not exist.
File '/node_modules/@types/react-native/index.ts' does not exist.
File '/node_modules/@types/react-native/index.tsx' does not exist.
File '/node_modules/@types/react-native/index.d.ts' does not exist.
======== Module name 'react-native' was not resolved. ========
======== Resolving module 'src/settings' from '/Volumes/DATA/Test/index.android.js'. ========
Module resolution kind is not specified, using 'NodeJs'.
'baseUrl' option is set to '/Volumes/DATA/Test', using this value to resolve non-relative module name 'src/settings'
Resolving module name 'src/settings' relative to base url '/Volumes/DATA/Test' - '/Volumes/DATA/Test/src/settings'.
Loading module as file / folder, candidate module location '/Volumes/DATA/Test/src/settings'.
File '/Volumes/DATA/Test/src/settings.ts' does not exist.
File '/Volumes/DATA/Test/src/settings.tsx' does not exist.
File '/Volumes/DATA/Test/src/settings.d.ts' does not exist.
File '/Volumes/DATA/Test/src/settings.js' does not exist.
File '/Volumes/DATA/Test/src/settings.jsx' does not exist.
File '/Volumes/DATA/Test/src/settings/package.json' does not exist.
File '/Volumes/DATA/Test/src/settings/index.ts' does not exist.
File '/Volumes/DATA/Test/src/settings/index.tsx' does not exist.
File '/Volumes/DATA/Test/src/settings/index.d.ts' does not exist.
File '/Volumes/DATA/Test/src/settings/index.js' exist - use it as a name resolution result.
Resolving real path for '/Volumes/DATA/Test/src/settings/index.js', result '/Volumes/DATA/Test/src/settings/index.js'
======== Module name 'src/settings' was successfully resolved to '/Volumes/DATA/Test/src/settings/index.js'. ========
======== Resolving module 'src/something' from '/Volumes/DATA/Test/src/settings/index.js'. ========
Module resolution kind is not specified, using 'NodeJs'.
'baseUrl' option is set to '/Volumes/DATA/Test', using this value to resolve non-relative module name 'src/something'
Resolving module name 'src/something' relative to base url '/Volumes/DATA/Test' - '/Volumes/DATA/Test/src/something'.
Loading module as file / folder, candidate module location '/Volumes/DATA/Test/src/something'.
File '/Volumes/DATA/Test/src/something.ts' does not exist.
File '/Volumes/DATA/Test/src/something.tsx' does not exist.
File '/Volumes/DATA/Test/src/something.d.ts' does not exist.
File '/Volumes/DATA/Test/src/something.js' exist - use it as a name resolution result.
Resolving real path for '/Volumes/DATA/Test/src/something.js', result '/Volumes/DATA/Test/src/something.js'
======== Module name 'src/something' was successfully resolved to '/Volumes/DATA/Test/src/something.js'. ========
======== Resolving module 'react' from '/Volumes/DATA/Test/index.ios.js'. ========
Module resolution kind is not specified, using 'NodeJs'.
'baseUrl' option is set to '/Volumes/DATA/Test', using this value to resolve non-relative module name 'react'
Resolving module name 'react' relative to base url '/Volumes/DATA/Test' - '/Volumes/DATA/Test/react'.
Loading module as file / folder, candidate module location '/Volumes/DATA/Test/react'.
File '/Volumes/DATA/Test/react.ts' does not exist.
File '/Volumes/DATA/Test/react.tsx' does not exist.
File '/Volumes/DATA/Test/react.d.ts' does not exist.
File '/Volumes/DATA/Test/react.js' does not exist.
File '/Volumes/DATA/Test/react.jsx' does not exist.
File '/Volumes/DATA/Test/react/package.json' does not exist.
File '/Volumes/DATA/Test/react/index.ts' does not exist.
File '/Volumes/DATA/Test/react/index.tsx' does not exist.
File '/Volumes/DATA/Test/react/index.d.ts' does not exist.
File '/Volumes/DATA/Test/react/index.js' does not exist.
File '/Volumes/DATA/Test/react/index.jsx' does not exist.
Loading module 'react' from 'node_modules' folder.
File '/Volumes/DATA/Test/node_modules/react.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/react.tsx' does not exist.
File '/Volumes/DATA/Test/node_modules/react.d.ts' does not exist.
Found 'package.json' at '/Volumes/DATA/Test/node_modules/react/package.json'.
'package.json' does not have 'types' field.
File '/Volumes/DATA/Test/node_modules/react/index.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/react/index.tsx' does not exist.
File '/Volumes/DATA/Test/node_modules/react/index.d.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react.tsx' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react.d.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react/package.json' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react/index.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react/index.tsx' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react/index.d.ts' does not exist.
File '/Volumes/DATA/node_modules/react.ts' does not exist.
File '/Volumes/DATA/node_modules/react.tsx' does not exist.
File '/Volumes/DATA/node_modules/react.d.ts' does not exist.
File '/Volumes/DATA/node_modules/react/package.json' does not exist.
File '/Volumes/DATA/node_modules/react/index.ts' does not exist.
File '/Volumes/DATA/node_modules/react/index.tsx' does not exist.
File '/Volumes/DATA/node_modules/react/index.d.ts' does not exist.
File '/Volumes/DATA/node_modules/@types/react.ts' does not exist.
File '/Volumes/DATA/node_modules/@types/react.tsx' does not exist.
File '/Volumes/DATA/node_modules/@types/react.d.ts' does not exist.
File '/Volumes/DATA/node_modules/@types/react/package.json' does not exist.
File '/Volumes/DATA/node_modules/@types/react/index.ts' does not exist.
File '/Volumes/DATA/node_modules/@types/react/index.tsx' does not exist.
File '/Volumes/DATA/node_modules/@types/react/index.d.ts' does not exist.
File '/Volumes/node_modules/react.ts' does not exist.
File '/Volumes/node_modules/react.tsx' does not exist.
File '/Volumes/node_modules/react.d.ts' does not exist.
File '/Volumes/node_modules/react/package.json' does not exist.
File '/Volumes/node_modules/react/index.ts' does not exist.
File '/Volumes/node_modules/react/index.tsx' does not exist.
File '/Volumes/node_modules/react/index.d.ts' does not exist.
File '/Volumes/node_modules/@types/react.ts' does not exist.
File '/Volumes/node_modules/@types/react.tsx' does not exist.
File '/Volumes/node_modules/@types/react.d.ts' does not exist.
File '/Volumes/node_modules/@types/react/package.json' does not exist.
File '/Volumes/node_modules/@types/react/index.ts' does not exist.
File '/Volumes/node_modules/@types/react/index.tsx' does not exist.
File '/Volumes/node_modules/@types/react/index.d.ts' does not exist.
File '/node_modules/react.ts' does not exist.
File '/node_modules/react.tsx' does not exist.
File '/node_modules/react.d.ts' does not exist.
File '/node_modules/react/package.json' does not exist.
File '/node_modules/react/index.ts' does not exist.
File '/node_modules/react/index.tsx' does not exist.
File '/node_modules/react/index.d.ts' does not exist.
File '/node_modules/@types/react.ts' does not exist.
File '/node_modules/@types/react.tsx' does not exist.
File '/node_modules/@types/react.d.ts' does not exist.
File '/node_modules/@types/react/package.json' does not exist.
File '/node_modules/@types/react/index.ts' does not exist.
File '/node_modules/@types/react/index.tsx' does not exist.
File '/node_modules/@types/react/index.d.ts' does not exist.
======== Module name 'react' was not resolved. ========
======== Resolving module 'react-native' from '/Volumes/DATA/Test/index.ios.js'. ========
Module resolution kind is not specified, using 'NodeJs'.
'baseUrl' option is set to '/Volumes/DATA/Test', using this value to resolve non-relative module name 'react-native'
Resolving module name 'react-native' relative to base url '/Volumes/DATA/Test' - '/Volumes/DATA/Test/react-native'.
Loading module as file / folder, candidate module location '/Volumes/DATA/Test/react-native'.
File '/Volumes/DATA/Test/react-native.ts' does not exist.
File '/Volumes/DATA/Test/react-native.tsx' does not exist.
File '/Volumes/DATA/Test/react-native.d.ts' does not exist.
File '/Volumes/DATA/Test/react-native.js' does not exist.
File '/Volumes/DATA/Test/react-native.jsx' does not exist.
File '/Volumes/DATA/Test/react-native/package.json' does not exist.
File '/Volumes/DATA/Test/react-native/index.ts' does not exist.
File '/Volumes/DATA/Test/react-native/index.tsx' does not exist.
File '/Volumes/DATA/Test/react-native/index.d.ts' does not exist.
File '/Volumes/DATA/Test/react-native/index.js' does not exist.
File '/Volumes/DATA/Test/react-native/index.jsx' does not exist.
Loading module 'react-native' from 'node_modules' folder.
File '/Volumes/DATA/Test/node_modules/react-native.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/react-native.tsx' does not exist.
File '/Volumes/DATA/Test/node_modules/react-native.d.ts' does not exist.
Found 'package.json' at '/Volumes/DATA/Test/node_modules/react-native/package.json'.
'package.json' does not have 'types' field.
File '/Volumes/DATA/Test/node_modules/react-native/index.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/react-native/index.tsx' does not exist.
File '/Volumes/DATA/Test/node_modules/react-native/index.d.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react-native.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react-native.tsx' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react-native.d.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react-native/package.json' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react-native/index.ts' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react-native/index.tsx' does not exist.
File '/Volumes/DATA/Test/node_modules/@types/react-native/index.d.ts' does not exist.
File '/Volumes/DATA/node_modules/react-native.ts' does not exist.
File '/Volumes/DATA/node_modules/react-native.tsx' does not exist.
File '/Volumes/DATA/node_modules/react-native.d.ts' does not exist.
File '/Volumes/DATA/node_modules/react-native/package.json' does not exist.
File '/Volumes/DATA/node_modules/react-native/index.ts' does not exist.
File '/Volumes/DATA/node_modules/react-native/index.tsx' does not exist.
File '/Volumes/DATA/node_modules/react-native/index.d.ts' does not exist.
File '/Volumes/DATA/node_modules/@types/react-native.ts' does not exist.
File '/Volumes/DATA/node_modules/@types/react-native.tsx' does not exist.
File '/Volumes/DATA/node_modules/@types/react-native.d.ts' does not exist.
File '/Volumes/DATA/node_modules/@types/react-native/package.json' does not exist.
File '/Volumes/DATA/node_modules/@types/react-native/index.ts' does not exist.
File '/Volumes/DATA/node_modules/@types/react-native/index.tsx' does not exist.
File '/Volumes/DATA/node_modules/@types/react-native/index.d.ts' does not exist.
File '/Volumes/node_modules/react-native.ts' does not exist.
File '/Volumes/node_modules/react-native.tsx' does not exist.
File '/Volumes/node_modules/react-native.d.ts' does not exist.
File '/Volumes/node_modules/react-native/package.json' does not exist.
File '/Volumes/node_modules/react-native/index.ts' does not exist.
File '/Volumes/node_modules/react-native/index.tsx' does not exist.
File '/Volumes/node_modules/react-native/index.d.ts' does not exist.
File '/Volumes/node_modules/@types/react-native.ts' does not exist.
File '/Volumes/node_modules/@types/react-native.tsx' does not exist.
File '/Volumes/node_modules/@types/react-native.d.ts' does not exist.
File '/Volumes/node_modules/@types/react-native/package.json' does not exist.
File '/Volumes/node_modules/@types/react-native/index.ts' does not exist.
File '/Volumes/node_modules/@types/react-native/index.tsx' does not exist.
File '/Volumes/node_modules/@types/react-native/index.d.ts' does not exist.
File '/node_modules/react-native.ts' does not exist.
File '/node_modules/react-native.tsx' does not exist.
File '/node_modules/react-native.d.ts' does not exist.
File '/node_modules/react-native/package.json' does not exist.
File '/node_modules/react-native/index.ts' does not exist.
File '/node_modules/react-native/index.tsx' does not exist.
File '/node_modules/react-native/index.d.ts' does not exist.
File '/node_modules/@types/react-native.ts' does not exist.
File '/node_modules/@types/react-native.tsx' does not exist.
File '/node_modules/@types/react-native.d.ts' does not exist.
File '/node_modules/@types/react-native/package.json' does not exist.
File '/node_modules/@types/react-native/index.ts' does not exist.
File '/node_modules/@types/react-native/index.tsx' does not exist.
File '/node_modules/@types/react-native/index.d.ts' does not exist.
======== Module name 'react-native' was not resolved. ========
======== Resolving module './something' from '/Volumes/DATA/Test/src/thisWorks.js'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module as file / folder, candidate module location '/Volumes/DATA/Test/src/something'.
File '/Volumes/DATA/Test/src/something.ts' does not exist.
File '/Volumes/DATA/Test/src/something.tsx' does not exist.
File '/Volumes/DATA/Test/src/something.d.ts' does not exist.
File '/Volumes/DATA/Test/src/something.js' exist - use it as a name resolution result.
Resolving real path for '/Volumes/DATA/Test/src/something.js', result '/Volumes/DATA/Test/src/something.js'
======== Module name './something' was successfully resolved to '/Volumes/DATA/Test/src/something.js'. ========
error TS5055: Cannot write file '/Volumes/DATA/Test/index.android.js' because it would overwrite input file.
error TS5055: Cannot write file '/Volumes/DATA/Test/index.ios.js' because it would overwrite input file.
error TS5055: Cannot write file '/Volumes/DATA/Test/src/settings/index.js' because it would overwrite input file.
error TS5055: Cannot write file '/Volumes/DATA/Test/src/something.js' because it would overwrite input file.
error TS5055: Cannot write file '/Volumes/DATA/Test/src/thisWorks.js' because it would overwrite input file.
```