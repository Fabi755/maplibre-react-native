# Expo Installation

NOTE: This package cannot be used in the "Expo Go" app because [it requires custom native code](https://docs.expo.io/workflow/customizing/).

First install the package with `yarn`, `npm`, or [`expo install`](https://docs.expo.io/workflow/expo-cli/#expo-install).

```sh
expo install @maplibre/maplibre-react-native
```

After installing this npm package, add the [config plugin](https://docs.expo.io/guides/config-plugins/) to the [`plugins`](https://docs.expo.io/versions/latest/config/app/#plugins) array of your `app.json` or `app.config.js`:

```json
{
  "expo": {
    "plugins": ["@maplibre/maplibre-react-native"]
  }
}
```

Next, rebuild your app as described in the ["Adding custom native code"](https://docs.expo.io/workflow/customizing/) guide.

## API

This plugin doesn't currently provide any additional properties for customization. The plugin simply generates the pre-install block in the `ios/Podfile` (the post-install block is not required for Expo support). No additional changes are done on Android.
