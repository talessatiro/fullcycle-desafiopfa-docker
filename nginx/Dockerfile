FROM nginx:1.15.0-alpine

# Remove configuração default
RUN rm /etc/nginx/conf.d/default.conf

# Copia a configuração de proxy reverso para pasta conf.d
COPY nginx.conf /etc/nginx/conf.d/