$(document).ready(function(){
    $("#contact-form").submit(function(e){
        console.log('We entered the submitted form 11:55PM')
        e.preventDefault()
        var data = {
            "mail":'aldoaa'
        }
        var mailurl = 'https://ynzmw6iga9.execute-api.us-west-2.amazonaws.com/Dev/aag'
        $.ajax( mailurl, {
            headers:
             {'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Accept': "*/*"

             },
            data: JSON.stringify(data),
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
