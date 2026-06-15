@echo off
if "%1"=="build_generator" docker build -f Dockerfile.generator -t genshin-generator
if "%1"=="run_generator" mkdir data 2>nul & docker run --rm -v "%cd%/data:/app/data" genshin-generator
if "%1"=="build_reporter" docker build -f Dockerfile.reporter -t genshin-reporter
if "%1"=="run_reporter" mkdir data 2>nul & docker run --rm -v "%cd%/data:/app/data" genshin-reporter
if "%1"=="report_server" mkdir data 2>nul & docker run -d --rm -p 8080:8080 --name my-server -v "%cd%/data:/usr/share/nginx/html:ro" nginx:alpine
if "%1"=="stop_server" docker stop my-server
if "%1"=="structure" dir /s /b
if "%1"=="clear_data" del /q data\*.csv data\*.html
if "%1"=="inside_generator" docker run --rm -v "%cd%/data:/app/data" genshin-generator ls -la /app/data
if "%1"=="inside_reporter" docker run --rm -v "%cd%/data:/app/data" genshin-reporter ls -la /app/data
if "%1"=="" echo команды: build_generator, run_generator, build_reporter, run_reporter, structure, clear_data, inside_generator, inside_reporter, report_server, stop_server