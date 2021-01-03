let rclock = () =>
    {
        let h = document.getElementById("hour");
        let min = document.getElementById("min");
        let sec = document.getElementById("sec");
        let d = new Date()
        let currsechand =  (d.getSeconds()/60)*360;
        let currminhand = ((d.getMinutes()*60)/3600)*360 ;
        let currhourhand = (((d.getHours()%12*60+d.getMinutes())*60+d.getSeconds())/43200*360)

        sec.style.transform='rotate('+(currsechand-90)+'deg)';
        min.style.transform='rotate('+(currminhand-90)+'deg)';
        h.style.transform='rotate('+(currhourhand-90)+'deg)';
        
        

    }
    setInterval(rclock,1);
    function aniadd()
    {
        let head = document.getElementById("line");
        head.classList.add('f');
    }
    function anirem()
    {
        let head = document.getElementById("line");
        head.classList.remove('f');
    }


        

        
        
    const displaydate1 = () =>
    {
        let h1 = document.getElementById("hour1");
        let min1 = document.getElementById("min1");
        let sec1 = document.getElementById("sec1");
        let d = new Date();
        
        
        h1.innerHTML = d.getHours()%12 ;
        
        
        
        min1.innerHTML = d.getMinutes() ;
        sec1.innerHTML =  d.getSeconds();

    }
    setInterval(displaydate1,1);
        
