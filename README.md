# csv-combiner
This is a console application which takes an input of multiple .csv files and combines them into a single file.


to run the application 

- clone this repo 
- cd into the csv-combiner directory 
- call the application from the command line using the following format:
```
$./csv-combiner.js ./a-csv-file.csv ./as-many-other-files.csv > destination-file.csv
```
for example:

```
$ ./csv-combiner.js ./fixtures/accessories.csv ./fixtures/clothing.csv > combined.csv
```


to run the unit tests use

``` 
npm test 
```
