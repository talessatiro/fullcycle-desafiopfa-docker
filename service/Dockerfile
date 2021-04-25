FROM node:15.14.0-alpine3.10

# Cria diretório /app que conterá o código de distribuição
WORKDIR /app

# Copia código de distribuição e arquivo de dependências.
# OBS: Para geração do código de distribuição (pasta dist) use 'npm run build' na raiz do projeto service
COPY dist .
COPY package*.json .

# Instala as dependências de produção
RUN npm install --only=prod

# Expõe porta 3000
EXPOSE 3000

# Comando para execução da aplicação
CMD ["node", "main.js"]