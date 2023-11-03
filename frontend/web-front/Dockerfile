FROM node AS builder

WORKDIR /app

# 匿名での情報収集を拒否する設定
ENV NEXT_TELEMETRY_DISABLED 1 
COPY . .

# npmなら, RUN npm ci
RUN yarn install --frozen-lockfile 
# npmなら, RUN npm run build
RUN yarn build 

FROM node as runner

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# 初期設定のままであれば不要
COPY --from=builder /app/next.config.js next.config.js 
COPY --from=builder /app/.next .next
# COPY --from=builder /app/.env .env 
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json package.json
# npmなら, package-lock.json
COPY --from=builder /app/yarn.lock yarn.lock 

# CMD ["yarn", "start"]