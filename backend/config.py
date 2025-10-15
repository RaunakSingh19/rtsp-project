# mongodb+srv://raunaksingh142004_db_user:NbqAVPjqLWM7t4ix@cluster0.utofzks.mongodb.net/

# import os

# # MongoDB connection URL

# MONGO_URI = os.getenv(MONGO_URI = "mongodb+srv://raunaksingh142004_db_user:NbqAVPjqLWM7t4ix@cluster0.utofzks.mongodb.net", "mongodb://localhost:27017/overlay_db")
# # MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/overlay_db")

import os

# MongoDB connection URL
MONGO_URI = os.getenv(
    "MONGO_URI",
    "mongodb+srv://raunaksingh142004_db_user:NbqAVPjqLWM7t4ix@cluster0.utofzks.mongodb.net/overlay_db?retryWrites=true&w=majority&ssl=true"
)
