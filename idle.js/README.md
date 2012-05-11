idle.js
=======

Easy idle user detection via javascript. Monitors movement, key-presses and more in a simple and concise manner.

No third-party support required.

Usage
=====

The script is very simple and easy to use, essentially all you need to know is:

- `setIdler(timeToLive, callback, tickInterval)`

Then you can do stuff like this:

``` javascript
setIdler(2 * 1000, function () {
  alert('You have been idle for two seconds!');
}, 1000);​
```

It doesn't repeat, so if you want to make this repeatable, make it a recursive function.

It has debugging and stuff built in, but those options you will have to edit the script for, if you have a better idea of how to pass in arguments without making the codebase bulky let me know!

Requests
=====

If you have a request let me know through the issues tab above!

License
=====

Licensed under AOL - http://aol.nexua.org
Nijiko Yonskai