class InputError extends Error {
    name = 'InputError'
    message = `please pass a more than one .csv file to the application so they can ben combined\
    use the following format\
    $ -file path of application- -file path of .csv file- -file path of additional .csv files- -(add as many csv files as you like)- > -destination .csv file-\
    $./csv-combiner.js ./fixtures/accessories.csv ./fixtures/clothing.csv > combined.csv`

}
export default InputError;