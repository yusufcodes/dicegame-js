# dicegame-js

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

