$(document).ready(function(){
        $('#formContact').validate({
            rules: {
                formName: {
                    required: true,
                    minlength: 3
                },
                formMail: {
                    required: true,
                    email: true
                },
                formMenss: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                formName: {
                    required: "O campo nome é obrigatório.",
                    minlength: "O campo nome deve conter no mínimo 3 caracteres."
                },
                formMail: {
                    required: "O campo email é obrigatório.",
                    email: "O campo email deve conter um email válido."
                },
                formMenss: {
                    required: "O campo senha é obrigatório."
                }
            }

        });
    });
