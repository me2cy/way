    window.onload = function() { 
    var areWeReady = false; 
    setTimeout(function(){ 
        areWeReady = true; 
    }, 5000); 
    document.querySelector('body').addEventListener('click',function()  { 
         if(areWeReady){ 
            var main = document.querySelector('.main-container'); 
            document.querySelector('.startup-page').style.display= 'none'; 
            setTimeout(function() { 
                main.style.display= 'block'; 
            }, 100);    
         } 
    }) 
    var deadline = document.getElementById("deadline"); 
    var finalTime = new Date("Nov 11 2022 24:00:00").getTime(); 
    var intervalId = setInterval(function() { 
    var now = new Date().getTime(); 
    var t = finalTime - now; 
    var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
    deadline.innerHTML = days +' D / '+ hours 
                         + ' H / '+ minutes + ' M / ' + seconds + ' S'; 
  if (t < 0) { 
      clearInterval(intervalId); 
      deadline.innerHTML="Expired."; 
      document.querySelector('.clock').style.backgroundColor = 'blue'; 
      alert('⚠ Attention Plz :\n Submission is closed now good luck for the next time.⛔📴❌'); 
  } 
}, 1000); 
     
};
    
