Add-Type -AssemblyName System.Drawing
$imagePath = "c:\Users\cjala\obsidian-ecommerce\frontend\public\images"
$files = Get-ChildItem -Path $imagePath -Filter "*.jpg"
foreach ($file in $files) {
    Write-Host "Processing: $($file.Name)"
    $img = [System.Drawing.Image]::FromFile($file.FullName)
    $quality = 60
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq 'JPEG' }
    $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $quality)
    $img.Save($file.FullName, $codec, $params)
    $img.Dispose()
    $newSize = (Get-Item $file.FullName).Length / 1MB
    Write-Host "Done: $([math]::Round($newSize, 2))MB"
}
Write-Host "Complete!"
