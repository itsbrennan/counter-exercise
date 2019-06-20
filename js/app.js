// counter project
(function(){

  let counterValue = 0;

  // get
  const buttons = document.querySelectorAll('.counterBtn');
  const counter = document.getElementById('counter');


  buttons.forEach(function(btn){
    btn.addEventListener('click', function(event){
      // element that we click

      const value = event.target;

      if (value.classList.contains('prevBtn')){
        counterValue--;
      } else if (value.classList.contains('nextBtn')){
        counterValue++;
      } 
      counter.textContent = counterValue;

      if(counterValue ===0 ){
        counter.style.color = '#333333';
      }
      else if (counterValue < 0){
        counter.style.color = 'red';
      } else if (counterValue > 0){
        counter.style.color = 'green';
      }
    })
    
  })


})();