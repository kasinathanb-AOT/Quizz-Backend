export const quiz = {
  levels: {
    easy: {
      totalQuestions: 15,
      perQuestionScore: 5,
      questions: [
        {
          question:
            "Which function is used to serialize an object into a JSON string in Javascript?",
          choices: ["stringify()", "parse()", "convert()", "None of the above"],
          type: "MCQs",
          correctAnswer: "stringify()",
        },
        {
          question:
            "Which of the following keywords is used to define a variable in Javascript?",
          choices: ["var", "let", "var and let", "None of the above"],
          type: "MCQs",
          correctAnswer: "var and let",
        },
        {
          question:
            "Which of the following methods can be used to display data in some form using Javascript?",
          choices: [
            "document.write()",
            "console.log()",
            "window.alert",
            "All of the above",
          ],
          type: "MCQs",
          correctAnswer: "All of the above",
        },
        {
          question: "How can a datatype be declared to be a constant type?",
          choices: ["const", "var", "let", "constant"],
          type: "MCQs",
          correctAnswer: "const",
        },
        {
          question:
            "What is the output of the following code: console.log(typeof null);",
          choices: ["null", "undefined", "object", "string"],
          type: "MCQs",
          correctAnswer: "object",
        },
        {
          question:
            "Which method is used to add an element at the end of an array in Javascript?",
          choices: ["push()", "pop()", "shift()", "unshift()"],
          type: "MCQs",
          correctAnswer: "push()",
        },
        {
          question: 'What does the "===" operator do in Javascript?',
          choices: [
            "Assigns a value",
            "Compares both value and type",
            "Compares value only",
            "None of the above",
          ],
          type: "MCQs",
          correctAnswer: "Compares both value and type",
        },
        {
          question:
            "Which event occurs when the user clicks on an HTML element?",
          choices: ["onchange", "onclick", "onmouseclick", "onmouseover"],
          type: "MCQs",
          correctAnswer: "onclick",
        },
        {
          question:
            "What is the correct syntax to create a function in Javascript?",
          choices: [
            "function = myFunction()",
            "function myFunction()",
            "function:myFunction()",
            "function => myFunction()",
          ],
          type: "MCQs",
          correctAnswer: "function myFunction()",
        },
        {
          question:
            "Which of the following is a valid type of function javascript supports?",
          choices: [
            "named function",
            "anonymous function",
            "Both of the above",
            "None of the above",
          ],
          type: "MCQs",
          correctAnswer: "Both of the above",
        },
        {
          question: "How can you add a comment in a JavaScript?",
          choices: [
            "//This is a comment",
            "<!--This is a comment-->",
            "*This is a comment*",
            "#This is a comment",
          ],
          type: "MCQs",
          correctAnswer: "//This is a comment",
        },
        {
          question: "What is the correct way to write a JavaScript array?",
          choices: [
            'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
            'var colors = (1:"red", 2:"green", 3:"blue")',
            'var colors = ["red", "green", "blue"]',
            'var colors = "red", "green", "blue"',
          ],
          type: "MCQs",
          correctAnswer: 'var colors = ["red", "green", "blue"]',
        },
        {
          question: "How do you round the number 7.25, to the nearest integer?",
          choices: [
            "rnd(7.25)",
            "round(7.25)",
            "Math.round(7.25)",
            "Math.rnd(7.25)",
          ],
          type: "MCQs",
          correctAnswer: "Math.round(7.25)",
        },
        {
          question: "JavaScript is the same as Java.",
          choices: ["True", "False"],
          type: "MCQs",
          correctAnswer: "False",
        },
        {
          question: "How do you declare a JavaScript variable?",
          choices: [
            "var carName;",
            "variable carName;",
            "v carName;",
            "carName = var;",
          ],
          type: "MCQs",
          correctAnswer: "var carName;",
        },
      ],
    },
    moderate: {
      totalQuestions: 10,
      perQuestionScore: 10,
      questions: [
        {
          question:
            "Which method is used to remove the last element from an array in Javascript?",
          choices: ["pop()", "push()", "shift()", "unshift()"],
          type: "MCQs",
          correctAnswer: "pop()",
        },
        {
          question: 'What does "use strict" do in JavaScript?',
          choices: [
            "Enforces stricter parsing and error handling in your code",
            "Disallows undeclared variables",
            "Both of the above",
            "None of the above",
          ],
          type: "MCQs",
          correctAnswer: "Both of the above",
        },
        {
          question:
            'What is the difference between "==" and "===" in JavaScript?',
          choices: [
            "No difference",
            "== compares values, === compares values and types",
            "== compares values and types, === compares values",
            "None of the above",
          ],
          type: "MCQs",
          correctAnswer: "== compares values, === compares values and types",
        },
        {
          question: "How do you create an object in JavaScript?",
          choices: [
            "var obj = {};",
            "var obj = Object();",
            "var obj = new Object();",
            "All of the above",
          ],
          type: "MCQs",
          correctAnswer: "All of the above",
        },
        {
          question:
            "What will be the output of the following code: console.log(0.1 + 0.2 === 0.3);",
          choices: ["true", "false"],
          type: "MCQs",
          correctAnswer: "false",
        },
        {
          question: "What does the Array.prototype.map() method do?",
          choices: [
            "Creates a new array with the results of calling a provided function on every element in the calling array",
            "Executes a provided function once for each array element",
            "Creates a new array with all elements that pass the test implemented by the provided function",
            "None of the above",
          ],
          type: "MCQs",
          correctAnswer:
            "Creates a new array with the results of calling a provided function on every element in the calling array",
        },
        {
          question: "What is NaN in JavaScript?",
          choices: [
            "Not a Number",
            "A value that represents an undefined or unrepresentable value",
            "Both of the above",
            "None of the above",
          ],
          type: "MCQs",
          correctAnswer: "Both of the above",
        },
        {
          question:
            "What is the purpose of the Array.prototype.reduce() method?",
          choices: [
            "Executes a reducer function on each element of the array, resulting in a single output value",
            "Creates a new array with all elements that pass the test implemented by the provided function",
            "Creates a new array with the results of calling a provided function on every element in the calling array",
            "None of the above",
          ],
          type: "MCQs",
          correctAnswer:
            "Executes a reducer function on each element of the array, resulting in a single output value",
        },
        {
          question: "What is a closure in JavaScript?",
          choices: [
            "A function having access to the parent scope, even after the parent function has closed",
            "A block of code that executes as soon as it is defined",
            "Both of the above",
            "None of the above",
          ],
          type: "MCQs",
          correctAnswer:
            "A function having access to the parent scope, even after the parent function has closed",
        },
        {
          question:
            'What will the following code output? console.log(1 + "1" - 1);',
          choices: ["11", "2", "10", "0"],
          type: "MCQs",
          correctAnswer: "10",
        },
      ],
    },
    hard: {
      totalQuestions: 10,
      perQuestionScore: 15,
      questions: [
        {
          question:
            "What will be the output of the following code: console.log([] + []);",
          choices: ['""', "[]", "undefined", "TypeError"],
          type: "MCQs",
          correctAnswer: '""',
        },
        {
          question:
            "Which of the following is a feature of JavaScript Promises?",
          choices: [
            "They allow you to associate handlers with an asynchronous action's eventual success value or failure reason",
            "They make asynchronous code look and behave a little more like synchronous code",
            "They help to avoid callback hell",
            "All of the above",
          ],
          type: "MCQs",
          correctAnswer: "All of the above",
        },
        {
          question: 'What is the purpose of the "super" keyword in JavaScript?',
          choices: [
            "It is used to call the constructor of the parent class",
            "It is used to access properties on an object",
            "Both of the above",
            "None of the above",
          ],
          type: "MCQs",
          correctAnswer:
            "It is used to call the constructor of the parent class",
        },
        {
          question: 'What is the purpose of the "bind" method in JavaScript?',
          choices: [
            'Creates a new function that, when called, has its "this" keyword set to the provided value',
            "Binds an event to a DOM element",
            "Both of the above",
            "None of the above",
          ],
          type: "MCQs",
          correctAnswer:
            'Creates a new function that, when called, has its "this" keyword set to the provided value',
        },
        {
          question:
            "What is the output of the following code: console.log(typeof NaN);",
          choices: ["number", "undefined", "object", "string"],
          type: "MCQs",
          correctAnswer: "number",
        },
        {
          question:
            "Which method is used to merge two or more arrays in JavaScript?",
          choices: ["concat()", "merge()", "join()", "combine()"],
          type: "MCQs",
          correctAnswer: "concat()",
        },
        {
          question:
            'What is the purpose of the "Object.freeze()" method in JavaScript?',
          choices: [
            "Prevents new properties from being added to an object",
            "Prevents existing properties from being removed",
            "Prevents existing properties, or their enumerability, configurability, or writability, from being changed",
            "All of the above",
          ],
          type: "MCQs",
          correctAnswer: "All of the above",
        },
        {
          question:
            'Which of the following is true about the "this" keyword in JavaScript?',
          choices: [
            '"this" refers to the object from where it was called',
            '"this" refers to the global object in non-strict mode and undefined in strict mode',
            "Both of the above",
            "None of the above",
          ],
          type: "MCQs",
          correctAnswer: "Both of the above",
        },
        {
          question:
            "What is the output of the following code: console.log(0.1 + 0.2);",
          choices: [
            "0.3",
            "0.30000000000000004",
            "0.29999999999999993",
            "None of the above",
          ],
          type: "MCQs",
          correctAnswer: "0.30000000000000004",
        },
        {
          question:
            "Which method is used to remove whitespace from the beginning and end of a string in JavaScript?",
          choices: ["trim()", "strip()", "cut()", "chop()"],
          type: "MCQs",
          correctAnswer: "trim()",
        },
      ],
    },
  },
};
