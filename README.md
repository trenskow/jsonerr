jsonerr
----

Converts an `Error` object into a JSON encodable object.

# Example

    const jsonerr = require('jsonerr')
    
    let objErr = jsonerr(err)

# Usage
    
    `jsonerr(error, options)`

## Options

| Name | Description | Type | Default Value |
|:-----|:------------|:-----|:--------------|
| `stack` | Include stack (parsed to an array) | `Boolean` | `true` |
| `enumerables` | Include enumerables (custom keys) | `Boolean` | `false` |

## Example output

    { name: 'Error',
      message: 'This is an error',
      stack: [ { 
        function: 'repl', 
        file: undefined, 
        line: 1, 
        pos: 9 
      }, {
        function: 'sigintHandlersWrap',
        file: 'vm.js',
        line: 22,
        pos: 35
      }, { 
        function: 'sigintHandlersWrap',
        file: 'vm.js',
        line: 73,
        pos: 12
      }, { 
        function: 'ContextifyScript.Script.runInThisContext',
        file: 'vm.js',
        line: 21,
        pos: 12
      }, { 
        function: 'REPLServer.defaultEval',
        file: 'repl.js',
        line: 346,
        pos: 29
      }, { 
        function: 'bound', 
        file: 'domain.js', 
        line: 280, 
        pos: 14 
      }, { 
        function: 'eval', 
        file: 'domain.js', 
        line: 293, pos: 12
      }, {
        function: 'REPLServer.<anonymous>',
        file: 'repl.js',
        line: 545,
        pos: 10
      }, { 
        function: 'emitOne', 
        file: 'events.js', 
        line: 101, 
        pos: 20
      }, { 
        function: 'REPLServer.emit',
        file: 'events.js',
        line: 188,
        pos: 7
      } ] }
