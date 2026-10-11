# 🚀 Guia de Deploy no Vercel - Geometria 3D

Este guia contém instruções passo a passo para fazer o deploy do site de Geometria 3D no Vercel.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:

- [x] Uma conta no [Vercel](https://vercel.com) (gratuita)
- [x] Uma conta no [GitHub](https://github.com) (gratuita)
- [x] Git instalado na sua máquina
- [x] Node.js 18+ instalado (verificar com `node --version`)

---

## 🎯 Método 1: Deploy via GitHub (Recomendado)

Este é o método mais fácil e permite atualizações automáticas.

### Passo 1: Preparar o Repositório

```bash
# 1. Navegue até a pasta do projeto
cd caminho/para/o/projeto

# 2. Inicialize o Git (se ainda não fez)
git init

# 3. Adicione todos os arquivos
git add .

# 4. Faça o primeiro commit
git commit -m "Primeiro commit - Geometria 3D"

# 5. Crie um repositório no GitHub (https://github.com/new)
# Nome sugerido: geometria-3d

# 6. Conecte o repositório local ao GitHub
git remote add origin https://github.com/SEU_USUARIO/geometria-3d.git
git branch -M main
git push -u origin main
```

### Passo 2: Deploy no Vercel

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Faça login com sua conta GitHub
3. Clique em **"Import Project"**
4. Selecione o repositório `geometria-3d`
5. O Vercel detectará automaticamente que é um projeto Vite
6. Verifique as configurações:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
7. Clique em **"Deploy"**
8. Aguarde o deploy ser concluído (1-2 minutos)
9. Seu site estará disponível em: `https://geometria-3d.vercel.app` (ou similar)

### Passo 3: Atualizações Automáticas

A partir de agora, toda vez que você fizer push para o GitHub:

```bash
git add .
git commit -m "Descrição da mudança"
git push
```

O Vercel automaticamente fará o redeploy!

---

## 🎯 Método 2: Deploy via Vercel CLI

Se preferir usar a linha de comando:

```bash
# 1. Instale a CLI do Vercel globalmente
npm install -g vercel

# 2. Faça login no Vercel
vercel login

# 3. Navegue até a pasta do projeto
cd caminho/para/o/projeto

# 4. Execute o build
npm run build

# 5. Faça o deploy
vercel

# 6. Para deploy em produção
vercel --prod
```

---

## 🎯 Método 3: Deploy Manual (Upload da pasta dist)

Se você não quer usar Git:

1. Execute o build localmente:
   ```bash
   npm install
   npm run build
   ```

2. Acesse [vercel.com/new](https://vercel.com/new)

3. Em vez de importar do GitHub, role para baixo e clique em:
   **"Or deploy from a template / upload"**

4. Arraste a pasta `dist` para a área de upload

5. Clique em **"Deploy"**

---

## ⚙️ Arquivos Importantes para o Deploy

### `vercel.json`

Este arquivo é **essencial** e já está incluído no projeto. Ele configura:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**O que cada parte faz:**

- `buildCommand`: Comando para gerar o build de produção
- `outputDirectory`: Pasta onde os arquivos finais ficam
- `framework`: Informa ao Vercel que é um projeto Vite
- `rewrites`: Redireciona todas as rotas para o `index.html` (necessário para SPAs com React Router)

### `vite.config.js`

Configuração ajustada para o Vercel:

```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",  // ← Essencial para assets funcionarem corretamente
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
```

---

## 🔧 Solução de Problemas Comuns

### Problema 1: Página em branco após o deploy

**Causa:** Caminhos dos assets incorretos

**Solução:** Verifique se o `vite.config.js` tem `base: "./"`

---

### Problema 2: Erro 404 ao navegar entre páginas

**Causa:** O Vercel não está redirecionando as rotas corretamente

**Solução:** Verifique se o `vercel.json` existe e contém a configuração de `rewrites`

---

### Problema 3: Build falha no Vercel

**Causa:** Dependências não instaladas ou erro no código

**Solução:**
```bash
# Teste o build localmente primeiro
npm install
npm run build

# Se funcionar localmente, verifique os logs no Vercel
```

---

### Problema 4: Modelos 3D não aparecem

**Causa:** WebGL bloqueado ou erro no Three.js

**Solução:**
- Verifique se o navegador suporta WebGL
- Abra o console do navegador (F12) para ver erros
- Certifique-se de que todas as dependências estão instaladas

---

### Problema 5: Assets (CSS/JS) não carregam

**Causa:** Caminho base incorreto

**Solução:** Confirme que `vite.config.js` tem:
```javascript
base: "./"
```

---

## 🌐 Configurações Adicionais no Vercel

### Domínio Personalizado

1. No painel do Vercel, vá em **Settings → Domains**
2. Adicione seu domínio (ex: `geometria3d.com.br`)
3. Configure o DNS conforme as instruções do Vercel

### Variáveis de Ambiente (se necessário)

Se o projeto precisar de variáveis de ambiente:

1. No painel do Vercel, vá em **Settings → Environment Variables**
2. Adicione as variáveis necessárias
3. Faça redeploy

---

## 📊 Estrutura do Projeto para Deploy

```
geometria-3d/
├── public/              # Arquivos estáticos (se houver)
├── src/
│   ├── components/      # Componentes React
│   ├── pages/           # Páginas do site
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Ponto de entrada
│   └── index.css        # Estilos globais
├── dist/                # Build de produção (gerado)
├── index.html           # HTML principal
├── package.json         # Dependências
├── vercel.json          # Configuração do Vercel ⭐
├── vite.config.js       # Configuração do Vite ⭐
└── readmedeployvercel.md # Este arquivo
```

---

## ✅ Checklist Antes do Deploy

- [ ] `vercel.json` está presente no projeto
- [ ] `vite.config.js` tem `base: "./"`
- [ ] O build funciona localmente (`npm run build`)
- [ ] Todos os arquivos estão no Git (se usando Método 1)
- [ ] Dependências estão listadas no `package.json`

---

## 🔄 Como Atualizar o Site

### Via GitHub (automático):
```bash
# Faça suas alterações
git add .
git commit -m "Atualização: descrição"
git push
# O Vercel redeploya automaticamente!
```

### Via CLI:
```bash
# Faça suas alterações
npm run build
vercel --prod
```

---

## 📞 Suporte

- [Documentação do Vercel](https://vercel.com/docs)
- [Documentação do Vite](https://vitejs.dev)
- [Documentação do React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

---

## 🎉 Deploy Concluído!

Se tudo correu bem, seu site estará disponível em uma URL como:
`https://geometria-3d-seu-usuario.vercel.app`

Compartilhe com seus alunos e aproveite o site de Geometria 3D! 🎓📐

---

**Dica Final:** O Vercel oferece deploy gratuito com HTTPS automático, CDN global e atualizações instantâneas. É a melhor opção para projetos como este!
