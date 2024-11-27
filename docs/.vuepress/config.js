module.exports = {

    markdown: {
        anchor: { level: [2, 3] },
        extendMarkdown(md) {
            let markup = require("vuepress-theme-craftdocs/markup");
            md.use(markup);
        },
    },

    base: '/google-maps/',
    title: 'Google Maps plugin for Craft CMS',
    plugins: [
        [
            'vuepress-plugin-clean-urls',
            {
                normalSuffix: '/',
                indexSuffix: '/',
                notFoundPath: '/404.html',
            },
        ],
    ],
    theme: "craftdocs",
    themeConfig: {
        codeLanguages: {
            php: "PHP",
            twig: "Twig",
            html: "HTML",
            js: "JavaScript",
        },
        logo: '/images/icon.svg',
        searchMaxSuggestions: 10,
        nav: [
            {text: 'Getting Started️', link: '/getting-started/'},
            {
                text: 'How It Works',
                items: [
                    {text: 'Address Field', link: '/address-field/'},
                    {text: 'Dynamic Maps', link: '/dynamic-maps/'},
                    {text: 'Static Maps', link: '/static-maps/'},
                    {text: 'Proximity Search', link: '/proximity-search/'},
                    {text: 'Geocoding (Address Lookups)', link: '/geocoding/'},
                    {text: 'Visitor Geolocation', link: '/geolocation/'},
                ]
            },
            {
                text: 'Architecture',
                items: [
                    {text: 'JavaScript', link: '/javascript/'},
                    {text: 'Twig/PHP', link: '/helper/'},
                    {text: 'Models', link: '/models/'},
                    {text: 'GraphQL', link: '/graphql/'},
                ]
            },
            {
                text: 'Guides',
                items: [
                    { text: 'Utilities', items: [
                        {text: 'Test Google API Keys', link: '/guides/test-google-api-keys/'},
                        {text: 'Test Address Lookup', link: '/guides/test-address-lookup/'},
                    ] },
                    { text: 'Address Field', items: [
                        {text: 'Linking to a Map', link: '/guides/linking-to-a-map/'},
                        {text: 'Address in a Matrix Field', link: '/guides/address-in-a-matrix-field/'},
                        {text: 'Importing Addresses', link: '/guides/importing-addresses/'},
                        {text: 'Converting from Mapbox', link: '/guides/converting-from-mapbox/'},
                        {text: 'Converting from Ether Maps', link: '/guides/converting-from-ether-maps/'},
                    ] },
                    { text: 'Dynamic Maps', items: [
                        {text: 'Troubleshoot Dynamic Maps', link: '/guides/troubleshoot-dynamic-maps/'},
                        {text: 'Delaying Map Initialization', link: '/guides/delay-map-init/'},
                        {text: 'Required JS Assets', link: '/guides/required-js-assets/'},
                        {text: 'Setting the Map Height', link: '/guides/setting-map-height/'},
                        {text: 'Setting Marker Icons', link: '/guides/setting-marker-icons/'},
                        {text: 'Setting Clustering Icons', link: '/guides/setting-clustering-icons/'},
                        {text: 'Styling a Map', link: '/guides/styling-a-map/'},
                        {text: 'Drawing Circles', link: '/guides/drawing-circles/'},
                        {text: 'KML Layers', link: '/guides/kml-layers/'},
                        {text: 'Opening Info Windows', link: '/guides/opening-info-windows/'},
                        {text: 'Locations with the Same Address', link: '/guides/locations-with-same-address/'},
                        {text: 'Changing the Map Language', link: '/guides/changing-map-language/'},
                        {text: 'Prevent Zoom When Scrolling', link: '/guides/prevent-zoom-when-scrolling/'},
                        {text: 'Bermuda Triangle', link: '/guides/bermuda-triangle/'},
                    ] },
                    { text: 'Proximity Search & Geocoding', items: [
                        {text: 'Troubleshoot Geocoding', link: '/guides/troubleshoot-geocoding/'},
                        {text: 'Region Biasing', link: '/guides/region-biasing/'},
                        {text: 'Filter by Subfields', link: '/guides/filter-by-subfields/'},
                        {text: 'Search by Visitor IP', link: '/guides/search-by-visitor-ip/'},
                        {text: 'AJAX Geocoding Example', link: '/guides/ajax-geocoding-example/'},
                        {text: 'Reverse Proximity Search', link: '/guides/reverse-proximity-search/'},
                        {text: 'Proximity Search with Sprig', link: '/guides/sprig/'},
                    ] },
                    { text: 'Updating', items: [
                        {text: 'Updating from Smart Map 🔧', link: '/updating-from-smart-map/'},
                    ] },
                ]
            },
        ],
        sidebar: {
            // Getting Started
            '/getting-started/': [
                '',
                'updating-from-smart-map',
                'api-keys',
                'settings',
                'config',
                // 'diagnostics', // TODO: Add diagnostics tools
            ],

            // How It Works
            '/address-field/': [
                '',
                'how-it-works',
                'settings',
                'twig',
                'graphql',
                'multisite-support',
                'front-end-form',
                'export',
                'event',
            ],
            '/dynamic-maps/': [
                {
                    title: 'Overview',
                    collapsable: false,
                    children: [
                        '',
                        'universal-api',
                        'chaining',
                        'locations',
                    ]
                },
                {
                    title: 'Map Management',
                    collapsable: false,
                    children: [
                        'basic-map-management',
                        'universal-methods',
                        'javascript-methods',
                        'twig-php-methods',
                    ]
                },
                {
                    title: 'More Features',
                    collapsable: false,
                    children: [
                        'clustering-markers',
                        'info-windows',
                        'on-marker-click',
                        'troubleshooting',
                    ]
                },
            ],
            '/static-maps/': [
                '',
                'api',
                'chaining',
            ],
            '/proximity-search/': [
                '',
                'query-parameters',
                'options',
                // 'in-javascript', // TODO: Support JS methods
                // 'in-graphql', // TODO: Support GraphQL
            ],
            '/geolocation/': [
                '',
                'how-to-use',
                'service-providers',
                // 'html5', // TODO: Add HTML5 geolocation (?)
                // 'diagnostics', // TODO: Add diagnostics tools
                'event',
            ],
            '/geocoding/': [
                '',
                'target',
                'methods',
                'via-ajax',
                'event',
            ],

            // Architecture
            '/helper/': [
                '',
                'dynamic-maps',
                'static-maps',
                'geocoding',
                'geolocation',
                'api',
            ],
            '/javascript/': [
                '',
                'googlemaps.js',
                'dynamicmap.js',
            ],
            '/models/': [
                '',
                'lookup-model',
                'address-model',
                'location-model',
                'visitor-model',
                'dynamic-map-model',
                'static-map-model',
                'ipstack-model',
                'maxmind-model',
                'proximity-search-model',
                'settings-model',
                'coordinates',
            ],
            '/graphql/': [
                {
                    title: 'Overview',
                    collapsable: false,
                    children: [
                        '',
                    ]
                },
                {
                    title: 'Custom Types',
                    collapsable: false,
                    children: [
                        'types/address',
                        'types/address-input',
                    ]
                },
            ],

            // Guides
            '/guides/': [
                {
                    title: 'Utilities',
                    collapsable: false,
                    children: [
                        'test-google-api-keys',
                        'test-address-lookup',
                    ]
                },
                {
                    title: 'Address Field',
                    collapsable: false,
                    children: [
                        'linking-to-a-map',
                        'address-in-a-matrix-field',
                        'importing-addresses',
                        'converting-from-mapbox',
                        'converting-from-ether-maps',
                    ]
                },
                {
                    title: 'Dynamic Maps',
                    collapsable: false,
                    children: [
                        'troubleshoot-dynamic-maps',
                        'delay-map-init',
                        'required-js-assets',
                        'setting-map-height',
                        'setting-marker-icons',
                        'setting-clustering-icons',
                        'styling-a-map',
                        'drawing-circles',
                        'kml-layers',
                        'opening-info-windows',
                        'locations-with-same-address',
                        'changing-map-language',
                        'prevent-zoom-when-scrolling',
                        'bermuda-triangle',
                    ]
                },
                {
                    title: 'Proximity Search & Geocoding',
                    collapsable: false,
                    children: [
                        'troubleshoot-geocoding',
                        'region-biasing',
                        'filter-by-subfields',
                        'search-by-visitor-ip',
                        'ajax-geocoding-example',
                        'reverse-proximity-search',
                        'sprig',
                    ]
                },
            ],

            // Updating from Smart Map
            '/updating-from-smart-map/': [
                '',
                'using-an-address-field',
                'render-a-map-in-twig',
                'sorting-entries-by-closest-locations',
                'filtering-entries-by-subfield-value',
                'filtering-out-entries-with-invalid-coordinates',
                'using-a-filter-fallback-in-proximity-searches',
                'region-biasing',
                'internationalization-support',
                'customizing-the-map-in-twig',
                'manipulating-the-map-in-javascript',
                'styling-a-map',
                'kml-files',
                'adding-marker-info-bubbles',
                'different-icons-for-different-marker-types',
                'linking-to-a-separate-google-map-page',
                'how-to-use-with-a-matrix-field',
                'automatically-format-an-entire-address',
                'isempty-and-hascoords',
                'front-end-address-lookup',
                'front-end-entry-form',
                'importing-addresses',
                'exporting-the-address-data',
                'get-google-api-keys',
                'override-google-api-keys',
                'visitor-geolocation',
                'map-debug-page',
                'troubleshooting',
            ],

        }
    }
};
