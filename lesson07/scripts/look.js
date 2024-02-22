const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

// Function to set the chapter list in localStorage
function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

// Function to get the chapter list from localStorage
function getChapterList() {
    // const storedChapters = localStorage.getItem('chapters');
    // return storedChapters ? JSON.parse(storedChapters) : [];

    return JSON.parse(localStorage.getItem('chapters'));
}
  
//reformat the chapter parameter to get rid of the X that is passed on hte end of hte chapter string
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    //return everything in the chapterArray except the chapter to be deleted.
    chaptersArray = chaptersArray.filter((item)=> item !==chapter);
    //update localstorage
    setChapterList();    
}

//function to display the list
// redo eventListener as function
function displayList(item) {
    console.log("inside displayList");
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");        
    li.textContent = item;  //changed from input.value
    deleteButton.textContent = "✖";
    deletebutton.classList.add('delete');  //added a new class
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


//populate the list array
chaptersArray.forEach(chapter => {
    displayList(chapter);
    console.log("inside chaptersArray")
    console.log(chaptersArray);
});


// element.addEventListener(event, function, useCapture);

button.addEventListener("click", ()=> {
    //check if the input is empty or not
    if (input.value != "")
    {
        console.log(input.value);
        displayList(input.value);         //add new input item to list
        chaptersArray.push(input.value);  //add new input item to array
        setChapterList();                 //update local storage with updated/new array
        input.focus();                    //return focus
        input.value = "";        //reset input to blank
    }
    // could add hint message if true to the box.
    //return input focus to input if nothing entered when button is clicked.
    else {
        input.focus();
    }
   
    
})

