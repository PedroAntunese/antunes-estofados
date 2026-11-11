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

## Deploy (futuro)

O conteúdo de `dist/` pode ser publicado em qualquer hospedagem estática (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
