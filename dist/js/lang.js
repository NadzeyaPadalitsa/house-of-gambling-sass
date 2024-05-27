const select = document.querySelector('select');

select.addEventListener('change', changeURLLang);
const allLangs = ['en', 'ru'];

function changeURLLang() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
};

function changeLang() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLangs.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  select.value = hash;
}
changeLang();
