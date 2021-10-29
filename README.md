# Lookbook

## PROJECT SETUP
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

***
## PINTEREST PIN EXTENSION (LOOKBOOK)

- Metadata is stubbed out in the **public/index.html** file. Every site should include title, description, Facebook, and Twitter meta, along with a Google Tag Manager container.
- App icons should be generated with https://favicomatic.com in "every damn size" and placed in the **public/touch** folder.
- A router and global store have been included in the skeleton, but only one route is created by default and the store is unused. Implement as necessary. They exist in the **src/router** and **src/store** folders, respectively.
- A CSS reset file is being used. Global styles exist in the **src/styles** folder, including media query mixins and variables.
- All content is localized with i18n. Locales can be added in the **src/locales** folder. The active locale is set with a query parameter: ?lang=en. English is the default.
