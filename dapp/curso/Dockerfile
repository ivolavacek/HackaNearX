# Imagem com o node_modules instalado
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app/curso
# Copie o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY . .

# Instale as dependências do projeto
RUN echo "Instalando dependências do Curso..." && npm install && echo "Dependências instaladas com sucesso."

# Comando para iniciar o servidor Next.js
CMD ["npm", "run", "build"]