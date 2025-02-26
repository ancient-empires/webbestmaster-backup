/*jslint white: true, nomen: true */
(function (win) {

    'use strict';
    /*global window, document */
    /*global APP */

    win.APP.maps = win.APP.maps || {};

    win.APP.maps.skirmish_001_042 = {
        "type": "skirmish",
        "size": {"width": 14, "height": 14},
        "name": "Invasion",
        "name-es": "Invasión",
        "name-ru": "Вторжение",
        "isOpen": true,
        "maxPlayers": 4,
        "units": [{"x": 0, "y": 0, "type": "commander", "ownerId": 0}, {
            "x": 6,
            "y": 0,
            "type": "catapult",
            "ownerId": 0
        }, {"x": 0, "y": 6, "type": "catapult", "ownerId": 0}, {
            "x": 0,
            "y": 13,
            "type": "commander",
            "ownerId": 1
        }, {"x": 0, "y": 7, "type": "catapult", "ownerId": 1}, {
            "x": 6,
            "y": 13,
            "type": "catapult",
            "ownerId": 1
        }, {"x": 13, "y": 0, "type": "commander", "ownerId": 2}, {
            "x": 7,
            "y": 0,
            "type": "catapult",
            "ownerId": 2
        }, {"x": 13, "y": 6, "type": "catapult", "ownerId": 2}, {
            "x": 13,
            "y": 13,
            "type": "commander",
            "ownerId": 3
        }, {"x": 13, "y": 7, "type": "catapult", "ownerId": 3}, {"x": 7, "y": 13, "type": "catapult", "ownerId": 3}],
        "buildings": [{"x": 13, "y": 6, "type": "well", "state": "normal"}, {
            "x": 13,
            "y": 7,
            "type": "well",
            "state": "normal"
        }, {"x": 6, "y": 13, "type": "well", "state": "normal"}, {
            "x": 7,
            "y": 13,
            "type": "well",
            "state": "normal"
        }, {"x": 0, "y": 6, "type": "well", "state": "normal"}, {
            "x": 0,
            "y": 7,
            "type": "well",
            "state": "normal"
        }, {"x": 6, "y": 0, "type": "well", "state": "normal"}, {
            "x": 7,
            "y": 0,
            "type": "well",
            "state": "normal"
        }, {"x": 5, "y": 5, "type": "castle", "state": "normal"}, {
            "x": 8,
            "y": 5,
            "type": "castle",
            "state": "normal"
        }, {"x": 8, "y": 8, "type": "castle", "state": "normal"}, {
            "x": 5,
            "y": 8,
            "type": "castle",
            "state": "normal"
        }, {"x": 4, "y": 6, "type": "farm", "state": "destroyed"}, {
            "x": 4,
            "y": 7,
            "type": "farm",
            "state": "destroyed"
        }, {"x": 6, "y": 4, "type": "farm", "state": "destroyed"}, {
            "x": 7,
            "y": 4,
            "type": "farm",
            "state": "destroyed"
        }, {"x": 9, "y": 6, "type": "farm", "state": "destroyed"}, {
            "x": 9,
            "y": 7,
            "type": "farm",
            "state": "destroyed"
        }, {"x": 6, "y": 9, "type": "farm", "state": "destroyed"}, {
            "x": 7,
            "y": 9,
            "type": "farm",
            "state": "destroyed"
        }, {"x": 2, "y": 0, "type": "farm", "state": "normal"}, {
            "x": 0,
            "y": 2,
            "type": "farm",
            "state": "normal"
        }, {"x": 0, "y": 11, "type": "farm", "state": "normal"}, {
            "x": 2,
            "y": 13,
            "type": "farm",
            "state": "normal"
        }, {"x": 11, "y": 13, "type": "farm", "state": "normal"}, {
            "x": 13,
            "y": 11,
            "type": "farm",
            "state": "normal"
        }, {"x": 13, "y": 2, "type": "farm", "state": "normal"}, {
            "x": 11,
            "y": 0,
            "type": "farm",
            "state": "normal"
        }, {"x": 0, "y": 0, "type": "castle", "state": "normal", "ownerId": 0}, {
            "x": 0,
            "y": 13,
            "type": "castle",
            "state": "normal",
            "ownerId": 1
        }, {"x": 13, "y": 0, "type": "castle", "state": "normal", "ownerId": 2}, {
            "x": 13,
            "y": 13,
            "type": "castle",
            "state": "normal",
            "ownerId": 3
        }],
        "terrain": {
            "x0y0": "road-1",
            "x0y1": "road-1",
            "x0y2": "terra-1",
            "x0y3": "road-1",
            "x0y4": "road-1",
            "x0y5": "stone-1",
            "x0y6": "road-1",
            "x0y7": "road-1",
            "x0y8": "stone-1",
            "x0y9": "road-1",
            "x0y10": "road-1",
            "x1y0": "road-1",
            "x1y1": "terra-1",
            "x1y2": "terra-1",
            "x1y3": "terra-1",
            "x1y4": "forest-2",
            "x1y5": "stone-1",
            "x1y6": "road-1",
            "x1y7": "road-1",
            "x1y8": "stone-1",
            "x1y9": "forest-2",
            "x1y10": "terra-1",
            "x2y0": "terra-1",
            "x2y1": "terra-1",
            "x2y2": "terra-1",
            "x2y3": "forest-1",
            "x2y4": "hill-1",
            "x2y5": "stone-1",
            "x2y6": "road-1",
            "x2y7": "road-1",
            "x2y8": "stone-1",
            "x2y9": "hill-1",
            "x2y10": "forest-1",
            "x3y0": "road-1",
            "x3y1": "terra-1",
            "x3y2": "forest-1",
            "x3y3": "hill-1",
            "x3y4": "forest-1",
            "x3y5": "stone-1",
            "x3y6": "road-1",
            "x3y7": "road-1",
            "x3y8": "stone-1",
            "x3y9": "forest-1",
            "x3y10": "hill-1",
            "x4y0": "road-1",
            "x4y1": "forest-1",
            "x4y2": "forest-1",
            "x4y3": "forest-1",
            "x4y4": "terra-1",
            "x4y5": "stone-1",
            "x4y6": "terra-1",
            "x4y7": "terra-1",
            "x4y8": "stone-1",
            "x4y9": "hill-1",
            "x4y10": "forest-1",
            "x5y0": "stone-1",
            "x5y1": "stone-1",
            "x5y2": "stone-1",
            "x5y3": "stone-1",
            "x5y4": "stone-1",
            "x5y5": "road-1",
            "x5y6": "road-1",
            "x5y7": "road-1",
            "x5y8": "road-1",
            "x5y9": "stone-1",
            "x5y10": "stone-1",
            "x6y0": "road-1",
            "x6y1": "road-1",
            "x6y2": "road-1",
            "x6y3": "road-1",
            "x6y4": "terra-1",
            "x6y5": "road-1",
            "x6y6": "road-1",
            "x6y7": "road-1",
            "x6y8": "road-1",
            "x6y9": "terra-1",
            "x6y10": "road-1",
            "x7y0": "road-1",
            "x7y1": "road-1",
            "x7y2": "road-1",
            "x7y3": "road-1",
            "x7y4": "terra-1",
            "x7y5": "road-1",
            "x7y6": "road-1",
            "x7y7": "road-1",
            "x7y8": "road-1",
            "x7y9": "terra-1",
            "x7y10": "road-1",
            "x8y0": "stone-1",
            "x8y1": "stone-1",
            "x8y2": "stone-1",
            "x8y3": "stone-1",
            "x8y4": "stone-1",
            "x8y5": "road-1",
            "x8y6": "road-1",
            "x8y7": "road-1",
            "x8y8": "road-1",
            "x8y9": "stone-1",
            "x8y10": "stone-1",
            "x9y0": "road-1",
            "x9y1": "forest-1",
            "x9y2": "forest-1",
            "x9y3": "hill-1",
            "x9y4": "forest-1",
            "x9y5": "stone-1",
            "x9y6": "terra-1",
            "x9y7": "terra-1",
            "x9y8": "stone-1",
            "x9y9": "hill-1",
            "x9y10": "forest-1",
            "x10y0": "road-1",
            "x10y1": "terra-1",
            "x10y2": "hill-1",
            "x10y3": "forest-1",
            "x10y4": "forest-2",
            "x10y5": "stone-1",
            "x10y6": "road-1",
            "x10y7": "road-1",
            "x10y8": "stone-1",
            "x10y9": "forest-2",
            "x10y10": "forest-2",
            "x0y11": "terra-1",
            "x1y11": "terra-1",
            "x2y11": "terra-1",
            "x3y11": "forest-2",
            "x4y11": "forest-1",
            "x5y11": "stone-1",
            "x6y11": "road-1",
            "x7y11": "road-1",
            "x8y11": "stone-1",
            "x9y11": "forest-2",
            "x10y11": "forest-1",
            "x0y12": "road-1",
            "x1y12": "terra-1",
            "x2y12": "terra-1",
            "x3y12": "terra-1",
            "x4y12": "forest-2",
            "x5y12": "stone-1",
            "x6y12": "road-1",
            "x7y12": "road-1",
            "x8y12": "stone-1",
            "x9y12": "forest-1",
            "x10y12": "terra-1",
            "x0y13": "road-1",
            "x1y13": "road-1",
            "x2y13": "terra-1",
            "x3y13": "road-1",
            "x4y13": "road-1",
            "x5y13": "stone-1",
            "x6y13": "road-1",
            "x7y13": "road-1",
            "x8y13": "stone-1",
            "x9y13": "road-1",
            "x10y13": "road-1",
            "x11y0": "terra-1",
            "x11y1": "terra-1",
            "x11y2": "terra-1",
            "x11y3": "hill-1",
            "x11y4": "forest-2",
            "x11y5": "stone-1",
            "x11y6": "road-1",
            "x11y7": "road-1",
            "x11y8": "stone-1",
            "x11y9": "forest-2",
            "x11y10": "hill-1",
            "x11y11": "terra-1",
            "x11y12": "terra-1",
            "x11y13": "terra-1",
            "x12y0": "road-1",
            "x12y1": "terra-1",
            "x12y2": "terra-1",
            "x12y3": "terra-1",
            "x12y4": "forest-1",
            "x12y5": "stone-1",
            "x12y6": "road-1",
            "x12y7": "road-1",
            "x12y8": "stone-1",
            "x12y9": "hill-1",
            "x12y10": "terra-1",
            "x12y11": "terra-1",
            "x12y12": "terra-1",
            "x12y13": "road-1",
            "x13y0": "road-1",
            "x13y1": "road-1",
            "x13y2": "terra-1",
            "x13y3": "road-1",
            "x13y4": "road-1",
            "x13y5": "stone-1",
            "x13y6": "road-1",
            "x13y7": "road-1",
            "x13y8": "stone-1",
            "x13y9": "road-1",
            "x13y10": "road-1",
            "x13y11": "terra-1",
            "x13y12": "road-1",
            "x13y13": "road-1"
        }
    };

}(window));