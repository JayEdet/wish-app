//selectors
const topDiv = document.querySelector('.top_Div');  
const container = document.querySelector('.container');  
const name = document.querySelector('#Name');
const sub = document.querySelector('.sub');
const display =document.querySelector('.display');
const writeUp = document.querySelector('.write_up');
const content = document.querySelector('.content');

//eventlisteners

//add eventListener to submit button
 sub.addEventListener('click', createDom);
 //add eventlistener to the document to reload wishes
 document.addEventListener('click', showWishes);


 function createDom(event){
  event.preventDefault();
  //create First DOM elements
   const write = document.createElement("h2");
   const writeSpan = name.value;
   write.innerHTML = `<span class ="change">hello</span>`+ " "+ writeSpan + `<span class ="change">,</span>` + " " +
   `<span class ="change">Make a wish below</span>`;
   name.value ="";
   display.appendChild(write);

    const makeWish = document.createElement("input");
    makeWish.classList.add('wish_input');
    display.appendChild(makeWish);

   const submitWish = document.createElement("button");
   display.appendChild(submitWish);
   submitWish.classList.add('submit_wish');
   submitWish.innerHTML = "Add to wish list";
   topDiv.classList.add('disappear');
  
   //add EventListener to submitWish(button);
   submitWish.addEventListener('click', () =>{
     event.preventDefault();

      //create second DOM contents (your wishes)
      const wishLabel = document.createElement("div");
      wishLabel.innerHTML ="My wishes";
      wishLabel.classList.add('wishFirst');
      const selectWish = document.createElement("select");
      const firstOption = document.createElement("option");
      firstOption.innerHTML = "All";
      const secondOption = document.createElement("option");
      secondOption.innerHTML = "Fulfilled";
      selectWish.appendChild(firstOption);
      selectWish.appendChild(secondOption);
      selectWish.classList.add('select_wish');
      wishLabel.appendChild(selectWish);
      container.appendChild(wishLabel);

      const wishDiv = document.createElement("div");
      
      const wishInput = document.createElement("li");
      wishInput.classList.add('wish_list');
      wishInput.innerHTML = makeWish.value;
    
      wishDiv.appendChild(wishInput);
      //add to local storage
      save(makeWish.value);
      
      //create two buttons, unfulfilled(fButton) and Delete(delButton)
      const fButton = document.createElement("button");
      fButton.innerHTML = "Unfulfilled";
      fButton.classList.add('f_button');
      //add eventlistener to Unfulfilled button
      fButton.addEventListener('click', () =>{
        wishInput.classList.toggle('fade')
        fButton.classList.toggle('border');

        if(wishInput.classList[1] === "fade"){
          fButton.innerHTML = "Fulfilled";
        }else{
          fButton.innerHTML = "Unfulfilled";
        }
      })
      wishDiv.appendChild(fButton);
  
      const delButton = document.createElement("button");
      delButton.innerHTML = "Delete";
      delButton.classList.add('del_button');
      wishDiv.appendChild(delButton);
      
      wishDiv.classList.add('wish_div'); 
      content.appendChild(wishDiv);
      makeWish.value =""; 
   })
  };
  //save wishes to localStorage
function save(jay){
  let wishes;
  if(!localStorage.getItem('wishes')){
    wishes =[]
  }else{
    wishes = JSON.parse(localStorage.getItem('wishes'))
  }
  wishes.push(jay);
  localStorage.setItem('wishes', JSON.stringify(wishes))

}
  //create a function to show wishes when you refresh
  document.addEventListener('DOMContentLoaded', showWishes);

  function showWishes(){
    let wishes;
    if(!localStorage.getItem('wishes')){
      wishes =[]
    }else{
      wishes = JSON.parse(localStorage.getItem('wishes'))
    }
  }
  