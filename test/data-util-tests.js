import assert from 'assert'
import { filterOutCSVFilesFromArgumentArray } from '../data-utils.js';
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

        it('should throw an error when passed an array no .csv files', function () {
            // let response = filterOutCSVFilesFromArgumentArray(arrayTwo)
            assert.throws(() => { filterOutCSVFilesFromArgumentArray(arrayTwo) }, InputError);
        });

        it('should throw an error when passed an array containing one .csv file', function () {
            // let response = filterOutCSVFilesFromArgumentArray(arrayThree)
            assert.throws(() => { filterOutCSVFilesFromArgumentArray(arrayThree) }, InputError);
        });
    });


    // describe('Convert Path To FileName', function () {
    //     it('should return -1 when the value is not present', function () {
    //         assert.equal([1, 2, 3].indexOf(4), -1);
    //     });
    // });


    // describe('Filter CSV Files from Argument Array', function () {
    //     it('should return -1 when the value is not present', function () {
    //         assert.equal([1, 2, 3].indexOf(4), -1);
    //     });
    // });
});