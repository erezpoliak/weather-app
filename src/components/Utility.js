export function convertTemp(temp, system) {
  if (system === "F") return Math.round(((temp - 32) * 5) / 9);
  else return Math.round((temp / 5) * 9 + 32);
}
