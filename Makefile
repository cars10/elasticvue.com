dev:
	docker compose up --build

format:
	docker compose run --rm --build elasticvue_com npm run format
