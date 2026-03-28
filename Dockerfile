# Build Stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
# Render (and similar) often set NODE_ENV=production during build, which skips
# devDependencies. Vite, Tailwind, and @vitejs/plugin-react are required to build.
RUN if [ -f package-lock.json ]; then npm ci --include=dev; else npm install --include=dev; fi

COPY . .
# Large Vite/Three bundles can OOM on small build machines without extra heap.
ENV NODE_OPTIONS=--max-old-space-size=4096
RUN npm run build

# Production Stage
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
