---
banner: "https://icreate.agency/wp-content/uploads/2015/10/html5-1300x470.gif"
---
# track
> [!abstract]
> ````
> Specifies text tracks for audio or video elements.This element is used to specify subtitles, caption files or other files containing text, that should be visible when the media is playing. ^09c3bc
> 
> <hr>
> ad-example
<video controls
       src="/media/cc0-videos/friday.mp4">
    <track default
           kind="captions"
           srclang="en"
           src="/media/examples/friday.vtt" />
    Sorry, your browser doesn't support embedded videos.
</video>

> [!bug] Code
> ~~~html
> <video controls
>        src="/media/cc0-videos/friday.mp4">
>     <track default
>            kind="captions"
>            srclang="en"
>            src="/media/examples/friday.vtt" />
>     Sorry, your browser doesn't support embedded videos.
> </video>
> ~~~


````

^20cf13

<hr>

## Atributos opcionales
> [!note] atributos a agregar a track
> 
| Nombre       | Opciones                                                   | Uso                                                                                                                              |
| --------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| *default*   | default                                               | Specifies that the track is to be enabled if the user's preferences do not indicate that another track would be more appropriate |
| *kind*    | captions, chapters, descriptions, metadata, subtitles | Specifies the kind of text track                                                                                                 |
| *label*   | text                                                  | Specifies the title of the text track                                                                                            |
| *src*     | URL                                                   | Required. Specifies the URL of the track file                                                                                    |
| *srclang* | language_code                                         | Specifies the language of the track text data (required if kind="subtitles")                                                     |
<b>Tags:</b> #html 