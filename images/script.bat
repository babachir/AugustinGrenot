@echo off
cls
echo Recherche des métadonnées des fichiers .jpg dans le dossier en cours...

:: Spécifie l'emplacement de l'outil ExifTool (ajustez-le en fonction de votre installation)
set "ExifToolPath=C:\Users\babac\Downloads\exiftool\exiftool.exe"

:: Parcours tous les fichiers .jpg dans le dossier en cours
for %%i in (*.jpg) do (
    echo Traite le fichier "%%i"...
    "%ExifToolPath%" -a -s -G %%i
)

pause