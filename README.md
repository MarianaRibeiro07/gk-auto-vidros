# GK Auto Vidros

Landing page responsiva da GK Auto Vidros, desenvolvida em HTML, CSS e JavaScript a partir do protótipo no Figma.

**[Acessar o site](https://marianaribeiro07.github.io/gk-auto-vidros/)** · **[Ver o protótipo](https://www.figma.com/design/93xkSTR73SoekqXQNGy4hh/GK-AUTO-VIDROS)**

## Funcionalidades

- Apresentação dos serviços e categorias de veículos atendidos.
- Seções de diferenciais, etapas de atendimento e avaliações.
- Localização da oficina e link para abrir a rota no Google Maps.
- Links para telefone e WhatsApp, incluindo botão flutuante de contato.
- Formulário que prepara uma mensagem de orçamento com nome, telefone, veículo, ano e serviço.
- Menu para celular, navegação por seções e diálogo de privacidade.

O envio do orçamento é concluído pelo visitante no WhatsApp. O site não possui backend nem banco de dados e não armazena os dados do formulário em um servidor próprio.

## Tecnologias

- HTML5 para a estrutura e os campos do formulário.
- CSS para o layout responsivo, cores e animações.
- JavaScript para o menu, a seleção de serviço, o orçamento e o diálogo de privacidade.
- GitHub Actions e GitHub Pages para publicação.

Imagens, ícones e fontes ficam no próprio projeto. Não há instalação de pacotes nem etapa de build.

## Estrutura

```text
.github/
  workflows/
    pages.yml          # Publicação automática no GitHub Pages
dist/
  assets/              # Imagens, ícones, fontes e licenças das fontes
  index.html           # Conteúdo da landing page
  styles.css           # Estilos e regras de responsividade
  script.js            # Interações da página
.gitattributes         # Regras para arquivos de texto e binários
.gitignore             # Arquivos locais que não entram no repositório
README.md
```

## Executar localmente

Abra `dist/index.html` no navegador.

Para usar um servidor local, execute o comando abaixo na raiz do repositório, com Python 3 instalado:

```sh
python -m http.server 8080 --bind 127.0.0.1 --directory dist
```

Depois, acesse [localhost:8080](http://localhost:8080). Use `Ctrl+C` no terminal para encerrar o servidor.

## Atualizar o site

1. Edite o conteúdo em `dist/index.html`, os estilos em `dist/styles.css` ou as interações em `dist/script.js`.
2. Confira a página no navegador em telas de computador e celular.
3. Faça o commit das alterações e envie para a branch `main`.
4. Acompanhe a publicação na [aba Actions](https://github.com/MarianaRibeiro07/gk-auto-vidros/actions).

O workflow publica somente o conteúdo de `dist/`. Também é possível iniciar uma publicação manualmente pela opção **Run workflow** em **Publicar site no GitHub Pages**.

Para alterar o número de WhatsApp, atualize os links no HTML e o destino da mensagem em `dist/script.js`.

## Conteúdo do protótipo

Os textos e dados de apresentação foram reproduzidos do Figma. O protótipo contém endereços diferentes na seção de contato e no rodapé, além do CNPJ de exemplo `00.000.000/0001-00`. Esses dados precisam ser confirmados e substituídos pelas informações definitivas da empresa.

## Fontes

As fontes Inter e Outfit são distribuídas sob a SIL Open Font License 1.1. Os avisos estão em [Inter](dist/assets/inter-OFL.txt) e [Outfit](dist/assets/outfit-OFL.txt).
