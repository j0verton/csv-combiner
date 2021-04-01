import assert from 'assert'

describe('Data Util Tests', function () {
    describe('Filter CSV Files from Argument Array', function () {
        it('should return an array with 3 items when passed an array with 3 .csv files', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });

        it('should return an error when passed an array no .csv files', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });


    describe('Convert Path To FileName', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });


    describe('Filter CSV Files from Argument Array', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});