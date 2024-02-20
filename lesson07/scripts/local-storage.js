const input = document.querySelector("#favChap");
const list = document.querySelector("#list");
const button = document.querySelector("button");

//  Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList
const chaptersArray = getChapterList() || [];

// if there's something in the chaptersArray, display list
chaptersArray.forEach(chapter => {
    displayList(chapter);
  });


  button.addEventListener('click', () => {
    if (input.value != '') {  // make sure the input is not empty
      displayList(input.value); // call the function that outputs the submitted chapter
      chaptersArray.push(input.value);  // add the chapter to the array
      setChapterList(); // update the localStorage with the new array
      input.value = ''; // clear the input
      input.focus(); // set the focus back to the input
    }
  });


  const displayList(item)