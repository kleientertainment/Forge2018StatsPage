# Forge2018StatsPage
The stats page for the 2018 Don't Starve Together Forge event. Page available here https://forums.kleientertainment.com/forge2018/

## EDIT - Nov 27th
We've added a new section to the event page, and archived the top-teams section. There are a few new strings that can be translated: *deathless-title, deathless-subtitle, deathless-date, deathless-loading, deathless-noresults, deathless-showmore,* and *deathless-showless*. The *leaderboards-title* text was changed to reflect the archival of that section.

## How to translate
All the strings are in the *localization.js* file. Add your own language by **duplicating an entire block from another language** (English, for instance).

### Language key
The key for the language block is what shows on the language selector (*English*, for instance). Set it to the **name of your language in its own language** (*English* in English, *Português* in Portuguese, for instance).

### Credits
The *author* key defines the credits text, which shows in the footer or when you hover the language selector at the top. **Credit yourself and link to your username in the Klei forums**, in your own language.

### Date and Time formatting

This year we've added localization to the date and time as well. We're using the [moment.js](https://momentjs.com/) library for it. It allows translations and we've included all the formatting settings needed into the *date* block for each language.

The *date* block is used for the moment.js library to format dates according to your own language. If you want, check their [source locales](https://github.com/moment/moment/tree/develop/src/locale) to see how they set them up for your language.

You can leave the *parent_locale* as 'en'. That just defines what date formatting to use in case something is missing in yours.

### Testing the translations

You can open the *forge2018.html* file on your browser to **test your translations** and see if everything works as you want before submitting.

## Thank you
Pull requests are reviewed, merged and deployed manually, so it takes some time to review them, specially when there are conflicts with previous translations and it's not immediately obvious which is better.

And thanks for your help. You all are awesome!
