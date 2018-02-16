/**    
 * 
 * ---------------------------------------------------------------------------
 *
 * Template Name: Believed - Nonprofit HTML5 Responsive Template
 * Template URL:	 http://lovesome.biz/believed
 * Author : urosd
 * Version : 1.0 
 *
 * --------------------------------------------------------------------------- 
 *
 */
$(document).ready(function () {
    (function ($) {
        'use strict';
        /*  ======================================
                google map
            ====================================== */
        if ($('#map').length > 0) {
            var myCenter = new google.maps.LatLng(-33.7654872, 150.9103569);

            function initialize() {
                var mapProp = {
                    zoom: 16,
                    center: myCenter,
                    scrollwheel: false,
                    styles: [{
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "saturation": 36
                        },
                        {
                            "color": "#546E7A"
                        },
                        {
                            "lightness": 40
                        }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#546E7A"
                        },
                        {
                            "lightness": 20
                        }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#546E7A"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 21
                        }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 18
                        }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#546E7A"
                        },
                        {
                            "lightness": 19
                        }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#546E7A"
                        },
                        {
                            "lightness": 17
                        }
                        ]
                    }
                    ],
                    mapTpeIdy: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(document.getElementById("map"), mapProp);
                //add your location marker here 
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(-33.7654872, 150.9103569),
                    map: map,
                    draggable: true
                });
            }
            google.maps.event.addDomListener(window, 'load', initialize);
        }
        $(window).on('load', function () {

            /*  ======================================
                    Preloader
                ====================================== */
            var preloader = $('.preloader');
            preloader.fadeOut('500');

            /*  ======================================
                    Isotope
                ====================================== */
            // init Isotope
            var isotope_content = $('.iso-content');
            isotope_content.isotope({
                itemSelector: '.iso-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.iso-item'
                }
            });
            // filter items on button click
            var isotope_nav = $('.iso-nav ul li');
            isotope_nav.on('click', function () {
                $('.iso-nav ul li').removeClass('gallery-active');
                $(this).addClass('gallery-active');
                var selector = $(this).attr('data-filter');
                $('.iso-content').isotope({
                    filter: selector
                });
                return false;
            });
        });
    }(jQuery));
});