$(document).ready(function(){
    $("#contact-form").submit(function(e){
        console.log('We entered the submitted form')
        e.preventDefault()
        var data = {
            "mail":'aldoaa'
        }
        var mailurl = 'https://ynzmw6iga9.execute-api.us-west-2.amazonaws.com/Dev/aag'
        $.ajax( mailurl, {
            data: JSON.stringify(data),
            crossDomain: true,
            contentType:false,
            processData:false,
            method: 'GET',
            dataType: 'json',
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
