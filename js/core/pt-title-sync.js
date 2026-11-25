/** Adaptação pontual para título antigo ainda embutido no motor original.
 * Preserva o arquivo app.js e corrige o título sempre que a rota mudar.
 * Nenhuma leitura/escrita de armazenamento é realizada aqui.
 */
const title = document.querySelector('title');
if (title) {
  let updating = false;
  const sync = () => {
    if (updating || !title.textContent.includes('ADM-ESTUDO')) return;
    updating = true;
    title.textContent = title.textContent.replace(/ADM-ESTUDO/g, 'PT-ESTUDO');
    updating = false;
  };
  new MutationObserver(sync).observe(title,{childList:true,subtree:true,characterData:true});
  sync();
}
