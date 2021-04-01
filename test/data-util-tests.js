import assert from 'assert'
import { filterOutCSVFilesFromArgumentArray, convertPathToFileName } from '../data-utils.js';
import InputError from '../errors/input-error.js';


describe('Data Util Tests', function () {
    describe('Filter CSV Files from Argument Array', function () {

        let arrayOne = ["dog", "cat", "./dogs.csv", "./cats.csv", "./birds.csv"]
        let arrayTwo = ["dog", "cat"]
        let arrayThree = ["dog", "cat", "./dogs.csv"]

        it('should return an array with 3 items when passed an array with 3 .csv files', function () {
            let response = filterOutCSVFilesFromArgumentArray(arrayOne)
            assert.strictEqual(response.length, 3);
        });

        it('should not throw an InputError when passed an array with 3 .csv files', function () {
            assert.doesNotThrow(() => { filterOutCSVFilesFromArgumentArray(arrayOne) }, InputError);
        });

        it('should throw an InputError when passed an array no .csv files', function () {
            // let response = filterOutCSVFilesFromArgumentArray(arrayTwo)
            assert.throws(() => { filterOutCSVFilesFromArgumentArray(arrayTwo) }, InputError);
        });

        it('should throw an InputError when passed an array containing one .csv file', function () {
            // let response = filterOutCSVFilesFromArgumentArray(arrayThree)
            assert.throws(() => { filterOutCSVFilesFromArgumentArray(arrayThree) }, InputError);
        });
    });


    //I'm not sure what edge cases I really need to test for here, 
    //by the time we've gotten this far we know the path ends in .csv 
    //and the parsing function are ensuring the file is valid.

    describe('Convert Path To FileName', function () {
        let filePathOne = "./user/home/workspace/combiner/fixtures/example.csv"
        let expectedFileName = "example.csv"
        it('should return the file name when passed a vaild file path', function () {
            let fileName = convertPathToFileName(filePathOne)
            assert.strictEqual(fileName, expectedFileName);
        });
    });



});