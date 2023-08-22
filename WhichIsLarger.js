// Return Which Function Has The Large Value;

function whichIsLarger(f, g) {
  if (f > g) {
    return "f";
  }

  if (g > f) {
    return "g";
  }
}

console.log(
  whichIsLarger(
    () => 5,
    () => 5000
  )
);
