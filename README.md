# f-radmin

This project uses `django-react` stack with server-rendering in the `nodejs-as-a-service` style.

## The stack

Uses `Python v3.6` and `pip v9.0.1`. For the rendering side `nodeJS v6.10` and `npm v4.4.4`.
The nodeJS rendering server uses port `3000` and django is set to run on port `8000` on purpose.


### Setup

#### Setup virtualenv

* `cd` into the `radmin` dir.
* Create it with the following command `python3 -m venv vradmin`.
* Activate the virtualenv with `vradmin\Scripts\activate` or if you're on linux use `source vradmin\bin\activate`

#### Install required deps

* Run `pip install -r requirements.txt` to install python deps
* Run `npm i` in `radmin.renderer/` to install nodeJS deps

### Run in development

1. First you may start the nodeJS service `node radmin.renderer`
1. Then start django `python radmin/manage.py runserver`

### Production environment local run

* `docker-compose up`