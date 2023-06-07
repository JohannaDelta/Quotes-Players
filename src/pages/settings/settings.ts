import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { first } from 'rxjs/operator/first';
import { Storage } from '@ionic/storage';
import { idText } from 'typescript';
import { NgModule } from '@angular/core';
import { HomePage } from '../../pages/home/home';
import { AlertController } from 'ionic-angular';
import { PlayerProvider } from '../../providers/player/player';


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {


countryid: number;
min_age:number ;
max_age:number;



  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder:FormBuilder, 
  private storage: Storage, private alertCtrl: AlertController, private pp:PlayerProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }


  save(){
  
   // let countryid = null;

      if (this.countryid == null || this.countryid == 0){
        alert("Please enter a Country ID")
      } else{
      
        this.storage.set("countryid", this.countryid);
        this.storage.set("min_age", this.min_age);
        this.storage.set("max_age", this.max_age);
        
        this.navCtrl.pop();
        console.log("pressing save button");  
      }
  
  }

  ionViewWillEnter(){
    
     this.storage.get("countryid")
     .then((data) => {
     this.countryid = data;
      console.log("the countryid is", data);
     })
      
    this.storage.get("min_age")
      .then((data) => {
       this.min_age = data;
        console.log("the min age is", data);
      })
  
    this.storage.get("max_age")
    .then((data) => {
      this.max_age = data;
      console.log("the max age is", data);
      })
      .catch((err)=> {
      alert("Error accessing storage")
    });
  }
  

    eraseData(){
   // this.formgroup.reset();

    this.countryid = null;
    this.min_age= null;  
    this.max_age = null;

    console.log("pressing cancel button & deleting input data")
    
    }
}




