document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
    alert('Form Submitted');

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    if(age<18){
        alert('You need to be 18.')
        return;
    }
    
    if (!fullname){
        alert('You need to enter your name.');
        return;
    }

    const formData = {
        fullname: fullname,
        email: email,
        password: password,
    };

    //AJAX JavaScript
    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            alert("Form submitted successfully. ");
        } else if(xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send(JSON.stringify(formData));
});