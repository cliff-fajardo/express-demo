
## Install Node
1. Download latest from https://nodejs.org/en
2. Confirm node install in Terminal

    `node --version`
3. Create project directory with first `app.js` file
4. Run app in terminal: `node app.js`


## Node Module System

Every file in the Node is considered a module.  Variables or functions declared within these files are only accessible if that module is **`exported`**.

### Loading A Module
1. Use `require()` to load a module

   Ex: `require('./logger.js')`

1. Operating System (OS)
2. File System (fs)
3. Events 
4. http

### Events Module
Used to emit and listen to events (actions) 

```
const EventEmitter = require('events');

//instantiate an EventEmitter object
emitter = new EventEmitter()

//Register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called')
});

//Raise an event
emitter.emit('messageLogged');
```

Raise an event with arguments using the arrow function (for simplicity)
```
//Register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
});

//Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'});
```