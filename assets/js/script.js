/**
 * Created by yamine on 06/11/19.
 */
var form = document.querySelector("form");
// Affiche de toutes les données saisies ou choisies
form.addEventListener("submit", function () {
    var qrcode = form.elements.qrcode.value;
    document.write( '<div class="text-center mt-5"><img src="https://chart.googleapis.com/chart?cht=qr&chl='+ qrcode + '&chs=250x250&choe=ISO-8859-1" alt="qrcode" class="mt-5" style="display: block;margin-left: auto;margin-right: auto;" /></div> ');
});