const words=['ZHJhYWRvcg==','dm9pZA==','YXZlbnR1cmU='];
let cpt = 0;
let message = "mot clé incorrect";
var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
n = 0;
$(document).keydown(function (e) {
    if (e.keyCode === k[n++]) {
        if (n === k.length) {
            $('.mainlogo').attr('src', "img/qrcode.png");
            n = 0;
            return false;
        }
    }
    else {
        n = 0;
    }
});

console.log(`
████████▄     ▄████████    ▄████████    ▄████████ ████████▄   ▄██████▄     ▄████████ 
███   ▀███   ███    ███   ███    ███   ███    ███ ███   ▀███ ███    ███   ███    ███ 
███    ███   ███    ███   ███    ███   ███    ███ ███    ███ ███    ███   ███    ███ 
███    ███  ▄███▄▄▄▄██▀   ███    ███   ███    ███ ███    ███ ███    ███  ▄███▄▄▄▄██▀ 
███    ███ ▀▀███▀▀▀▀▀   ▀███████████ ▀███████████ ███    ███ ███    ███ ▀▀███▀▀▀▀▀   
███    ███ ▀███████████   ███    ███   ███    ███ ███    ███ ███    ███ ▀███████████ 
███   ▄███   ███    ███   ███    ███   ███    ███ ███   ▄███ ███    ███   ███    ███ 
████████▀    ███    ███   ███    █▀    ███    █▀  ████████▀   ▀██████▀    ███    ███ 
             ███    ███                                                   ███    ███ 
`);

$('.js-submit-password').on('click', function(){
	cpt++;
	if (cpt >= 100) {
		message = "</p><p class='success'>T'es vraiment un acharné du bocal toi.</p><p> Voila un mot de passe de consolation : TAPER";
	}
	else if(cpt>=20) {
		message = "Non mais là tu tentes des mots au pif en vrai.";
	}
	else if(cpt >= 10){
		message = "ça fait beaucoup de mot clé incorrect là non ?";
	}
	let text = $('.mot-cle').val().toLowerCase();
	let final = btoa(text);
	if(words.includes(final)){
		$('.js-result').html('<p class="success">Félicitations tu as trouvé un mots clés gagnants.</p><p>Le mot de passe est : <span class="bold">' + btoa(final) + '</span></p>');
	}
	else {
		$('.js-result').html('<p class="error">' + message + '</p>');
	}
});
