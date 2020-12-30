
    var navLangs = {
      es: {
        home: {
            name: 'Bienvienda',
              href: 'inicial'
        },
          cameras: {
            name: 'Equipo',
              href: 'equipo'
        },
          features:{
            name: 'Funciones',
              href: 'funciones'
        },
          price: {
            name: 'Ofertas',
              href: '#offres'
        },
          contact: {
            name: 'Contactar',
              href: 'inicial#contactar'
        },
          order: {
            name: 'Orden'
        },
          back: 'Retroceso'
    },
    pt: {
        home: {
            name: 'Bem-vindo',
              href: 'bemvindo'
        },
          cameras: {
            name: 'Equipamento',
              href: 'equipamento'
        },
          features:{
            name: 'Recursos',
              href: 'recursos'
        },
          price: {
            name: 'Ofertas',
              href: '#offres'
        },
          contact: {
            name: 'Contato',
              href: 'bemvindo#contato'
        },
          order: {
            name: 'Ordem'
        },
          back: 'Volte'
    }
  };

  var footerLangs = { 
    //FOOTER ESPAGNOL
      es: { 
        marketing_label: {
          name: 'La herramienta de marketing definitiva para el sector inmobiliario'
        },
        marketing_button: {
          name: 'ESTOY CONVENCIDO',
            href: 'https://envisite.net/order'
        },
        contact_label: {
          name: 'CONTÁCTENOS'
        },
        form_name: {
          name: 'Nombre'
        },
        form_mail: {
          name: 'Correo electrónico' //Email
        },
        form_tel: {
          name:'Teléfono'
        },
        form_textArea: {
          name: 'Mensaje'
        },
        form_checkBox1: {
          name: 'He leído y acepto la Política de Protección de Datos de ENVISITE y consiento expresamente que mis datos aquí proporcionados sean utilizados por ENVISITE con el fin de responder. ',
            href: 'Política de protección de datos'
        },
        form_newsletter: {
          name: 'Doy mi consentimiento expreso para que mis datos aquí proporcionados sean utilizados para enviarme newsletters y ofertas comerciales relacionadas con la actividad de ENVISITE.'
        },
        form_btn: {
          name: 'ENVIAR' 
        },
         home: { //Nav FOOTER ES
          name: 'Bienvienda',
            href: 'inicial'
        },
          cameras: {
            name: 'Equipo',
              href: 'equipo'
        },
          features:{
            name: 'Funciones',
              href: 'funciones'
        },
          price: {
            name: 'Ofertas',
              href: '#offres'
        },
          contact: {
            name: 'Contactar',
              href: 'inicial#contactar'
        },
          order: {
            name: 'Ordem'
        },
        politique: {
          name: 'Política de confidencialidad',
            href: '/politique-de-protection-des-donnes-personnelles'
        },
        mentions_legales: {
          name: 'Notas legales',
            href: '/mentions-legales'
        },
        politique_cookies: {
          name: 'Política de cookies',
            href: '/politique-de-traitement-des-cookies'
        },
        droits_reserves: {
          name: 'Todos los derechos reservados enVisite'
        }
      },
      pt: { // FOOTER PORTUGAIS 
        marketing_label: {
          name: 'A melhor ferramenta de marketing para imóveis'
        },
        marketing_button: {
          name: 'ESTOU CONVENCIDO'
        },
        contact_label: {
          name: 'CONTATE-NOS'
        },
        form_name: {
          name: 'Nome *'
        },
        form_mail: {
          name: 'E-mail *'
        },
        form_tel: {
          name:'Telefone *'
        },
        form_textArea: {
          name: 'Sua mensagem'
        },
        form_checkBox1: {
          name: 'Eu li e aceito a <a href="/politique-de-protection-des-donnes-personnelles" style="text-decoration:underline;" target="_blank">Política de Proteção de Dados de ENVISITE</a> e concordo expressamente que meus dados fornecidos aqui sejam usados pela ENVISITE para fins de resposta. ',
        },
        form_newsletter: {
          name: 'Autorizo expressamente a utilização dos meus dados aqui fornecidos para o envio de newsletters e ofertas comerciais relacionadas com a atividade de ENVISITE. '
        },
        form_btn: {
          name: 'ENVIAR' 
        },
         home: { //NAV FOOTER PT
            name: 'Bem-vindo',
              href: 'bemvindo'
        },
          cameras: {
            name: 'Equipamento',
              href: 'equipamento'
        },
          features:{
            name: 'Recursos',
              href: 'recursos'
        },
          price: {
            name: 'Ofertas',
              href: '#offres'
        },
          contact: {
            name: 'Contato',
              href: 'bemvindo#contato'
        },
          order: {
            name: 'Ordem'
        },
        politique: {
          name: 'Política de privacidade',
            href: '/politique-de-protection-des-donnes-personnelles'
        },
        mentions_legales: {
          name: 'Aviso legal',
            href: '/mentions-legales'
        },
        politique_cookies: {
          name: 'Política de cookies',
            href: '/politique-de-traitement-des-cookies'
        },
        droits_reserves: {
          name: 'Todos os direitos reservados enVisite'
        }

      }
  };


 
