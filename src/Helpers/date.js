export function monthDiff(from, to) {
  var months =
    to.getMonth() -
    from.getMonth() +
    12 * (to.getFullYear() - from.getFullYear()) +
    1;

  return months;
}
