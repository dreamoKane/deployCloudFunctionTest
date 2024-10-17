from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello_world():
    return "Hello World!", 200

# Cloud Functions가 호출할 수 있도록 main 함수 추가
def hello_world_handler(request):
    return app(request)
