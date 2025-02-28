python3 -m venv venv  - config ambiente virtual
source venv/bin/activate  - inicializa ambiente virtual

pip3 install Flask-SQLAlchemy psycopg2 Flask-Migrate

flask db init
db migrate -m 'init' cria a tabela da migration no db
flask db upgrade realiza a migration

* Inicializar ambiente virtual "venv""
  - python3 -m venv venv  - config ambiente virtual
  - source venv/bin/activate  - inicializa ambiente virtual

  - criar tabela da migration
  - realizar a migration
  - inicializar projeto
