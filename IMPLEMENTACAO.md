# Guia de Implementação

## 📋 Checklist de Implementação

### Passo 1: Preparação

- [ ] Fazer backup da página atual
- [ ] Criar uma página de teste no WordPress
- [ ] Ter acesso ao painel WordPress

### Passo 2: Upload de Arquivos

- [ ] Upload de `index.html`
- [ ] Upload de `styles.css`
- [ ] Upload de `script.js`
- [ ] Verificar carregamento correto

### Passo 3: Testes

- [ ] Testar em Desktop
- [ ] Testar em Tablet
- [ ] Testar em Mobile
- [ ] Testar formulário de contacto
- [ ] Verificar links
- [ ] Verificar animações

### Passo 4: Otimização

- [ ] Otimizar imagens
- [ ] Minificar CSS/JS (opcional)
- [ ] Testar performance (GTmetrix)
- [ ] Verificar SEO (Yoast)

### Passo 5: Deploy

- [ ] Publicar em produção
- [ ] Monitorar erros
- [ ] Recolher feedback

## 🔧 Configurações Personalizadas

### Alterar Cores

No arquivo `styles.css`, procure por `:root` e altere:

```css
:root {
    --primary-blue: #003366;      /* Azul principal */
    --light-blue: #0066cc;        /* Azul claro */
    --accent-orange: #ff8c00;     /* Laranja acentuado */
    --white: #ffffff;             /* Branco */
}
```

### Alterar Fontes

No `index.html`, altere o import do Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;700&display=swap" rel="stylesheet">
```

### Alterar Conteúdo

Substituir textos e links conforme necessário.

## 📈 Verificações de Performance

### Lighthouse Score (Desejável)

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Testes Online

1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
2. **GTmetrix**: https://gtmetrix.com/
3. **WebPageTest**: https://www.webpagetest.org/

## 🆘 Troubleshooting

### Problema: CSS não carrega

**Solução:**
- Verificar path do arquivo
- Verificar permissões
- Hard refresh do navegador (Ctrl+Shift+R)

### Problema: Imagens não aparecem

**Solução:**
- Verificar URLs das imagens
- Usar imagens do domínio correto
- Verificar CORS

### Problema: Formulário não funciona

**Solução:**
- Verificar JavaScript console
- Verificar validação
- Adicionar backend para envio

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)
- [WordPress Developer Handbook](https://developer.wordpress.org/)

## 🎓 Próximos Passos

1. Testar em navegadores antigos
2. Implementar analytics
3. Adicionar CTA buttons mais estratégicos
4. Implementar email signup
5. Adicionar testimonials
6. Implementar multi-idioma