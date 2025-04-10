document.getElementById('formProcess').addEventListener('submit', function(event){
    event.preventDefault();
    alert('From Submitted');

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const edu = document.getElementById('education').value;
    const q1 = document.getElementById('opinion1').value;
    const q2 = document.getElementById('opinion2').value;
    const q3 = document.getElementById('opinion3').value;


    if(!fullname){
        alert('Please provide your full name.')
        return;
    }

    if(!email){
        alert('Please provide your email')
        return;
    }

    const formData = {
        fullname: fullname,
        email: email,
        education: edu,
        question1: q1,
        question2: q2,
        question3: q3,
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