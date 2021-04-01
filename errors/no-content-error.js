class NoContentError extends Error {
    constructor(target) {
        message = `Parsing your file ${target} returned no usable data.  Please check to ensure your file 
        is formatted as a CSV(Comma delimited) and that it contains data.`
    }
    name = 'NoContentError'

}
export default NoContentError;