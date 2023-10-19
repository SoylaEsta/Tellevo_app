import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima-widget',
  templateUrl: './clima-widget.component.html',
  styleUrls: ['./clima-widget.component.scss'],
})
export class ClimaWidgetComponent  implements OnInit {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  WeatherData: any;
  constructor() { }

  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Santiago&appid=814352967c2c0ddab74ab94966ca89af')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);});
  }

  setWeatherData(data: any){
    this.WeatherData = data;
    const sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    const currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }

}