const { resolve } = require("./script");

const routes = {
  foo: "foo.com",
  "foo/2": "foo.com/2",
  path: "foo.com/%s",
  "path/nested": "foo.com/nested/%s",
};

const expectations = [
  ["foo", "https://foo.com"],
  ["foo/2", "https://foo.com/2"],
  ["path/bar", "https://foo.com/bar"],
  ["path/nested/bar", "https://foo.com/nested/bar"],
  ["invalid", undefined],
];

const failures = [];

expectations.forEach(([q, expected]) => {
  const result = resolve(q, routes);
  if (result !== expected) {
    failures.push(`Expected ${q} -> ${expected}, got ${result}`);
  } else {
    console.log(`Success: ${q} -> ${expected}`);
  }
});

if (failures.length) {
  console.log(
    `\n${expectations.length - failures.length} of ${
      expectations.length
    } tests passed!`
  );
  console.error(`${failures.length} failure/s:`);
  failures.forEach((failure) => console.error(failure));
} else {
  console.log(`\nAll ${expectations.length} tests passed!`);
}
