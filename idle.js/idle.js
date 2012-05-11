// Written By Nijiko Yonskai
// Licensed Under AOL <aol.nexua.org>
(function (name, definition, context) {
  if (!context) context = window;
  if (context && typeof context['define'] != 'undefined' && context['define'] == 'function' && context['define']['amd']) define(name, definition)
  else context[name] = definition()
})('setIdler', function() {
  return function (time, callback, interval) {
    var self = {
      debug: false
    , life: time
    , callback: callback
    , interval: interval || 2000
    , idled: 0
    , timer: null
    , events: [ "click", "touchstart", "touchmove", "touchend", "mousemove", "keypress" ]
    , el: document
    , setup: function () {
        if (self.debug) console.log(self);
        self.listen();
        self.start();
        return self;
      }
    , listen: function (remove) {
        for(var i = 0; i < self.events.length; i++)
          self.el[remove ? 'removeEventListener' : 'addEventListener'](self.events[i], function () { self.reset(); }, false);
      }
    , start: function () {
        self.timer = setInterval(function () { self.tick(); }, self.interval);
      }
    , reset: function () {
        self.idled = 0;
      }
    , stop: function () {
        self.callback();
        self.listen(true);
        clearInterval(self.timer);
        self.timer = null;
      }
    , tick: function () {
        self.idled += self.interval;
        if (self.debug) console.log('tick', self.idled);
        if (self.idled >= self.life) self.stop();
      }
    };

    return self.setup();
  };
}, this);