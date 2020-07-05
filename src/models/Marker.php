<?php
/**
 * Google Maps plugin for Craft CMS
 *
 * Maps in minutes. Powered by Google Maps.
 *
 * @author    Double Secret Agency
 * @link      https://plugins.doublesecretagency.com/
 * @copyright Copyright (c) 2014, 2020 Double Secret Agency
 */

namespace doublesecretagency\googlemaps\models;

use craft\base\Model;

/**
 * Class Marker
 * @since 4.0.0
 */
class Marker extends Model
{

    public $markerOptions = [];

    private $_infoWindowOptions = [];

    /**
     * Initialize a Marker object.
     *
     * @param array $options
     * @param array $config
     */
    public function __construct(array $options = [], array $config = [])
    {
        parent::__construct($config);
    }

}
