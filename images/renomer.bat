@echo off
setlocal enabledelayedexpansion
set "sourceDir=Chemin\vers\votre\dossier"  REM Spécifiez le chemin de votre dossier source
set "extension=jpg"  REM Spécifiez l'extension de fichier à renommer (par exemple, jpg)

cd "%sourceDir%"
set count=0

for %%f in (*.%extension%) do (
    ren "%%f" "img!count!.%extension%"
    set /a count+=1
)

echo Renommage terminé.
pause