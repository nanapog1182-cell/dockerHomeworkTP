#!/bin/bash

if [ "$1" = "build_generator" ]; then
    sudo docker build -f Dockerfile.generator -t genshin-generator .
fi

if [ "$1" = "run_generator" ]; then
    mkdir -p data
    sudo docker run --rm -v "$(pwd)/data:/app/data" genshin-generator
fi

if [ "$1" = "build_reporter" ]; then
    sudo docker build -f Dockerfile.reporter -t genshin-reporter .
fi

if [ "$1" = "run_reporter" ]; then
    mkdir -p data
    sudo docker run --rm -v "$(pwd)/data:/app/data" genshin-reporter
fi

if [ "$1" = "structure" ]; then
    find . -type f -o -type d | grep -v '.git' | sort
fi

if [ "$1" = "clear_data" ]; then
    rm -f data/*.csv data/*.html
    echo "Очищено"
fi

if [ "$1" = "inside_generator" ]; then
    sudo docker run --rm -v "$(pwd)/data:/app/data" genshin-generator ls -la /app/data
fi

if [ "$1" = "inside_reporter" ]; then
    sudo docker run --rm -v "$(pwd)/data:/app/data" genshin-reporter ls -la /app/data
fi

if [ "$1" = "report_server" ]; then
    mkdir -p data
    sudo docker run -d --rm -p 8080:8080 --name my-server -v "$(pwd)/data:/usr/share/nginx/html:ro" nginx:alpine
    echo "Сервер на http://localhost:8080"
fi

if [ "$1" = "stop_server" ]; then
    sudo docker stop my-server
fi

if [ "$1" = "" ]; then
    echo "Команды: build_generator, run_generator, build_reporter, run_reporter, structure, clear_data, inside_generator, inside_reporter, report_server, stop_server"
fi
