$(document).ready(function(){
    $("#contact-form").submit(function(e){
        e.preventDefault()
        var f_name = $("#name").val()
        var f_email = $("#email").val()
        var f_subject = $("#subject").val()
        var f_message = $("#message").val()
        var data = {
            "mail":'aldoaa',
            'name':f_name,
            "sender":f_email,
            'subject':f_subject,
            'message':f_message,
        }
        var mailurl = 'https://ovq9z0uac8.execute-api.us-west-2.amazonaws.com/dev/sendMail' 
        // var mailurl_2 = ' https://yymk086tm1.execute-api.us-west-2.amazonaws.com/prod/rsendmail' 
        $.ajax({
            url: mailurl,
            dataType: "json",
            data: data,
            type: 'GET',
            
            success: function(result) {
                 // success code execution here
                 console.log(result)
                 alert(result['message'])
                 $("#name").val('')
                 $("#email").val('')
                 $("#subject").val('')
                 $("#message").val('')
            },
            error: function(xhr,status,error) {
               // error code here
               console.log(error)
               alert('عذرا! حدث خطأ يرجى محاولة الإرسال مرة أخرى')
            },
            complete: function(xhr,status) {
                 // completion code here
            }
     })
    })
})
