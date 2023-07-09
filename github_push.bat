if [%1]==[] goto usage
git add .
git commit -m %1
git push -u origin main

:usage
@echo Usage: %0 ^<CommitMessage^>
exit /B 1