<h1 align="center">
  <br>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_eimUX98YCqnw0tFLXbbCVkrGfZevLgMmhQ&usqp=CAU" alt="API" height="200" width="200">
  <br>
</h1>

## NPHC ASSIGNMENT:

# Overview

This assignment is for employee management system. Here user can bulk create/edit/delete and search employee. User can also filter data from a table.

# Technology Used

- `express.js`
- `MySQL`
- `React.js`
- `Bootstrap`
- `docker`

## Installation:

- Clone the repository: `https://github.com/akibtanjim/nphc-assignment.git`
- Copy `.env.example`to `.env`. Fill this with appropriate value (**Can be found below**)
- Copy `server/.env.example`to `server/.env`. Fill this with appropriate value (**Can be found below**)
- Copy `client/.env.example`to `server/.env`. Fill this with appropriate value (**Can be found below**)
- For installation please follow the below steps

  ```
      docker-compose up -d --build
      docker exec -it nphc-assignment-backend sh
      npm run db:migrate
      npm run test
  ```

- For viewing the project please navigate to `http://localhost`
- For testing `.csv` file some test file has been added in the `server/csv-data` folder

# Config

**`.env`**

```
#APP
API_PORT=3001
APP_PORT=3000

#DB
DB_HOSTNAME=nphc-mysql
DB_PORT=3306
DB_NAME=nphc
DB_USERNAME=nphc_user
DB_PASSWORD=secret
DB_DIALECT=mysql
DB_ROOT_PASSWORD=root

```

**`server/.env`**

```
# App
HOST=localhost
APP_PORT=3001
LOGGER_NAME=nphc-assignment-backend
LOG_LEVEL=debug
NODE_ENV=production

#DB
DB_HOSTNAME=nphc-mysql
DB_PORT=3306
DB_NAME=nphc
DB_USERNAME=nphc_user
DB_PASSWORD=secret
DB_DIALECT=mysql
DB_ROOT_PASSWORD=root


#API Rate Limiting Config
API_RATE_LIMIT_INTERVAL_IN_MIN=1
API_MAX_REQUEST_LIMIT=60

#CSV MAX UPLOAD SIZE
CSV_MAX_UPLOAD_SIZE = 1.99
```

**`client/.env`**

```
WDS_SOCKET_PORT=0
```

## API Docs (Postman):

Please open browser and go to below url to see the api docs

```
https://documenter.getpostman.com/view/3496605/2s84LNTsCn
```

### N.B: To import collection to postman click `Run in Postman` button (on top right in the upper section) of the above url or import postman collections to postman from `docs` folder

## Known Issues:

- Unable to delete the csv file while we run the test
