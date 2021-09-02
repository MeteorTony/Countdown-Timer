let load = 0;
const int = setInterval(blurring, 30);
const textLoad = document.querySelector(".loading-text");
const bg = document.querySelector("body");

function blurring(){
    load++;

    if (load > 99){
        clearInterval(int);
        var selected = document.querySelectorAll(".countdown");
        for(let i = 0; i < selected.length; ++i){
            console.log(selected[i]); 
            selected[i].style.display = "";
        }
        document.body.style.cursor = "default";        
    }

    textLoad.innerHTML = `${load}%`;
    textLoad.style.opacity = scale(load, 0, 100, 1, 0);
    // document.querySelector("body").style.setProperty("--opac", 1 - scale(load, 0, 100, 1, 0));
    bg.style.setProperty("--fil", `blur(${scale(load, 0, 100, 30, 0)}px)`);

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    let result = ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    //console.log(result)
    return result;
}
