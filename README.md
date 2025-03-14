# Better search engines

## Installation

Download this repository.

In Chrome, go to chrome://settings/searchEngines. Under "Site Search", click "Add". Enter:

* Name: Better Search
* Shortcut: s
* URL: `file://<dir_of_checked_out_repository>/index.html?q=%s`

Save! Now, set up your routes in `routes.js`. Use `%s` substitutions.

## Usage

In the Chrome URL bar, enter `s` then `<space>` then your query. Chrome will pass the query along to the `index.html` file in this repo, which will redirect based on the routes configured in `routes.js`. Use `%s` in `routes.js` to substitute.

For example, given routes file `{ foo: 'foo.com/%s' }`, you could enter `s foo/bar`, and your browser would redirect you to `foo.com/bar`.

## Run tests

Run tests with `node script.test.js`. There are no dependencies to install.
