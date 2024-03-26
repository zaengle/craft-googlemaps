---
description:
---

# Proximity Search Model

The Proximity Search Model is used **internally** to configure the SQL query of a [proximity search](/proximity-search/).

:::warning FOR EDGE CASES ONLY
You will rarely need to call the Proximity Search Model directly, it is for internal use only.
:::

## Public Properties

### `query`

_ElementQueryInterface_ - Element query being adjusted to perform the proximity search.

### `field`

_AddressField_ - Address field being queried in proximity search.

### `options`

_array_ - Array of options for configuring the proximity search.

## Public Methods

### `init()`

```php
use doublesecretagency\googlemaps\models\ProximitySearch;

new ProximitySearch($config);
```

#### Arguments

- `$config` (_array_) - An associative array containing the [public properties](#public-properties) shown above.

#### Returns

_void_ - Modifies `$query` object and returns nothing.

### `haversineRadius($units)`

```php
use doublesecretagency\googlemaps\models\ProximitySearch;

$radius = ProximitySearch::haversineRadius('km');
```

#### Arguments

- `$units` (_string_) - Measurement units for distance. Defaults to `miles`.

Can be any of the following: `mi`, `miles`, `km`, `kilometers`

#### Returns

_int_ - Radius of Earth as measured in the specified units. Useful in a haversine formula.
