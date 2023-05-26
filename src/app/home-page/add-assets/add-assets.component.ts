import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { BikeserviceService } from 'src/app/services/dropdown services/bikeservice.service';
import { CarserviceService } from 'src/app/services/dropdown services/carservice.service';
import { CommercialVehicleServiceService } from 'src/app/services/dropdown services/commercial-vehicle-service.service';
import { FlatserviceService } from 'src/app/services/dropdown services/flatservice.service';
import { HouseserviceService } from 'src/app/services/dropdown services/houseservice.service';
import { IndustrialWithoutshedService } from 'src/app/services/dropdown services/industrial-withoutshed.service';
import { IndustrialWithshedService } from 'src/app/services/dropdown services/industrial-withshed.service';
import { LandserviceService } from 'src/app/services/dropdown services/landservice.service';
import { SiteserviceService } from 'src/app/services/dropdown services/siteservice.service';


@Component({
  selector: 'app-add-assets',
  templateUrl: './add-assets.component.html',
  styleUrls: ['./add-assets.component.scss']
})
export class AddAssetsComponent {
  selectedassets: any;
  formSubmitted = false;
  assetDetailone: Array<any>;
  assetDetailtwo: Array<any>;
  assetDetailthree: Array<any>;
  assetDetailfour: Array<any>;
  assetDetailfive: Array<any>;
  imageSrcone;
  imageSrctwo;
  imageSrcthree;
  imageSrcfour;
  imageSrcfive;
  imageSrcsix;
  imageSrcseven;
  imageSrceight;
  textShow:any;
  textShow1:any;

  constructor(public fb: FormBuilder , private bikeservice: BikeserviceService , private carservice :CarserviceService, 
                    private commercialservice : CommercialVehicleServiceService, private flatservice: FlatserviceService,
                    private houseservice: HouseserviceService,private landservice: LandserviceService,private siteservice : SiteserviceService,
                    private industrialwithshedservice: IndustrialWithshedService,private industrialwithoutshedservice: IndustrialWithoutshedService) { }

  addAssets = this.fb.group({
    assetType: ['', Validators.required],
    assetsDetails: this.fb.group({
    assetDetailone: ['', Validators.required],
    assetDetailtwo:['', Validators.required],
    assetDetailthree:['', Validators.required],
    assetDetailfour:['', Validators.required],
    assetDetailfive:['', Validators.required]
    }),
    assetDocuments: this.fb.group({
      documentOne:[''],
      documentTwo:[''],
      documentThree:[''],
      documentFour:[''],
    }),
    assetImages:this.fb.group({
      imageOne:[''],
      imageTwo:[''],
      imageThree:[''],
      imageFour:[''],
      imageFive:[''],
      imageSix:[''],
      imageSeven:[''],
      imageEight:[''],
    }),
    assetDiscrition:this.fb.group({
      description:['', Validators.required],
      loanLended:['', Validators.required, ],
      loanRecovered:['', Validators.required, ],
      finalPrice:['', Validators.required,]
    })
  });

  onSubmit() {
   
    if (this.addAssets.valid){
      console.log(this.addAssets.value);
      this.addAssets.reset();
    this.textShow = true;
    this.textShow1=false;
    this.formSubmitted = false;
      return;
    }
    this.formSubmitted = true;
    this.textShow = false;
    this.textShow1=true;
    // console.log(this.addAssets.value);
  }


