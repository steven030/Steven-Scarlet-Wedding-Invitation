@echo off
setlocal enabledelayedexpansion

set i=1

for %%f in (*.jpeg) do (
    ren "%%f" "Galery_NH_!i!.jpeg"
    set /a i+=1
)

echo.
echo Renombrado terminado.
pause