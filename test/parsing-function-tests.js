import assert from 'assert'
import chai from 'chai'
import { parseCSVFile, parseHeader } from '../parsing-functions.js';

import path from 'path'
import NoContentError from '../errors/no-content-error.js';

describe('Parsing Function Tests', function () {
    describe('parse CSV File', function () {
        // tests remaining
        // should throw an error if no data is returned 

        let workingCSVPath = './test/test-fixtures/working-five-line.csv';
        let oddDataCSVPath = './test/test-fixtures/odd-data-five-line.csv';
        let blankCSVPath = './test/test-fixtures/blank.csv';
        let errorCSVPath = './test/test-fixtures/with-error.csv';

        let workingCSVExpectedResult = [['one', 'Satchels', 'working-five-line.csv'], ['two', 'Purses', 'working-five-line.csv'], ['three', 'Purses', 'working-five-line.csv'], ['four', 'Wallets', 'working-five-line.csv']]
        let oddDataCSVExpectedResult = [["one", "Blouses", "odd-data-five-line.csv"], ["two", "Cardigans", "odd-data-five-line.csv"], ["three", "Capris", "odd-data-five-line.csv"], ["four", "\"Gingham\" Shorts", "odd-data-five-line.csv"]]
        let withErrorCSVExpectedResult = [["two", "Cardigans", "with-error.csv"], ["three", "Capris", "with-error.csv"], ["four", "\"Gingham\" Shorts", "with-error.csv"]]

        it('should return an array of the data in the .csv file without the header', async function () {
            let response = await parseCSVFile(workingCSVPath)
            assert.strictEqual(response[0][1], workingCSVExpectedResult[0][1]);
        });

        it('should return an array of the data in the .csv file with a new column for the filename', async function () {
            let response = await parseCSVFile(workingCSVPath)
            assert.strictEqual(response[3][3], workingCSVExpectedResult[3][3]);
        });

        it('should return an array containing the entry with the extra set of back-slashes ', async function () {
            let response = await parseCSVFile(oddDataCSVPath)
            assert.strictEqual(response[3][1], oddDataCSVExpectedResult[3][1]);
        });

        it('should remove a line that would throw an error', async function () {
            let response = await parseCSVFile(errorCSVPath)
            assert.deepEqual(response, withErrorCSVExpectedResult);
        });

        let expect = chai.expect

        it('should throw an NoContentError when passed an empty .csv file', function () {
            expect(async () => { await parseCSVFile(blankCSVPath) }).to.throw(NoContentError);
        })
    })

    // write tests for parse header
    describe('parse Header', function () {
        let workingCSVPath = './test/test-fixtures/working-five-line.csv';
        let expectedHeader = [["email_hash", "category", "filename"]]


        it('should return an array with the csv header plus a new colum for filename', async function () {
            let response = await parseHeader(workingCSVPath)
            assert.deepEqual(response, expectedHeader);
        });


    })

    describe('output To CSV', function () {



    })



});

    // try for testing stdout
    // assert.deepEqual(inspect.output, [ "foo\n" ]);