  Assets: Array<any> = [
    'Bikes',
    'Cars',
    'Commercial vehicles',
    'Flats',
    'Houses',
    'Land',
    'Sites',
    'Industrial land & site with shed',
    'Industrial land & site without shed'
    // 'industrial sites with shed',
    // 'industrial sites without shed',
];



changeAssettype(event: any) {
    const value = event.target.value;
    // console.log(value);

    //if user selected Bikes
    if (value == this.Assets[0]) {
     this.assetDetailone = this.bikeservice.Brands;
     this.assetDetailtwo = this.bikeservice.Models;
     this.assetDetailthree = this.bikeservice.Versions;
     this.assetDetailfour = this.bikeservice.YearOfMake;
     this.assetDetailfive = this.bikeservice.FuelType;
    }
    //if user selected Cars
    if (value == this.Assets[1]) {
     this.assetDetailone = this.carservice.Brands;
     this.assetDetailtwo = this.carservice.Models;
     this.assetDetailthree = this.carservice.Versions;
     this.assetDetailfour = this.carservice.YearOfMake;
     this.assetDetailfive = this.carservice.FuelType;
    }
    //if user selected commercial vehicles
    if (value == this.Assets[2]) {
     this.assetDetailone = this.commercialservice.Brands;
     this.assetDetailtwo = this.commercialservice.Models;
     this.assetDetailthree = this.commercialservice.Versions;
     this.assetDetailfour = this.commercialservice.YearOfMake;
     this.assetDetailfive = this.commercialservice.FuelType;
    }
     //if user selected Flats
     if (value == this.Assets[3]) {
     this.assetDetailone = this.flatservice.BHK;
     this.assetDetailtwo = this.flatservice.Facing;
     this.assetDetailthree = this.flatservice.propertystatus;
     this.assetDetailfour = this.flatservice.FlatType;
     this.assetDetailfive = this.flatservice.Age
    }
    //if user selected Houses
    if (value == this.Assets[4]) {
     this.assetDetailone = this.flatservice.BHK;
     this.assetDetailtwo = this.flatservice.Facing;
     this.assetDetailthree = this.flatservice.propertystatus;
     this.assetDetailfour = this.flatservice.FlatType;
     this.assetDetailfive = this.flatservice.Age
    }
    //if user selected Lands
    if (value == this.Assets[5]) {
     this.assetDetailone = this.landservice.Area;
     this.assetDetailtwo = this.landservice.Ownership;
     this.assetDetailthree = this.landservice.boundarywall;
     this.assetDetailfour = this.landservice.Security;
     this.assetDetailfive = this.landservice.ElectricityandWater
    }
    //if user selected Sites
    if (value == this.Assets[6]) {
     this.assetDetailone = this.siteservice.Area;
     this.assetDetailtwo = this.siteservice.Ownership;
     this.assetDetailthree = this.siteservice.boundarywall;
     this.assetDetailfour = this.siteservice.Security;
     this.assetDetailfive = this.siteservice.ElectricityandWater
    }
    //if user selected industrial lands&site with shed
    if (value == this.Assets[7]) {
     this.assetDetailone = this.industrialwithshedservice.Area;
     this.assetDetailtwo = this.industrialwithshedservice.Ownership;
     this.assetDetailthree = this.industrialwithshedservice.boundarywall;
     this.assetDetailfour = this.industrialwithshedservice.Security;
     this.assetDetailfive = this.industrialwithshedservice.ElectricityandWater
    }
    //if user selected industrial lands&site without shed
    if (value == this.Assets[8]) {
     this.assetDetailone = this.industrialwithoutshedservice.Area;
     this.assetDetailtwo = this.industrialwithoutshedservice.Ownership;
     this.assetDetailthree = this.industrialwithoutshedservice.boundarywall;
     this.assetDetailfour = this.industrialwithoutshedservice.Security;
     this.assetDetailfive = this.industrialwithoutshedservice.ElectricityandWater
    }
}


readURLone(event): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.imageSrcone = reader.result;
        reader.readAsDataURL(file);
    }
}
readURLtwo(event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrctwo = reader.result;
      reader.readAsDataURL(file);
  }
}
readURLthree(event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrcthree = reader.result;
      reader.readAsDataURL(file);
  }
}
readURLfour(event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrcfour = reader.result;
      reader.readAsDataURL(file);
  }
}
readURLfive(event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrcfive = reader.result;
      reader.readAsDataURL(file);
  }
}
readURLsix(event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrcsix = reader.result;
      reader.readAsDataURL(file);
  }
}
readURLseven(event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrcseven = reader.result;
      reader.readAsDataURL(file);
  }
}
readURLeight(event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrceight = reader.result;
      reader.readAsDataURL(file);
  }
}
}
