import re

path = r"C:\Users\MY PC\Documents\RY-OFFICIAL WEBSTIE\index.html"
with open(path, "r", encoding="utf-8") as f:
    html = f.read()

old = '<meta name="description" content="Pakistan\'s most trusted PUBG UC store. Instant delivery, zero fraud,\n  <link rel="preconnect" href="https://fonts.gstatic.com"'

new = '<meta name="description" content="Pakistan\'s most trusted PUBG UC store. Instant delivery, zero fraud,
