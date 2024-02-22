const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

//1. return local storage item, or if empty, assign variable with empty array
let chaptersArray = getChapterList() || [];
// console.log(chaptersArray);

//2. populate the list array
chaptersArray.forEach(chapter => {
    displayList(chapter);
    // console.log("inside chaptersArray.forEach")
    // console.log(chaptersArray);
});

// 3. element.addEventListener(event, function, useCapture);
button.addEventListener("click", ()=> {
    // console.log("Inside eventListener")
    // console.log(input.value);
    
    //check if the input is empty or not
    if (input.value != "")
    {
        displayList(input.value);         //add new input item to list
        chaptersArray.push(input.value);  //add new input item to array
        setChapterList();                 //update local storage with updated/new array
        input.value = "";         //reset input to blank
        input.focus();                    //return focus
        
    }
    // could add hint message if true to the box.
    //return input focus to input if nothing entered when button is clicked.
    else {
        // console.log("inside eventListener else section.")
        input.focus();
    }    
})


// 4. function to display the list
// redo eventListener as function
function displayList(item) {
    // console.log("inside displayList");
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");        
    li.textContent = item;  //changed from input.value
    deleteButton.textContent = "✖";
    deleteButton.classList.add('delete');  //added a new class
    li.append(deleteButton);
    list.append(li);
    
    deleteButton.addEventListener("click", ()=>{
        list.removeChild(li);
        deleteChapter(li.textContent);  //added
        input.focus();
    })    
    //do I need this?
    // input.focus();
    // input.value = "";
}


// 5. Function to set the chapter list in localStorage
function setChapterList() {
    localStorage.setItem('chaptersKey', JSON.stringify(chaptersArray));
}

// 6. Function to get the chapter list from localStorage
function getChapterList() {
    // const storedChapters = localStorage.getItem('chapters');
    // return storedChapters ? JSON.parse(storedChapters) : [];

    // console.log("inside getChaptersList()")
    // console.log(localStorage.getItem('chaptersKey'))    
    return JSON.parse(localStorage.getItem('chaptersKey'));
}
  
// 7.reformat the chapter parameter to get rid of the X that is passed on hte end of hte chapter string
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    //return everything in the chapterArray except the chapter to be deleted.
    chaptersArray = chaptersArray.filter((item)=> item !==chapter);
    //update localstorage
    setChapterList();    
}