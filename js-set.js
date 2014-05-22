/**
 *
 * Copyright (c) 2014 Alejandro Perez Martin (AlePerez92)
 *
 * @name          JavaScript Set (JS-Set)
 * @description   Data structure to store non-repeated values
 * @version       1.0.0
 * @build         June 22, 2014
 * @url           http://github.com/alejandroperezmartin/js-set
 *
 * @author        Alejandro Perez Martin
 * @authorUrl     https://www.linkedin.com/in/aleperez92
 *
 */

/**
 * Constructor
 */
function Set() {
    this.set = [];
}

/**
 * Returns the set of objects as an array
 */
Set.prototype.getSet = function() {
    return this.set;
};

/**
 * Returns number of items in the set
 */
Set.prototype.size = function() {
    return this.set.length;
};

/**
 * Returns the n-th object in set
 *
 * @param Integer
 */
Set.prototype.get = function(index) {
    return this.set[index];
};

/**
 * Returns true if the set is empty, otherwise false
 */
Set.prototype.isEmpty = function() {
    return (this.set.length <= 0);
};

/**
 * Empties set
 */
Set.prototype.clear = function() {
    this.set = [];
    return this;
};

/**
 * Returns true if key is in the set, otherwise false
 *
 * @param Object
 */
Set.prototype.contains = function(key) {
    return (key !== null && key !== undefined && this.set.indexOf(key) !== -1);
};

/**
 * Returns true if all the elements are contained in the set, otherwise false
 *
 * @param Array
 */
Set.prototype.containsAll = function(values) {
    if (values !== null && values !== undefined && values instanceof Array) {
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
 * Add element to the set
 *
 * @param Object
 */
Set.prototype.add = function(key) {
    if (key !== null && key !== undefined) {
        if (!this.contains(key)) {
            this.set.push(key);
        }
    }
    return this;
};

/**
 * Add elements of the array to the set
 *
 * @param Array
 */
Set.prototype.addAll = function(values) {
    if (values !== null && values !== undefined && values instanceof Array) {
        for (var i = 0, len = values.length; i < len; i += 1) {
            if (!this.contains(values[i])) {
                this.add(values[i]);
            }
        }
    }
    return this;
};

/**
 * Sort elements of set (ONLY WORKS WELL WHEN ALL ELEMENTS ARE OF THE SAME TYPE!)
 */
Set.prototype.sort = function() {
    return (this.set.sort(function(a, b) {
        return a - b;
    }));
}

/**
 * Remove element from set
 *
 * @param Object
 */
Set.prototype.remove = function(key) {
    var arr = [],
        index = this.set.indexOf(key);

    for (var i = 0, len = this.size(); i < len; i += 1) {
        if (i != index) {
            arr.push(this.set[i]);
        }
    }

    this.set = arr;
    return this;
};

/**
 * Remove all the keys from Set
 *
 * @param Array
 */
Set.prototype.removeAll = function(values) {
    if (values !== null && values !== undefined && values instanceof Array) {
        for (var i = 0, len = values.length; i < len; i += 1) {
            if (this.contains(values[i])) {
                this.remove(values[i]);
            }
        }
    }
    return this;
};
