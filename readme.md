# BSA 16 PHP - Frontend application architecture

Test CRUD application Binary studio homework assignment. Based on Laravel 5.2

## Installation
Clone from GIT:
```sh
$ git clone <this repo>
```

Run composer:
```sh
$ composer install
```

Run migrations:
```sh
$ php artisan migrate
```

Run seeder:
```sh
$ php db:seed
```

## FrontEnd Dependencies:
#### Global dependencies
1. Install Bower:
    ```sh
    npm install -g bower
    ```
2.  Install Grunt:
    ```sh
    npm install -g grunt-cli
    ```
#### Local dependencies
1. Instal Bower Dependencies:
    ```sh
    bower install
    ```
2.  Install NPM dependencies:
    ```sh
    npm install
    ```
#### Runing App

Run App with one of this three predefined Grunt environmets
1. Developer mode (includes 'watch mode' ):
    ```sh
    grunt dev
    ```
2.  Production stage (without 'watch mode'):
    ```sh
    grunt stage
    ```
2.  Production mode (without 'watch mode' and with enableb minification):
    ```sh
    grunt prod
    ```
### Todos

 - Replace all default templates with HandleBars templates
 - Fix some bugs