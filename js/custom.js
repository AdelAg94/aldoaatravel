$(document).ready(function(){
    $("#contact-form").submit(function(e){
        console.log('We entered the submitted form 01:22AM')
        e.preventDefault()
        var data = {
            "mail":'aldoaa'
        }
        var mailurl = 'https://ovq9z0uac8.execute-api.us-west-2.amazonaws.com/dev/sendMail' 
        // var mailurl_2 = ' https://yymk086tm1.execute-api.us-west-2.amazonaws.com/prod/rsendmail' 
        $.ajax({
            url: mailurl,
            // dataType: "json",
            // contentType: "application/json",
            // data: JSON.stringify(data),
            type: 'GET',
            
            success: function(result) {
                 // success code execution here
                 console.log(result)
                 alert(result)
        
            },
            error: function(xhr,status,error) {
               // error code here
               console.log(error)
               alert(error)
            },
            complete: function(xhr,status) {
                 // completion code here
            }
     })
    })
})
