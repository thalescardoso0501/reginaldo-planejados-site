# Reginaldo Planejados

Site institucional editorial para Reginaldo Planejados, marcenaria e móveis sob medida em Bragança Paulista — SP.

## Direção

- Conceito: **estúdio de encaixes** — uma identidade arquitetônica construída com o monograma RP, linhas de planta baixa e ritmo editorial.
- Paleta: mineral `#F2F0EA`, papel `#FAFAF7`, grafite `#171918`, verde petróleo `#28433D`, nogueira `#9D8468` e linha `#CFC8BD`.
- Tipografia: Cormorant Garamond para títulos e Manrope para interface e leitura.
- Imagens: referências conceituais de interiores, armazenadas localmente e identificadas como inspiração — não como portfólio real da empresa.
- 21st.dev: a biblioteca pública foi consultada como repertório para hero editorial, ritmo de linhas, microinterações e tratamento de CTA. Nenhum template ou código de componente foi copiado literalmente.

## Arquivos de marca

- `assets/rp-mark.svg` e `assets/rp-mark-light.svg`: símbolo RP para aplicações claras e escuras.
- `assets/logo-horizontal.svg` e `assets/logo-horizontal-light.svg`: assinatura horizontal.
- `assets/logo-vertical.svg` e `assets/logo-vertical-light.svg`: assinatura vertical.
- `assets/favicon.svg`: redução do monograma para navegador e ícone social.

## Prévia

- `outputs/reginaldo-planejados-previa.pdf`: exportação A4 de 8 páginas, revisada na primeira e na última página.

## Executar localmente

O projeto é uma página estática sem dependências. Sirva a pasta com qualquer servidor HTTP local e abra `index.html` pelo navegador.

## Verificação manual

- CTA principal e botão flutuante abrem o WhatsApp com mensagem pré-preenchida.
- Menu mobile abre em drawer, informa estado via `aria-expanded`, fecha com botão, clique no backdrop e tecla `Escape`.
- Header muda de tratamento conforme a rolagem.
- As imagens não carregadas acima da dobra usam `loading="lazy"`.
- A composição reorganiza-se em mobile com galeria horizontal, processo vertical e footer empilhado.
- Movimento respeita `prefers-reduced-motion`.
