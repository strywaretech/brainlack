

// why dont we make every letter be a series of [ and ]
// and seperate it with | or something yeah great idea.

// imma make an array for that brb lemme just make an example

[][[|]]]]|][]|][][|][][|]][]|[[[]]]]]|]][|[[[

const encoding = [
  "[[", // a
  "[]", // b
  "]]", // c
  "][", // d
  "[[[", // e
  "[]]", // f
  "][[", // g
  "]][", // h
  "][]", // i
  "[][", // j
  "]]]", // k
  "[[[[", // l
  "[][]", // m
  "][][", // n
  "[[]]", // o
  "[][[", // p
  "][]]", // q
  "]]]]", // r
  "[[[]", // s
  "]][]", // t
  "[[][", // u
  "[[[]", // v
  "[]][", // w
  "]][[", // x
  "[[[[[", // y
  "[][[]", // z
  "[[][]", // 1
  "[][][", // 2
  "[[][]]", // 3
  "[[[[]", // 4
  "[[][]]", // 5
  "[[]][]", // 6
  "[[[]]", // 7
  "[[[]]]", // 8
  "[]][]]", // 9
  "[[[]]", // 0
  "[[][]]", // .
  "[[[]]]]]", // (
  "[[][]]]", // )
  "[[][[[]", // _
];
// we also need a list of commands: print
console.log(encoding);