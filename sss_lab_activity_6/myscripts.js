function validate_password() {
            
    var pass = document.getElementById('pass').value;
    var confirm_pass = document.getElementById('confirm_pass').value;
    if (pass != confirm_pass) {
        document.getElementById('wrong_pass_alert').style.color = 'red';
        document.getElementById('wrong_pass_alert').innerHTML
        = 'X Use same password';
    } else {
        document.getElementById('wrong_pass_alert').style.color = 'green';
        document.getElementById('wrong_pass_alert').innerHTML =
            ':) Password Matched';
    }
}

function validate_name() {
            
    var myInput = document.getElementById('SUsername');

    var Letters = /[A-Z]/g;
    var numbers = /[0-9]/g;


    if(myInput.value.match(numbers) && myInput.value.match(Letters)){
        document.getElementById('wrong_name_alert').style.color = 'green';
        document.getElementById('wrong_name_alert').innerHTML
        = ':) Valid name';
    } else {
        

        document.getElementById('wrong_name_alert').style.color = 'red';
        document.getElementById('wrong_name_alert').innerHTML
        = 'X Not valid name';
    }
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "";
  }
  
  function dragEnd(event) {
    document.getElementById("demo").innerHTML = "";
  }
  
  /* Events fired on the drop target */
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }

  function my_button_click_handler()
  {
    if(document.getElementById('wrong_pass_alert').innerHTML == ':) Password Matched' && document.getElementById('wrong_name_alert').innerHTML
    ==':) Valid name'){
        var x=document.getElementById("Mname").value;
        var z=document.getElementById("SUsername").value;
        var a=document.getElementById("Tlead").value;
        var y=document.getElementById("GroupEmail").value;
        var b=document.getElementById("droptarget").innerText;
alert(" Manager NAME:"+x+"     "+" Email :"+y+"     "+" Username :"+z+" Team Lead :"+a+" Team Members "+b);
    }
    else{
        alert("Invalid DATA");
    }
  }