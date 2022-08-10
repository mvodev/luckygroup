const getSubHeader = async ()=> {
  let subHeader = '';
  const result = await fetch('https://baconipsum.com/api/?type=lucky')
    .then(response => response.json());
  if(result && result[0]){
    subHeader = result[0];
  }
  const subHeaderInDOM = document.querySelector('.js-sub-header');
  subHeaderInDOM.innerText = subHeader;
}
getSubHeader();