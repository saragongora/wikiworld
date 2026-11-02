# WikiWorld 1.8 — Guia de cadastro manual

## Onde editar

Abra `src/data/lessons/`. Existem 12 arquivos JSON, um para cada país da América do Sul:

| Arquivo | País |
|---|---|
| `bra.json` | Brasil |
| `arg.json` | Argentina |
| `bol.json` | Bolívia |
| `chl.json` | Chile |
| `col.json` | Colômbia |
| `ecu.json` | Equador |
| `guy.json` | Guiana |
| `pry.json` | Paraguai |
| `per.json` | Peru |
| `sur.json` | Suriname |
| `ury.json` | Uruguai |
| `ven.json` | Venezuela |

## Passo a passo

1. Abra `src/data/lessons/MODELO.example.json` e copie **todo o conteúdo**.
2. Abra, por exemplo, `arg.json`, substitua o conteúdo pelo modelo e escreva os textos da Argentina.
3. Mantenha os campos `subtitle`, `sections`, `id`, `title`, `emoji`, `body`.
4. Salve (`Ctrl + S`). O Vite atualizará o navegador automaticamente enquanto `npm.cmd run dev` estiver em execução.
5. Abra `/pais/arg` para conferir. A página mantém as informações gerais de `countries.json` e mostra os capítulos preenchidos.

**Atenção:** os arquivos começam com `sections: []`. Enquanto um país não for preenchido, ele mantém o conteúdo antigo (se houver) ou a mensagem de conteúdo em preparação. Assim, o Brasil não perde seus capítulos atuais.

## Formato de um capítulo

```json
{
  "id": "geo",
  "title": "Geografia e natureza",
  "emoji": "🌎",
  "body": "Seu texto sobre o país."
}
```

Adicione quantos capítulos desejar, mantendo um `id` **único e estável** em cada um. IDs já utilizados no Brasil (`geo`, `hist`, `cult`, `cur`) podem ser reaproveitados **dentro de outro país**. Evite trocar IDs de capítulos já publicados, pois o progresso de leitura é salvo pelo código do país e pelo ID do capítulo.

## Parágrafos e caracteres especiais

JSON exige aspas duplas e não permite comentários nem vírgula depois do último item. Para representar uma quebra de linha dentro do texto, use `\n`; para separar parágrafos, `\n\n`. Não pressione Enter dentro de uma string entre aspas.

## Dados gerais e símbolos

- Capital, população, área, idiomas e moedas: `src/data/countries.json` (cuidado com a estrutura do arquivo).
- Bandeira e brasão: `public/symbols/<codigo>-flag.svg` e `<codigo>-coat.svg`, como `arg-flag.svg`.
- Contorno do país: dados cartográficos locais já existentes no projeto.

## O que NÃO precisa editar

Não é necessário alterar `src/pages/Country.tsx` ou adicionar importações ao cadastrar países: o Vite detecta automaticamente os arquivos `*.json` da pasta `lessons` durante o desenvolvimento e a compilação.

## Como iniciar

No terminal, dentro da pasta `wikiworld` (a que contém `package.json`):

```powershell
npm.cmd install
npm.cmd run dev
```

Depois de terminar uma alteração, confira o terminal e o console do navegador. Para gerar a versão de produção, use `npm.cmd run build`.
