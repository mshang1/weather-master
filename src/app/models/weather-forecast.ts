export class WeatherForecast {
    dateTime: string;
    max_temp: string;
    min_temp: string;
    pres: string;
    vis: string;

    constructor(dateTime, max_temp, min_temp, pres, vis) {
        this.dateTime = dateTime,
        this.max_temp = max_temp,
        this.min_temp = min_temp,
        this.pres = pres,
        this.vis = vis
    }

}
