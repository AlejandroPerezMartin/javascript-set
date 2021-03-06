JavaScript Set (JS-Set)
=======================

JavaScript implementation of Set, a data structure to store non-repeated values.


## Include in your project

Load the script before using it.

In the example below, the script is loaded in the head of an HTML file:

```html
<html>
    <head>
      ...
        <script src="js-set.js"></script>
      ...
    </head>
      ...
</html>
```

## Create an instance of JS-Set
To create an instance of the JS-Set and start using it, just type: `var mySet = new Set();`

## Methods
The list of available methods:

- ### getSet()
Returns the set as an array `mySet.getSet()`

- ### size()
Returns number of elements in the Set `mySet.size()`

- ### get()
Returns the n-th object in the set `mySet.getSet(3)`:

- ### add()
Inserts single objects into the Set
`mySet.add("foo")`.
_If the object is already in the Set it's not added._

- ### addAll()
Inserts an array of objects into the Set
`mySet.addAll(["bar", 1, 2, 3, [4, "five"], "six"])`
_Objects that are already in the Set are not added._

- ### remove()
Removes object from Set: `mySet.remove("foo")`

- ### removeAll()
Removes an array of objects from the Set: `mySet.removeAll([1, 2, "six"])`.

- ### contains()
Returns true if key is in the set, otherwise false `mySet.contains("foo")`.

- ### containsAll()
Returns true if all the elements of the given array are contained in the set, otherwise false `mySet.containsAll([1, 2, "six"]);`.

- ### clear()
Empties Set: `mySet.clear()`

## Example of use
Comments represent outputs:

```javascript

var mySet = new Set();

mySet.add("foo"); // ["foo"]
mySet.add("foo"); // ["foo"] not added, already in the Set

mySet.addAll(["foo", 1, 2, "bar", 3, 4]); // ["foo", 1, 2, "bar", 3, 4]

mySet.getSet(); // ["foo", 1, 2, "bar", 3, 4]

mySet.size(); // 6

mySet.get(3); // "bar"

mySet.remove("foo"); // [1, 2, "bar", 3, 4]

mySet.removeAll([1, "bar", 2]); // [3, 4]

mySet.contains("bar"); // false
mySet.contains(4); // true

mySet.containsAll(["bar", 4]); // false
mySet.containsAll([4, 3]); // true

// Method chaining
mySet.add(1).add(2).remove(2).addAll([3, 4, 5]).getSet(); // [1, 3, 4, 5]

mySet.clear(); // []
```

## Author
Alejandro Perez Martin: https://www.linkedin.com/in/aleperez92
