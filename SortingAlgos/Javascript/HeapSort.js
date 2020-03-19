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

    In a max heap, all parent elements must be larger than both of their child elements. 
    As we’ll see later, this is really useful for us because we know for sure that the 
    largest number is at the top.
*/


class MinHeap {
    // The constructor method is a special method
    // for creating and initializing an object created within a class.
    constructor(value) {
        // We start with a dummy node at index 0
        this.heap = [null, ...value]
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
        if (this.heap.length > 1) {
            let current = this.heap.length - 1;

            // Traverse up the parent node until the current node is greater then its parent
            // Since we are using an array but heaps are use with trees we use i/2 equation to find 
            // location of the parent, we also use Math.floor to round to nearest lowest integer
            while (current > 1 && this.heap[Math.floor(current / 2)] > this.heap[current]) {
                // Destructuring 
                [this.heap[Math.floor(current / 2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current / 2)]]
                current = Math.floor(current / 2)
            }
        }
    }

    remove() {
        // The smallest element is at index 1
        let smallest = this.heap[1]

        // When there are two elements in the array, we put the right most element at the first
        // position and start comparing nodes with the childe nodes

        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1]
            this.heap.splice(this.heap.length - 1)

            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }
                return smallest
            }

            let current = 1
            let leftChildIndex = current * 2
            let rightChildIndex = current * 2 + 1

            while (this.heap[leftChildIndex] &&
                this.heap[rightChildIndex] &&
                (this.heap[current] < this.heap[leftChildIndex] ||
                    this.heap[current] < this.heap[rightChildIndex])) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
                    current = leftChildIndex
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]]
                    current = rightChildIndex
                }

                leftChildIndex = current * 2
                rightChildIndex = current * 2 + 1
            }
        }
        // If there are only two elements in the array, we directly splice out the first element

        else if (this.heap.length === 2) {
            this.heap.splice(1, 1)
        } else {
            return null
        }

        return smallest

    }

}
let minSort = new MinHeap()
var sorted1 = minSort.insert([1, 2, 43, 2])
console.log(sorted1)

// create max heap
function maxHeap(input, i) {
    const left = 2 * i + 1
    const right = 2 * i + 2
    let max = i

    if (left < arrLength && input[left] > input[max]) {
        max = left
    }

    if (right < arrLength && input[right] > input[max]) {
        max = right
    }

    if (max != i) {
        swap(input, i, max)
        maxHeap(input, max)
    }
}

function swap(input, indexA, indexB) {
    const temp = input[indexA]

    input[indexA] = input[indexB]
    input[indexB] = temp
}

function heapSort(input) {
    arrLength = input.length
    // -= is the same as x = x - y 
    for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
        maxHeap(input, i)
    }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i)
        arrLength--

        maxHeap(input, 0)
    }
    return
}

let arrLength

const list = [4, 2, 3, 1, 5]

const sorted = heapSort(list)

console.log(list)