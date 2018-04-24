 /**
 * @Author Whiteford, Parker (pwhiteford02@gmail.com)
 * @version 0.0.1
 * @summary code stuff
 *@todo Everything
* */

"use strict";
const Prompt = require('readline-sync');

let answer, answer2, setMoviename
let movieTitle = []
function main() {
decideRoute();


main();

function decideRoute() {
answer = Prompt.question(`welcome to movie review data-base what would you like to do?
if you would like to rate a movie say type 1 
if you would like to see other ratings type 2
if you would like to see the rating of a specific movie please type 3: `);

if(answer > 3 || answer < 1){
    process.stdout.write('\x1Bc');
    console.log(`sorry this is an invalid choice please choose again.`);
    return decideRoute();
}

if(answer = 1){
    return nameMovie;
}

if(answer = 2){
    return movieRatings;
}
if(answer = 3){
    return specificRating;
}

}

function nameMovie(){
movieTitle[0] = Prompt.question(`what is the name of the movie you would like to review?`);
answer = Prompt.question(`would you like to rate another movie? yes or no `);
if(answer = no){
    return decideRoute()
}
    if(answer = yes){
        return nameMovie()
    }
}

function ratemovie(){
    answer = Prompt.question(`how many stars do you rate ${movieTitle} out of 10`)
    if (10 > answer || answer < 1) {
        console.log(`your entry is not between 1 and 10`);
        return ratemovie();
}




}

function



