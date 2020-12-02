 //CODE ORIGINEL
 
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
    }
    
  /* JS MODAL */
  window.addEventListener('DOMContentLoaded', function(){
        // set header lang
        var pathname = window.location.pathname;
        if(pathname.indexOf('/es/') > -1){
          setHeaderLanguage('es');
      }else{
          if(pathname.indexOf('/pt/') > -1){
              setHeaderLanguage('pt');
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
      document.querySelector('.header-menu-nav-item-content > span:nth-child(2) ').innerHTML = lg.toUpperCase();
  
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