class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error("Отсутствует обязательный аргумент")
        }

        const exist = this.alarmCollection.some(alarm => alarm.time === time);
        if (exist) {
            console.warn("Уже присвоен звонок на это же время")
        }
        this.alarmCollection.push({
            time: time,
            callback: callback,
            canCall: true
        });

        console.log(`Будильник добавлен на ${time}`)
    }

    removeClock(time){
        const initialLength = this.alarmCollection.length;

        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);

        if (this.alarmCollection.length < initialLength) {
            console.log(`Будильник на ${time} удалён`);
        } else {
            console.warn(`Будильник на ${time} не найден`);
        }
    }

    getCurrentFormattedTime(){
        const now = new Date();
        const hours = now.getHours();
        const minuts = now.getMinutes();

        const formattedHoues = hours.toString().padStart(2, "0")
        const minutsHoues = minuts.toString().padStart(2, "0")

        return `${formattedHoues}:${minutsHoues}`
    }

    start(){
        if (this.intervalId) {
            console.warn("Будильник уже запущен!");
            return;
        }

        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();

            this.alarmCollection.forEach(alarm =>{
                if(alarm.time === currentTime && alarm.canCall){
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000);

        console.log("Будильник запущен")
    }

    stop(){
        if(this.intervalId){
            clearInterval(this.intervalId);
            this.intervalId = null;
            console.log("Будильник остановлен");
        } else {
            console.log("Будильник уже остановлен")
        }
    }

    resetAllCalls(){
        this.alarmCollection.forEach(alarm =>{
            alarm.canCall = true;
        })
        console.log('Сброшена возможность запуска всех звонков')
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
        console.log("Все звонки удалены и будильник остановлены")
    }
}

let newAlarm = new AlarmClock();

newAlarm.addClock("07:00", () => console.log("Пора вставать!"));
newAlarm.addClock("12:07", () => console.log("Пора выходить!"));
newAlarm.addClock("14:00", () => console.log("Пора обедать!"));

console.log(newAlarm)
console.log("До удаления:", newAlarm.alarmCollection);

newAlarm.removeClock("12:00");

console.log("После удаления:", newAlarm.alarmCollection);
console.log(newAlarm)

console.log(newAlarm.getCurrentFormattedTime());

newAlarm.start();

// setTimeout(() =>{
//     newAlarm.resetAllCalls()
//     newAlarm.clearAlarms()
// }, 5000);
