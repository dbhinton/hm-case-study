.PHONY: build-backend build-frontend run-backend run-frontend clean stop-containers

build-backend:
	docker build -t mybackend -f backend.Dockerfile .

build-frontend:
	docker build -t myfrontend -f frontend.Dockerfile .

run-backend:
	docker run --name mybackend -p 8000:8000 mybackend

run-frontend:
	docker run --name myfrontend -p 3000:3000 myfrontend

clean:
	docker stop $(docker ps -aq) && docker rm $(docker ps -aq)

stop-containers:
	docker stop myfrontend && stop mybackend

