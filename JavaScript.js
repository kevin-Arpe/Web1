let Body = {
    setColor: function (color) {
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    backGroundColor: function (color) {
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('background-color', color);
    }
}

let Links = {
    setColor: function (color) {
        //let alist = document.querySelectorAll('a');
        //let i = 0;
        //while (i < alist.length) {
        //    alist[i].style.color = color;
        //    i = i + 1;
        //}
        $('a').css('color', color);
    }
}

function nightDayHandler(self) {
    if (self.value === 'night') {
        Body.backGroundColor('black')
        Body.setColor('white')
        self.value = 'day';

        Links.setColor('pink');
    } else {
        Body.backGroundColor('white')
        Body.setColor('black')
        self.value = 'night';

        Links.setColor('blue');
    }
}