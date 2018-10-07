# Vanilla Map :sushi:

## Description

### From a functional perspective

Simple style editor which lets users change some attributes of the data layer of a map. Each marker in the map represents the location of a United State public airport.

The use case is based on a codign skills test proposed by [Carto](https://carto.com) company. Go to the [test description](https://gist.github.com/xavijam/8bf55f5e4da51bc79d94d676a471f77b) for further details.

### From a technical perspective

Pure javascript solution to not forget our origins in a world of frameworks.

The solution applies some techniques for cleanly rendering HTML given some JavaScript data. At the same time, it tries to get as close as possible to full-blown, class-based React Component syntax, with VanillaJS.

## How-to

### Run the project

This project uses [parcel](https://parceljs.org/) to bundle the application and to manage all the assets and dependencies.

```sh
$: yarn install
$: yarn run start
```

### Build the project

Again, [parcel](https://parceljs.org/) will do the work for us.

```sh
$: yarn run build
```

# Credits

The solution is based on [css-tricks - Reactive UI’s with VanillaJS](https://css-tricks.com/reactive-uis-vanillajs-part-2-class-based-components/)
