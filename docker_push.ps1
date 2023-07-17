if ($args[0] -eq $null) {
    echo "Usage: .\docker_push.ps1 ^<TagName^>"
    Exit
}
echo "Building production frontend files"
cd frontend-portfolio
ng build --configuration production
cd ..
echo "Checking docker process"
$processes = Get-Process "*docker desktop*"
if ($processes.Count -lt 1){
    Start-Process "C:\Program Files\Docker\Docker\Docker Desktop.exe"
    echo "Starting Docker"
} else {echo "Docker running"}
echo "Building image $($args[0])"
docker build --tag rileysaur/docker-portfolio:$($args[0]) .
echo "Pushing image to repo"
docker push rileysaur/docker-portfolio:$($args[0])