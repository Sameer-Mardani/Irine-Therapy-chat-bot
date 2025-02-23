from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import cx_Oracle

app = Flask(__name__)

# 🔹 Your teammate's Oracle Database details
oracle_host = "192.168.1.7"      # Your teammate's WiFi IP
oracle_port = "1521"             # Default Oracle port
oracle_sid = "Airtel_gyna_8945"  # Your teammate's SID
oracle_user = "system"           # Oracle Username
oracle_password = "Password"     # Oracle Password

# 🔹 Create a DSN (Data Source Name) for Oracle
dsn = cx_Oracle.makedsn(oracle_host, oracle_port, sid=oracle_sid)

# 🔹 Set up the SQLAlchemy connection string
app.config['SQLALCHEMY_DATABASE_URI'] = f'oracle+cx_oracle://{oracle_user}:{oracle_password}@{dsn}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# 🔹 Test Connection
@app.route('/')
def test_connection():
    try:
        with db.engine.connect() as connection:
            return "✅ Database connected successfully!"
    except Exception as e:
        return f"❌ Database connection failed: {str(e)}"

if __name__ == '__main__':
    app.run(debug=True)
