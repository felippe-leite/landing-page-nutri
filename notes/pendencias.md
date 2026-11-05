# Pendências — landing page da Luana Leite

Site em produção: https://landing-page-nutri-brown.vercel.app

Contexto e dados confirmados ficam em [briefing.md](./briefing.md). Ao concluir um item, marque `[x]` e, se for conteúdo, atualize `src/data/site.ts`.

## Retomada — pedido da Luana em 05/11/2026

A Luana pediu mais relatos reais sobre emagrecimento e acompanhamento, destaque para o Instagram e retirada dos valores públicos. Ela pretende reenviar imagens e tentar recuperar os comentários antigos do Google Meu Negócio. A quantidade mencionada por ela (mais de cem comentários) não foi publicada no site nem verificada.

Implementado localmente, pronto para o commit do Felippe:

- Valores removidos dos cartões, FAQ e JSON-LD (`priceRange`).
- Opções reorganizadas em **Consulta individual** e **Protocolo de emagrecimento**, apresentado como protocolo de acompanhamento, com mensagens específicas para WhatsApp.
- Formato e condições do atendimento combinados diretamente com a Luana, sem inventar duração ou quantidade de consultas.
- Bloco de Instagram junto aos depoimentos, apontando para `@luana.leite.nutri`.
- Mantidos os três relatos recebidos: Adriana, Giovana e Thayná.
- Briefing atualizado; lint, TypeScript e verificação de espaços do diff passaram.

Na próxima sessão:

1. Conferir o estado do Git: Felippe fará o commit; ainda não há confirmação de envio destas mudanças ao GitHub ou de deploy.
2. Receber os novos relatos e fotos reais e integrá-los à seção de depoimentos, preservando o conteúdo e o enquadramento circular das fotos.
3. Receber o link específico do destaque ou publicação de depoimentos no Instagram; por enquanto o botão abre o perfil.
4. Se os comentários do Google forem recuperados, selecionar os relatos fornecidos pela Luana para inclusão.
5. Fazer validação visual em celular, tablet e desktop. Os breakpoints foram conferidos no código, mas ainda não houve validação visual completa em diferentes larguras.

Não criar depoimentos, nomes ou resultados para preencher a seção. Não publicar números de pacientes ou avaliações sem confirmação.

## 1. Validar com a Luana

### Antes de divulgar (essencial)

- [ ] Revisar os textos das 7 abas de objetivos (`objectives` em `src/data/site.ts`) — foram escritos a partir do site antigo e precisam de aprovação profissional
- [ ] Revisar a política de privacidade (`/privacidade`) — idealmente com apoio jurídico
- [ ] Endereço ou bairro do atendimento presencial
- [ ] Nome da clínica/local de atendimento
- [ ] Convênios aceitos
- [ ] Dias e horários disponíveis
- [ ] Aprovar a logo nova (maçã em traço fino + "Luana Leite" cursivo) — baseada na placa do consultório, com a maçã no lugar do lótus; se existir arquivo original da designer (SVG/AI/PDF), substituir em `src/components/brand/Logo.tsx`
- [ ] Confirmar a grafia e formatação do CRN (hoje: `CRN-15793`; o padrão costuma incluir a região, ex.: `CRN-1 15793`)

### Importante

- [ ] Duração da consulta e do retorno → nova pergunta no FAQ
- [ ] Formas de pagamento → nova pergunta no FAQ
- [ ] Política de cancelamento e remarcação → nova pergunta no FAQ
- [ ] Confirmar duração e detalhes do protocolo de acompanhamento; valores tratados diretamente com o paciente
- [ ] "Programa de Exercícios Moderno": continua ativo? Entra no site?
- [ ] Formação e instituições de ensino → seção "Sobre"
- [ ] Especializações oficiais (confirmar os títulos usados: clínica esportiva, suplementação fitoterápica, coaching)

### Depois

- [ ] Outros e-books: nomes, capas e links da Hotmart (hoje só o volume 01)
- [ ] Números reais para uma faixa de credibilidade abaixo do topo (ex.: pacientes atendidos, anos de experiência)
- [ ] Fotos reais (6–8, mesma luz e tom quente das fotos atuais) para substituir as de banco em "Como funciona" e "Avaliações": consultório, bioimpedância, Luana atendendo, pratos montados
- [ ] Depoimentos reais **com autorização por escrito** de cada paciente
  - Atenção às regras do CFN para divulgação: evitar fotos de "antes e depois" de pacientes
- [ ] Fotos do consultório
- [ ] Demais redes sociais além de Instagram e YouTube
- [ ] Link de agendamento online, se existir

## 2. Configuração (Felippe)

- [ ] Trocar o link da bio do Instagram (`@luana.leite.nutri`) para o site novo
- [ ] Domínio próprio (ex.: `luanaleite.com.br`) ou ao menos renomear o `.vercel.app` em Settings → Domains
  - Ao usar domínio próprio, definir `NEXT_PUBLIC_SITE_URL` na Vercel e fazer redeploy
- [ ] Criar o Perfil da Empresa no Google (Google Meu Negócio)
- [ ] Cadastrar o site no Google Search Console e enviar o `sitemap.xml`
- [ ] Em 1–2 semanas, checar no Vercel Analytics se os eventos `whatsapp_click`, `social_click` (Instagram/YouTube) e `ebook_click` aparecem
  - Eventos personalizados podem exigir o plano Pro. Se não aparecerem, criar uma propriedade GA4 e passar o ID (`G-XXXX`) para integrar no `ClickTracker`
- [ ] Testar a prévia do link enviando o site no WhatsApp (imagem gerada em `/opengraph-image`)

## 3. Código (quando o conteúdo chegar)

- [ ] Ampliar os depoimentos sobre emagrecimento e acompanhamento quando a Luana enviar os novos relatos e imagens
- [ ] Receber o link específico dos depoimentos no Instagram (por enquanto o botão leva ao perfil)
- [ ] Seção/lista de e-books com vários volumes
- [ ] Mapa ou endereço na seção de contato
- [ ] Ampliar o FAQ com pagamento, duração e cancelamento
- [ ] Faixa de números/credibilidade abaixo do topo (quando os números chegarem)
- [ ] Trocar fotos de banco pelas reais e padronizar textos dos botões principais com o verbo "Agendar"

## Concluído

- [x] Três depoimentos recebidos com fotos circulares e link para o perfil do Instagram
- [x] Consulta individual e protocolo de emagrecimento com links próprios para WhatsApp; valores removidos dos cartões, FAQ e dados estruturados

- [x] Redesign com tipografia, animações e seções interativas
- [x] Conteúdo e e-book extraídos do site antigo (Canva)
- [x] Deploy na Vercel + Vercel Analytics com medição de cliques
- [x] SEO: Open Graph, imagem de compartilhamento 1200×630, JSON-LD, sitemap e robots
- [x] Política de privacidade (`/privacidade`) e página 404
- [x] Limpeza das imagens não usadas do site antigo
- [x] Foto nova (jaleco, consultório atual) no topo; foto do blazer na seção de contato
- [x] Lighthouse mobile: Acessibilidade 100, SEO 100, Desempenho ~95
- [x] Página mais curta: removida a seção "O cuidado muda" (repetia as abas de objetivos); foto redonda da Luana no topo do celular
- [x] Logo nova em SVG — maçã em traço fino + "Luana Leite" (header, favicon, ícone do iPhone e imagem de compartilhamento)
