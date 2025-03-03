/*jslint white: true, nomen: true */
(function (win) {

    'use strict';
    /*global window, document */
    /*global APP */

    win.APP.maps = win.APP.maps || {};

    win.APP.maps.skirmish_001_053 = {
        "type": "skirmish",
        "size": {"width": 16, "height": 16},
        "name": "Tract",
        "name-es": "Tracto",
        "name-ru": "Тракт",
        "isOpen": true,
        "maxPlayers": 4,
        "units": [{"x": 5, "y": 1, "type": "commander", "ownerId": 0}, {
            "x": 0,
            "y": 12,
            "type": "commander",
            "ownerId": 1
        }, {"x": 15, "y": 4, "type": "commander", "ownerId": 2}, {"x": 11, "y": 13, "type": "commander", "ownerId": 3}],
        "buildings": [{"x": 2, "y": 3, "type": "farm", "state": "destroyed"}, {
            "x": 6,
            "y": 3,
            "type": "farm",
            "state": "destroyed"
        }, {"x": 12, "y": 4, "type": "farm", "state": "destroyed"}, {
            "x": 12,
            "y": 6,
            "type": "farm",
            "state": "destroyed"
        }, {"x": 3, "y": 9, "type": "farm", "state": "destroyed"}, {
            "x": 11,
            "y": 10,
            "type": "farm",
            "state": "destroyed"
        }, {"x": 4, "y": 12, "type": "farm", "state": "destroyed"}, {
            "x": 8,
            "y": 13,
            "type": "farm",
            "state": "destroyed"
        }, {"x": 3, "y": 1, "type": "farm", "state": "normal"}, {
            "x": 5,
            "y": 2,
            "type": "farm",
            "state": "normal"
        }, {"x": 14, "y": 4, "type": "farm", "state": "normal"}, {
            "x": 15,
            "y": 6,
            "type": "farm",
            "state": "normal"
        }, {"x": 12, "y": 13, "type": "farm", "state": "normal"}, {
            "x": 9,
            "y": 14,
            "type": "farm",
            "state": "normal"
        }, {"x": 1, "y": 11, "type": "farm", "state": "normal"}, {
            "x": 0,
            "y": 9,
            "type": "farm",
            "state": "normal"
        }, {"x": 3, "y": 2, "type": "castle", "state": "normal"}, {
            "x": 9,
            "y": 3,
            "type": "castle",
            "state": "normal"
        }, {"x": 14, "y": 6, "type": "castle", "state": "normal"}, {
            "x": 11,
            "y": 8,
            "type": "castle",
            "state": "normal"
        }, {"x": 10, "y": 15, "type": "castle", "state": "normal"}, {
            "x": 1,
            "y": 12,
            "type": "castle",
            "state": "normal"
        }, {"x": 3, "y": 7, "type": "castle", "state": "normal"}, {
            "x": 5,
            "y": 1,
            "type": "castle",
            "state": "normal",
            "ownerId": 0
        }, {"x": 0, "y": 12, "type": "castle", "state": "normal", "ownerId": 1}, {
            "x": 15,
            "y": 4,
            "type": "castle",
            "state": "normal",
            "ownerId": 2
        }, {"x": 11, "y": 13, "type": "castle", "state": "normal", "ownerId": 3}],
        "terrain": {
            "x0y0": "terra-2",
            "x0y1": "stone-1",
            "x0y2": "terra-1",
            "x0y3": "terra-1",
            "x0y4": "road-1",
            "x0y5": "hill-1",
            "x0y6": "forest-1",
            "x0y7": "stone-1",
            "x0y8": "terra-1",
            "x0y9": "terra-1",
            "x0y10": "road-1",
            "x1y0": "stone-1",
            "x1y1": "terra-1",
            "x1y2": "terra-1",
            "x1y3": "stone-1",
            "x1y4": "road-1",
            "x1y5": "stone-1",
            "x1y6": "terra-1",
            "x1y7": "terra-1",
            "x1y8": "forest-1",
            "x1y9": "terra-1",
            "x1y10": "road-1",
            "x2y0": "terra-1",
            "x2y1": "terra-1",
            "x2y2": "terra-4",
            "x2y3": "terra-1",
            "x2y4": "road-1",
            "x2y5": "road-1",
            "x2y6": "road-1",
            "x2y7": "road-1",
            "x2y8": "road-1",
            "x2y9": "road-1",
            "x2y10": "road-1",
            "x3y0": "terra-1",
            "x3y1": "terra-1",
            "x3y2": "road-1",
            "x3y3": "terra-1",
            "x3y4": "road-1",
            "x3y5": "road-1",
            "x3y6": "terra-1",
            "x3y7": "road-1",
            "x3y8": "terra-1",
            "x3y9": "terra-1",
            "x3y10": "road-1",
            "x4y0": "road-1",
            "x4y1": "road-1",
            "x4y2": "road-1",
            "x4y3": "road-1",
            "x4y4": "road-1",
            "x4y5": "road-1",
            "x4y6": "terra-5",
            "x4y7": "hill-1",
            "x4y8": "stone-1",
            "x4y9": "terra-1",
            "x4y10": "road-1",
            "x5y0": "terra-1",
            "x5y1": "road-1",
            "x5y2": "terra-1",
            "x5y3": "terra-1",
            "x5y4": "road-1",
            "x5y5": "terra-1",
            "x5y6": "forest-1",
            "x5y7": "stone-1",
            "x5y8": "stone-1",
            "x5y9": "terra-1",
            "x5y10": "stone-1",
            "x6y0": "terra-1",
            "x6y1": "terra-1",
            "x6y2": "terra-1",
            "x6y3": "terra-1",
            "x6y4": "road-1",
            "x6y5": "forest-2",
            "x6y6": "water-1",
            "x6y7": "water-1",
            "x6y8": "water-1",
            "x6y9": "hill-1",
            "x6y10": "forest-1",
            "x7y0": "forest-1",
            "x7y1": "terra-1",
            "x7y2": "forest-1",
            "x7y3": "hill-1",
            "x7y4": "road-1",
            "x7y5": "terra-1",
            "x7y6": "water-1",
            "x7y7": "water-1",
            "x7y8": "water-1",
            "x7y9": "stone-1",
            "x7y10": "terra-1",
            "x8y0": "terra-1",
            "x8y1": "forest-1",
            "x8y2": "hill-1",
            "x8y3": "terra-1",
            "x8y4": "road-1",
            "x8y5": "forest-2",
            "x8y6": "water-1",
            "x8y7": "water-1",
            "x8y8": "stone-1",
            "x8y9": "terra-2",
            "x8y10": "terra-1",
            "x9y0": "terra-1",
            "x9y1": "forest-2",
            "x9y2": "terra-4",
            "x9y3": "road-1",
            "x9y4": "road-1",
            "x9y5": "terra-1",
            "x9y6": "forest-1",
            "x9y7": "terra-5",
            "x9y8": "hill-1",
            "x9y9": "forest-1",
            "x9y10": "terra-1",
            "x10y0": "stone-1",
            "x10y1": "forest-2",
            "x10y2": "forest-2",
            "x10y3": "terra-1",
            "x10y4": "road-1",
            "x10y5": "road-1",
            "x10y6": "terra-1",
            "x10y7": "road-1",
            "x10y8": "road-1",
            "x10y9": "road-1",
            "x10y10": "road-1",
            "x11y0": "road-1",
            "x11y1": "road-1",
            "x11y2": "road-1",
            "x11y3": "road-1",
            "x11y4": "road-1",
            "x11y5": "road-1",
            "x11y6": "road-1",
            "x11y7": "road-1",
            "x11y8": "road-1",
            "x11y9": "terra-1",
            "x11y10": "terra-1",
            "x12y0": "water-1",
            "x12y1": "hill-1",
            "x12y2": "terra-1",
            "x12y3": "forest-2",
            "x12y4": "terra-1",
            "x12y5": "road-1",
            "x12y6": "terra-1",
            "x12y7": "terra-1",
            "x12y8": "terra-1",
            "x12y9": "terra-1",
            "x12y10": "water-1",
            "x13y0": "water-1",
            "x13y1": "water-1",
            "x13y2": "water-1",
            "x13y3": "terra-1",
            "x13y4": "terra-1",
            "x13y5": "road-1",
            "x13y6": "terra-1",
            "x13y7": "terra-1",
            "x13y8": "forest-2",
            "x13y9": "stone-1",
            "x13y10": "water-1",
            "x14y0": "water-1",
            "x14y1": "water-2",
            "x14y2": "water-1",
            "x14y3": "water-1",
            "x14y4": "terra-1",
            "x14y5": "road-1",
            "x14y6": "road-1",
            "x14y7": "terra-2",
            "x14y8": "hill-1",
            "x14y9": "forest-1",
            "x14y10": "forest-2",
            "x15y0": "water-1",
            "x15y1": "water-1",
            "x15y2": "water-1",
            "x15y3": "water-1",
            "x15y4": "road-1",
            "x15y5": "road-1",
            "x15y6": "terra-1",
            "x15y7": "terra-1",
            "x15y8": "stone-1",
            "x15y9": "forest-1",
            "x15y10": "stone-1",
            "x0y11": "road-1",
            "x1y11": "terra-1",
            "x2y11": "road-1",
            "x3y11": "terra-1",
            "x4y11": "road-1",
            "x5y11": "road-1",
            "x6y11": "road-1",
            "x7y11": "road-1",
            "x8y11": "road-1",
            "x9y11": "road-1",
            "x10y11": "road-1",
            "x11y11": "terra-1",
            "x12y11": "water-1",
            "x13y11": "water-1",
            "x14y11": "water-1",
            "x15y11": "stone-1",
            "x0y12": "road-1",
            "x1y12": "road-1",
            "x2y12": "road-1",
            "x3y12": "terra-1",
            "x4y12": "terra-1",
            "x5y12": "forest-1",
            "x6y12": "terra-5",
            "x7y12": "forest-2",
            "x8y12": "terra-1",
            "x9y12": "road-1",
            "x10y12": "road-1",
            "x11y12": "terra-1",
            "x12y12": "water-1",
            "x13y12": "water-1",
            "x14y12": "water-1",
            "x15y12": "water-1",
            "x0y13": "terra-1",
            "x1y13": "forest-1",
            "x2y13": "road-1",
            "x3y13": "terra-1",
            "x4y13": "stone-1",
            "x5y13": "stone-1",
            "x6y13": "terra-1",
            "x7y13": "terra-4",
            "x8y13": "terra-1",
            "x9y13": "road-1",
            "x10y13": "road-1",
            "x11y13": "road-1",
            "x12y13": "terra-1",
            "x13y13": "water-1",
            "x14y13": "water-1",
            "x15y13": "water-3",
            "x0y14": "hill-1",
            "x1y14": "terra-2",
            "x2y14": "road-1",
            "x3y14": "stone-1",
            "x4y14": "stone-1",
            "x5y14": "stone-1",
            "x6y14": "stone-1",
            "x7y14": "stone-1",
            "x8y14": "terra-4",
            "x9y14": "terra-1",
            "x10y14": "road-1",
            "x11y14": "road-1",
            "x12y14": "road-1",
            "x13y14": "stone-1",
            "x14y14": "water-1",
            "x15y14": "water-1",
            "x0y15": "terra-5",
            "x1y15": "terra-1",
            "x2y15": "road-1",
            "x3y15": "terra-1",
            "x4y15": "water-1",
            "x5y15": "water-1",
            "x6y15": "stone-1",
            "x7y15": "stone-1",
            "x8y15": "terra-1",
            "x9y15": "terra-1",
            "x10y15": "road-1",
            "x11y15": "terra-1",
            "x12y15": "road-1",
            "x13y15": "road-1",
            "x14y15": "road-1",
            "x15y15": "road-1"
        }
    };

}(window));