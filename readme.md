## This library is a wrapper of the event in france ! 💓


### Install

```bash
 $ npm install
 ```
### Use 

```bash
 $ node index.js
 ```

#### CMD 

```bash
 $ cd tests 
 $ mocha test.js
 ```

```bash
 eslint . --ext .js  
 ```


### Example

```js
const festivalCity = new FestivalCity();

festivalCity.getFestivalsCity("Marseille")
    .then(festivals => {
        console.log(festivals);
    })
    .catch(error => {
        console.error('Error:', error);
    });

```

#### Licscence MIT - 2019
