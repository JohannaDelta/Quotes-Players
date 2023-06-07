import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../../pages/settings/settings';
import { QuoteReaderProvider} from '../../providers/quote-reader/quote-reader';
import { Storage } from '@ionic/storage';
import { PlayerProvider } from '../../providers/player/player';
import { CountryProvider } from '../../providers/country/country';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

//welcome variables
text2:string= "Welcome"
username:string;

//quotes variables
quotes:any;
content:string;
author:string;
tags:string[];
  
//boolean variables
hiddenFlag:boolean = true;
hiddenText:boolean = false;
hiddenText1:boolean = true;
hiddenText2:boolean = true;
hiddenTable:boolean = true;
hiddenContent:boolean = false;
  
//soccer teams variables
data: any[];
countryid:number;
country_id:number;
name: string;
country_code: string = "ER";
firstname: string;
lastname: string;
age: number;
height: number;
min_age: number; 
max_age: number;
text:string= "doesn't exist";


  
constructor(public navCtrl: NavController, private qp:QuoteReaderProvider, public storage: Storage,
private pp:PlayerProvider, private cp:CountryProvider){   	
}

	openSettingsPage(){
	this.navCtrl.push(SettingsPage);
	console.log("opening SettingsPage...");
	}

	userInfo(){
		this.hiddenText2= false;
		this.hiddenContent = true;
		return this.text2;
	}

	ionViewWillEnter(){
		this.storage.get("countryid")
		.then((data) => {
			this.countryid = data;
		})	
		.catch((err)=> {
			alert("Error accessing storage")
		});

		this.storage.get("min_age")
		.then((data) => {
			this.min_age = data;
		})
		.catch((err)=> {
			alert("Error accessing storage")
		});
		
		this.storage.get("max_age")
		.then((data) => {
			this.max_age = data;

		})
		.catch((err)=> {
			alert("Error accessing storage")
		});
	}


	ionViewDidEnter(){
		this.qp.getQuote().subscribe(data => {
			this.quotes= data._id;
			this.author= data.author;
			this.content= data.content;
			this.tags= data.tags;
		})

		this.pp.getPlayer().subscribe(data => {
			this.data = data.data;
			this.country_id = data.countryid;
			this.min_age = data.min_age;
			this.max_age = data.max_age;
			console.log(data);	
		})
				
		this.cp.getCountryById().subscribe(data => {
			this.data = data.data;
			this.country_id = data.countryid;
			this.country_code = data.country_code;
				for(let i = 0 ; i <data.data.length; i++){
					if (data.data[i].country_id == this.countryid){
						if (data.data[i].country_id == this.countryid){
							if (this.countryid != null && data.data[i].country_code !=null){
								this.country_code = data.data[i].country_code.toUpperCase();
								this.name= "is " + data.data[i].name;	
								this.hiddenFlag=false;
								this.hiddenTable= false;
								this.hiddenText=true;
								this.hiddenText1=false;
							break;

							} else { 
								this.hiddenFlag=true; 
								this.hiddenTable= true;
								this.hiddenText=false;
								this.hiddenText1=true;
								this.country_code = "ER";
							break;
							} 
						}
					}
					if(this.country_id == null && this.country_code==null){
						this.hiddenFlag=true; 
						this.hiddenTable= true;
						this.hiddenText=false;
						this.hiddenText1=true;
						this.country_code = "ER";
					}
				}
		})
	}
}

	


