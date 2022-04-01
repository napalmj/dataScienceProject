## Introduction

This is a django app backend using react as a frontend

# Getting Started
_note: these instructions were completed and tested on a Macbook m1. Certains items surrounding Venv may vary slightly if you're on windows or linux_


### Git clone project
Find a local directory to clone your project in. Copy the https or ssh link and clone.
- `git clone <link>`

### Dev Notes Venv setup & Django lib (Note --> pip is required)

If venv is not installed already
- `python3 -m pip install --user virtualenv`

Create Venv
- `python3 -m venv env`

Venv activation
- `cd env && source bin/activate`

Install django libs
- `pip install django`
- `pip install djangorestframework`
- `python -m pip install django-cors-headers`

### General Dev Notes

Build react application (client side)
- `cd dataScienceApp/reactApp && yarn run build`

Start djangoApp
- `cd dataScienceApp && python manage.py runserver`
    - Server will run on `localhost:8000`

Start reactApp
- `cd dataScienceApp/reactApp && yarn start` 