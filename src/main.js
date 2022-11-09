import './style.css'
import javascriptLogo from './javascript.svg'
import addPlus from './add-tool.svg'

import { setupCounter } from './counter.js'


document.querySelector('#app').innerHTML = `
  <div class='header'>
    <img src="./${javascriptLogo}" class="rounded-lg outline outline-2 outline-red-500 outline-offset-2" alt="JavaScript Logo" width="50" />
    <h1 class="ml-6">Conteúdo dentro do JS <code class='text-sm bg-purple-500 text-white p-1 rounded-sm'>main.js</code></h1>
  </div>
`

//setupCounter(document.querySelector('#counter'))
