Get-ChildItem -Path . -Recurse | Where-Object { $_.Extension -ne '.webp' -and $_.FullName -notlike "*webp.ps1" } | ForEach-Object {
    $sourceFile = $_.FullName
    $outputFile = "$($_.DirectoryName)\$($_.BaseName).webp"
    ffmpeg -i $sourceFile $outputFile
    $hash = (Get-FileHash $outputFile -Algorithm SHA256).Hash
    $newName = "$($_.DirectoryName)\$hash.webp"
    Rename-Item -Path $outputFile -NewName $newName
}
