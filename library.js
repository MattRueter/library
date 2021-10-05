let myLibrary=[
  {title:'The Mandarins',author:'Simone de Beauvoir',language:'English translation',status:'read'},
  {title:'L´etranger',author:'Albert Camus',language:'French',status:'read'},
  {title:'Orlando',author:'Virginia Woolf',language:'English',status:'read'},
  {title:'The Age of Reason',author:'Jean Paul Sartre',language:'English translation',status:'read'},
  {title:'In Praise of Idleness',author:'Bertrand Russell',language:'English',status:'read'},
  {title:'Madame Bouvary',author:'Gustave Flaubert',language:'English translation',status:'read'},
  {title:'Bend Sinister',author:'Vladimir Nabokov',language:'English',status:'read'},
  {title:"J'accuse",author:'Emile Zola',language:'French',status:'not read'},
  {title:'La Agonía de París',author:'Manuel Chaves Nogales',language:'Spanish',status:'not read'},
  {title:'A Sangre y Fuego',author:'Manuel Chaves Nogales',language:'Spanish',status:'not read'},
];

                //constructor
function Book(title,author,language,status,comment){
  this.title=title;
  this.author=author;
  this.language=language;
  this.status=status;
  this.comment=comment;
  this.info=function(){
    return title+". "+author+". "+language+" "+status;   //not sure if necessary or if should be built on prototype instead.
  }
};
const timeBox= document.querySelector('#time');
  timeBox.textContent=new Date()

document.getElementById("background").onclick=function(){toggleBackground()};
function toggleBackground(){
  document.querySelector("main").classList.toggle('main1')
  /*document.querySelector("main").classList.toggle('main2');
  document.querySelector("main").classList.toggle('main3');
  document.querySelector("main").classList.toggle('main4');*/
}


                        //code for adding books to the array and displaying them.
const formContainer=document.querySelector('.formContainer');
  const addBookBtn=document.querySelector('#addBookBtn');
    const titleField=document.querySelector('#title');
    const authorField=document.querySelector('#author');
    const languageField=document.querySelector('#language');
    const statusField=document.querySelector('#status');

  addBookBtn.addEventListener('click', ()=>{
      if(titleField.value==''||authorField.value==''){
        alert("Oops.You'll need to enter a name");           //create custom message box rather than alert.
      }else{
      addBookToList();
      displayNewBook();
      titleField.value='';
      authorField.value='';
      languageField.value='';
      statusField.value='';
    }
  });
function addBookToList (){
  title=titleField.value;
  author=authorField.value;
  language=languageField.value;
  status=statusField.value;
  myLibrary.push(new Book(title,author,language,status));
};




        //code for displaying books by criteria.       // ! if not empty and not changing criteria 'refresh're-orders some items rather than doing nothing.
const sortTitleBtn=document.querySelector('#sortTitleBtn');
  sortTitleBtn.addEventListener('click', ()=>{
    myLibrary.sort((a,b) => a.title.charAt(0) > b.title.charAt(0) ? 1:-1);
    if(displayContainer.childElementCount>1){
      clearDisplay();
      displayBooks('title');
    }else{
      displayBooks('title');
    }
  });
  const sortAuthorBtn=document.querySelector('#sortAuthorBtn');
    sortAuthorBtn.addEventListener('click', ()=>{
        myLibrary.sort((a,b) => a.author.charAt(0) > b.author.charAt(0) ? 1:-1);
      if(displayContainer.childElementCount>1){
        clearDisplay();
        displayBooks('author');
      }else{
        displayBooks('author');
      }
  });
  const sortLanguageBtn=document.querySelector('#sortLanguageBtn');
    sortLanguageBtn.addEventListener('click', ()=>{
        myLibrary.sort((a,b) => a.language.charAt(0) > b.language.charAt(0) ? 1:-1);
      if(displayContainer.childElementCount>1){
        clearDisplay();
        displayBooks('language');
      }else{
        displayBooks('language');
    }
  });
  const sortStatusBtn=document.querySelector('#sortStatusBtn');
    sortStatusBtn.addEventListener('click', ()=>{
      myLibrary.sort((a,b) => a.status.charAt(0) > b.status.charAt(0) ? -1:1);
      if(displayContainer.childElementCount>1){
        clearDisplay();
        displayBooks('status');
      }else {
        displayBooks('status');
      }
  });



            ////filters will go here.
