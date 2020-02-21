'use strict';

function getDogImage(breed) {
  fetch (`https://dog.ceo/api/breed/${breed}/images/random`)
    //'https://dog.ceo/api/breeds/image/random'//)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  if (responseJson.status=="error"){
    $('.results-img').replaceWith(
    "breed Not found"
      )
    console.log(responseJson);
  } 
  else{
    $('.results-img').replaceWith(
        `<img src="${responseJson.message}" class="results-img">`
      )
  }
  //replace the existing image with the new one
 
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('#random').submit(event => {
    event.preventDefault();
    getDogImage("hound");
  });
  $('#breed').submit(event => {
    event.preventDefault();
    const userInput=$("#userInput").val()
    getDogImage(userInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});