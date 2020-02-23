// function TreeNode(val) {
//         this.val = val;
//          this.left = this.right = null;
//      }


function isMirror(s, t) {
    var q1 = [s], q2 = [t];

    // perform breadth-first-search
    while(q1.length > 0 || q2.length > 0) {
        //dequeue
        var n1 = q1.shift(), n2 = q2.shift();

        // Two null nodes, lets continue
        if (!n1 && !n2) continue;

        // return false as long as there is a mismatch
        if (!n1 || !n2 || n1.val !== n2.val) return false;

        // scan tree s from left to right 
        // and scan tree t from right to left
        q1.push(n1.left); q1.push(n1.right);
        q2.push(n2.right); q2.push(n2.left);
    } 

    return true;
}