// Define language reload anchors
let dataReload = document.querySelectorAll("[data-reload]");

// Language translations
let langs = {
  eng:{
    top:"TOP",
    about:"ABOUT",
    services:"SERVICES",
    recruit:"RECRUIT",
    contack:"CONTACT US",
    slogan:"COMPANY THAT MAKES YOUR LIFE BETTER.",
    privacyPolicy:"Privacy Policy",
    terms:"Terms",
    aboutUs:"About Us"
  },
  ja:{
    top:"トップ",
    about:"概要",
    services:"サービス一覧",
    recruit:"採用情報",
    contack:"コンタクト",
    slogan:"あなたの人生をより良くする会社。",
    privacyPolicy:"プライバシーポリシー",
    terms:"利用規約",
    aboutUs:"会社概要"
  },
  bg:{
    top:"Топ",
    about:"Oтносно",
    services:"Yслуги",
    recruit:"Подбор",
    contack:"Cвържете се",
    slogan:"КОМПАНИЯ, КОЯТО ПРАВИ ПО-ДОБЪР ЖИВОТ.",
    privacyPolicy:"Декларация за поверителност",
    terms:"Yсловия",
    aboutUs:"За нас"
  }
};

  // Define language via window hash
  if(window.location.hash === "#eng"){
    topNavi.textContent = langs.eng.top;
    aboutNavi.textContent = langs.eng.about;
    servicesNavi.textContent = langs.eng.services;
    recruitNavi.textContent = langs.eng.recruit;
    contact.textContent = langs.eng.contack;
    slogan.textContent = langs.eng.slogan;
    privacyPolicy.textContent = langs.eng.privacyPolicy;
    terms.textContent = langs.eng.terms;
    aboutUs.textContent = langs.eng.aboutUs;
  }else if(window.location.hash === "#ja"){
    topNavi.textContent = langs.ja.top;
    aboutNavi.textContent = langs.ja.about;
    servicesNavi.textContent = langs.ja.services;
    recruitNavi.textContent = langs.ja.recruit;
    contact.textContent = langs.ja.contack;
    slogan.textContent = langs.ja.slogan;
    privacyPolicy.textContent = langs.ja.privacyPolicy;
    terms.textContent = langs.ja.terms;
    aboutUs.textContent = langs.ja.aboutUs;
  }else if(window.location.hash === "#bg"){
    topNavi.textContent = langs.bg.top;
    aboutNavi.textContent = langs.bg.about;
    servicesNavi.textContent = langs.bg.services;
    recruitNavi.textContent = langs.bg.recruit;
    contact.textContent = langs.bg.contack;
    slogan.textContent = langs.bg.slogan;
    privacyPolicy.textContent = langs.bg.privacyPolicy;
    terms.textContent = langs.bg.terms;
    aboutUs.textContent = langs.bg.aboutUs;
  }else{

  }

   //Define language reload onclick illiteration
