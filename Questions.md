## 1. What is the difference between Component and PureComponent? Give an example where it might break an app.

The main difference is PureComponent implements ShouldComponentUpdate on its own. Whereas with Component one has to call this function.  This means that PureComponent will automatically update anytime there is a change to props or state. This is done with a shallow comparison. The only way I can think of it breaking an app would be, if the shallow comparison doesn't register a change thus the Child component will not update.

## 2. Context + ShouldComponentUpdate might be dangerous. Can you think of why?

Assuming this is talking about ContextAPI I would imagine that it can cause, similar to a recursion loop with no break statement, an infinite loop of them causing each other to re-render.

## 3. Describe 3 ways to pass information from a component to its Parent.

The way I have used the most to pass info back to a parent is: Create a callback function in the parent. Then pass this function as a prop to the Child. Child component uses callback function through the props and thus sends the data back to parent.

Using a State Container such as Redux will make passing data to the parent possible as well. Thus any data that gets updated in a child component will be passed to the parent.

## 4. Give 2 ways to prevent components from re-rendering.

The most obvious way to prevent this is to use the ShouldComponentUpdate method. One can very clearly tell the component in what case it should re-render. 

Another way to go about this is to use the .memo() function. This allows for storing the result of the component based off inputs, then when the input is the same it will use its cache to provide the component. Thus it will not re-render until any data has changed.

## 5. What is a fragment and why do we need it? Give an example where it might break an app.

It allows for a component to return multiple children elements without having to wrap them in a div. This is helpful for cases where, for cleaner code, you make a child component; however, the parent component is trying to use each of the individual elements in the child component individually. Fragments resolves this issue. 

It could cause incorrect HTML although it is correct React. Therefore breaking the app if not well planned. It can also cause styling issues because the child component wont be wrapped in a div.

## 6. Give 3 examples of the HOC pattern.

HOC is highly used in code that is used in more than one case. For a couple of examples a toggle button. The general component of the toggle button is written once, but its use case changes depending on the component that uses it. Go from toggling a list to toggling dark/light modes. A search bar can be made to be a HOC on an app. In one case it will search blog posts, in the other messages.

## 7. Whats the difference in handling exceptions in promises, callbacks, and async...await.

I honestly don't have a great answer for this question. I have always handled my exceptions; however, I think the differences here will have mostly to do with the way in which the stack works. I don't know, and would love to learn about it.

## 8. How many arguments does setState take and why is it async.

setState takes up to 2 arguments. It is async because it causes the componenets to re-render. This is beneficial because one can call setState multiple times in a single scope and not need to re-render the whole tree everytime it is called.

## 9. List the steps needed to migrate a Class to Function Component.

Assuming this is just a basic general question:

1. If your Class is extending Component that is no longer needed.
2. Change keyword `class` in front of component name to `function`.
3. You can delete the portion of the code in the class where it says `render` and all of the render syntax. `return` alone works.
4. If you have functions or values they must be declared with `let` or `const`.

## 10. List a few ways styles can be used with components.

1. You can inline styles just like you could with HTML elements.
2. You may also use a .css file as I did in this project.
3. You can use style libraries or SCSS or SASS for styling as well.

## 11. How to render an HTML string coming from the server.

You can use the `dangerouslySetInnerHTML` tag. However, as it is so properly named, this is dangerous and the string should be checked/cleaned to make sure it is not a script or any other malicious attempt.

### Finished these questions in about an hour.