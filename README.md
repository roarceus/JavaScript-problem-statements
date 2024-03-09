# JavaScript Problem Statements
Run the command ```npm run start``` to execute index.js

## Iterables

### Problem 1
The input argument messages is an array containing a list of messages in the order was received from a message broker. This method removes the messages in the order it was received from the array and prints word count in each message.
Eg:
```
const messages = ['Object created', 'Object is being processing', 'Object processing completed'];
readMessages(messages);
Output -  2, 4, 3
@param {Array} messages the array of strings
```
### Problem 2
This method filters the items based on the predicate function and returns a new array with the filtered items. This implementation should not use the Array.prototype.filter(). The predicate function will return true if the item needs to returned and false if the item needs to be ignored.
```
@param {Array} items the array of items
@param {Function} predicate the predicate function
@returns {Array} the new filtered array
```

## Objects
This function deep clones any JavaScript object and returns the cloned object. No extrenal library should be use to implement this.
```
@param {Object} objectToClone the object to clone.
@returns {Object} the cloned object
```

## Selectors
A Node represents an HTML Element. A node can have a tag name, a list of CSS classes and a list of children nodes.
```
export class Node {

    @param {String} tag the tag name
    @param {Array} children the children nodes
    @param {Array} classes the css classes
    @param {String} id the node id
    
    constructor(tag, children, classes,id) {
      // Tag name of the node.
      this.tag = tag;
      // Array of CSS class names (string) on this element.
      this.classes = classes;
      // Array of child nodes.
      this.children = children; // All children are of type Node
      this.id = id;
    }
}
```
```
Returns all nodes matching the class selector.

For example:
<div class="container">
  <div id="box-1" class="box"></div>
  <div id="box-2" class="box">
      <div id="box-2-1" class="box"></div>
  </div>
  <div id="box-3" class="box">
    <div class="content"></div>
  </div>
</div>
Selector `box` should return 4 div nodes in this order
box-1 -> box-2-1 -> box-2 -> box-3.
@param {string} the selector string.
@returns {Array} Array of selected nodes.
@public
```