/* JS MODAL */
window.addEventListener('DOMContentLoaded', function(){
      // set header lang
      var pathname = window.location.pathname;
      if(pathname.indexOf('/es/') > -1){
        setHeaderLanguage('es');
        setFooterLang('es');
      
    }else{
        if(pathname.indexOf('/pt/') > -1){
            setHeaderLanguage('pt');
            setFooterLang('pt');
          }
    }

 
 
    try{
        var cookieModal         = document.getElementById("cookieModal");
        var cookieModalClose    = document.getElementsByClassName("cookieModalClose")[0];
 
        cookieModalClose.onclick = function() {
          hideModalBox(cookieModal);
        }
 
        cookieModal.onclick = function(event) {  
          hideModalBox(cookieModal);
        }
    }catch(e){
      console.log('********************', e.message);
    }        
 
    if( document.querySelector('div.sqs-cookie-banner-v2.BAR.DARK.BOTTOM.BUTTON > div.sqs-cookie-banner-v2-text > p:nth-child(3) > span') !== null){
        document.querySelector('div.sqs-cookie-banner-v2.BAR.DARK.BOTTOM.BUTTON > div.sqs-cookie-banner-v2-text > p:nth-child(3) > span').addEventListener('click', function(evt){
            evt.preventDefault();
            displayCookieModalBox();
        });
    }

    if(document.querySelector('#parametreCookie') !== null){
        document.querySelector('#parametreCookie').addEventListener('click', function(evt){
            evt.preventDefault();
            var iframesrc = document.getElementById('iframeCookie').getAttribute('src');
            if(iframesrc == ''){
                document.getElementById('iframeCookie').setAttribute('src', '/parametrage-cookies');
            }
            displayCookieModalBox();
        });
    }
 
  //set the viewport metadat to fix iphone safe area
  document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1, viewport-fit=cover');
  //alert(document.querySelector('meta[name="viewport"]').getAttribute('content'));
});

function showModalBox(modalElt){
    var mainPage = document.querySelector('main#page');
    if(mainPage !== null) mainPage.style.zIndex = 99999999;
    modalElt.style.display = "flex";
}  

function hideModalBox(modalElt){
    var mainPage = document.querySelector('main#page');
    if(mainPage !== null) mainPage.style.zIndex = 1;    
    modalElt.style.display = "none";
}

function displayCookieModalBox(){
    var iframesrc = document.getElementById('iframeCookie').getAttribute('src');
    if(iframesrc == ''){
        document.getElementById('iframeCookie').setAttribute('src', '/parametrage-cookies');
    }
    cookieModal.style.display = "flex";
}
 
