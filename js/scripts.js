const words=["ZHJhYWRvcg==","dm9pZA==","YXZlbnR1cmU="];let cpt=0,message="mot cl\xe9 incorrect";var k=[38,38,40,40,37,39,37,39,66,65],n=0;$(document).keydown(function(s){if(s.keyCode===k[n++]){if(n===k.length)return $(".mainlogo").attr("src","img/qrcode.png"),n=0,!1}else n=0}),console.log(`
████████▄     ▄████████    ▄████████    ▄████████ ████████▄   ▄██████▄     ▄████████ 
███   ▀███   ███    ███   ███    ███   ███    ███ ███   ▀███ ███    ███   ███    ███ 
███    ███   ███    ███   ███    ███   ███    ███ ███    ███ ███    ███   ███    ███ 
███    ███  ▄███▄▄▄▄██▀   ███    ███   ███    ███ ███    ███ ███    ███  ▄███▄▄▄▄██▀ 
███    ███ ▀▀███▀▀▀▀▀   ▀███████████ ▀███████████ ███    ███ ███    ███ ▀▀███▀▀▀▀▀   
███    ███ ▀███████████   ███    ███   ███    ███ ███    ███ ███    ███ ▀███████████ 
███   ▄███   ███    ███   ███    ███   ███    ███ ███   ▄███ ███    ███   ███    ███ 
████████▀    ███    ███   ███    █▀    ███    █▀  ████████▀   ▀██████▀    ███    ███ 
             ███    ███                                                   ███    ███ 
`),$(".js-submit-password").on("click",function(){++cpt>=100?message="</p><p class='success'>T'es vraiment un acharn\xe9 du bocal toi.</p><p> Voila un mot de passe de consolation : "+atob("VEFQRVI="):cpt>=20?message="Non mais l\xe0 tu tentes des mots au pif en vrai.":cpt>=10&&(message="\xe7a fait beaucoup de mot cl\xe9 incorrect l\xe0 non ?");let s=$(".mot-cle").val().toLowerCase(),e=btoa(s);words.includes(e)?$(".js-result").html('<p class="success">F\xe9licitations tu as trouv\xe9 un mot cl\xe9 gagnant.</p><p>Le mot de passe est : <span class="bold">'+btoa(e)+"</span></p>"):$(".js-result").html('<p class="error">'+message+"</p>")});