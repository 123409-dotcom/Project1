from gtts import gTTs
text = "Hello people how are you doing on this daily God life has given us"

tts = gTTs(text=text, lang='en')
tts.save("voice.mp3")
print("Audio file saved as voice.mp3")