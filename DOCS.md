<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [classes](#classes)
  - [Break.js](#srcclassesBreakjs)
  - [Colors.js](#srcclassesColorsjs)
  - [CountDown.js](#srcclassesCountDownjs)
  - [Ico.js](#srcclassesIcojs)
- [handlers](#handlers)
  - [clickDown.js](#srchandlersclickDownjs)
  - [longBreakHandler.js](#srchandlerslongBreakHandlerjs)
  - [pomBreakHandler.js](#srchandlerspomBreakHandlerjs)
  - [sendClick.js](#srchandlerssendClickjs)
  - [shortBreakHandler.js](#srchandlersshortBreakHandlerjs)
  - [startCounterHandler.js](#srchandlersstartCounterHandlerjs)
- [init](#init)
  - [index.js](#srcinitindexjs)
- [listeners](#listeners)
  - [longBreak.js](#srclistenerslongBreakjs)
  - [pomodoroBreak.js](#srclistenerspomodoroBreakjs)
  - [shortBreak.js](#srclistenersshortBreakjs)
  - [startCounter.js](#srclistenersstartCounterjs)
- [data.js](#srcdatajs)

<!-- END TOC -->

<!-- BEGIN DOCS -->

---

Classes and their tests

---

### [./src/classes/Break.js](./src/classes/Break.js?study)

---

### [./src/classes/Colors.js](./src/classes/Colors.js?study)

---

### [./src/classes/CountDown.js](./src/classes/CountDown.js?study)

---

### [./src/classes/Ico.js](./src/classes/Ico.js?study)

[TOP](#DOCS)

---

---

# Handlers

Handler function define user interactions. They will:

- read user input from events and from the DOM
- read and modify program data variables
- process user data with logic functions
- update the DOM to show changes to the user
- log any important information for developers

---

### [./src/handlers/clickDown.js](./src/handlers/clickDown.js?study)

<a name="moveText"></a>

## moveText(btn)

moves 4px down the css element

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| btn   | <code>string</code> | a css selector |

---

### [./src/handlers/longBreakHandler.js](./src/handlers/longBreakHandler.js?study)

<a name="longBreak"></a>

## longBreak()

handles a pomodoro break (15 minutes)

---

### [./src/handlers/pomBreakHandler.js](./src/handlers/pomBreakHandler.js?study)

<a name="pomBreak"></a>

## pomBreak()

handles a pomodoro break (25 minutes)

---

### [./src/handlers/sendClick.js](./src/handlers/sendClick.js?study)

<a name="setColor"></a>

## setColor(btn)

sets the style for the 3 break-buttons (pomodoro, short and long)

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| btn   | <code>string</code> | a css selector |

---

### [./src/handlers/shortBreakHandler.js](./src/handlers/shortBreakHandler.js?study)

<a name="shortBreak"></a>

## shortBreak()

handles a pomodoro break (5 minutes)

---

### [./src/handlers/startCounterHandler.js](./src/handlers/startCounterHandler.js?study)

## Functions

<dl>
<dt><a href="#start">start()</a></dt>
<dd><p>start/stop button toggle</p>
</dd>
<dt><a href="#loadMp3">loadMp3()</a></dt>
<dd><p>loads an audio file</p>
</dd>
</dl>

<a name="start"></a>

## start()

start/stop button toggle

<a name="loadMp3"></a>

## loadMp3()

loads an audio file

[TOP](#DOCS)

---

---

# init

---

### [./src/init/index.js](./src/init/index.js?study)

[TOP](#DOCS)

---

---

# Listeners

Event listeners are used to connect handler functions to user interactions with the DOM.

You can use the same handler in many different listeners, or add more than one listeners to the same DOM element.

---

### [./src/listeners/longBreak.js](./src/listeners/longBreak.js?study)

---

### [./src/listeners/pomodoroBreak.js](./src/listeners/pomodoroBreak.js?study)

---

### [./src/listeners/shortBreak.js](./src/listeners/shortBreak.js?study)

---

### [./src/listeners/startCounter.js](./src/listeners/startCounter.js?study)

[TOP](#DOCS)

---

---

## [./src/data.js](./src/data.js?study)

<!-- END DOCS -->