function setHeaderLanguage(lg){

      var navDesktopElt = '.header-display-desktop > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > ';
 
    //home
    document.querySelector(navDesktopElt+'div:nth-child(1) > a:nth-child(1)').innerHTML = navLangs[lg]['home'].name;
    document.querySelector(navDesktopElt+'div:nth-child(1) > a:nth-child(1)').setAttribute('href', '/'+lg+'/'+navLangs[lg]['home'].href);
    document.querySelector('div.header-menu-nav-item--collection:nth-child(1) > a:nth-child(1)').innerHTML = navLangs[lg]['home'].name;
    document.querySelector('div.header-menu-nav-item--collection:nth-child(1) > a:nth-child(1)').setAttribute('href', '/'+lg+'/'+navLangs[lg]['home'].href);
   
    //360 camera
    document.querySelector(navDesktopElt+'div:nth-child(2) > a:nth-child(1)').innerHTML = navLangs[lg]['cameras'].name;
    document.querySelector(navDesktopElt+'div:nth-child(2) > a:nth-child(1)').setAttribute('href', '/'+lg+'/'+navLangs[lg]['cameras'].href);
    document.querySelector('div.header-menu-nav-item--collection:nth-child(2) > a:nth-child(1)').innerHTML = navLangs[lg]['cameras'].name;
    document.querySelector('div.header-menu-nav-item--collection:nth-child(2) > a:nth-child(1)').setAttribute('href', '/'+lg+'/'+navLangs[lg]['cameras'].href);
   
    //features
    document.querySelector(navDesktopElt+'div:nth-child(3) > a:nth-child(1)').innerHTML = navLangs[lg]['features'].name;
    document.querySelector(navDesktopElt+'div:nth-child(3) > a:nth-child(1)').setAttribute('href', '/'+lg+'/'+navLangs[lg]['features'].href);
    document.querySelector('div.header-menu-nav-item--collection:nth-child(3) > a:nth-child(1)').innerHTML = navLangs[lg]['features'].name;
    document.querySelector('div.header-menu-nav-item--collection:nth-child(3) > a:nth-child(1)').setAttribute('href', '/'+lg+'/'+navLangs[lg]['features'].href);
   
    //pricing
    document.querySelector(navDesktopElt+'div:nth-child(4) > a:nth-child(1)').innerHTML = navLangs[lg]['price'].name;
    document.querySelector(navDesktopElt+'div:nth-child(4) > a:nth-child(1)').setAttribute('href', window.location.pathname+navLangs[lg]['price'].href);
    document.querySelector('div.header-menu-nav-folder:nth-child(1) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)').innerHTML = navLangs[lg]['price'].name;
    document.querySelector('div.header-menu-nav-folder:nth-child(1) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)').setAttribute('href', window.location.pathname+navLangs[lg]['price'].href);
   
    //contact
    document.querySelector(navDesktopElt+'div:nth-child(5) > a:nth-child(1)').innerHTML = navLangs[lg]['contact'].name;
    document.querySelector(navDesktopElt+'div:nth-child(5) > a:nth-child(1)').setAttribute('href', window.location.pathname+navLangs[lg]['contact'].href);
    document.querySelector('div.header-menu-nav-item--external:nth-child(5) > a:nth-child(1)').innerHTML = navLangs[lg]['contact'].name;
    document.querySelector('div.header-menu-nav-item--external:nth-child(5) > a:nth-child(1)').setAttribute('href', window.location.pathname+navLangs[lg]['contact'].href);
   
    //Lang
    document.querySelector(navDesktopElt+'div:nth-child(6) > a:nth-child(1)').innerHTML = lg.toUpperCase();
    document.querySelector(navDesktopElt+'div:nth-child(6) > a:nth-child(1)').classList.add(lg+'-flag');
    document.querySelector('.header-menu-nav-item-content > span:nth-child(2)').innerHTML = lg.toUpperCase();

    var indexElt = (lg == 'es' ? 2 : 3);
    document.querySelector('#header div.header-display-desktop nav > div.header-nav-item.header-nav-item--folder > div > div:nth-child('+indexElt+') > a').innerHTML = 'EN';
    document.querySelector('#header div.header-display-desktop nav > div.header-nav-item.header-nav-item--folder > div > div:nth-child('+indexElt+') > a').setAttribute('href', '/');
    document.querySelector('#header div.header-display-desktop nav > div.header-nav-item.header-nav-item--folder > div > div:nth-child('+indexElt+') > a').classList.add('en-flag');

    document.querySelector('#header > div.header-menu.header-menu--folder-list > div.header-menu-nav > nav > div:nth-child(2) > div > div:nth-child('+(indexElt+1)+') > a').innerHTML = 'EN';
    document.querySelector('#header > div.header-menu.header-menu--folder-list > div.header-menu-nav > nav > div:nth-child(2) > div > div:nth-child('+(indexElt+1)+') > a').setAttribute('href', '/');


    //order btn
    document.querySelector('.header-display-desktop > div:nth-child(2) > div:nth-child(3) > a:nth-child(1)').innerHTML = navLangs[lg]['order'].name;
    document.querySelector('div.header-menu-cta > a.theme-btn--primary').innerHTML = navLangs[lg]['order'].name;

    //back btn
    document.querySelector('.header-menu-controls-control > span:nth-child(2)').innerHTML = navLangs[lg]['back'];
}

