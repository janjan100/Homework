
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);
 
     // Add comparison logic
     // are the user input number
     // is A more than B
    // is B more than A
    console.log(a);
    console.log(b);

    if(isNaN(a) || isNaN(b)){
      comparison = "N/A";
      
    }
    else if ( a > b){
      comparison = ">";


    }
  else if ( a < b){
      comparison = "<";
  }
else {
  comparison = "=";
}
     document.querySelector('#comparison').innerText = comparison;
   };
 