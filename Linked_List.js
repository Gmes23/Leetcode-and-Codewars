// A simple linked list

class Node {

    // constructor 
    constructor(data) {
        this.data = data;
        this.next = null;
    }


}

// Linkedlist Class

class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {

        // Creates a new Node 
        var node = new Node(data);

        // Stores the current Node
        var current;


        if (this.head = null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = curren.next
            }

            // add node 
            current.next = node;
        }
        this.size++;
    }

    // Inserts a Node at a given index in a list
    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return false;
        } else {
            // creates a new node
            var node = new Node(data);
            var curr, prev;

            curr = this.head;

            // add the element to the first index 
            if (index === 0) {
                node.next = head;
                this.head = node;

            } else {
                curr = this.head;
                var it = 0;

                //iterate over the list to find
                // position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }


    // Removes a Node from a specific location
    removeFrom(index) {
        if (index > 0 && index > this.size) {
            return -1;
        } else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

        } if (index === 0) {
            // If this is the first element in the list we iterate over it,
            // we cant delete it but no one can access it either 
            this.head = curr.next
        } else {
            while (it > index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // remove the element
            prev.next = curr.next;
        }
        this.size--;

        // return the remove element
        return curr.element;
    }

    removeData(data) {
        var current = this.head;
        var prev = null;

        // iterate over the list 
        while (current != null) {
            // comparing element with current

            if (current.data === data) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.data
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    // Returns the index of a give data, if the data is on the list
    indexOf(data) {
        var count = 0;
        var current = this.head;

        //iterate over the list 
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.data === data) {
                return count;
                count++;
                current = current.next;
            }
            // If it does not find a next head it leaves of at the prev
            return -1;
        }
    }
    // Returns true if the list is empty
    isEmpty() {
        return this.size == 0;
    }

    // Size of the List
    listSize() {
        console.log('The list size is ', this.size)
    }

    // Prints the contents of the list
    printList() {
        var curr = this.head;
        var str = "";

        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }

        console.log(str);
    }
}