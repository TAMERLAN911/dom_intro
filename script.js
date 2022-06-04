const root = document.getElementById('root')
const p = document.createElement('p')
p.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
p.style.borderRadius = '20px'
p.style.border = '2px solid brown'
p.style.margin = 'auto'
p.style.width = '600px'
p.style.padding ='10px'

const ul = document.createElement('ul')
const intocode = document.createElement('a')
const google = document.createElement('a')
const instagram = document.createElement('a')

intocode.textContent = "intocode"
google.textContent = "google"
instagram.textContent = "instagram"
ul.style.display ='flex'
ul.style.justifyContent = 'space-between'
ul.style.width = '500px'
ul.style.margin = 'auto'
ul.style.padding = '10px'
intocode.href = "#"
google.href ="#"
instagram.href ="#"

root.append(p,ul)
ul.append(intocode, google, instagram)