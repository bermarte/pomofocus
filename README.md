> ...

## Getting Started

This repository comes with some nice extras like testing, documentation and CI, but in it's heart it's just an HTML/CSS/JS website boilerplate.

### Development

To run this project locally you will need to open `index.html` in your browser using a local server. _LiveServer_, `http-server`, `study-lenses`, or any other local static server will work.

### Deployment

Push your changes, turn on GitHub pages, that's all!

When your project is deployed to GitHub pages there will be buttons rendered at the top of your page to validate your HTML, CSS, accessibility and spelling, plus a link back to the project repository.

### Installing Dependencies

There are no dependencies needed to run the website, everything is prepared to work with vanilla JavaScript. However, if you want to run tests or if you want to generate documentation for your project you will need to install the development dependencies:

- `npm install`

### Documentation

To document your project you will need to write a JSDoc comment for each function in the `/handlers` and `/app/todos.js`. You will also want to add an entry to the JSDoc in `/data.js` for each property you store in the object.

The JSDoc comments you write in the `/src` folder will be used to re-write the `DOCS.md` file each time you run `npm run document` from the root of your project.

### Testing

After installing the dev dependencies you can start writing and running tests for your .js files. Careful! In this project starter you can only test code that does not interact with the DOM, so only the `src/app/todos.js` functions will be testable (`view` methods will be tested in Node.js using `jsdom`). There are two options for running tests:

- _Individually_: You can run the tests in a single `.spec.js` using the VSCode debugger. Open the spec file you want to run, open the debugger pane, select the "current .spec.js file" option, then start debugging!
- _All at Once_: You can also run every `.spec.js` in the `/src` directory at the same time using `npm run test`. When you run the `npm run test` command all test results will be logged to the console, and a report file will be generated next to each spec file. These report files will be helpful when reviewing PRs to the `main`/`master` branch.

### Continuous Integration

This repository comes with a GitHub Action to re-build the documentation and run all the tests whenever you push to `master`/`main`, and each time you open a PR to `master`/`main`. You don't need to do anything, it works!

Having this CI action means that your master branch will always have the most up-to-date documentation, and that you can easily check test results when reviewing Pull Requests.

> ...
