# Antunes Estofados: site institucional

Site estático (React + TypeScript + Vite) da **Antunes Estofados / Tapeçaria Antunes**, em Porto Feliz-SP.

## Rodar localmente

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a versão final em dist/
npm run preview  # testa a versão final
```

## Onde editar

| O quê | Arquivo |
|---|---|
| Telefone, WhatsApp, endereço, horários, redes sociais, serviços, avaliações, FAQ | `src/data/business.ts` |
| SEO (título, descrição, dados para o Google) | `index.html` |
| Cores e estilos | `src/styles.css` (variáveis no topo) |

Itens marcados com `CONFIRMAR` em `business.ts` precisam ser validados com a loja.

## Fotos

1. Coloque as fotos em `public/fotos/` (ex.: `sofa-antes.jpg`).
2. Galeria: preencha `src` em `src/components/Gallery.tsx` (ex.: `src: '/fotos/sofa-antes.jpg'`).
3. Foto principal e foto "Sobre": passe `src` para `<ImagePlaceholder>` em `Hero.tsx` e `About.tsx`.

Prefira JPG/WebP com até ~1600px de largura e no máximo ~300 KB cada.

## Publicação (GitHub Pages)

O site está no ar em **https://pedroantunese.github.io/antunes-estofados/**.

- Todo `git push` na branch `main` publica uma nova versão automaticamente
  (workflow `.github/workflows/deploy.yml`). Leva cerca de 1 minuto.
- Para publicar de novo sem mudar nada: aba **Actions** do repositório →
  "Deploy no GitHub Pages" → **Run workflow**.
- O GitHub Pages gratuito exige repositório **público**: se o repositório voltar
  a ser privado, o site sai do ar.
- O Vite usa `base: './'` (caminhos relativos), então o mesmo build funciona no
  Pages e localmente. Se um dia usar um domínio próprio (ex.: antunesestofados.com.br),
  nada precisa mudar no build.
