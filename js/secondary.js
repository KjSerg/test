$(function () {
    function onFileSelect(e) {
        var
            f = e.target.files[0], // Первый выбранный файл
            reader = new FileReader,
            place = e.path[1]; // Сюда покажем картинку (wrapper)
        ;
        reader.readAsDataURL(f);
        reader.onload = function (e) { // Как только картинка загрузится
            place.style.background = "url('" + e.target.result + "') no-repeat";
            place.style.backgroundSize = "contain";
        }
    }

// проверка поддержки браузером HTML5 Api
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        document.querySelector(".group__file input[type=file]").addEventListener("change", onFileSelect, false);
    } else {
        console.warn("Ваш браузер не поддерживает FileAPI")
    }
});