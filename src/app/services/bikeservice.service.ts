import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BikeserviceService {

  Brands: string[] = [
    '-Brand-','BAJAJ','HERO','HONDA','JAWA','KTM','MAHINDRA','PIAGGIO','ROYAL ENFIELD','SUZUKI','TVS','YAMAHA'
  ]

  Models: string[] = [
    'Activa 125','ACTIVA 3G','Activa 4G','Activa 5G','Advanture 390','Bullet 350','Burgman','CB 200X','CB 300F','CB 300R','CB 350RS',
    'CB 500X', 'CB 650R', 'CD 100 dream', 'Classic 350', 'Continental GT-650', 'DIO', 'Duke 125', 'Duke 200', 'Duke 250', 'Duke 390',
    'Fasino', 'Gixxer', 'Gixxer 250', 'Gixxer SF', 'Gixxer SF 250', 'Grazia', 'Hayabusa', 'Himalayan', 'Hness CB350', 'Hornet 2.0',
    'Hunter 350', 'Husqvarna', 'Interceptor 650', 'Intruder 150', 'Livo', 'Meteor 350', 'PepPlus', 'RC 125', 'RC 200', 'RC 390',
    'Scram 411', 'Shine ', 'Shine 100', 'SP 125', 'Streak', 'Super Meteor 650', 'Unicorn', 'V-Strom 650 XT', 'V-Strom SX', 'X-Blade'
  ]

  Versions: string[] = [
    '2.0','100','155','180','250','400','100B','100ES','100ES BS6','100KS BS6','110 HGEAR','110?ES Alloy BS6','125 Fi','125?Disc - BS VI',
    '125?Drum - BS VI','125?Race Edition - BS VI','125?Race XP','125?Super Squad Edition - Disc','125?XT','125-CARBON FIBRE DISC SINGLE SEAT',
    '125-DX','125-SLIP SEAT','135LS','150DTSi','160R-Front Disc [2022]','180DTSi','180F','200-CARB','200DTSi','200S-STANDARD',
    '200T-STANDARD','220DTSi','220F','300 ABS BS6','300-Single Channel ABS BS VI','400-DISC','42 Bobber?Jasper Red (Dual Tone)',
    '42 Bobber?Moonstone White','42 Bobber?Mystic Copper','ABS BS6','Alloy Wheel','APRILLA-SR 150','AS150','AS200','Astral',
    'BLACK AND ACCENT','Blazing Black and Skyline Blue','BS VI[2021]','CARBON FIBRE DISC SPLIT SEAT','Celebration Editon-Disc',
    'Celebration Editon-Drum','Celesstial','Chrome-BS VI','Classic [2022]','Classic Chrome-Dual channel ABS','Classic Dark-Duel Channel Abs',
    'Classic Signals-Dual Channel ABS','CRUISE','Custom- BS VI','Deluxe','Deluxe BS6','Deluxe Pro','Deluxe[2022]','Deluxe-Limited Edition',
    'Deluxe-Sports Limited','DIGITAL-DISC','DIGITAL-DRUM','DISC','DISC BLACK AND ACCENT','DISC BRAKE','Disc[2023]','Disc-BS VI','Disc-BS6',
    'DLX','DLX Pro-Dual Tone','DLX Pro-Monotone','DRUM','Drum Alloy','DRUM BLACK ANS ACCENT','Drum Self Alloy Black','Drum[2023]','Drum-BS VI',
    'DUAL CHANNEL ABS','Dual Channel ABS - BS VI','Dual Disc','Dual Disc [2022]','Dual Tone- BS VI[2021]','DX','DX---CBS','DXL','DXL Pro',
    'DXL Pro Chrome','Elegante 150','ES','F1','F1-4.0DLX','F1-V3','F250','Fireball','FUEL INJECTION','Glacier Blue and Granite Black[2023]',
    'GP Edition','Graphite Blue','Graphite red','Graphite Yellow','Halcyon-Dual Channel ABS','Halcyon-single Channel ABS','HF 100','H-Smart',
    'HX','Interstellar','Jupiter?Standard','Kick Alloy BS6','KICK START','KS','M','Metro Dapper','metro Rebel','MotoGP Edition-BS VI','N160',
    'N160--SINGLE CHANNEL ABS','NEON DISC SINGLE SEAT','NEW DISC','NEW DRUM','NS125','NS160','NS200','NXT','P150-SINGLE DISC','Pine Green and Dune Brown[2023]',
    'Pine Green and Granite Black[2021]','PLATINA-100','Plus?Disc','Plus?Dual Tone - BS VI','Plus?Mono Tone - BS VI','POLO','Redditch-Single Channel ABS',
    'Retro Factory','Ride Connect','ROCKSTAR','ROCKSTAR KICK ALLOY','RR310','RS200','RS200--SS','RTR 160 2V','RTR 160 4V','RTR 180','S','Self Alloy BS6',
    'Self Alloy i3S BS6','SELF START(ELS)','SELF START(ES)','Self with Alloy Wheel','SELF WITH ALLOY WHEEL AND I3s','SF','SF1','Sheet Metal Wheel',
    'Single Channel ABS - BS VI','Single Disc','SINGLE SEAT','Sleet Black[2023]','SMARTXONNECT','Special Edition','SR 125 2022','SR 160','SR 160 2022','ST',
    'Standard','Standard BS6','Standard Limited Edition','Standard(BS III)','Standard(BS IV)','Standard-Sports Limited','Stealth 2.0 Edition','Stealth Edition [2022]',
    'Stellar','Storm 125','Street rally-125','Street 160','Suoernova','Svartpilen 250','SXL 125','SXR 125','SXR 160','TATA','TWIN DISC SLIPT SEAT','UG300','V2','V3','V4',
    'V 2.1','VESPA-110?X','Vitpilen 250','VX','VX-CBS','VXL 125','White Flame and Silver Spirit','X','XT','XT300','XTEC-Drum','XTREME 160R','ZX 125','ZX Disc','ZX Drum - AOL',
    'ZX SmartXonnect'
  ]

  YearOfMake: string[] = [
    '1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'
  ]

  FuelType: string[] = [
    'Petrol', 'Electric'
  ]

  constructor() { }
}