//const filterForm=document.querySelector('#filterForm');
  const filterBtn=document.querySelector('#filterBtn')
    const filterTitleField=document.querySelector('#filterTitle');
    const filterAuthorField=document.querySelector('#filterAuthor');
    const filterLanguageField=document.querySelector('#filterLanguage');
    const filterStatusField=document.querySelector('#filterStatus');

  document.getElementById("filterMenuBtn").onclick= function(){toggleFilter()};
function toggleFilter() {
    document.getElementById("filterForm").classList.toggle("show");
};
  document.querySelector(".closeWindow").addEventListener('click', ()=>{
    toggleFilter();
  });
filterBtn.addEventListener('click', ()=>{
        if(filterTitleField.value==''&& filterAuthorField.value=='' &&
        filterLanguageField.value=='' && filterStatusField.value==''){
          alert("Oops.You'll need to enter criteria");           //create custom message box rather than alert.
        }else if(filterTitleField.value!=''){
          clearDisplay();
          displayFilteredTitle();
        }else if(filterAuthorField.value!=''){
          clearDisplay();
          displayFilteredAuthor();
        }else if(filterLanguageField.value!=''){
          clearDisplay();
          displayFilteredLanguage();
        }else if(filterStatusField.value!=''){
          clearDisplay();
          displayFilteredStatus();
        }
        filterTitleField.value='';
        filterAuthorField.value='';
        filterLanguageField.value='';
        filterStatusField.value='';
  });






                      ////functions for displaying books
const displayContainer=document.querySelector('#displayContainer');
const clear=document.querySelector('#clear');
  clear.addEventListener('click', () => {
    clearDisplay();
  });
function displayBooks(arg){
      myLibrary.forEach(item =>{
  if(arg=='title'){
      message=`"`+item.title+`",`+" by "+item.author+". "+item.language+". Have "+item.status;
  }else if(arg=='author'){
      message=item.author+` "`+item.title+`", `+item.language+". Have "+item.status;
  }else if(arg=='language'){
      message=item.language +`: "`+ item.title +`", by `+ item.author +". Have "+item.status;
  }else if(arg=='status'){
      message="Have "+item.status +` "`+ item.title +`", by `+ item.author +". "+ item.language;
  }
      const displayItem=document.createElement('div');
      displayContainer.appendChild(displayItem);
      displayItem.classList.add('displayItem');
      displayItem.textContent +=message;
  });
}



function displayFilteredTitle(){
  const titleFiltered= myLibrary.filter(books => (books.title==filterTitleField.value));
    titleFiltered.forEach(item =>{
      message=`"`+item.title+`",`+" by "+item.author+". "+item.language+". Have "+item.status;
      const displayItem=document.createElement('div');
      displayContainer.appendChild(displayItem);
      displayItem.classList.add('displayItem');
      displayItem.textContent +=message;
    });
};
function displayFilteredAuthor(){
  const authorFiltered= myLibrary.filter(writers => (writers.author==filterAuthorField.value));
    authorFiltered.forEach(item =>{
      message=item.author+` "`+item.title+`", `+item.language+". Have "+item.status;
      const displayItem=document.createElement('div');
      displayContainer.appendChild(displayItem);
      displayItem.classList.add('displayItem');
      displayItem.textContent +=message;
    });
};
function displayFilteredLanguage(){
  const languageFiltered= myLibrary.filter(languages => (languages.language==filterLanguageField.value));
    languageFiltered.forEach(item =>{
    message=item.language +`: "`+ item.title +`", by `+ item.author +". Have "+item.status;
      const displayItem=document.createElement('div');
      displayContainer.appendChild(displayItem);
      displayItem.classList.add('displayItem');
      displayItem.textContent +=message;
    });
};
function displayFilteredStatus(){
  const statusFiltered= myLibrary.filter(state => (state.status==filterStatusField.value));
    statusFiltered.forEach(item =>{
      message="Have "+item.status +` "`+ item.title +`", by `+ item.author +". "+ item.language;
      const displayItem=document.createElement('div');
      displayContainer.appendChild(displayItem);
      displayItem.classList.add('displayItem');
      displayItem.textContent +=message;
    });
};




function displayNewBook(){
  n=myLibrary.length-1;
  newEntryInfo=`"`+myLibrary[n].title+`", by `+myLibrary[n].author+". "+
  myLibrary[n].language+". Have "+myLibrary[n].status;
      const displayItem=document.createElement('div');
      displayContainer.appendChild(displayItem);
      displayItem.classList.add('displayItem');
      displayItem.textContent =newEntryInfo;
  };

  function clearDisplay(){
      const displayItem=document.querySelector('.displayItem');
      numberItems=displayContainer.childElementCount;
        if(numberItems>0){
          displayItem.remove(displayItem);
          clearDisplay();
        }
  };