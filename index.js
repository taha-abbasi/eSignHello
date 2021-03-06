var hellosign = require('hellosign-sdk')({key: '23811a61556fdff70dc064a3f1706debb683d72ccd54306822ce469e4a4fe778'});

var options = {
    test_mode : 1,
    clientId : '15cd78ce508a84242d07fe4ff8234347',
    template_id : '1d933ec802dd51c53fabbe3f664fcfe43f77a163',
    subject : 'My First embedded signature request with a reusable form',
    message : 'Awesome, right?',
    signers : [
        {
            email_address : 'jack@example.com',
            name : 'Jack',
            role : 'Manager'
        },
        {
            email_address : 'jill@example.com',
            name : 'Jill',
            role : 'Employee'
        }
    ]
};

hellosign.signatureRequest.createEmbeddedWithTemplate(options)
    .then(function(response){
        //parse response
    })
    .catch(function(err){
        //catch error
    });