document.getElementById('formProcess').addEventListener('submit', function(event){
    event.preventDefault();
    alert('From Submitted');

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const state = document.getElementById('state').value;
    const birthday = document.getElementById('birthday').value;

    if(!fullname){
        alert('Please provide your full name.')
        return;
    }

    if(!birthday){
        alert('Please provide you birthday')
        return;
    }

    let birthDate = new Date(birthday);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDay() - today.getDay();

    if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)){
        age--;
    }

    if (age < 18){
        alert('You must be 18 or older.')
        return;
    }

    const formData = {
        fullname: fullname,
        email: email,
        password: password,
        state: state,
        birthday: birthday,
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('formProcess').innerHTML = "";
        } else if(xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send(JSON.stringify(formData));

});