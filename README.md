# Starknights BFE Experience
Yes, experience is there twice.

## What is it?
A mini-voice pack inspired by Alice! This will be a collection of light-hearted what-if scenarios of Jelly dating different Starknights, but is unable to find love because of a string of unfortunate events. Each phone call is a different starknight because the previous one didn't make it.

References https://8892314440.date heavily.


## Adding New Messages
To add a new message, add a new entry to the `src/data/messages.json` file. It must match the schema detailed below.

### Schema
```
{
    'id': 1,
    'writer': "Jelly",
    'speaker': "Hoshiumi",
    'image': "image.png" // optional
    'audio': "audio.[mp3|aac|flac|wav|ogg]"
}
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
