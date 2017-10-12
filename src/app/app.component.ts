import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';....
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title : String ="Working";
  maxSize : number = 8;
  usedSize : number = 0;
  temperatureMonitorList : number[] = [];
  red :string;0
  median : number = undefined;
  errorMsg : String = "";
  divColor : String = "Red";
  constructor() { }
  temperatureForm: FormGroup;
  ngOnInit() {
    this.temperatureForm = new FormGroup({
      'temperature': new FormControl('', Validators.required)
  });
  }
  get temperature() { return this.temperatureForm.get('temperature'); }
  recordTemperature(): void {
    let temperatureValue = this.temperatureForm.value.temperature;
    console.log("Temperature value" + temperatureValue); 
    this.errorMsg = this.usedSize >= this.maxSize ?  "Maximum storeage reached" : "";
    if(this.usedSize >= this.maxSize) {return;}
    if(this.isValidTemparature(temperatureValue)){
      this.usedSize++;
      this.temperatureMonitorList.push(temperatureValue);
    }
    this.clearForm();
  }
  clearForm(){
    this.temperatureForm.reset();
  }

  setColor(){
    this.divColor = this.divColor == "Red" ? "Blue" : "Red";
  }

  isValidTemparature(temperatureValue){
    if(temperatureValue == null){
        return false;
    }
    return true;
  }
  getCurrentMedian() : number {
    this.temperatureMonitorList.sort( function(val1,val2) {return val1-val2;});
    let len = this.temperatureMonitorList.length;
    let mid = Math.floor(len/2);  
    if (len % 2 == 1){
      this.median = this.temperatureMonitorList[mid];
    }else{
      this.median = (Number(this.temperatureMonitorList[mid]) 
            + Number(this.temperatureMonitorList[(mid) - 1])) / 2;
    }
    return this.median;
  }
}
