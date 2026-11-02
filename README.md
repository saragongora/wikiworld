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
