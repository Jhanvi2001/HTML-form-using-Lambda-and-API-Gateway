function submit_data(){
    // console.log("Hello");

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        Little_interest:document.getElementById('dropdown_1').options[document.getElementById('dropdown_1').selectedIndex].text,
        Feeling_down: document.getElementById('dropdown_2').options[document.getElementById('dropdown_2').selectedIndex].text,
        Trouble_falling_or_staying_asleep: document.getElementById('dropdown_3').options[document.getElementById('dropdown_3').selectedIndex].text,
        Feeling_tired: document.getElementById('dropdown_4').options[document.getElementById('dropdown_4').selectedIndex].text,
        Problems_you_face:document.getElementById('submit').onclick = getvalue(),
        Issues: document.getElementById('comment').value
    }
    function getvalue()
    {  
        var a=[];
        var markedCheckbox = document.getElementsByName('thoughts');  
        for (var i=0; i<markedCheckbox.length;i++) {  
          if (markedCheckbox[i].checked)  
                a.push(markedCheckbox[i].value);
        }
        return a
    }  
    fetch('https://oupp565e9e.execute-api.us-east-1.amazonaws.com/v1/put-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    //Then with the data from the response in JSON...
    .then((data) => {
        console.log('Success:', data);
        //window.location.href="file:///C:/Users/sjhan/Downloads/Twitter_Sentimental_Analysis/Backend/form_3.html";
        
    })
    //Then with the error genereted...
    .catch((error) => {
        console.error('Error:', error);
    });
 
}


// function submit_data(){
//     fetch('https://oupp565e9e.execute-api.us-east-1.amazonaws.com/v1/put-data', {
// 	method: 'POST',
// 	body: JSON.stringify({
//         email: document.getElementById('email').value,
// 		name: document.getElementById('name').value,
// 		age: document.getElementById('age').value 
// 	}),
// 	headers: {
// 		'Content-type': 'application/json; charset=UTF-8'
// 	}
// }).then(function (response) {
// 	if (response.ok) {
// 		return response.json();
// 	}
// 	return Promise.reject(response);
// }).then(function (data) {
// 	console.log(data);
// }).catch(function (error) {
// 	console.warn('Something went wrong.', error);
// });
// }