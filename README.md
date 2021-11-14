# Run Web/iOS/Android development

# Web

$ npm run web

# IOS (simulator)

$ npm run ios

# Android (connected device)

$ npm run android

I applied responsive in Grid Button component. I calculated button width dynamically from the device screen width.
So this grid can have 2 columns, center aligned button list in any size of screen width. You can check my implementation in src/screens/Home.js file.

I also applied font responsive in all designs. My solution is scaling font size with calculated rate.
The current design screen has 360px width. So this can be default size of width and we can calculate rate with this width and actual device width. So the rate can be calculated like this.

const rate = actualDeviceWidth / 360;

For now, I only implemented font responsive in device width less than 360px. So font sizes in current design(360px) can be maximum sizes. If we have extra designs for bigger devices, we can add extra logic for bigger devices.
You can check my font responsive logic in src/utils/scale.js.
