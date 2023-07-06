This repository contains a library of the event in france 
you can choose a city and get all the festival in this city
or you can choose a date and get all the festival in this date !
Also you can get the festival depending on the region! 🇫🇷 🇫🇷
---

### Install 🛰 ️

```bash
npm i rendu2-lib-malaterre-romain
 ```
### Use 

```bash
 $ node index.js
 ```

####  test

```bash
 $ cd tests 
 $ mocha test.js
 ```

#### eslint
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

### Contributing 💓
Contributions to this project are welcome.
If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

### License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)

