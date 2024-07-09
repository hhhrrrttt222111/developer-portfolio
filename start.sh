cd /app
export NODE_OPTIONS=--openssl-legacy-provider
npm install --legacy-peer-deps
npm start
tail -f /dev/null