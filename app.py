from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class ChatHistory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(255))
    response = db.Column(db.String(255))

with app.app_context():
    db.create_all()

@app.route('/')
def test_connection():
    try:
        with db.engine.connect() as connection:
            return "✅ Database connected successfully! (Using SQLite)"
    except Exception as e:
        return f"❌ Database connection failed: {str(e)}"

@app.route('/api/chat/ai', methods=['POST'])
def chat_ai():
    try:
        data = request.get_json()
        message = data.get('message', '').lower()
        mode = data.get('mode', 'default')

        if mode == 'genz':
            # Gen-Z friendly, understanding tone
            if "lonely" in message or "alone" in message:
                response = "Bruh, feeling solo hits different, huh? I’m here—spill what’s got you down, fam!"
            elif "sad" in message or "down" in message:
                "No cap, that’s tough vibes. What’s draggin’ you, homie? Let’s vibe it out together."
            elif "hi" in message or "hello" in message or "hey" in message:
                response = "Yo, what’s good, bestie? How’s my fave person holdin’ up?"
            elif "help" in message or "need" in message:
                response = "Bet, I gotchu, fam! What’s the tea—how can your ride-or-die Irine step up?"
            elif "bye" in message or "later" in message:
                response = "Catch you on the flip, fam! Stay slayin’ it—you know I’m always here."
            elif "how are you" in message or "you good" in message:
                response = "I’m lit, fam—how you holdin’ up tho? Spill the real tea!"
            elif "thanks" in message or "thank you" in message:
                response = "No prob, fam—you know I’m always down to ride for you!"
            else:
                response = f"Fr, {message}? I’m vibin’ with you—tell me more, homie!"
        else:
            # Normal supportive tone
            if "lonely" in message or "alone" in message:
                response = "I’m so sorry you’re feeling lonely. Do you want to talk about what’s been going on?"
            elif "sad" in message or "down" in message:
                response = "It’s okay to feel sad—I’m here. What’s been weighing on your mind?"
            elif "hi" in message or "hello" in message or "hey" in message:
                response = "Hi there! I’m glad you’re here—how can I support you today?"
            elif "help" in message or "need" in message:
                response = "I’m here to help you. What do you need right now?"
            elif "bye" in message or "later" in message:
                response = "Take care—I’ll be here whenever you need me. Goodbye for now!"
            elif "how are you" in message or "you good" in message:
                response = "I’m doing well, thank you! How about you—how are you feeling?"
            elif "thanks" in message or "thank you" in message:
                response = "You’re welcome! I’m happy to be here for you."
            else:
                response = f"I hear you saying '{message}'—I’m listening. What’s on your heart?"

        chat_entry = ChatHistory(message=message, response=response)
        db.session.add(chat_entry)
        db.session.commit()
        return jsonify({"response": response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)