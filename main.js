
function sendMail() {

  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;

  const serviceID = "service_98qpjx6";
  const templateID = "template_ljz00dn";
  const regExEmail = (value) => {
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
  }

  function emailControl() {
    const leMail = document.getElementById("email").value;
    if (regExEmail(leMail)) {
      return true;
    } else {
      return false;
    }
  }

  $('#myForm').on('submit', function (event) {
    event.preventDefault();
  });

  if (name != "" && emailControl() != false && message != "") {
    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    emailjs.send(serviceID, templateID, params);
    swal("Bravo!", "Votre message c'est envoyé!", "success");
    
  } else {
      swal("Oops!", "Votre message ne c'est pas envoyé! Vérifier les champs.", "error");
  }

}