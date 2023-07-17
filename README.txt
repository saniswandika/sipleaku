1. Install Docker Compose (https://docs.docker.com/compose/install/)
2. Enable Virtualization BIOS
3. Ekstrak file sipelaku-sosial.zip
3. Buka folder hasil yang sudah diekstrak pada code editor (disarankan Visual Studio Code)
4. Buka terminal pada direktori project, jalankan script berikut:
|-------------------------------------------------------------------|
| docker-compose up -d site                                         |
| docker-compose run --rm composer install                          |
| docker-compose run --rm composer update                           |
| docker-compose run --rm npm install                               |
| docker-compose run --rm npm run prod                              |
| docker-compose run --rm php php /var/www/html/artisan migrate     |
| docker-compose run --rm php /var/www/html/artisan db:seed         |
| docker-compose run --rm php /var/www/html/artisan optimize:clear  |
| docker-compose run --rm php /var/www/html/artisan config:cache    |
|-------------------------------------------------------------------|