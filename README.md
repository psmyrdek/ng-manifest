# ng-manifest

Generate JSON manifest based on Angular build artifacts

## Installation

`npm install ng-manifest --save-dev`

## Usage 

`ng-manifest --root <ANGULAR_PROJECT_ROOT_DIR>`

## Output

```json
{
  "stats": {
    "js": {
      "legacy": [
        {
          "src": "runtime-es5.6a940273ca5e26c05ba0.js",
          "type": "text"
        },
        {
          "src": "polyfills-es5.aaacd79a041f45949317.js",
          "type": "text"
        },
        {
          "src": "scripts.634b7bd385f188694b28.js",
          "type": "text"
        },
        {
          "src": "vendor-es5.c259679667c7ac672a6f.js",
          "type": "text"
        },
        {
          "src": "main-es5.7776ac510f3b474d036e.js",
          "type": "text"
        }
      ],
      "modern": [
        {
          "src": "runtime-es2015.6a940273ca5e26c05ba0.js",
          "type": "module"
        },
        {
          "src": "polyfills-es2015.7d43a779b0c7e0afb61f.js",
          "type": "module"
        },
        {
          "src": "scripts.634b7bd385f188694b28.js",
          "type": "text"
        },
        {
          "src": "vendor-es2015.c259679667c7ac672a6f.js",
          "type": "module"
        },
        {
          "src": "main-es2015.7776ac510f3b474d036e.js",
          "type": "module"
        }
      ],
      "files": {
        "runtimeES5": "runtime-es5.6a940273ca5e26c05ba0.js",
        "runtimeES2015": "runtime-es2015.6a940273ca5e26c05ba0.js",
        "polyfillsES5": "polyfills-es5.aaacd79a041f45949317.js",
        "polyfillsES2015": "polyfills-es2015.7d43a779b0c7e0afb61f.js",
        "vendorES5": "vendor-es5.c259679667c7ac672a6f.js",
        "vendorES2015": "vendor-es2015.c259679667c7ac672a6f.js",
        "mainES5": "main-es5.7776ac510f3b474d036e.js",
        "mainES2015": "main-es2015.7776ac510f3b474d036e.js",
        "scripts": "scripts.634b7bd385f188694b28.js"
      }
    },
    "css": "styles.3d39eed1adc54183abac.css"
  }
}
```
