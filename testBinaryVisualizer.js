const nodeIds = [
    'L',
    'F',
    'O',
    'C',
    'I',
    'R',
    'A',
    'D',
    'P',
    'X',
    'Q',
    'U',
    'Z'
  ]
  
  const binarySearchTree  = {
    kind: { graph: true },
    nodes: nodeIds.map((id) => ({ id })),
    edges: [
      {
        from: 'L',
        to: 'F'
      },
      {
        from: 'L',
        to: 'O'
      },
      {
        from: 'F',
        to: 'C'
      },
      {
        from: 'F',
        to: 'I'
      },
      {
        from: 'C',
        to: 'A'
      },
      {
        from: 'C',
        to: 'D'
      },
      {
        from: 'O',
        to: 'R'
      },
      {
        from: 'R',
        to: 'P'
      },
      {
        from: 'P',
        to: 'Q'
      },
      {
        from: 'R',
        to: 'X'
      },
      {
        from: 'X',
        to: 'U'
      },
      {
        from: 'X',
        to: 'Z'
      }
    ]
  }
  
  debugger

//   save this as test.js
// run debug on it, open debug view
// and then type
// JSON.stringify(binarySearchTree)
// in the Debug Visualizer pane
// it needs a JSON string
// not an object