# Proyecto Flask con Flask-SQLAlchemy y Flask-RESTful

Este proyecto es una aplicación web desarrollada con Flask, utilizando Flask-SQLAlchemy para el manejo de bases de datos y Flask-RESTful para crear APIs RESTful.

## Requisitos previos

Antes de empezar, asegúrate de tener instalado lo siguiente:

- Python 3
- `pip` (gestor de paquetes de Python)
- `virtualenv` (opcional pero recomendado)

## Configuración del entorno

### 1. Clonar el repositorio

Primero, clona este repositorio en tu máquina local:

git clone https://github.com/jharifAparicio/IngenieriaDeSoftware.git
e ingresa a la carpeta "laboratorio 4" y haz lo que se indica en un principio 

### 2. Crear el entorno virtual

python3 -m venv venv

### 3. Activar el entorno virtual

Linux/mac.
  source venv/bin/activate
Windows.
  venv\Scripts\activate

### 4. instalar dependencias

Con el entorno virtual activado, instala las dependencias necesarias usando el archivo requirements.txt:
pip install -r requirements.txt

Si no tienes el archivo requirements.txt, puedes instalar las dependencias manualmente y luego crearlo:
pip install Flask Flask-SQLAlchemy Flask-RESTful
pip freeze > requirements.txt

### 5. Configuración de la base de datos (opcional)

Si tu proyecto requiere una configuración inicial de la base de datos, proporciona aquí los pasos necesarios para configurarla. Un ejemplo usando Flask-Migrate:

flask db init
flask db migrate
flask db upgrade

### 6. Levantar la aplicación
Para ejecutar la aplicación, asegúrate de estar en el directorio raíz del proyecto y ejecuta:

flask run
### 7. Desactivar el entorno virtual
Una vez que termines de trabajar en tu proyecto, puedes desactivar el entorno virtual usando:

deactivate

#### Gestión de dependencias
Instalar nuevas dependencias
Si necesitas agregar nuevas dependencias, instálalas usando pip y actualiza el archivo requirements.txt:

pip install nombre-del-paquete
pip freeze > requirements.txt

#### Actualizar dependencias
Si ya tienes dependencias instaladas pero necesitas actualizarlas a sus últimas versiones, ejecuta:

pip install --upgrade -r requirements.txt

#### Notas adicionales
Errores comunes: Si encuentras problemas relacionados con dependencias, asegúrate de estar usando el entorno virtual y que las versiones en requirements.txt sean correctas.
Base de datos: Dependiendo de la configuración de la base de datos, puedes necesitar modificar los parámetros de conexión en tu aplicación.
