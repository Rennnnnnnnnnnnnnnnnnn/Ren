document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('.btn');
    const container = document.getElementById("container");
    const reset = document.querySelector('.btn1');
    const messages =`
    Mahal wala akong ibang kinakausap mahal
    and sorry kung napa overthink kita kanina mahal ko.
    I love you mahal promise ko sayo diba na di na kita sasaktan
    pero wala e lagi ikaw umiiyak iyaking talaga ikaw e.Iloveyouuuuuuuuuuu mahalll ko
    Sorry ulit sa lahat mahal ha, Mahal na mahal kita lab lab sobraaaa at pangako ko
    ikaw na ikaw lang mamahalin hanggang duloooooo MWAHHHHHHHHHHHHHH.Wag na iyak mahall
    ehh di mo lang alam naiiyak rin ako e pag sinsabi mo umiiyak ka. kaso  di ko na naman alam
    gagawin ko e )): Sorry ulit mahal Iloveyouuuuuu mahall ko )): Mwahhhhhhhhh (:
    `;
    reset.addEventListener('click',() => {
        container.textContent = "";
        document.querySelector('.btn').disabled = false;
    })
    btn.addEventListener('click', () => {
        let click = true;
            if(click){
                document.querySelector('.btn').disabled = true;
                document.querySelector('.btn').disabled = false;
            }
            setTimeout(() => {
                for (const character in messages) {
                    setTimeout(() => {
                        container.textContent += messages[character];
                        }, character * 100); 
                        if(character == messages.length -1){
                            document.querySelector('.btn').disabled = true;
                        }
                    }
                }  ,500);
                } 
            )
        })
