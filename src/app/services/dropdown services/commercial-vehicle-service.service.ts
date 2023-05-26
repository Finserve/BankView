import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommercialVehicleServiceService {

  Brands: string[] = [
    'Ashok Leyland','Asia Motorworks','BharatBenz','Eicher Motors','Force Motors','Mahindra & Mahindra','Maruti Suzuki','Piaggio','SML ISUZU','Tata Motors','Volvo Trucks'

  ]

  Models: string[] = [
    '1618 TP','1916 HH-4x2 haulage','1920 HH-4x2 haulage','2516 HL','2516 TM','2518 HL','2518 TM','2518 TP','2523 TP','2528 TP','2620 6x2 LA','2825-6x4 Tipper','2832-6x4',
    '3116 HL','3118 HL','3118 TP','3120-6x2 DTLA','3518 TR','3532-8x4','4018 TR','4220 4x2 Tractor','4225 4x2 Tractor','4420 4x2 Tractor','4425 4x2 Tractor','4825-10x2 DTLA',
    '4923 TR','Ace Gold','Alfa Load','Alfa Passenger','Ape Auto DX','Ape Auto DXL','Ape Auto HT DX','Ape Auto Plus','Ape City Plus','Ape E City','Ape E City FX Max','Ape E Xtra',
    'Ape E Xtra FX Max','Ape NXT Plus','Ape Xtra Classic','Ape Xtra LDX','Ape Xtra LDX HT','Ape Xtra LDX plus','Bada Dost','Blazo','Blazo Haulage','Blazo Tipper','Blazo Tractor Trailer',
    'Bolero Camper','Bolero Maxitruck Plus','Bolero Maxx Pik-up','Bolero Pik-up','BOSS 1115 HB','Boss 1115 Tipper','BOSS 1215 HB','BOSS 1315 HB','BOSS 1415 HB','Boss 1920-4x2 haulage',
    'Dost CNG','Dost LiTE','Dost Strong','Dost+','E-Alfa','Ecomet','eComet 1415 7 cum Tipper','ecomet HE','ecomet Tipper','Eeco Cargo','E-Verito','FH 520 Puller','FM 370','FM 380 4x2 Tractor',
    'FM 380 8x4','FM 400','FM 400 HD','FM 420 4x2','FM 420 8x4','FM 420 Euro-4 6x4','FM 440 6x4','Furio','HDT C','HDT R','HDT RT','HDT T','ICV Truck','ILCV Tippers','Intra','Jayo','Jeeto',
    'Kargo King','LCV Truck','M&HCV Construck','M&HCV Rigid Truck','M&HCV Tractor Trailer','Magic Express','MDT','Partner','Partner Super','Prestige GS','Prestige GS Pickup','Pro ','Pro CNG',
    'Pro DSD','Pro Plus','Pro PLUS CNG','Reefer','Samrat 1312 XT truck','Samrat GS','Samrat GS Tipper','Samrat GS XT Tipper Chassis ','Sartaj GS 5252','Sartaj GS 5252 Truck','Sartaj GS HG 72',
    'Sartaj GS HG75','Sartaj GS HG75 MS Container','Sartaj GS HG75 Truck','Shaktiman','Starbus','Super Carry','Super Carry Petrol Mini Truck','Super GS','Super GS Truck','Supreme GS',
    'Supreme GS Truck','Supro Cargo Van','Supro Maxi Truck','Supro Mini Truck','Supro Van','Traveller  ','Traveller  Delivery Fan','Traveller Tempo','Treo  ','Treo Yaari','Treo Zor',
    'U 4825 10x4 Tipper','Ultra ICV','Ultra MHCV','Urbania','Winger','Yodha','Zor Grand'
  ]

  Versions: string[] = [
    '2.0','26','400','1015','1115','1215','1415','1615','2049','2050','2055','2059','2075','2090','2095','2110','3012','3014','3015','3018','3050','3350','3700','4020','1117R','1217C','1217R',
    '1217RE','1415 TE','1417R','1417RE','1617R','1815 HE','1917R','1926C','2055K','2055T','2059 XP','2080 XP','2080XPT','2095 XP','2095XPT','2110 XP','2110XPT','2114XP','2623R','2823R','2823RT',
    '2826C','2828C','2828CH','3015XP','3123R','3523R','3523RT','3528C','3532CM','3828R','4023T','4028T','4032T','4228R','4228RT','4828R','4828RT','5032T','5432T','5528T 4x2','5528T 6x4','5532T 4x2',
    '5532T 6x4','i1','i2','i3+','i4','Pickup','Ultra','V10','V30','V50','X 28 BS6','X 35 BS6','X 42 BS6','X 49 BS6',
  ]

  YearOfMake: string[] = [
    '1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'
  ]

  FuelType: string[] = [
    'Diesel','Petrol', 'Electric'
  ]


  constructor() { }
}
