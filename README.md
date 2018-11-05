# Forge2018StatsPage
The stats page for the 2018 Don't Starve Together Forge event. Page available here https://forums.kleientertainment.com/forge2018/

## How to translate
All the strings are in the *localization.js* file. Add your own language by duplicating an entire block from another language (English, for instance). The *author* key defines what shows in the footer or when you hover the language selector at the top. Write this sentence in your own language. The key for the language block is what shows on the language selector (*English*, for instance). Write here the name of your language in its own language (*English* in English, *Português* in Portuguese, for instance).

The *date* block is used for the moment.js library to format dates according to your own language. If you want, check their (source locales)[https://github.com/moment/moment/tree/develop/src/locale] to see how they set them up for your language.

You can open the *forge2018.html* file on your browser to test your translations and see if everything works as you want before submitting.

## Thank you
Pull requests are reviewed, merged and deployed manually, so it takes some time to review them, specially when there are conflicts with previous translations and it's not immediately obvious which is better.

And thanks for your help. You all are awesome!
