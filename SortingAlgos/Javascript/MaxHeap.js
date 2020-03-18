/*
    Heap Sorting 
    There are two types of Heap sorting, min and max for now we will doing min.
    The time complexity of various operations performed on a heap with n elements:

    Access the min/max value: O(1)
    Inserting an element: O(log n)
    Removing an element: O(log n)

    Useful info:
    Since a Heap sort is use with trees, but can be represented with an array, we can use these 
    equations to figure out where in the tree the array element is located
        left child: i * 2
        right child: i * 2 +1
        parent: floor(i/2)
*/


class MinHeap {
    // The constructor method is a special method
    // for creating and initializing an object created within a class.
    constructor() {
        // We start with a dummy node at index 0
        this.heap = [null]
    }

    getmin() {
        // Here we access the min element in the array, since we have a dummy element at index 0
        // we start at 1
        return this.heap[1]
    }

    insert(node) {
        // Insert the node to the end of the heap array
        this.heap.push(node);

        // Find the correct position of the new node
        if(this.heap.length > 1) {
            let current = this.heap.length -1;
            
            // Traverse up the parent node until the current node is greater then its parent
            // Since we are using an array but heaps are use with trees we use i/2 equation to find 
            // location of the parent, we also use Math.floor to round to nearest lowest integer
            while(current > 1 && this.heap[Math.floor(current/2)] > this.heap[current]) {
                // Destructuring 
                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]
                current = Math.floor(current/2)
            }
        }
    }

    remove() {
        
    }
}