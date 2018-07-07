This project uses [Create React App](https://github.com/facebookincubator/create-react-app) boilerplate.

## Table of Contents

- [Countdown Timer](#countdown-timer)
  - [Start Countdown](#start-countdown)
  - [Pause Countdown](#pause-countdown)
  - [Reset Countdown](#reset-countdown)
  - [Decrease Time](#decrease-time)
  - [Increase Time](#increase-time)
- [Buzzers](#buzzers)
  
## Countdown Timer

There is a simple countdown timer with default time set to 1 minute. When countdown is in progress app is making ticking sound. Also when there is little time left timer changes color to danger. This timer is also in control over socket.io connection. When time is up it will close connection with socket server, but will save current state of buzzers.

### Start Countdown

Start button starts countdown timer from given time. It also reopens connection with socket server if it is closed.

### Pause Countdown

Pause button pauses countdown timer, so later on we can continue from moment we stopped. It also closes connection with socket server.

### Reset Countdown

Reset button resets countdown timer and sets value back to 1 minute. It also clears buzzers current state and reopens connection with socket server if it is closed.

### Decrease Time

Minus in the left side of timer decreases time for 15 seconds.

### Increase Time

Plus in the right side of timer increases time for 15 seconds.

## Buzzers

Buzzers use [socket.io](https://socket.io/) to get pushed data and change state of buzzer buttons. It has open connection in ```http://localhost:5000```.