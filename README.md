# WikiWorld — Dark Explorer (dados locais)

## Executar no Windows

```powershell
npm.cmd install
npm.cmd run dev
```

## Como funciona
- `src/data/countries.json`: catálogo local com 200 entradas (inclui alguns territórios ou entidades de classificação variável).
- `public/maps/world.geojson`: mapa simplificado local, com 172 geometrias disponíveis. Países muito pequenos não aparecem individualmente no mapa; continuam acessíveis pelo catálogo.
- Não há chamadas à API REST Countries nem a CDN para carregar países e mapa.
- Bandeiras são emojis do sistema operacional.
- Capital, área, idiomas, moedas e fronteiras não foram preenchidos quando não havia dados locais confiáveis. A população é uma estimativa histórica da base geográfica, não um dado atual.
- Progresso salvo em localStorage.

## Próximos passos
Enriquecer os 195 países definidos pelo escopo editorial com dados revisados, atualizar população/área, e substituir o mapa simplificado por geometria detalhada para microestados.
