var form = document.querySelector("form");
// Affiche de toutes les données saisies ou choisies
form.addEventListener("submit", function () {
    var qrcode = form.elements.qrcode.value;
    if(qrcode){
       var doc = '__ DIR __ tmp/';
    }
    document.write('<link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css" />' +
        '<header><nav class="navbar navbar-expand-lg navbar-dark bg-primary"><a class="navbar-brand" href="index.html">Retour</a>' +
        '</nav><div></div></header>' +
        '<div class="container text-center mt-5">' +
        '<h2 class="text-center mt-5">Votre QrCode </h2>' +
        '<img src="https://chart.googleapis.com/chart?cht=qr&chl='+ qrcode + '&chs=350x350&choe=ISO-8859-1" alt="qrcode" class="" style="" />' +
        '<p>utiliser votre navigateur pour enregistrer votre qr_code</p></div>');
});