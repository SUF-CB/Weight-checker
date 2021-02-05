//declaring the variables with attribute.   
let kgbtn = document.getElementById('kg'); // let is variable. The getElementById() method returns the element that has the ID attribute with the specified value kg.
let poundbtn = document.getElementById('pound'); // same as above. The specieifed value is Pound.

kgbtn.addEventListener('click', function(){ // this listens to the click event  and carries out the event via the function
    let input = document.getElementById('input').value; // input var
    document.getElementById('output').value = input / 2.205 + " Kg"; //output the value depending on the button pressed. //kg
})

poundbtn.addEventListener('click', function(){ // this listens to the click event  and carries out the event via the function
    let input = document.getElementById('input').value;// input var
    document.getElementById('output').value = input * 2.205 + " Pound"; //output the value depending on the button pressed. //ibs
})
