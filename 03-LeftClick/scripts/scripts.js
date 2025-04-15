//کانتینرم را داخل کانتکست منو ذخیره میکنم
const contextMenu = document.querySelector('.container')

const subMenu = document.querySelector('.share-menu')
//به طور خلاصه، ای به شما اجازه می‌دهد تا اطلاعات مربوط به رویداد را مدیریت کنید و به نیازهای خاص خود پاسخ دهید.
document.addEventListener('contextmenu' , (e)=>{
    e.preventDefault()
    
    let x = e.offsetX;
    let y = e.offsetY;    
    //Die ِDefinition der Bereite von Viewport und Menu
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight; 

    let cmWidth= contextMenu.offsetWidth;
    let cmHeight= contextMenu.offsetHeight;

    x = x > winWidth - cmWidth ? winWidth - cmWidth : x

 
    //Zum Biespiel wird unten auf 850 der X-Achse des Bildschirms geklickt:
        // 850 > 1000 - 300 ? 700 : 850
    //Zum Biespiel wird unten auf 100 der X-Achse des Bildschirms geklickt:
        // 100 > 1000 - 300 ? 700 : 100

    y = y > winHeight - cmHeight ? winHeight-cmHeight : y  
    
    if(x > winWidth - cmWidth - subMenu.offsetWidth){
        subMenu.style.left = '-170px'
    }else
    subMenu.style.left = '260px'

    contextMenu.style.left = `${x}px`
    contextMenu.style.top = `${y}px`            
    contextMenu.style.visibility = 'visible'
})

    document.addEventListener('click' , ()=>{        
    contextMenu.style.visibility='hidden'
})

