function setFooterLangForm(lg){
    var footerElt = '.footer-container > div:nth-child(1) > div:nth-child(2) >';

    //L'OUTIL MARKETING ULTIME POUR L'IMMOBILIER
    document.querySelector(footerElt +'div:nth-child(1) > h2').innerHTML = footerLangs[lg]['marketing_label'].name;
    
    //JE SUIS CONVAINCU
    document.querySelector(footerElt + 'div:nth-child(1) > a:nth-child(1)').innerHTML = footerLangs[lg]['marketing_button'].name;
    document.querySelector(footerElt + 'div:nth-child(1) > a:nth-child(1)').innerHTML = footerLangs[lg]['marketing_button'].href;
    
   //CONTACTEZ-NOUS FORM
   document.querySelector(footerElt + 'div:nth-child(2) > h3').innerHTML = footerLangs[lg]['contact_label'].name;
   document.querySelector(footerElt + 'div:nth-child(2) > form > .form-field > .text-field:nth-child(1)').innerHTML = footerLangs[lg]['form_name'].name;
   document.querySelector(footerElt + 'div:nth-child(2) > form > .form-field > .text-field:nth-child(2)').innerHTML = footerLangs[lg]['form_mail'].name;
   document.querySelector(footerElt + 'div:nth-child(2) > form > .form-field > .text-field:nth-child(3)').innerHTML = footerLangs[lg]['form_tel'].name;
   document.querySelector(footerElt + 'div:nth-child(2) > form > .form-field > .textarea').innerHTML = footerLangs[lg]['form_textArea'].name;

   //CHECKBOXES
   document.querySelector(footerElt + 'div:nth-child(2) > .checkboxes-container > .checkboxes:nth-child(2)').innerHTML = footerLangs[lg]['form_checkBox1'].name;
   document.querySelector(footerElt + 'div:nth-child(2) > .checkboxes-container > .checkboxes:nth-child(2)').innerHTML = footerLangs[lg]['form_checkBox1'].href; 
   document.querySelector(footerElt + 'div:nth-child(2) > .checkboxes-container > .checkboxes:nth-child(6)').innerHTML = footerLangs[lg]['form_newsletter'].name;
  
  
   //ENVOYEZ
   document.querySelector(footerElt + 'div:nth-child(2) > .form-field > .checkboxes-container > button').innerHTML = footerLangs[lg]['form_btn'].name;
   
}

function setFooterLangNav(lg){
    var footerNav = '.basPage > .icon-reseaux >';

    //ACCUEIL
    document.querySelector(footerNav + '#nav-footer:nth-child(1)').innerHTML = footerLangs[lg]['home'].name;
    document.querySelector(footerNav + '#nav-footer:nth-child(1)').innerHTML = footerLangs[lg]['home'].href;

    //CAMÉRAS 360
    document.querySelector(footerNav + '#nav-footer:nth-child(2)').innerHTML = footerLangs[lg]['cameras'].name;
    document.querySelector(footerNav+ '#nav-footer:nth-child(2)').innerHTML = footerLangs[lg]['cameras'].href;

    //FONCTIONALIÉS
    document.querySelector(footerNav + '#nav-footer:nth-child(3)').innerHTML = footerLangs[lg]['features'].name;
    document.querySelector(footerNav + '#nav-footer:nth-child(3)').innerHTML = footerLangs[lg]['features'].href;

    //OFFRES
    document.querySelector(footerNav + '#nav-footer:nth-child(4)').innerHTML = footerLangs[lg]['price'].name;
    document.querySelector(footerNav + '#nav-footer:nth-child(4)').innerHTML = footerLangs[lg]['price'].href;

    //CONTACT
    document.querySelector(footerNav + '#nav-footer:nth-child(5)').innerHTML = footerLangs[lg]['contact'].name;
    document.querySelector(footerNav + '#nav-footer:nth-child(5)').innerHTML = footerLangs[lg]['contact'].href;

}


function setFooterPolitiqueMentions(lg){

    var footerPolitiqueMentions = '.footer-bas > ';

    //Politique de confidentialité
    document.querySelector(footerPolitiqueMentions + 'center:nth-child(1)').innerHTML = footerLangs[lg]['politique'].name;
    document.querySelector(footerPolitiqueMentions + 'center:nth-child(1)').innerHTML = footerLangs[lg]['politique'].href;

    //Mentions légales
    document.querySelector(footerPolitiqueMentions + 'center:nth-child(2)').innerHTML = footerLangs[lg]['mentions_legales'].name;
    document.querySelector(footerPolitiqueMentions + 'center:nth-child(2)').innerHTML = footerLangs[lg]['mentions_legales'].href;


    //Politique des cookies
    document.querySelector(footerPolitiqueMentions + 'center:nth-child(3)').innerHTML = footerLangs[lg]['politique_cookies'].name;
    document.querySelector(footerPolitiqueMentions + 'center:nth-child(3)').innerHTML = footerLangs[lg]['politique_cookies'].href;

    //Tous droits réservés enVisite
    document.querySelector(footerPolitiqueMentions + 'center:nth-child(5)').innerHTML = footerLangs[lg]['droits_reserves'].name;
    document.querySelector(footerPolitiqueMentions + 'center:nth-child(5)').innerHTML = footerLangs[lg]['droits_reserves'].href;
    

}


// FONCTION QUI EXÉCUTE LES 3 FONCTIONS DU FOOTER
function setFooterLang(lg){ 

     setFooterLangForm(lg); setFooterLangNav(lg); setFooterPolitiqueMentions(lg);
}

