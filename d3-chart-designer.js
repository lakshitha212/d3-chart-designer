/**
 * Created by Chameera Lakshitha on 6/22/2015.
 */
(function ($) {
    "use strict";
    $.fn.chartDesigner = function (options) {
        var settings = $.extend({
            color: ["#F1BB5F", "#59D2FB", "#967EA3", "#F3DFE4", "#AB92B2", "#5D5A89", "#A2BFD8"],
            serverUrl: "",
            webServiceURL: ""
        }, options);
        console.log(settings);
    };

}(jQuery));
