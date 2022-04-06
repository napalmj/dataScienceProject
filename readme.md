## Introduction

This is a django app backend using react as a frontend.
I referenced [this video](https://youtu.be/tYKRAXIio28) for linking django and react.

# Getting Started
_note: these instructions were completed and tested on a Macbook m1. Certains items surrounding Venv may vary slightly if you're on windows or linux_
*Settings*
- Nodejs version used
`^16.0.0`


# Dev Notes
### Git clone project
Find a local directory to clone your project in. Copy the https or ssh link and clone.
- `git clone <link>`

### Venv setup & Django lib (Note --> pip is required)

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

### General Commands

Description:
- This project is build so that the django app targets the build files of the react app and will serve up those files. After programming has been done on the react side it will be necessary to `yarn run build`.
- You will also need to make sure you have `nodejs` installed on your system. 

Install Node_modules (These are necessary to run the react app)
- `cd dataScienceApp/reactApp && yarn install`

Build react application (client side)
- `cd dataScienceApp/reactApp && yarn run build`

Start djangoApp
- `cd dataScienceApp && python manage.py runserver`
    - Server will run on `localhost:8000`

Start reactApp
- `cd dataScienceApp/reactApp && yarn start` 

### Building Database Models

Run command in `dataScienceApp`
- `python manage.py makemigrations`
- `python manage.py migrate`

### Create Admin User to Access admin panel
This is for managing the database -> sqlite

Run following command and follow the prompt fields
- `python manage.py createsuperuser`
    - I created a user as user: `admin` pwd: `Password1`

We will be using django rest framework