from flask import jsonify, request, Flask
from flask_cors import CORS

app = Flask(__name__)
app.config["DEBUG"] = True
CORS(app)

todos_jogos = [
  { 'Nome': 'Sonic', 'Descricao': 'Resgate os animais capturados pelo malvado Dr. Robotnik enquanto joga com Sonic e seus amigos nessa aventura.', 'Lancamento': '23/06/1991', 'Genero': 'Plataforma', 'Desenvolvedora': 'Sega' },
  { 'Nome': 'Earthbound', 'Descricao': 'Ness e seus amigos devem salvar o mundo de seu malígno fim, você tem o que é capaz para ajudá-los?', 'Lancamento': '27/07/1989', 'Genero': 'Roleplay', 'Desenvolvedora': 'Nintendo' },
  { 'Nome': 'Skyrim', 'Descricao': 'Skyrim é um jogo de RPG que mantém a tradicional jogabilidade de mundo aberto encontrada na série The Elder Scrolls. O jogador é livre para andar pela terra de Skyrim a sua vontade. Em Skyrim há nove grandes "posses", com nove capitais que são as principais cidades do jogo.', 'Lancamento': '11/11/2011', 'Genero': 'RPG', 'Desenvolvedora': 'Bethesda' },
  { 'Nome': 'The Sims 4', 'Descricao': 'Não há objetivo ou meta principal a ser alcançado e, em vez de cumprir objetivos, o jogador é incentivado a fazer escolhas e se envolver totalmente em um ambiente interativo.', 'Lancamento': '02/09/2014', 'Genero': 'Sandbox', 'Desenvolvedora': 'EA' },
  { 'Nome': 'Tetris Effect', 'Descricao': 'Tetris Effect é um jogo eletrônico de quebra-cabeça de combinação de peças', 'Lancamento': '09/11/2018', 'Genero': 'Puzzle', 'Desenvolvedora': 'Enhance Games' },
  { 'Nome': 'Diablo', 'Descricao': 'A série Diablo começa num tempo de um conflito sem fim, chamado Guerra Eterna. Os anjos do céu e uma legião do inferno estão em constante embate', 'Lancamento': '31/12/1996', 'Genero': 'Hack and Slash', 'Desenvolvedora': 'Blizzard' },
  { 'Nome': 'The Forest', 'Descricao': 'The Forest é um jogo de terror e suspense para Windows que mistura os elementos de sobrevivência de Dont Starve e DayZ. Depois de um acidente de avião, o jogador se vê em uma ilha aparentemente deserta. O desafio para sobreviver se transforma em terror quando ele descobre que não está sozinho na ilha', 'Lancamento': '30/05/2014', 'Genero': 'Sobrevivência', 'Desenvolvedora': 'Endnight' },
  { 'Nome': 'Portal 2', 'Descricao': 'O modo cooperativo de dois jogadores apresenta a sua própria campanha com uma história e câmaras de teste únicas e duas novas personagens jogáveis. Este novo modo força os jogadores a pôr em causa tudo aquilo que pensavam saber acerca dos portais.', 'Lancamento': '18/04/2011', 'Genero': 'Puzzle', 'Desenvolvedora': 'Valve' },
]

@app.route('/jogos', methods=["GET"])
def jogos():
    return jsonify(todos_jogos)

@app.route('/detalhe/<nome>', methods=['GET'])
def detail(nome):

    for x in todos_jogos:
        if str(x['Nome']) == str(nome):
            return jsonify(x)
        
    return "Jogo não encontrado", 400

@app.route('/atualizar', methods=['POST'])
def update():

    data = request.data
    string = data.decode('UTF-8')
    data = eval(string) #Transformar string em dictionary
    print(data)

    for x in todos_jogos:
        if x['Descricao'] == data['Descricao']:
            x['Nome'] = data['Nome']
            return x

    return "Not found", 400


app.run()