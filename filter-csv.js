export const filterOutCSVs = (arr) => {
    return arr.filter(path => path.endsWith(".csv"))
}