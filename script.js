    const hour = document.querySelector('.h'),
        min = document.querySelector('.m'),
        sec = document.querySelector('.s'),
        hoursNumber = document.querySelector('.hours'),
        minutesNumber = document.querySelector('.minutes')

    function clock() {
        let time = new Date(),
            second = time.getSeconds() * 6,
            minutes = time.getMinutes() * 6,
            hours = time.getHours() * 30;

        hoursNumber.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
        minutesNumber.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()

        sec.style = `transform:rotate(${second}deg)`
        min.style = `transform:rotate(${minutes}deg)`
        hour.style = `transform:rotate(${hours}deg)`

        setTimeout(() => clock(), 1000)
    }
    clock()

    const links = document.querySelectorAll(".tabsItem"),
        tabs = document.querySelectorAll('.tabsContentItem');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (e) {
            e.preventDefault()
            for (let ix = 0; ix < links.length; ix++) {
                links[ix].classList.remove("active");
                tabs[ix].classList.remove('active')

            }
            tab(this, tabs[i])
        })

    }

    function tab(el, arr) {
        el.classList.add('active')

        arr.classList.add('active')

    }

    const watchBtn = document.querySelector('.stopwatch__btn'),
        secondWatch = document.querySelector('.stopwatch__seconds'),
        minutesWatch = document.querySelector('.stopwatch__minutes'),
        hoursWatch = document.querySelector('.stopwatch__hours'),
        seconInfo = document.querySelector('.tabsLink__span');
    watchBtn.addEventListener('click', function () {
        if (this.innerHTML == 'start') {
            this.innerHTML = 'stop'
            seconInfo.classList.add("active")
            let i = 0
            setTimeout(() => stopWatch(this, i), 1000);
        } else if (this.innerHTML == 'stop') {
            this.innerHTML = 'clear'
            seconInfo.classList.remove("active")
            seconInfo.classList.add("active_clear")
        } else {
            this.innerHTML == 'start'
            secondWatch.innerHTML = 0
            minutesWatch.innerHTML = 0
            hoursWatch.innerHTML = 0
            seconInfo.classList.remove("active_clear")

        }
    })


    function stopWatch(el, i) {
        if (el.innerHTML == "stop") {
            if (i == 60) {
                i = 0
                secondWatch.innerHTML = i
                if (minutesWatch.innerHTML == 59) {
                    minutesWatch.innerHTML = 0
                    hoursWatch.innerHTML++
                } else {
                    minutesWatch.innerHTML++
                }
            } else {
                i++
                secondWatch.innerHTML = i
            }
            setTimeout(() => stopWatch(el, i), 1000);
        }

    }