function ask(){
    confirm('Are you sure you want to send the messsage?');
}

function submitInfo(){
    this.ask();

    var fullName = '',emailAddress = '',message = '';

    fullName = document.getElementById('fullName').value;
    emailAddress = document.getElementById('emailAddress').value;
    message = document.getElementById('message').value;
    console.log('Full Name' + fullName);
    console.log('Email Address' + emailAddress);
    console.log('Massage' + message);

    if(fullName == '' ||emailAddress == '' || message == ''){
            
        alert('Fill in the Emty spaces');

    } else{
        alert("Your Message have been sent");
    }
}
var prevscrollpos=window.pageYOffset;
window.onscroll = function() {
    var currentscrollpos = window.pageYOffset;
    if(prevscrollpos > currentscrollpos) {
        document.getElementById("header").style.top = "0";
    }else{
        document.getElementById("header").style.top = "-100px";
    }
    prevscrollpos = currentscrollpos;
}