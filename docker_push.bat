#cd frontend-portfolio
#ng build --configuration production
#cd ..
if [%1]==[] goto usage
docker build --tag rileysaur/docker-portfolio:%1 .
docker push rileysaur/docker-portfolio:%1

:usage
@echo Usage: %0 ^<TagName^>
exit /B 1