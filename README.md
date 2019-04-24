# Simple Docker Web Stack

[Inspirate From : Benecdictdudel](https://github.com/benedictdudel/simple-docker-web-stack)

This is an unofficial, open-source and community-driven boilerplate for Web
based projects that are running on Docker-Compose. It's an attempt of
standardizing and making it easier to bootstrap web applications ready for
development environments. The main services included are:

- Nginx 1.13
- MySQL 5.7
- PHP 7.1

Please have a look at the [Containers](#Containers) section for further
included services.

## Prerequisites

In order to start the containers you need to have installed the following
software:

- [Docker](https://docs.docker.com/engine/installation/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Usage

To start the containers `cd` into the directory containing this README and
type the following command:

```shell
$ docker-compose up -d
```

To stop the containers type the following:

```shell
$ docker-compose down -v
```

*Note: If you want to skip deleting the volumes remove the `-v` flag from
the command.*

## Containers

### nginx

nginx is an HTTP and reverse proxy server, a mail proxy server, and a generic
TCP/UDP proxy server.

- **Port:** 81

### PHP-FPM

FPM (FastCGI Process Manager) is an alternative PHP FastCGI implementation
with some additional features (mostly) useful for heavy-loaded sites.

- **Port:** 9000

### MySQL

MySQL is an open-source relational database management system (RDBMS).

- **Host:** localhost
- **Port:** 3306
- **Username:** web
- **Password:** pass
- **Database:** web

### Mailhog

MailHog is an email testing tool for developers.

- **Port:** 8025
