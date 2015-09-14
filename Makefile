test-sherlocked:
	@npm install
	@npm run serve &
	@npm run serve-js &
	@sleep 5 && node sherlocked.js
