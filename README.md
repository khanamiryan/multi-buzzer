This project uses [Create React App](https://github.com/facebookincubator/create-react-app) boilerplate.

## Table of Contents

- [Countdown Timer](#countdown-timer)
  - [Start Countdown](#start-countdown)
  - [Pause Countdown](#pause-countdown)
  - [Reset Countdown](#reset-countdown)
  - [Decrease Time](#decrease-time)
  - [Increase Time](#increase-time)
- [Buzzers](#buzzers)
  - [Switch Button](#switch-button)
  
## Countdown Timer

There is a simple countdown timer with default time set to 1 minute. When countdown is in progress app is making ticking sound. Also when there is little time left timer changes color to danger.

### Start Countdown

Start button starts countdown timer from given time.

### Pause Countdown

Pause button pauses countdown timer, so later on we can continue from moment we stopped.

### Reset Countdown

Reset button resets countdown timer and set value back to 1 minute.

### Decrease Time

Minus in the left side of timer decreases time for 15 seconds.

### Increase Time

Plus in the right side of timer increases time for 15 seconds.

## Buzzers

Buzzers use [socket.io](https://socket.io/) to get pushed data and change state of buzzer buttons. It has open connection in ```http://localhost:5000```.
 
### Switch Button

Switch Button toggles connection with server.