function setFooterLangForm(lg){
  var footerElt = '.footer-container > div:nth-child(1) > div:nth-child(2) >';

  //L'OUTIL MARKETING ULTIME POUR L'IMMOBILIER
  document.querySelector('h2.footer-title').innerHTML = footerLangs[lg]['marketing_label'].name;
  
  //JE SUIS CONVAINCU
  document.querySelector('div#contact.footer-container div.footer-order-block a button.footer-btn').innerHTML = footerLangs[lg]['marketing_button'].name;
 
  
 //CONTACTEZ-NOUS FORM
 document.querySelector('div#contact.footer-container div#contact-form h3.contact-title').innerHTML = footerLangs[lg]['contact_label'].name;
 document.querySelector('div#contact.footer-container div#contact-form form div.form-field div.text-field input#name.input-field').setAttribute('placeholder',''+footerLangs[lg]['form_name'].name);
 document.querySelector('div#contact.footer-container div#contact-form form div.form-field div.text-field input#mail.input-field').setAttribute('placeholder',''+footerLangs[lg]['form_mail'].name);
 document.querySelector('div#contact.footer-container div#contact-form form div.form-field div.text-field input#tel.input-field').setAttribute('placeholder',''+footerLangs[lg]['form_tel'].name);
 document.querySelector('div#contact.footer-container div#contact-form form div.form-field textarea#msg.contact-textarea').innerHTML = footerLangs[lg]['form_textArea'].name;

 //CHECKBOXES
 document.querySelector('div#contact.footer-container div#contact-form form div.checkboxes-container div.checkboxes label.checkbox-txt:nth-child(2)').innerHTML = footerLangs[lg]['form_checkBox1'].name;
 document.querySelector('div#contact.footer-container div#contact-form form div.checkboxes-container div.checkboxes label.checkbox-txt:nth-child(6)').innerHTML = footerLangs[lg]['form_newsletter'].name;


 //ENVOYEZ
 document.querySelector('div#contact.footer-container div#contact-form form button#btn-contact').innerHTML = footerLangs[lg]['form_btn'].name;
 
}

function setFooterLangNav(lg){
  var footerNav = 'div.basPage div#nav-footer a';

  //ACCUEIL
  document.querySelector(footerNav + ':nth-child(1)').innerHTML = footerLangs[lg]['home'].name;
  document.querySelector(footerNav + ':nth-child(1)').setAttribute('href', '/'+lg+'/'+footerLangs[lg]['home'].href);

  //CAMÉRAS 360
  document.querySelector(footerNav + ':nth-child(2)').innerHTML = footerLangs[lg]['cameras'].name;
  document.querySelector(footerNav + ':nth-child(2)').setAttribute('href', '/'+lg+'/'+footerLangs[lg]['cameras'].href);

  //FONCTIONALIÉS
  document.querySelector(footerNav + ':nth-child(3)').innerHTML = footerLangs[lg]['features'].name;
  document.querySelector(footerNav + ':nth-child(3)').setAttribute('href', '/'+lg+'/'+footerLangs[lg]['features'].href);

  //OFFRES
  document.querySelector(footerNav + ':nth-child(4)').innerHTML = footerLangs[lg]['price'].name;
  document.querySelector(footerNav + ':nth-child(4)').setAttribute('href', window.location.pathname+footerLangs[lg]['price'].href);

  //CONTACT
  document.querySelector(footerNav + ':nth-child(5)').innerHTML = footerLangs[lg]['contact'].name;
  document.querySelector(footerNav + ':nth-child(5)').setAttribute('href', window.location.pathname+footerLangs[lg]['contact'].href);

}


function setFooterPolitiqueMentions(lg){

  var footerPolitiqueMentions = 'div.footer-bas > center >';

  //Politique de confidentialité
  document.querySelector(footerPolitiqueMentions + 'a:nth-child(1)').innerHTML = footerLangs[lg]['politique'].name;
  //document.querySelector(footerPolitiqueMentions + ':nth-child(1)').innerHTML = footerLangs[lg]['politique'].href;

  //Mentions légales
  document.querySelector(footerPolitiqueMentions + 'a:nth-child(2)').innerHTML = footerLangs[lg]['mentions_legales'].name;
  //document.querySelector(footerPolitiqueMentions + ':nth-child(2)').innerHTML = footerLangs[lg]['mentions_legales'].href;


  //Politique des cookies
  document.querySelector(footerPolitiqueMentions + 'a:nth-child(3)').innerHTML = footerLangs[lg]['politique_cookies'].name;
  //document.querySelector(footerPolitiqueMentions + ':nth-child(3)').innerHTML = footerLangs[lg]['politique_cookies'].href;

  //Tous droits réservés enVisite
  document.querySelector(footerPolitiqueMentions + 'p').innerHTML = footerLangs[lg]['droits_reserves'].name;
  

}

function setFooterLang(lg){ // FONCTION QUI EXÉCUTE LES 3 FONCTIONS DU FOOTER

   setFooterLangForm(lg); 
   setFooterLangNav(lg); 
   setFooterPolitiqueMentions(lg);
}
