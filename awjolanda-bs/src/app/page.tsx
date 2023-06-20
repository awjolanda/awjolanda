import Image from 'next/image'

export default function Home() {
  return (
<html lang="de-CH">
    <head>
        <title>Startseite</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Willkommen auf awjolanda.ch!"/>
        <meta name="robots" content="index, follow"/>
        <meta name="author" content="Admin"/>
    </head>
    <body className='dark:bg-slate-500'>
        <div id="hauptinhalt">
        <h1 className='title'>Willkommen auf meiner Website!</h1>
        <p className=''>Diese Website wird zukünftig eine React-Seite sein.</p>
        <h2>Nützliche Verknüpfungen:</h2>
        <ul id="verknüpfungsliste">
            <li><a href="https://smartlearn.iet-gibb.ch" rel="noopener noreferrer" target="_blank">Smartlearn Lernumgebung</a></li>
            <li><a href="https://lema.iet-gibb.ch" rel="noopener noreferrer" target="_blank">Lema</a></li>
            <li><a href="https://www.office.com/login" rel="noopener noreferrer" target="_blank">Office</a></li>
            <li><a href="https://webmail.iet-gibb.ch" rel="noopener noreferrer" target="_blank">Webmail (IET)</a></li>
            <li><a href="https://gitlab.iet-gibb.ch" rel="noopener noreferrer" target="_blank">Gitlab (IET)</a></li>
            <li><a href="https://github.com" rel="noopener noreferrer" target="_blank">Github</a></li>
            <li><a href="https://sftp.iet-gibb.ch" rel="noopener noreferrer" target="_blank">gibb-Dateien (Filestash)</a></li>
            <li><a href="https://tipo.webuntis.com/WebUntis/?school=GIBB" rel="noopener noreferrer" target="_blank">gibb Stundenplan</a></li>
        </ul>
        <h2>Kontakt</h2>
        <ul>
            <li><a href="https://github.com/awjolanda" rel="noopener noreferrer" target="_blank">Mein GitHub Profil</a></li>
        </ul>
    </div>
    </body>
</html>
  )
}
