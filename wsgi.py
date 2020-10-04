"""
Create the WSGI Entry Point
Next, we'll create a file that will serve as the entry point for our application. This will tell our uWSGI server how to interact with the application.
"""
from server import app

if __name__ == "__main__":
    app.run()