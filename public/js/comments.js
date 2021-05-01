
/* eslint-disable prettier/prettier */
document.addEventListener('DOMContentLoaded', ()=> { 

              
    // for accessing only my form to create a property 
    const comment_input = document.querySelector('#comments');    
    const submitButton = document.querySelector('.submitBtn_comments');
    const form = document.querySelector('#create_category_form');
    const display_error = document.querySelector('.display_error_comment');   
    const success_message = document.querySelector('.success_message');

    
 // --------------------------------------------------------------------------------------
      const user= JSON.parse(localStorage.getItem('user'));
      const userId = user.user._id;
      const token = user.token; 
      const comment = comment_input.value;
      let propId = JSON.parse(localStorage.getItem('id'));


 
 // ------------------------------CREATE CATEGORY--------------------------------------------------------

 submitButton.addEventListener('click',  (e) => {
        e.preventDefault();     
        if (!comment_input.value.trim()) {
          display_error.textContent = '* Please fill your comment';        
        } else{
            
                return fetch(`http://localhost:3000/api/v1/property/comment/`, {
                    method: "PUT",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({ userId,propId, comment })
                })
                    .then(data => {
                        // console.log(data)
                        if(data.status == true){
                          console.log(data.message);
                           let storedData = localStorage.setItem('categorycreated', JSON.stringify(data));  
                           success_message.innerHTML = `<h3>Your comment has been successfully added</h3>`
                          //  location.reload();
                          
                        } 
                        if(data.status == false){
                          console.log(data.error)
                        }         
                      })
                    .catch(err => console.log(err));          
        };     
});


});


  
  
  