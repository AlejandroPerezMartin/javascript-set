/**
 *
 * Copyright (c) 2014 Alejandro Perez Martin (AlePerez92)
 *
 * @name          JavaScript Set (JS-Set)
 * @description   Data structure to store non-repeated values
 * @version       1.0.2
 * @build         Jun 6, 2014
 * @url           https://github.com/AlejandroPerezMartin/javascript-set
 *
 * @author        Alejandro Perez Martin
 * @authorUrl     https://www.linkedin.com/in/aleperez92
 *
 */

(function (window, undefined) {

    'use strict';

    /**
     * @constructor
     */
    var Set = function Set() {
        this.set = [];
    };

    /**
     * Returns the set of objects as an array
     */
    Set.prototype.getSet = function () {
        return this.set;
    };

    /**
     * Returns the number of items in the set
     */
    Set.prototype.size = function () {
        return this.set.length;
    };

    /**
     * Returns the n-th object in set
     *
     * @param {Number} index
     */
    Set.prototype.get = function (index) {
        return this.set[index];
    };

    /**
     * Returns true if the set is empty, otherwise false
     */
    Set.prototype.isEmpty = function () {
        return (this.set.length <= 0);
    };

    /**
     * Empties set
     */
    Set.prototype.clear = function () {
        this.set = [];
        return this;
    };

    /**
     * Returns true if an element is in the set, otherwise false
     *
     * @param {Object} key
     */
    Set.prototype.contains = function (key) {
        return (key && this.set.indexOf(key) !== -1);
    };

    /**
     * Returns true if all the elements of the array are contained in the set, otherwise false
     *
     * @param {Array} values
     */
    Set.prototype.containsAll = function (values) {
        if (values && values instanceof Array) {
            for (var i = 0, len = values.length; i < len; i += 1) {
                if (!this.contains(values[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };

    /**
     * Adds an element to the set
     *
     * @param {Object} key
     */
    Set.prototype.add = function (key) {
        if (key) {
            if (!this.contains(key)) {
                this.set.push(key);
            }
        }
        return this;
    };

    /**
     * Adds an array of objects to the set
     *
     * @param {Array} values
     */
    Set.prototype.addAll = function (values) {
        if (values && values instanceof Array) {
            for (var i = 0, len = values.length; i < len; i += 1) {
                if (!this.contains(values[i])) {
                    this.add(values[i]);
                }
            }
        }
        return this;
    };

    /**
     * Removes an element from the set
     *
     * @param {Object} key
     */
    Set.prototype.remove = function (key) {
        if (key && this.contains(key)) {
            var arr = [],
                index = this.set.indexOf(key);

            for (var i = 0, len = this.size(); i < len; i += 1) {
                if (i !== index) {
                    arr.push(this.set[i]);
                }
            }
            this.set = arr;
        }
        return this;
    };

    /**
     * Removes all the elements of the set that are contained in the specified array
     *
     * @param {Array} values
     */
    Set.prototype.removeAll = function (values) {
        if (values && values instanceof Array) {
            for (var i = 0, len = values.length; i < len; i += 1) {
                this.remove(values[i]);
            }
        }
        return this;
    };

    window.Set = Set;

})(window);
