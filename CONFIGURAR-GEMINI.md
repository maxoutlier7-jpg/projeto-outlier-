# 🔑 CONFIGURAR A CHAVE DO GEMINI — OUTLIER AI

> **IMPORTANTE:** não cole sua chave real neste arquivo. Este repositório é público.

A chave deve ser cadastrada como **variável de ambiente secreta** no serviço onde o backend do Outlier AI for hospedado.

## Nome exato da variável

```text
GEMINI_API_KEY
      ↑
      └── COLE A SUA CHAVE DO GOOGLE AI STUDIO NO CAMPO DE VALOR DA HOSPEDAGEM
```

### Exemplo visual do painel da hospedagem

```text
Environment Variables / Variáveis de ambiente

NAME / NOME                         VALUE / VALOR
┌──────────────────────┐           ┌──────────────────────────────────┐
│ GEMINI_API_KEY       │           │ COLE_SUA_CHAVE_AQUI              │
└──────────────────────┘           └──────────────────────────────────┘
                                             ↑
                                             │
                                  COLE A CHAVE AQUI NO PAINEL
                                  (NÃO neste arquivo do GitHub)
```

Opcionalmente, o backend aceita:

```text
GEMINI_MODEL=gemini-2.5-flash
ALLOWED_ORIGIN=https://maxoutlier7-jpg.github.io
```

## Depois de salvar a chave

1. Faça/reinicie o deploy do backend.
2. Copie a URL pública do endpoint do Outlier AI.
3. Abra o arquivo `config.js` deste repositório.
4. Coloque **somente a URL do backend** entre as aspas de `window.OUTLIER_AI_ENDPOINT`.

Exemplo:

```js
window.OUTLIER_AI_ENDPOINT = 'https://SEU-BACKEND/api/outlier-ai';
```

Essa URL pode ser pública. **A GEMINI_API_KEY não pode.**

O código que lê a chave já está em `server/api/outlier-ai.js`:

```js
process.env.GEMINI_API_KEY
```

Isso significa que o código procura a chave no ambiente privado do servidor, e não no navegador do usuário.
