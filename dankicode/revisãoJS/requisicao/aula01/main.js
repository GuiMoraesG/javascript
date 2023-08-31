const URL = 'http://url-teste'

fetch(URL).then(res => res.json()).then(dados => console.log(dados))