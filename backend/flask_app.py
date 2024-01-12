from flask import Flask, jsonify, request
from transformers import T5Tokenizer, T5ForConditionalGeneration
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r'/api/summary': {'origins': 'https://gpt-based-text-summarization.vercel.app'}})


app.config['TIMEOUT'] = 120

model = T5ForConditionalGeneration.from_pretrained('t5-small')
tokenizer = T5Tokenizer.from_pretrained('t5-small', model_max_length=1024)

# the function that generates the summary using tk5tokenizer and model


def generate_summary(text):
    inputs = tokenizer.encode(
        "summarize: " + text, return_tensors='pt', max_length=1000, truncation=True)
    summary_ids = model.generate(
        inputs, max_length=150, min_length=40, length_penalty=2.0, num_beams=4, early_stopping=True)
    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return summary


@app.route('/api/summary', methods=['POST'])
def generate_summary_api():
    if request.method != 'POST':
        return jsonify({'error': 'Method Not Allowed'}), 405
    data = request.get_json()
    input_text = data['text']
    summary = generate_summary(input_text)
    return jsonify({'summary': summary})


if __name__ == '__main__':
    app.run(debug=True, port=5050)
