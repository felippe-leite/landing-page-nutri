# Pendências — landing page da Luana Leite

Site em produção: https://landing-page-nutri-brown.vercel.app

Contexto e dados confirmados ficam em [briefing.md](./briefing.md). Ao concluir um item, marque `[x]` e, se for conteúdo, atualize `src/data/site.ts`.

## 1. Validar com a Luana

### Antes de divulgar (essencial)

- [ ] Revisar os textos das 7 abas de objetivos (`objectives` em `src/data/site.ts`) — foram escritos a partir do site antigo e precisam de aprovação profissional
- [ ] Revisar a política de privacidade (`/privacidade`) — idealmente com apoio jurídico
- [ ] Endereço ou bairro do atendimento presencial
- [ ] Nome da clínica/local de atendimento
- [ ] Convênios aceitos
- [ ] Dias e horários disponíveis
- [ ] Aprovar a logo recriada (lótus + "Luana Leite") — foi redesenhada a partir da placa do consultório; se existir o arquivo original da designer (SVG/AI/PDF), substituir em `src/components/brand/Logo.tsx`
- [ ] Confirmar a grafia e formatação do CRN (hoje: `CRN-15793`; o padrão costuma incluir a região, ex.: `CRN-1 15793`)

### Importante

- [ ] Duração da consulta e do retorno → nova pergunta no FAQ
- [ ] Formas de pagamento → nova pergunta no FAQ
- [ ] Política de cancelamento e remarcação → nova pergunta no FAQ
- [ ] "Acompanhamento mensal": o que inclui e valor (citado no site antigo, sem detalhes)
- [ ] "Programa de Exercícios Moderno": continua ativo? Entra no site?
- [ ] Formação e instituições de ensino → seção "Sobre"
- [ ] Especializações oficiais (confirmar os títulos usados: clínica esportiva, suplementação fitoterápica, coaching)

### Depois

- [ ] Outros e-books: nomes, capas e links da Hotmart (hoje só o volume 01)
- [ ] Depoimentos reais **com autorização por escrito** de cada paciente
- [ ] Fotos do consultório
- [ ] Demais redes sociais além de Instagram e YouTube
- [ ] Link de agendamento online, se existir

## 2. Configuração (Felippe)

- [ ] Trocar o link da bio do Instagram (`@luana.leite.nutri`) para o site novo
- [ ] Domínio próprio (ex.: `luanaleite.com.br`) ou ao menos renomear o `.vercel.app` em Settings → Domains
  - Ao usar domínio próprio, definir `NEXT_PUBLIC_SITE_URL` na Vercel e fazer redeploy
- [ ] Criar o Perfil da Empresa no Google (Google Meu Negócio)
- [ ] Cadastrar o site no Google Search Console e enviar o `sitemap.xml`
- [ ] Em 1–2 semanas, checar no Vercel Analytics se os eventos `whatsapp_click` e `ebook_click` aparecem
  - Eventos personalizados podem exigir o plano Pro. Se não aparecerem, criar uma propriedade GA4 e passar o ID (`G-XXXX`) para integrar no `ClickTracker`
- [ ] Testar a prévia do link enviando o site no WhatsApp (imagem gerada em `/opengraph-image`)

## 3. Código (quando o conteúdo chegar)

- [ ] Seção de depoimentos reais (o nome `Testimonials` ficou livre para isso)
- [ ] Seção/lista de e-books com vários volumes
- [ ] Mapa ou endereço na seção de contato
- [ ] Ampliar o FAQ com pagamento, duração e cancelamento

## Concluído

- [x] Redesign com tipografia, animações e seções interativas
- [x] Conteúdo e e-book extraídos do site antigo (Canva)
- [x] Deploy na Vercel + Vercel Analytics com medição de cliques
- [x] SEO: Open Graph, imagem de compartilhamento 1200×630, JSON-LD, sitemap e robots
- [x] Política de privacidade (`/privacidade`) e página 404
- [x] Limpeza das imagens não usadas do site antigo
- [x] Logo nova em SVG (header, favicon, ícone do iPhone e imagem de compartilhamento), no lugar da logo antiga das maçãs
