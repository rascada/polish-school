'use strict';

export default function(lower, higher) {
  let range = [];

  while (lower <= higher) {
    range.push(lower++);
  }
  return range;
}
