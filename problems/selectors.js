/**
* A Node represents an HTML Element. A node can have a tag name, a list of CSS
* classes and a list of children nodes.
*/
export class Node {

    /**
     *
     * @param {String} tag the tag name
     * @param {Array} children the children nodes
     * @param {Array} classes the css classes
     * @param {String} id the node id
     */
    constructor(tag, children, classes,id) {
      // Tag name of the node.
      this.tag = tag;
      // Array of CSS class names (string) on this element.
      this.classes = classes;
      // Array of child nodes.
      this.children = children; // All children are of type Node
      this.id = id;
    }

    /**
    * Returns all nodes matching the class selector.
    *
    * For example:
    *
    * <div class="container">
    *   <div id="box-1" class="box"></div>
    *   <div id="box-2" class="box">
    *       <div id="box-2-1" class="box"></div>
    *   </div>
    *   <div id="box-3" class="box">
    *     <div class="content"></div>
    *   </div>
    * </div>
    * Selector `box` should return 4 div nodes in this order
    * box-1 -> box-2-1 -> box-2 -> box-3.
    *
    * @param {string} the selector string.
    * @returns {Array} Array of selected nodes.
    * @public
    */

    search(selector) {
      const resultArray = [];
      // var i = 1; // To debug

      // Function to search for nodes
      const searchNode = (node) => {

          // Search for children nodes first
          if (node.children && node.children.length > 0) {
              node.children.forEach((child) => searchNode(child));
          }

          // console.log(node.classes); // Returns all the classes in the node
          // console.log(node.classes.includes(selector)); // Finding the "box" class
          // Check if the selector is present in the node
          if (node.classes && node.classes.includes(selector)) {
            resultArray.push(node); // push the node in the result array

            // console.log(i); // Debug
            // i++; // Debug
            // console.log(node); // Debug
        }
      };

      // Pass the main node in the function
      searchNode(this);

      return resultArray;  
    }
}