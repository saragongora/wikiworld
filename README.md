# WikiWorld 1.3 — Dark Explorer

Versão incremental baseada no WikiWorld 1.2 com dados geográficos locais.

## Novidades
- Página própria `/paises` com catálogo completo, busca tolerante a acentos, filtros de continente/sub-região, ordenação e filtro de progresso.
- Barra de nível, XP e cinco conquistas no início da jornada, na página inicial.
- Páginas dos países com progresso regional, nível e atalhos de navegação.
- Conteúdos e desafios educativos existentes preservados.
- Dados de países e geometria do mapa mantidos localmente; sem REST Countries.

## Instalação
```powershell
npm.cmd install
npm.cmd run dev
```

Acesse `http://localhost:5173`. Para verificar o build: `npm.cmd run build`.

## Dados e limitações
A base herdada possui 200 registros e 172 geometrias; não representa um atlas revisado de 195 Estados. Algumas informações estão incompletas ou desatualizadas. As fontes do Google Fonts ainda dependem de internet, mas os dados geográficos não. O progresso continua salvo no `localStorage` do mesmo domínio, nas chaves `wikiworld-visited` e `wikiworld-sections`. Não substitua essas chaves sem migrar os dados.


## Atualização: mapas individuais offline
As páginas dos países exibem agora contornos territoriais extraídos de `public/maps/world.geojson`, sem consultas externas. As capitais de Brasil, Japão, França, Estados Unidos e Egito são marcadas com coordenadas locais. Esses cinco países também têm imagens SVG locais de suas bandeiras; as outras páginas mantêm o emoji da bandeira. **Limitação conhecida:** o pacote original não contém fronteiras administrativas (estados, províncias, regiões), por isso elas não foram inventadas nem desenhadas. Para habilitá-las, será preciso incorporar arquivos GeoJSON administrativos com licenças verificadas. Alguns SVGs das bandeiras são versões simplificadas, não reproduções heráldicas completas.


## Atualização 1.6 — layout das páginas dos países
- Mapa territorial na área superior, no lugar da bandeira; marcador de capital revela o nome ao passar o mouse ou focar pelo teclado.
- Card “Bandeira e brasão” em Conheça [país], com miniaturas clicáveis e modal (Esc fecha).
- Para adicionar imagens manualmente, coloque SVGs em `public/symbols/` com nomes `bra-flag.svg`, `bra-coat.svg`, `jpn-flag.svg`, `jpn-coat.svg` etc., usando o código ISO de três letras em minúsculas.
- Para os cinco países já contemplados, a bandeira SVG local anterior continua como alternativa até você inserir o SVG. Brasões sem arquivo exibem espaço reservado.
- Os quizzes foram removidos da interface; capítulos agora são marcados como lidos por botão. O progresso anterior é mantido.
- Os mapas e imagens continuam locais, sem chamadas a APIs externas.


## Versão 1.7 — Catálogo regional e bandeiras offline
Os filtros em `/paises` e na página inicial seguem a classificação fornecida (América, Europa, Ásia, África e Oceania, com subcategorias específicas). Os cartões mostram bandeiras PNG locais geradas a partir dos símbolos Unicode oficiais em `public/flags/catalog/`, sem consultas externas.

A base `src/data/countries.json` foi preservada: registros não contemplados pela lista ficam em **Outros territórios** e países ausentes não foram inventados. Para ampliar a cobertura, é necessário complementar a base local.
