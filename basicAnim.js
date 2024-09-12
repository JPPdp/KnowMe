import { Dotz } from '//cdn.skypack.dev/dotz'

let my_dotz = new Dotz(
  // canvas element
document.getElementById('my-canvas'),
  // URL for terrain image (dudv map)
"https://m4r.sh/terrains/spiral.png",
  // options
{ 
    speed: 0.5,
    fade: 0.8,
    particles: 4e5, // 400K dots!
    colors: {
    "0.0": "transparent",
    "0.1": "hsl(240,100%, 50%)",
    "0.5": "hsl(300,100%, 50%)",
    "1.0": "hsl(60 ,100%, 50%)"
    }
}
)

my_dotz.speed = 0.5;