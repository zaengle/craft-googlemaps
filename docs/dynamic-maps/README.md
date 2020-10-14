# Dynamic Maps

We've designed this plugin to be a universally helpful tool, regardless of which programming language you are working with. The [API](/dynamic-maps/api/) provides a harmonious way to manipulate your maps across languages.

## Creating a Map in Twig

Here's a straightforward example of how you might create a simple map in Twig...

```twig
{# Get all locations #}
{% set locations = craft.entries.section('locations').all() %}

{# Create a map with markers #}
{{ googleMaps.map(locations).tag() }}
```

Of course, that is only the beginning. It's possible to do much more complicated things with your map by tapping into the [Universal Methods](/dynamic-maps/universal-methods/), which are equally available across JavaScript, Twig, and PHP.

## Manipulating a Map in JavaScript

By [chaining](/dynamic-maps/chaining/) these methods together, you can endlessly adjust the map as needed. You can even call up an existing map, and continue to manipulate it further.

```js
// Get an existing map
//   Change a marker icon
//   Pan to that marker
//   Zoom in
googleMaps.getMap('my-map')
    .setMarkerIcon('my-marker', 'http://maps.google.com/mapfiles/ms/micons/green.png')
    .panToMarker('my-marker')
    .zoom(11);
```

This gives you the maximum amount of control over how each map will be rendered.

:::warning Creating or Retrieving Map Objects
Map objects will be stored internally for later use. See the [Map Management](/dynamic-maps/map-management/) methods for details on how to create and/or retrieve maps.
:::

## Language-Specific Methods

There are a few additional methods which are specific to a given language. For more details, check out the [JavaScript Methods](/dynamic-maps/javascript-methods/) and [Twig & PHP Methods](/dynamic-maps/twig-php-methods/).

:::tip Ending a Chain
In order to end a series of chained methods, you must always apply the `tag` method. It's important to note that this is considered a _language-specific_ method, because its usage varies so drastically between languages.
:::

## Location Variations

When creating a new map, or appending markers to an existing map, you'll have an opportunity to provide a set of [locations](/dynamic-maps/locations/) for placement on the map. Twig & PHP are capable of working with Elements or Address Models, but JavaScript is limited to coordinates only. 

|                | JavaScript | Twig | PHP |
|----------------|:----------:|:----:|:---:|
| [Coordinates](/models/coordinates/)                     | ✅ | ✅ | ✅ |
| [Elements](https://craftcms.com/docs/3.x/elements.html) | ❌ | ✅ | ✅ |
| [Address Models](/models/address-model/)                | ❌ | ✅ | ✅ |