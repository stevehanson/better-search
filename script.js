function resolve(query, routes) {
  let match;
  let args = "";
  if (query in routes) {
    match = routes[query];
  } else {
    let q = query;
    while (q.includes("/")) {
      q = q.slice(0, q.lastIndexOf("/"));
      args = query.slice(q.length + 1);
      if (q in routes) {
        match = routes[q];
        break;
      }
    }
  }

  if (match) {
    if (!match.startsWith("http")) {
      match = `https://${match}`;
    }
    match = match.replace("%s", args);
    return match;
  }
}

// execute using search params, redirect
function execute() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");

  const result = resolve(q, window.routes);
  console.log("result", result);

  if (result) {
    window.location.href = result;
  } else {
    document.body.innerHTML = `Not found: ${q}.`;
  }
}

if (typeof window != "undefined") {
  execute();
}

// export is for tests only
if (typeof module !== "undefined") {
  module.exports = { resolve };
}
