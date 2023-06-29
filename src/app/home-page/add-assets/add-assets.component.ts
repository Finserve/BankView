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
  first;
  imageSrcone
  imageSrctwo;
  imageSrcthree;
  imageSrcfour;
  imageSrcfive;
  imageSrcsix;
  imageSrcseven;
  imageSrceight;
  textShow:any;
  textShow1:any;
  option: any;
  assetDocuments: any;
  assetImages: any;
  files: any;



  constructor(public fb: FormBuilder , private bikeservice: BikeserviceService , private carservice :CarserviceService, 
              private commercialservice : CommercialVehicleServiceService, private flatservice: FlatserviceService,
              private houseservice: HouseserviceService,private landservice: LandserviceService,private siteservice : SiteserviceService,
              private industrialwithshedservice: IndustrialWithshedService,private industrialwithoutshedservice: IndustrialWithoutshedService) {}


              
  addAssets = this.fb.group({
    assetType: ['', Validators.required],
    assetsDetails: this.fb.group({
      assetDetailone: ['', Validators.required],
      assetDetailtwo:['', Validators.required],
      assetDetailthree:['', Validators.required],
      assetDetailfour:['', Validators.required],
      assetDetailfive:['', Validators.required]
      }),
    assetDocuments: this.fb.array([
      this.fb.control('')
    ]),
      // this.
      // documentOne:[''],
      // documentTwo:[''],
      // documentThree:[''],
      // documentFour:[''],
    // }),
    // aliases: this.fb.array([
    //   this.fb.control('')
    // ])
  //   
  // assetImages: this.fb.group({
    // this.fb.control('')
    assetImages: this.fb.array([
      this.fb.control('')
    ]),

    // assetImages:this.fb.group({
    //   imageOne:[''],
    //   imageTwo:[''],
    //   imageThree:[''],
    //   imageFour:[''],
    //   imageFive:[''],
    //   imageSix:[''],
    //   imageSeven:[''],
    //   imageEight:[''],
    // }),
    assetDescription:this.fb.group({
      description:['', Validators.required],
      loanLended:['', Validators.compose([Validators.required, Validators.pattern('^[0-9*#+]+$')]) ],
      loanRecovered:[null, Validators.compose([Validators.required, Validators.pattern('^[0-9*#+]+$')]) ],
      finalPrice:['', Validators.compose([Validators.required, Validators.pattern('^[0-9*#+]+$')])]
    })
  });

  get assetDocs(){
    return this.addAssets.get('assetDocuments') as FormArray;
  }

  get assetimgs(){
    return this.addAssets.get('assetImages') as FormArray;
  }

  addAssetDocs(){
    this.assetDocs.push(this.fb.control(''));
  }

  addAssetImages(){
    this.assetimgs.push(this.fb.control(''));
  }

  removeAssetDocs(index : number){
    this.assetDocs.removeAt(index);
  }

  removeAssetImgs(index : number){
    this.assetimgs.removeAt(index);
  }

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
  }

  Assets: Array<any> = [
    // 'Bikes',
    // 'Cars',
    // 'Commercial vehicles',
    'Flats',
    'Houses',
    'Land',
    'Sites',
    'Industrial land & site with shed',
    'Industrial land & site without shed'
  ];

  changeAssettype(event: any) {
    const value = event.target.value;

    //if user selected Bikes

    }
    //if user selected Lands
    if (value == this.Assets[2]) {
     this.assetDetailone = this.landservice.Area;
     this.assetDetailtwo = this.landservice.Ownership;
     this.assetDetailthree = this.landservice.boundarywall;
     this.assetDetailfour = this.landservice.Security;
     this.assetDetailfive = this.landservice.ElectricityandWater
    }
    //if user selected Sites
    if (value == this.Assets[3]) {
     this.assetDetailone = this.siteservice.Area;
     this.assetDetailtwo = this.siteservice.Ownership;
     this.assetDetailthree = this.siteservice.boundarywall;
     this.assetDetailfour = this.siteservice.Security;
     this.assetDetailfive = this.siteservice.ElectricityandWater
    }
    //if user selected industrial lands&site with shed
    if (value == this.Assets[4]) {
     this.assetDetailone = this.industrialwithshedservice.Area;
     this.assetDetailtwo = this.industrialwithshedservice.Ownership;
     this.assetDetailthree = this.industrialwithshedservice.boundarywall;
     this.assetDetailfour = this.industrialwithshedservice.Security;
     this.assetDetailfive = this.industrialwithshedservice.ElectricityandWater
    }
    //if user selected industrial lands&site without shed
    if (value == this.Assets[5]) {
     this.assetDetailone = this.industrialwithoutshedservice.Area;
     this.assetDetailtwo = this.industrialwithoutshedservice.Ownership;
     this.assetDetailthree = this.industrialwithoutshedservice.boundarywall;
     this.assetDetailfour = this.industrialwithoutshedservice.Security;
     this.assetDetailfive = this.industrialwithoutshedservice.ElectricityandWater
    }
  }

  // doc upload
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const fileSizeInBytes = file.size;
    const maxSizeInBytes = 25 * 1024 * 1024; // 1MB

    if (fileSizeInBytes > maxSizeInBytes) {
      alert('File size exceeds the limit. Please choose a smaller file.');
      // Optionally, you can clear the file input
      event.target.value = null;
    } 
  }

  // Img upload
  readURLone(event:any): void {
      const file: File = event.target.files[0];
      const fileSizeInBytes = file.size;
      const maxSizeInBytes = 1024 * 1024; // 1MB

      if (fileSizeInBytes > maxSizeInBytes) {
        alert('File size exceeds the limit. Please choose a smaller file.');
        // Optionally, you can clear the file input
        event.target.value = null;
      } 
      
      if (event.target.files && event.target.files[0]) {
          const file = event.target.files[0];
          const reader = new FileReader();
          reader.onload = e => this.imageSrcone = reader.result;
          reader.readAsDataURL(file);
      }
  }

  // readURLone(event: any, index: number) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  
  //   reader.onload = (e: any) => {
  //     this.imageSrcone[index] = e.target.result;
  //   };
  
  //   reader.readAsDataURL(file);
  // }
  
}