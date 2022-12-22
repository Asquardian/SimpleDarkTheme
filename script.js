
        if(localStorage.theme == "dark.css"){
            theme.href = "dark.css";
        }
        function changeTheme(){
            let theme = document.getElementById("theme");
            let atr = theme.getAttribute("href");
            if(atr == "light.css"){
                theme.href = "dark.css";
                localStorage.theme = "dark.css";
            }
            else{
                theme.href = "light.css";
                localStorage.theme = "light.css";
            }
        }