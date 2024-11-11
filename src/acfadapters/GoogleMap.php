<?php
/**
 * Google Maps plugin for Craft CMS
 *
 * Maps in minutes. Powered by the Google Maps API.
 *
 * @author    Double Secret Agency
 * @author    Brandon Kelly
 * @link      https://plugins.doublesecretagency.com/
 * @copyright Copyright (c) 2014, 2024 Double Secret Agency
 */

namespace doublesecretagency\googlemaps\acfadapters;

use craft\base\FieldInterface;
use craft\wpimport\BaseAcfAdapter;
use doublesecretagency\googlemaps\enums\Defaults;
use doublesecretagency\googlemaps\fields\AddressField;

/**
 * Class GoogleMap
 */
class GoogleMap extends BaseAcfAdapter
{
    public static function type(): string
    {
        return 'google_map';
    }

    public function create(array $data): FieldInterface
    {
        $field = new AddressField();
        $field->coordinatesDefault = [
            'lat' => $data['center_lat'] ?: Defaults::COORDINATES['lat'],
            'lng' => $data['center_lng'] ?: Defaults::COORDINATES['lng'],
            'zoom' => $data['zoom'] ?: Defaults::COORDINATES['zoom'],
        ];
        return $field;
    }

    public function normalizeValue(mixed $value, array $data): mixed
    {
        return [
            'lat' => $value['lat'],
            'lng' => $value['lng'],
            'zoom' => $value['zoom'],
            'formatted' => $value['address'],
            'name' => $value['name'],
            'street1' => sprintf('%s %s', $value['street_number'], $value['street_name_short'] ?: $value['street_name']),
            'city' => $value['city'],
            'state' => $value['state_short'],
            'zip' => $value['post_code'],
            'country' => $value['country'],
            'countryCode' => $value['country_short'],
            'placeId' => $value['place_id'],
        ];
    }
}
