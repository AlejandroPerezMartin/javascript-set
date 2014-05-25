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
    'use strict';
    this.set = [];
}

/**
 * Returns the set of objects as an array
 */
Set.prototype.getSet = function () {
    'use strict';
    return this.set;
};

/**
 * Returns number of items in the set
 */
Set.prototype.size = function () {
    'use strict';
    return this.set.length;
};

/**
 * Returns the n-th object in set
 *
 * @param Integer
 */
Set.prototype.get = function (index) {
    'use strict';
    return this.set[index];
};

/**
 * Returns true if the set is empty, otherwise false
 */
Set.prototype.isEmpty = function () {
    'use strict';
    return (this.set.length <= 0);
};

/**
 * Empties set
 */
Set.prototype.clear = function () {
    'use strict';
    this.set = [];
    return this;
};

/**
 * Returns true if key is in the set, otherwise false
 *
 * @param Object
 */
Set.prototype.contains = function (key) {
    'use strict';
    return (key && this.set.indexOf(key) !== -1);
};

/**
 * Returns true if all the elements are contained in the set, otherwise false
 *
 * @param Array
 */
Set.prototype.containsAll = function (values) {
    'use strict';
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
 * @param Object
 */
Set.prototype.add = function (key) {
    'use strict';
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
 * @param Array
 */
Set.prototype.addAll = function (values) {
    'use strict';
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
 * Removes element from set
 *
 * @param Object
 */
Set.prototype.remove = function (key) {
    'use strict';
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
 * Removes from the set all of its elements that are contained in the specified array
 *
 * @param Array
 */
Set.prototype.removeAll = function (values) {
    'use strict';
    if (values && values instanceof Array) {
        for (var i = 0, len = values.length; i < len; i += 1) {
            this.remove(values[i]);
        }
    }
    return this;
};