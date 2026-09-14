@echo off
setlocal enabledelayedexpansion

set i=1

for %%f in (*.jpg) do (
    ren "%%f" "Galery_NH_!i!.jpg"
    set /a i+=1
)

echo.
echo Renombrado terminado.
pause