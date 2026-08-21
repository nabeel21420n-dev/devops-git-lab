# Stage 1: dependencies
FROM node:24.19.0-alpine3.24 AS dependencies

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --omit=dev


# Stage 2: production runtime
FROM node:24.19.0-alpine3.24

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app

# Production app ko npm/yarn/corepack runtime par nahi chahiye.
# Extra package-management tooling remove karke attack surface kam karte hain.
RUN rm -rf \
      /usr/local/lib/node_modules/npm \
      /usr/local/lib/node_modules/corepack \
      /opt/yarn-v* \
    && rm -f \
      /usr/local/bin/npm \
      /usr/local/bin/npx \
      /usr/local/bin/corepack \
      /usr/local/bin/yarn \
      /usr/local/bin/yarnpkg \
      /usr/local/bin/pnpm \
      /usr/local/bin/pnpx

COPY --from=dependencies --chown=node:node \
  /app/node_modules ./node_modules

COPY --chown=node:node package.json ./
COPY --chown=node:node server.js ./

USER node

EXPOSE 3000

HEALTHCHECK \
  --interval=10s \
  --timeout=3s \
  --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/health || exit 1

CMD ["node", "server.js"]
