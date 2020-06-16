

function langC(x){
  let top = document.getElementById('top');
  let about= document.getElementById('about');
  let services = document.getElementById('services');
  let recruit = document.getElementById('recruit');

  en = {"top":"TOP","about":"ABOUT"};
  ja = {"top":"トップ","about":"概要"."services":"サービス一覧"};
  bg= {"top":"top","h1":"en4"};

  top.innerHTML = x["top"];
  about.innerHTML = x["about"];
  services.innerHTML = x["services"];

  console.log(x.id);
}


function showLang(){
  let ul = document.getElementById('ul');
  let en = document.getElementById('en');
  let ja = document.getElementById('ja');
  let bg = document.getElementById('bg');

  ul.addEventListener("mouseover",function(){
      ja.style.display = "inline-block";
      bg.style.display = "inline-block";
  },false);

  ul.addEventListener('mouseout',function(){
    ja.style.display = "none";
    bg.style.display = "none";
  },false);

}
