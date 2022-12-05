$(document).ready(function() {


    const $contactForm = $('#form');
    let validator = void(0);

    if ($contactForm.length) {
        validator = $contactForm.validate({
            rules: {
                name: {
                    required: true,
                },
                email: {
                    required: true,
                },
                message: {
                    required: true,
                }
            },
            messages: {
                name: {
                    required: 'Polje ime je obavezno.',
                },
                email: {
                    required: 'Polje email je obavezno.',
                },
                message: {
                    required: 'Polje poruka je obavezno.',
                }
            },
            submitHandler: function submitHandler(form) {
                event.preventDefault();
                $.ajax({
                    url: "../php_vendor/functions/contactrs.php",
                    method: 'POST',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    success: function(data) {
                        let objResp = JSON.parse(data);
                        let str = objResp.type;
                        if (str === 'ERROR') {
                            str = objResp.data;
                            swal({
                                title: str,
                                text: objResp.params,
                                showCancelButton: false,
                                showConfirmButton: true,
                                animation: false,
                                type: "error",
                            });
                            return;
                        }

                        if (str === 'OK') {
                            str = objResp.data;
                            swal({
                                title: str,
                                text: objResp.params,
                                showCancelButton: false,
                                showConfirmButton: true,
                                type: "success",
                                animation: false

                            });
                            $('#form')[0].reset();
                        }

                    }
                })
            }
        })
    }

    $(document).on('click', '#dismiss-modal, button[data-dismiss="modal"]', function() {
        validator.resetForm();
    });

});