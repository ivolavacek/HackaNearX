# Imagem com o node_modules instalado
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app
# Copie o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY . .

# Instale as dependências do projeto
RUN echo "Instalando dependências..." && npm install && echo "Dependências instaladas com sucesso."

RUN npm run build:curso
RUN npm run build:servidor
# Construa a aplicação Next.js
# RUN npm run build

# Exponha a porta 3000 para permitir conexões externas
EXPOSE 3001
EXPOSE 3002

# Comando para iniciar o servidor Next.js
CMD ["npm", "run", "start"]