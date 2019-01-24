export const toTitleCase = string =>
  string
    .toLowerCase()
    .charAt(0)
    .toUpperCase() + string.slice(1)
