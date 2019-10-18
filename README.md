# dicegame-js
This is a Dice Game created in conjunction with [The Complete JavaScript Course 2019: Build Real Projects!](https://www.udemy.com/share/101WfeAEcYd11RRw==/) on Udemy.
Having completed this section of the course in the past, completing this project has served as a refresher for my basic JavaScript knowledge.

## Coding Notes

In this section, I will be writing any JavaScript programming notes which I feel will benefit me with any future programs I write using JS.

## Section 4: JavaScript in the Browser - DOM Manipulation and Events

### DOM Manipulation

#### Selecting elements from the webpage

There are many ways that you can select an element from the HTML page. Below is one way:

```javascript
// ... = The ID or class you want to select, e.g. #dice or .mainContainer
document.querySelector('...');
```

#### DOM Properties

Once you select an element from the DOM, you can manipulate it by accessing a property associated with the element.
Examples:

- **.textContent**: Alter the text that is displayed within the HTML tags.
- **.innerHTML**: Alther the actual HTML that is written for a particular element.

### Events and Event Listeners

- **Events**: A particular occurrence of something happening on the webpage, which the code is able to recognise and take action from.
- **Event Listener**: A function performing some action, only when a specific event happens.

*Creating an event listener on a button, waiting for the user to click:*

```javascript
document.querySelector('#buttonID').addEventListener('click', function(){
    // Code here
});
```

#### State Variables

Definition: Tells us the state of a system. For example, is a game in a **playing** state or **finished** state?

How to use: Declare a boolean variable and use the value of it to determine what the system should / shouldn't do. 