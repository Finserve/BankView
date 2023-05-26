import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

  Brands: string[] = [
    'FORD','HONDA','HYUNDAI','KIA','MAHENDRA','MARUTI SUZUKI','NISSAN','TATA','TOYATA','VOLKSWAGEN','AUDI','BENZ','BMW'
  ]

  Models: string[] = [
    '2 Series Gran Coupe','3 Series','3 Series Gran Limousine','5 Series','6 Series GT','7 Series','8 Series Gran Coupe',
    'A3','A4','A6','ACCENT','A-CLASS','ALCAZAR','ALTO 800','ALTO K10','ALTROZ','ALYURAS G4','AMAZE','ASPIRE','AURA','B-CLASS',
    'BELENO','BELTA','BOLERO','BREZZA','BRIO','BR-V','CAMRY','CARENS','CARNIVAL','C-CLASS','CELERIO','CIAZ','CITY','CIVIC',
    'CLA','CRETA','CR-V','E-CLASS','ECOSPORTS','EECHO','ELANTRA','ENDEAVOUR','ERTIGA','ETIOS','FIGO','FORTUNER','FORTUNER LEGENDER',
    'FREESTYLE','G-Class','GLA','GLANZA','GLB','GLC','GLE','GLS','HARRIER','I20','IGNIS','INNOVA CRYSTA','INNOVA HYCROSS','JAZZ',
    'KICKS','KONA','KUV100 NXT','LAND CRUISER','M5','MAGNITE','MARAZOO','MOBILIO','NEXON','NIOS I10','POLO','PUNCH','Q2','Q3','Q5',
    'Q7','Q8','RS Q3','SAFARI','SANTA FE','SCORPIO','S-CROSS','SELTOS','SONATA','SONET','S-PRESSO','SUNNY','SWIFT','SWIFT DEZIRE',
    'TAIGEN','TERRANO','THAR','TIAGO','TIGOR','TT','TUCSON','URBAN CRUISER HYRYDER','VENTO','VENUE','VERNA','WAGANOR','WR-V','X1',
    'X3','X4','X5','X7','XL6','XUV300','XUV400','XUV700','Z4',
  ]

  Versions: string[] = [
    '4 WD Diesel  (Manual)','4X2 AT 2.7 Petrol','4X2 AT 2.8 Diesel','Automatic (CVT) & Automatic (EV/Hybrid)','E(Manual)','G-SLF 7 STR',
    'G-SLF 8 STR(Manual)','GX 7 STR(Manual)','HTE 1.2-MANUAL','HTK Plus 1.2-MANUAL','Matt Edition-AUTOMATIC','Nios Era 1.2 Kappa VTVT petrol (Manual)',
    'Prestige 7 STR-AUTOMATIC','S AMT(Automation)','S(Manual)','VX petrol   (Manual)','1.0 GT TSI-AUTOMATION','1.6 AWD Diesel AT (Automation)',
    '2 WD Diesel (Manual)','2.0 S M T petrol','2.4 Gdi MT petrol (Manual)','2.4 Gdi-MT petrol  (Automation)','2.5 TFSI quattro S tronic',
    '220i M Sport (Automatic)','220i Sport Line (Automatic)','2WD AT[2018-2020]-AUTOMATIC','2WD AT-AUTOMATIC','2WD HIGH AT-AUTOMATIC','2WD Petrol CVT (Automation)',
    '30 TFSI S tronic','320d Luxury Line (Automatic)','320d M Sport (Automatic)','320d Sport (Automatic)','320Ld Luxury Line (Automatic)','330i M Sport (Automatic)',
    '330i M Sport First Edition (Automatic)','330i Sport (Automatic)','330Li Luxury Line (Automatic)','330Li M Sport (Automatic)','35 TFSI S tronic','40 TFSI S tronic',
    '45 TFSI quattro S tronic','45 TFSI quattro Tiptronic','4WD AT[2018-2020]-AUTOMATIC','4WD AT-AUTOMATIC','4X2 AT 2.8 Legende r(Automation(TC))','4X2 MT 2.7 Petrol',
    '4X2 MT 2.8 Diesel','5 STR AC CNG-MANUAL','5 STR AC-MANUAL','5 STR STD-MANUAL','520d Luxury Line (Automatic)','520d M Sport (Automatic)','520d Sport (Automatic)',
    '530d M Sport (Automatic)','530i M Sport (Automatic)','530i Sport (Automatic)','55 TFSI quattro Tiptronic','630d Luxury Line (Automatic)','630d M Sport (Automatic)',
    '630i Luxury Line (Automatic)','630i M Sport (Automatic)','7 STR STD-MANUAL','730Ld DPE (Automatic)','730Ld M Sport (Automatic)','740Li M Sport (Automatic)',
    '840i Luxury Line (Automatic)','840i M Sport (Automatic)','A200 AMG Line (Automatic)','A200 Progressive Line (Automatic)','A35 4MATIC AMG (Automatic)',
    'Accomplished AMT-AUTOMATIC','Accomplished Dazzle Pack MT-AUTOMATIC','Accomplished MT-MANUAL','Adventure AMT-AUTOMATIC','Adventure MT-MANUAL',
    'Adventure Rhythm Pack AMT-AUTOMATIC','ALPHA 1.2 AMT DUAL TONE-AUTOMATIC','ALPHA 1.2 AMT-AUTOMATIC','ALPHA 1.2 MT DUAL TONE-MANUAL','ALPHA 1.2MT-MANUAL',
    'ALPHA 1.5 AT DUAL TONE-AUTOMATIC','ALPHA 1.5 AT-AUTOMATIC','ALPHA 1.5 DUAL TONE-MANUAL','ALPHA 1.5-MANUAL','ALPHA AT-AUTOMATC','ALPHA MT AGS-AUTOMATIC','ALPHA MT-MANUAL',
    'ALPHA PLUS AT DUAL TONE-AUTOMATIC','ALPHA PLUS AT-AUTOMATIC','ALPHA PLUS MT DUAL TONE-MANUAL','ALPHA PLUS MT-MANUAL','ALPHA-MANUAL','AMBIENT 1.2 TI-VCT[2019-2020]-MANUAL',
    'AMBIENT 1.5TDCI-MANUAL','Ambiente 1.2 Ti-VCT [2018-2020]-MANUAL','AMBIENTE 1.2 TI-VCT[2018-2020]-MANUAL','AMBIENTE 1.2 TI-VCT-MANUAL','Ambiente 1.2 Ti-VCT-MANUAL',
    'AMBIENTE 1.5 TI-VCT-MANUAL','Ambiente 1.5L TDCi [2019-2020]-MANUAL','Ambiente 1.5L TDCi-MANUAL','Ambiente 1.5L Ti-VCT [2019-2020]-MANUAL','Ambiente 1.5L Ti-VCT-MANUAL',
    'Ambiente CNG-MANUAL','AMIENTE 1.5 TDCI-MANUAL','Asta (O) 1.0 Turbo DCT Dual Tone Petrol  (Automation(DCT))','Asta (O) 1.0 Turbo DCT petrol  (Automation(DCT))',
    'Asta (O) 1.2 IVT Dual Tone petrol  (Automation(CVT))','Asta (O) 1.2 MT Dual Tone Petrol  (Manual)','Asta (O) 1.2 MT Petrol  (Manual)','Asta 1.2 MT Petrol  (Manual)',
    'Aura E 1.2 Petrol (Manual)','AX(O) CONVERTIBLE TOP DIESEL MT 4WD-MANUAL','AX(O) COVERTIBLE TOP PETROL MT 4WD-MANUAL','AX(O) HARD TOP DIESEL MT 4WD-MANUAL',
    'AX(O)HARD TOP DIESEL MT RWD-MANUAL','B200 Progressive Line (Automatic)','B200 Progressive Line (Automatic)','B4-MANUAL','B6 (O)-MANUAL','B6-MANUAL','C200 Progressive Line (Automatic)',
    'C220d Progressive Line (Automatic)','C300d AMG Line (Automatic)','C300d Cabriolet AMG Line (Automatic)','C43 AMG 4MATIC Cabriolet (Automatic)','C43 AMG 4MATIC Coupe (Automatic)',
    'C63 AMG S Cabriolet (Automatic)','C63 AMG S Coupe (Automatic)','Camo Accomplished MT-MANUAL','Camo Adventure AMT-AUTOMATIC','Camo Adventure Rhythm MT-MANUAL','Camry Hybrid',
    'Carens Luxury (O)1.5 Diesel AT 7 STR-AUTOMATIC','CLA200 (Automatic)','CLA200d (Automatic)','CLA35 AMG 4MATIC (Automatic)','CLA45 AMG 4MATIC+ (Automatic)','Comfortline 1.0 TSI MT-MANUAL',
    'Comfortline 1.0L (P) [2019-2020]-MANUAL','Comfortline 1.0L MPI-MANUAL','Comfortline 1.0L TSI-MANUAL','Comfortline 1.5L (D)-MANUAL','Comfortline 1.6 (P)-MANUAL','Comfortline Plus 1.0L MPI-MANUAL',
    'Competition (Automatic)','Creative AMT-AUTOMATIC','Creative Dual Tone AMT-AUTOMATIC','Creative IRA AMT Dual Tone-AUTOMATIC','Creative IRA Dual Tone-MANUAL','Creative iRA Pack AMT-AUTOMATIC',
    'Creta S 1.5 Diesel  (Manual)','DELTA 1.2 AMT-AUTOMATIC','DELTA 1.2MT-MANUAL','DELTA 1.5 AT-AUTOMATIC','DELTA 1.5-MANUAL','DELTA AGS-AUTOMATIC','DELTA AT-AUTOMATIC','DELTA MG CNG-MANUAL',
    'DELTA MT-MANUAL','DELTA-MANUAL','DLS Diesel   (Manual)','E 1.2 Petrol (Manual)','E Diesel  (Manual)','E MT 1.2 Petrol (Old Design) (Manual)','E NeoDrive(Manual)','E200 Exclusive (Automatic)',
    'E200 Expression (Automatic)','E220d Exclusive (Automatic)','E220d Expression (Automatic)','E350d All Terrain (Automatic)','E350d AMG Line (Automatic)','E63 AMG S 4MATIC+ (Automatic)',
    'EC 3.3 KW-AUTOMATIC','EC 7.2 KW-AUTOMATIC','EL 7.2 KW DT-AUTOMATIC','EL 7.2 KW-AUTOMATIC','Electric premium (Automation)','Electric premium dual tone (Automation)','EX 1.5 Diesel (Manual)',
    'Executive CNG   (Manual)   ','Executive LPG  (Manual)','Executive petrol  (Manual)','First Anniversary 1.0TSI AT-AUTOMATIC','First Anniversary 1.0TSI MT-MANUAL','FLAIR EDITION 1.5 TDCI-MANUAL',
    'FTX Tornado petrol  (Manual)','G AMT(Automation)','G AT-AUTOMATIC','G E-CNG(Manual)','G NeoDrive(Manual)','G(Manual)','G350d (Automatic)','G63 AMG (Automatic)','GLA200 (Automatic)',
    'GLA200d (Automatic)','GLA35 AMG 4MATIC (Automatic)','GLB200 (Automatic)','GLB220d (Automatic)','GLC200 Progressive Line (Automatic)','GLC220d Progressive Line (Automatic)','GLC300d AMG Line (Automatic)',
    'GLC43 AMG 4MATIC (Automatic)','GLC43 AMG 4MATIC Coupe (Automatic)','GLC63 AMG S 4MATIC+ Coupe (Automatic)','GLE 1 petrol  (Manual)','GLE 2 petrol  (Manual)','GLE petrol  (Manual)','GLE350d (Automatic)',
    'GLE400d Coupe (Automatic)','GLE43 AMG Coupe (Automatic)','GLE450 AMG Line Coupe (Automatic)','GLE63 AMG S 4MATIC+ (Automatic)','GLS petrol  (Manual)','GLS400d (Automatic)','GT 1.5 TSI MT-MANUAL',
    'GT Line (D)-AUTOMATIC','GT Line (P)-AUTOMATIC','GT Plus 1.5 TSI DSG-AUTOMATIC','GT TDI-MANUAL','GT TSI [2019-2020]-AUTOMATIC','GTX Plus 1.0 DCT Dual Tone-AUTOMATIC','GTX Plus 1.0 DCT-AUTOMATIC',
    'GTX Plus 1.0 iMT Dual Tone-MANUAL','GTX Plus 1.0 Imt-MANUAL','GTX Plus 1.5 Diesel AT-AUTOMATIC','GTX Plus 1.5 Diesel iMT Dual Tone-MANUAL','GTX Plus 1.5 Diesel Imt-MANUAL','GTX Plus Diesel AT--AUTOMATIC',
    'Gvs petrol  (Manual)','GX 8 STR(Manual)','Highline 1.0 TSI AT-AUTOMATIC','Highline 1.0 TSI MT-MANUAL','Highline 1.0L TSI- Automatic','Highline 1.2 (P) AT-AUTOMATIC','Highline 1.5 (D)-MANUAL',
    'Highline 1.6 (P)-MANUAL','Highline AT Matt Edition-AUTOMATIC','Highline Plus 1.0 (P) [2019-2020]-MANUAL','Highline Plus 1.0L TSI AT-AUTOMATIC','Highline Plus 1.0L TSI-MANUAL','Highline Plus 1.2 (P) AT-AUTOMATIC',
    'Highline Plus AT Matt Edition-AUTOMATIC','HTE 1.5 Diesel Imt-MANUAL','HTK 1.2-MANUAL','HTK 1.5 Diesel Imt-MANUAL','HTK Diesel Imt-AUTOMATIC','HTK-MANUAL','HTX 1.0 Imt-MANUAL','HTX 1.5 Diesel AT-AUTOMATIC',
    'HTX 1.5 Diesel Imt-Manual','HTX Diesel AT-AUTOMATIC','HTX Diesel Imt-AUTOMATIC','HTX IVT-AUTOMATIC','HTX Plus 1.0 iMT Dual Tone-MANUAL','HTX Plus 1.5 Diesel iMT Dual Tone-MANUAL','HTX Plus 1.5 Diesel Imt-MANUAL'
    ,'HTX-MANUAL','K2 PLUS 6 STR-MANUAL','K4 PLUS 6 STR-MANUAL','K6 PLUS 6 STR-MANUAL','K8 6 STR DUAL TONE-MANUAL','K8 6 STR-MANUAL','Legend Edition-AUTOMATION','Legender 4X4 AT 2.8 Legender(Automation(TC))',
    'Limited TSI Edition-MANUAL','Limited TSI Edition-MANUAL','Limousine 7 STR-AUTOMATIC','Limousine Plus 7 STR-AUTOMATIC','Luxury (O)1.5 Turbo Petrol DCT 7 STR-AUTOMATIC','Luxury 1.5 Diesel iMT 7 STR-MANUAL',
    'Luxury 1.5 Turbo Petrol iMT 7 STR-MANUAL','Luxury Plus 1.5 Diesel AT 6 STR-AUTOMATIC','Luxury Plus 1.5 Diesel AT 7 STR-AUTOMATIC','Luxury Plus 1.5 Diesel iMT 6 STR--MANUAL','Luxury Plus 1.5 Diesel iMT 7 STR-MANUAL',
    'Luxury Plus 1.5 Turbo Petrol DCT 7 STR-AUTOMATIC','Luxury Plus 1.5 Turbo Petrol iMT 6 STR-MANUAL','Luxury Plus 1.5 Turbo Petrol iMT 7 STR-MANUAL','LX CONVERTIBLE TOP DIESEL AT 4WD-AUTOMATIC',
    'LX CONVERTIBLE TOP DIESEL MT 4WD-MANUAL','LX HARD TOP DIESEL AT  4WD-AUTOMATIC','LX HARD TOP DIESEL MT RWD-MANUAL','LX HARD TOP PETROL AT  4WD-AUTOMATIC','LX HARD TOP PETROL MT 4WD-MANUAL',
    'LXI (O) AMT-AUTOMATIC','LXI (O) CNG-MANUAL','LXi (O)-MANUAL','LXI 1.0CNG-MANUAL','LXI 1.0-MANUAL','LXI S-CNG-MANUAL','LXI S-CNG-MANUAL','LXI(O)-MANUAL','LXI-MANUAL','M2 7 STR-MANUAL','M2 8 STR-MANUAL',
    'M235i xDrive (Automatic)','M4 PLUS 7 STR-MANUAL','M4 PLUS 8 STR-MANUAL','M40i (Automatic)','Magna 1.2 MT petrol  (Manual)','Manual & Automatic','Mid MT','Nios Magna 1.2 Kappa VTVT petrol (Manual)',
    'Nios Sportz 1.2 Kappa VTVT CNG (Manual)','Nios Sportz 1.2 Kappa VTVT petrol (Manual)','Platinum 2.0 AT Diesel (Automation)','Platinum 2.0 AT Petrol (Automation(TC))','Premium 1.4 Petrol 7 STR-MANUAL',
    'Premium 1.5 Petrol 7 STR-MANUAL','Prestige 1.5 Diesel iMT 7 STR-MANUAL','Prestige 1.5 Turbo Petrol iMT 7 STR-MANUAL','Prestige 7 STR 1.5 Diesel(Manual)',
    'Prestige 7 STR 1.5 Turbo Petrol(Manual),Automatic (TC)ÿ& Automatic (DCT))','Prestige Exe 7 STR 1.5 Diesel (Manual)','Prestige Exe 7 STR 2.0 Petrol (Manual)','Prestige Plus 1.5 Diesel iMT 7 STR-MANUAL',
    'Prestige Plus 1.5 Turbo Petrol DCT 7 STR-AUTOMATIC','Pure MT-MANUAL','Pure Rhythm Pack MT-MANUAL','Red and White Edition-AUTOMATIC','RS Diesel (Manual)','RS(O) Diesel (Manual)','S (O) 1.0 Turbo DCT(Manual)',
    'S (O) 1.0 Turbo iMT','S (O) 1.2 Petrol (Manual)','S 1.2 CNG (Manual)','S 1.2 Petrol (Manual)','S 1.5 MT-MANUAL','S 1.5 Petrol (Manual)','S 1.5 VTVT (Manual)','S AT NeoDrive(Automation)','S AT NeoDrive(Automation)',
    'S CVT 1.2 Petrol  (Automation)','S Diesel  (Manual)','S Diesel [2019-2020]-MANUAL','S Diesel Style Edition (Manual)','S E-CNG(Manual)','S MT 1.2 Petrol (Manual)','S MT 7STR-MANUAL','S MT 9STR-MANUAL','S NeoDrive(Manual)',
    'S Petrol  (Manual)','S Petrol [2019-2020]-MANUAL','S Petrol Style Edition (Manual)','S Plus 1.4 Turbo DCT  (Atomation)','S Plus 1.5 CRDi','S Plus 1.5 Diesel Knight  (Atomation)','S Plus 1.5 Petrol Knight Dual Tone(Manual)',
    'S11 MT 7S CC-MANUAL','S11 MT 7S-MANUAL','sDrive20d M Sport (Automatic)','sDrive20d xLine (Automatic)','sDrive20i (Automatic)','sDrive20i M Sport (Automatic)','sDrive20i SportX (Automatic)','sDrive20i xLine (Automatic)',
    'sDrive20i xLine (Automatic)','SE 1.5L Ti-VCT-MANUAL','SIGMA 1.2MT-MANUAL','SIGMA 1.5-MANUAL','SIGMA MT-MANUAL','SIGMA-MANUAL','Signature 2.0 4WD AT Diesel (Automation)','Signature 2.0 4WD AT Diesel Dual Tone (Automation)',
    'Signature 2.0 AT Diesel (Automation)','Signature 2.0 AT Diesel Dual Tone (Automation)','Signature 2.0 AT Petrol Dual Tone (Automation)','SPORT 2.0 4x4 AT--AUTOMATIC','Sportz 1.0 Turbo DCT(Manual)','Sportz 1.2 IVT petrol(Automation(CVT))',
    'Sportz 1.2 MT Dual Tone petrol  (Manual)','STD (O)-MANUAL','STD-MANUAL','SV MT Diesel (Manual)','SV MT Petrol  (Manual)','SV Petrol MT(Manual)','SX (0) 1.5 AT Diesel  (Automatin)','SX (0) 2.0 AT petrol (Automatin)',
    'SX (O) 1.0 Turbo iMT Dual Tone  (Manual)','SX (O) 1.0 Turbo iMT Dual Tone  (Manual)','SX (O) 1.4 Turbo 7 DCT  (Atomation)','SX (O) 1.4 Turbo 7 DCT Dual Tone  (Atomation)','SX (O) 1.5 CRDi Dual Tone (Manual)','SX (O) 1.5 Diesel (Manual)',
    'SX (O) 1.5 Diesel Automatic knight Dual Tone (Atomation)','SX (O) 1.5 Petrol CVT  (Atomation)','SX (O) 1.5 Petrol CVT Knight  (Atomation)','SX (O) 1.5 Petrol CVT Knight Dual Tone  (Atomation)','SX (O) 1.5 Turbo Petrol MT (Automation)',
    'SX 1.2 (O) Petrol(Manual)','SX 1.2 CNG (Manual)','SX 1.2 Petrol','SX 1.2 Petrol (Manual)','SX 1.2 Petrol Dual Tone (Manual)','SX 1.5 CRDi (Manual)','SX 1.5 CRDi Dual Tone (Manual)','SX 1.5 Diesel (Manual)','SX 1.5 MT Diesel (Manual)',
    'SX 1.5 Petrol CVT  (Atomation)','SX 1.5 Petrol Executive  (Manual)','SX 1.5 Turbo Petrol MT (Manual)','SX 1.5 VTVT (Manual)','SX 2.0 AT petrol (Manual)','SX 2.0 MT petrol (Manual)','SX Plus 1.2 AMT Petrol(Manual)','THE-MANUAL',
    'Thunder Edtion Diesel [2019-2020]-MANUAL','Thunder Edtion Petrol [2019-2020]-MANUAL','Thunder Edtion Petrol-MANUAL','Titanium + 1.5L TDCi-MANUAL','Titanium + 1.5L Ti-VCT [2019-2020]-MANUAL','Titanium + 1.5L Ti-VCT-MANUAL',
    'TITANIUM 1.2 TI-VCT AT-AUTOMATION','TITANIUM 1.2 TI-VCT MT[2019-2020]-MANUAL','TITANIUM 1.2 TI-VCT MT-MANUAL','TITANIUM 1.2 TI-VCT[2018-2020]-MANUAL','TITANIUM 1.2 Ti-VCT[2018-2020]-MANUAL','TITANIUM 1.2 TI-VCT-MANUAL',
    'TITANIUM 1.2 Ti-VCT-MANUAL','TITANIUM 1.5 TDCI [2018-2020]-MANUAL','TITANIUM 1.5 TDCI -MANUAL','TITANIUM 1.5 TDCI[2018-2020]-MANUAL','TITANIUM 1.5 TDCI[2029-2020]-MANUAL','TITANIUM 1.5 TDCI-MANUAL','TITANIUM 1.5 TDCI-MANUAL',
    'TITANIUM 1.5 TI-VCT AT-AUTOMATION','TITANIUM 1.5 TI-VCT AT-AUTOMATION','Titanium 1.5L TDCi [2019-2020]-MANUAL','Titanium 1.5L TDCi-MANUAL','Titanium 1.5L Ti-VCT [2019-2020]-MANUAL','Titanium 1.5L Ti-VCT [2020-2021]-MANUAL',
    'Titanium 1.5L Ti-VCT AT-AUTOMATIC','Titanium 1.5L Ti-VCT-MANUAL','TITANIUM 2.0 4x2 AT-AUTOMATIC','TITANIUM 22 4x2 MT-MANUAL','TITANIUM BLU .5 TDCI-MANUAL','TITANIUM BLU 1.2 TI-VCT[2019-2020]-MANUAL','TITANIUM BLU 1.2 TI-VCT-MANUAL',
    'TITANIUM BLU 1.2 TI-VCT-MANUAL','TITANIUM BLU 1.5 TDCI[2019-2020]-MANUAL','TITANIUM BLU 1.5 TDCI-MANUAL','TITANIUM PLUS 1.2 TI-VCT AT-AUTOMATION','TITANIUM PLUS 1.2 Ti-VCT[2018-2020]-MANUAL','TITANIUM PLUS 1.2 Ti-VCT-MANUAL',
    'TITANIUM PLUS 1.5 TDCI[2018-2020]-MANUAL','TITANIUM PLUS 1.5 TDCI-MANUAL','TITANIUM PLUS 1.5 TDCI-MANUAL','Titanium Plus 1.5L Ti-VCT AT-AUTOMATIC','TITANIUM PLUS 1.5TDCI[2018-2020]-MANUAL','TITANIUM PLUS 2.0 4x4 AT-AUTOMATIC',
    'TITANIUM PLUS 2.2 4x2 AT-AUTOMATIC','TITANIUM PLUS 3.2 4x4 AT-AUTOMATIC','Topline 1.0 TSI AT-AUTOMATIC','TREND  1.5 TDCI-MANUAL','Trend 1.2 Ti-VCT [2018-2020]-MANUAL','TREND 1.2 TI-VCT[2018-2019]-MANUAL','TREND 1.2 TI-VCT-MANUAL',
    'TREND 1.5 TDCI[2018-2020]-MANUAL','TREND 1.5 TDCI-MANUAL','Trend 1.5L TDCi [2019-2020]-MANUAL','TREND 1.5L TDCI[2018-2019]-MANUAL','Trend 1.5L TDCi-MANUAL','Trend 1.5L Ti-VCT [2019-2020]-MANUAL','TREND PLUS 1.2 TI-VCT[2018-2020]-MANUAL',
    'TREND PLUS 1.2 TI-VCT[2019-2020]-MANUAL','TREND PLUS 1.2 TI-VCT-MANUAL','TREND PLUS 1.5 TDCI-MANUAL','TREND PLUS 1.5TDCI[2019-2020]-MANUAL','TREND PLUS CNG-MANUAL','Trendline 1.0L (P) [2019-2020]-MANUAL','Trendline 1.0L MPI-MANUAL',
    'Trendline 1.0L TSI-MANUAL','Trendline 1.5L (D)-MANUAL','Trendline 1.6 (P)-MANUAL','Turbo Edition 1.0L TSI-MANUAL','V (O) Petrol (Manual)','V AMT(Automation)','V CVT Petrol   (Automation(CVT))','V CVT petrol (Manual)',
    'V CVT Petrol [2019-2020](Automation(CVT))','V CVT(Automation(CVT))','V Diesel Style Edition (Manual)','V Petrol (Manual)','V Petrol MT(Manual)','V Petrol Style Edition (Manual)','V(Manual)','Viva CRDi Diesel(Manual)','Viva petrol(Manual)',
    'VX CVT  (Automation(CVT))','VX CVT  petrol (Automation)','VX CVT Petrol   (Automation(CVT))','VX Diesel [2019-2020]  (Manual)','VX MT Petrol (Manual)','VX Petrol (Manual)','VX Petrol [2016-2017] (Manual)','VXI (O) CNG-MANUAL','VXI (O)-MANUAL',
    'VXI 1.0CNG-MANUAL','VXI 1.0-MANUAL','VXI AGS-AUTOMATIC','VXI AMT AUTOMATIC','VXI AT-AUTOMATIC','VXI CNG-MANUAL','Vxi -MANUAL','VXI PLUS (O) AMT-AUTOMATIC','VXI PLUS AGS-AUTOMATIC','VXI PLUS-MANUAL','VXI S-CNG-MANUAL','VXI-MANUAL',
    'W11 AT-AUTOMATIC','W11 (O) AT-AUTOMATIC','W11 Opt-MANUAL','W11(O) AWD AT-AUTOMATIC','W11(O) AWD-MANUAL','W11(O)[2018-2020]-MANUAL','W11-MANUAL','W3-MANUAL','W5[2018-2020]-MANUAL','W5-MANUAL','W6 1.2 PETROL AMT-AUTOMATIC',
    'W6 1.5 DIESEL AMT-AUTOMATIC','W6 1.5 DIESEL-MANUAL','W7 AT[2018-2020]-AUTOMATIC','W7 AT-AUTOMATIC','W7-MANUAL','W9 AT[2018-2020]-AUTOMATIC','W9 AT-AUTOMATIC','W9[2018-2020]-MANUAL','W9-MANUAL','X Line 1.0 DCT-AUTOMATIC',
    'X Line 1.5 Diesel AT-AUTOMATIC','xDrive20d Luxury Line (Automatic)','xDrive20d M Sport (Automatic)','xDrive20d SportX (Automatic)','xDrive20d xLine (Automatic)','xDrive30d Design Pure Excellence Signature (Automatic)','xDrive30d DPE Signature (Automatic)',
    'xDrive30d Luxury Line (Automatic)','xDrive30d M Sport (Automatic)','xDrive30d M Sport X (Automatic)','xDrive30d xLine (Automatic)','xDrive30i Luxury Line (Automatic)','xDrive30i SportX (Automatic)','xDrive40i Design Pure Excellence Signature (Automatic)',
    'xDrive40i M Sport (Automatic)','xDrive40i SportX (Automatic)','xDrive40i xLine (Automatic)','XE CNG-MANUAL','XE Plus DIESEL-MANUAL','XE Plus Petrol-MANUAL','XE-MANUAL','XETRA 1.2AMT-AUTOMATIC','XL 1.5-MANUAL','XL O (D)-MANUAL','XL TURBO-MANUAL',
    'X-Line Diesel AT-AUTOMATIC','XL-MANUAL','XM CNG-MANUAL','XM DIESEL-MANUAL','XM PLUS(S) DIESEL-MANUAL','XM PLUS(S)-MANUAL','XM(S)DIESEL-MANUAL','XM(S)-MANUAL','XMA PLUS(S)-AUTOMATIC','XMA(S)-AUTOMATIC','XMA(S)-DIESEL-AUTOMATIC','XMA-AUTOMATION','XMA-MANUAL',
    'XMAS-AUTOMATIC','XM-MANUAL','XT CNG-MANUAL','XT PLUS DARK EDITION-MANUAL','XT PLUS-MANUAL','XT RHYTHM-MANUAL','XT(O)-MANUAL','XTA PLUS DARK EDITION-AUTOMATIC','XTA PLUS-AUTOMATIC','XTA-AUTOMATIC','XT-MANUAL','XV 1.5-MANUAL','XV DUAL TONE-MANUAL',
    'XV EXECUTIVE-MANUAL','XV Premium (O) Turbo 1.3 Dual Tone-MANUAL','XV Premium (O) Turbo 1.3-MANUAL','XV PREMIUM DUAL TONE-MANUAL','XV PREMIUM TURBO  DUAL TONE-MANUAL','XV Premium Turbo (O) CVT-AUTOMATION','XV Premium Turbo 1.3 CVT-AUTOMATION',
    'XV PREMIUM TURBO 1.3-MANUAL','XV Premium Turbo CVT Dual Tone-AUTOMATION','XV PREMIUM TURBO CVT-AUTOMATION','XV PREMIUM TURBO(O)-MANUAL','XV PREMIUM TURBO-MANUAL','XV PREMIUM-MANUAL','XV RED EDITION-MANUAL','XV TURBO 1.3 CVT-AUTOMATION','XV TURBO 1.3-MANUAL',
    'XV TURBO CVT RED EDITION-AUTOMATION','XV TURBO CVT-MANUAL','XV TURBO DUAL DUAL TONE-MANUAL','XV TURBO RED EDITION','XV TURBO-MANUAL','XV-MANUAL','XZ CNG LEATHERETTE PACK-MANUAL','XZ CNG-MANUAL','XZ DUAL TONE-MANUAL','XZ PLUS 6 S DARK EDITION-MANUAL',
    'XZ PLUS 6 S RED DARK EDITION','XZ PLUS 6 S-MANUAL','XZ PLUS 6S ADVANTURE-MANUAL','XZ PLUS ADVANTURE-MANUAL','XZ PLUS CNG DUAL TONE-MANUAL','XZ PLUS CNG-MANUAL','XZ PLUS DARK EDITION-MANUAL','XZ PLUS DIESEL DARK EDITION-MANUAL','XZ PLUS DUAL TONE-MANUAL',
    'XZ PLUS LEATHERETTE PACK-MANUAL','XZ Plus LUX Diesel Dark Edition-MANUAL','XZ Plus LUX Diesel Dual Tone-MANUAL','XZ Plus LUX Diesel-MANUAL','XZ PLUS LUX DUAL EDITION-MANUAL','XZ PLUS LUXS DIESEL-MANUAL','XZ PLUS LUXS DUAL TONE-MANUAL',
    'XZ PLUS LUXS KAZIRANGA-MANUAL','XZ PLUS LUXS-MANUAL','XZ PLUS RED DARK EDITION-MANUAL','XZ PLUS(S) DIESEL DARK EDITION-MANUAL','XZ PLUS-MANUAL','XZ PLUSS DARK EDITION-MANUAL','XZA  PLUS-AUTOMATIC','XZA DUAL TONE-AUTOMATIC',
    'XZA PLUS (O) 6 S ADVANTURE-AUTOMATIC','XZA PLUS (O) 6 S RED DARK EDITION-AUTOMATION','XZA PLUS (O) ADVANTURE-AUTOMATIC','XZA Plus (O) Dark Edition-AUTOMATION','XZA Plus (O) Dual Tone-AUTOMATION','XZA Plus (O) Red Dark Edition-AUTOMATION',
    'XZA Plus (O)-AUTOMATION','XZA PLUS (S) DARK EDITION-MANUAL','XZA PLUS 6 S ADVANTURE-AUTOMATIC','XZA PLUS 6 S RED DARK EDITION-AUTOMATIC','XZA PLUS 6 S-AUTOMATIC','XZA PLUS ADVANTURE-AUTOMATIC','XZA PLUS DARK EDITION-AUTOMATIC',
    'XZA PLUS DIESEL DARK EDITION-AUTOMATIC','XZA PLUS DUAL TONE-AUTOMATIC','XZA PLUS KUX DARK EDITION-AUTOMATIC','XZA PLUS LEATHERETTE PACK','XZA PLUS LUX-AUTOMATIC','XZA Plus LUXS Dark Edition-AUTOMATIC','XZA Plus LUXS Diesel Red Dark Edition-AUTOMATIC',
    'XZA PLUS LUXS DUAL TONE-AUTOMATIC','XZA PLUS LUXS KAZIRANGA-AUTOMATIC','XZA Plus Red Dark Edition-AUTOMATION','XZA PLUS(O) 6  S DARK EDITION-AUTOMATION','XZA PLUS(O)-AUTOMATIC','XZA PLUS(S) DIESEL-MANUAL','XZA PLUS(S)DARK EDITION-AUTOMATIC',
    'XZA PLUS-AUTOMATIC','XZA-AUTOMATIC','XZ-MANUAL','y2WD Diesel AT (Automation)','y2WD Petrol CVT [2018-2020] (Automation)','y4 WD (AT) Diesel (Manual)','yAdventure Rhythm Pack MT-MANUAL','yCamo Accomplished Dazzle MT-MANUAL','yCamo Adventure MT-MANUAL',
    'yCamo Adventure Rhythm AMT-AUTOMATIC','yCNG','yComfortline 1.0L TSI AT-AUTOMATIC','yComfortline 1.5 (D)-MANUAL','yE 1.5 Diesel(Manual)','yE Diesel (Manual)','yE Petrol  (Manual)','yEX 1.5 Petrol(Manual)','yEX 1.5 VTVT (Manual)','yG E-CNG(Manual)',
    'yGT Plus 1.5 TSI DSG (With Ventilated Seats)-AUTOMATIC','yGT-AUTOMATIC','yGTX Plus 1.5 AT Dual Tone-AUTOMATIC','yHighline 1.0 (P)-MANUAL','yHighline 1.5 (D) AT-AUTOMATIC','yHighline Plus 1.0L TSI Automatic-AUTOMATIC','yHighline Plus 1.0L TSI-MANUAL',
    'yHighline Plus 1.5 (D) AT-AUTOMATIC','yHighline Plus 1.5 (D)-MANUAL','yHTK Plus 1.0 Imt-MANUAL','yHTK Plus 1.5 Diesel Imt-MANUAL','yHTK Plus Diesel Imt-AUTOMATIC','yHTK Plus-MANUAL','yHTX 1.0 DCT-AUTOMATIC','yHTX Plus 1.0 iMT-MANUAL',
    'yHTX Plus Diesel Imt-AUTOMATIC','yLuxury Plus 1.4 Petrol 7 STR-MANUAL','yLuxury Plus 1.5 Turbo Petrol DCT 6 STR-AUTOMATIC','yNios Magna AMT 1.2 Kappa VTVT petrol (Automation(AMT))','yPremium 1.5 Diesel iMT 7 STR-MANUAL','yPremium 1.5 Turbo Petrol iMT 7 STR-MANUAL',
    'yPrestige 1.5 Petrol 7 STR-MANUAL','yPrestige Plus 1.5 Turbo Petrol iMT 7 STR-MANUAL','yRed and White Edition-AUTOMATIC','yS 1.2 Petrol (Manual)','yS E-CNG(Manual)','yS MT 1.5 TDCi-MANUAL','yS Plus 1.5 Petrol Knight(Manual)','ySignature 2.0 AT Petrol(Automation(TC))',
    'ySpecial Edition 2WD Petrol CVT (Automation)','ySportz Executive 1.2 Kappa VTVT petrol (Manual)','ySX (O) 1.0 Turbo DCT Dual Tone (Automation)','ySX (O) 1.5 Diesel Automatic (Atomation)','ySX (O) 1.5 Diesel Automatic knight  (Atomation)','ySX (O)1.5 VTVT (Manual)',
    'ySX 1.5 Petrol (Manual)','ySX 1.5 Turbo Petrol DCT Dual Tone (Manual)','ySX 1.5 VTVT IVT  (Automation)','yTitanium 1.5L TDCi [2020-2021]-MANUAL','yTopline 1.0 TSI MT-MANUAL','yTrend 1.5L Ti-VCT-MANUAL','yTrendline 1.5 (D)-MANUAL','yVX CVT Petrol [2019-2020] (Automation(CVT))',
    'yVX MT 1.2 Petrol(Manual)','yVX Petrol MT(Manual)','yVX Petrol Style Edition (Manual)','yXE-MANUAL','yXZ Plus Dark Edition-MANUAL','yXZ Plus Red Dark Edition-MANUAL','yXZA Plus Dark Edition-AUTOMATION','yXZA Plus Dual Tone-AUTOMATION','yXZA Plus LUXS Diesel Dual Tone-AUTOMATIC',
    'yXZA Plus LUXS Diesel Kaziranga-AUTOMATIC','yXZA Plus LUXS Red Dark Edition-AUTOMATIC','yXZA Plus-AUTOMATION','yZX Diesel [2019-2020]  (Manual)','yZX MT Diesel (Manual)','ZETA 1.2 MT DUAL TONE-MANUAL','ZETA 1.2 MT-MANUAL','ZETA 1.2AMT DUAL TONE-AUTOMATIC','ZETA 1.5 AT-AUTOMATIC',
    'ZETA 1.5-MANUAL','ZETA AGS-AUTOMATIC','ZETA AT-AUTOMATIC','ZETA MT CNG-MANUAL','ZETA MT-MANUAL','ZETA-MANUAL','ZX CVT (Automation(CVT))','ZX CVT Petrol (Automation(CVT))','ZX CVT petrol(Automation)','ZX petrol(Manual)','ZX Petrol MT(Manual)','ZX','ZXI AT DUAL TONE-AUTOMATIC',
    'ZXI (O) CNG-MANUAL','ZXI (O)-MANUAL','ZXI 1.2 AGS-AUTOMATIC','ZXI 1.2-MANUAL','ZXI AGS-AUTOMATIC','ZXI AMT-AUTOMATIC','ZXI AT-AUTOMATIC','ZXI CNG-MANUAL','ZXI DUAL TONE-MANUAL','ZXI PLUS 1.2 AGS-AUTOMATIC','ZXI PLUS 1.2 DUAL TONE-MANUAL','ZXI PLUS 1.2-MANUAL',
    'ZXI PLUS AGS DUAL TONE-AUTOMATIC','ZXI PLUS AGS-AUTOMATIC','ZXI PLUS AMT-AUTOMATIC','ZXI PLUS AT DUAL TONE-AUTOMATIC','ZXI PLUS AT-AUTOMATIC','ZXI PLUS DUAL TONE-MANUAL','ZXI PLUS-MANUAL','ZXI S-CNG DUAL TONE-MANUAL','ZXI S-CNG-MANUAL','ZXI-AUTOMATIC','ZXI-MANUAL'
  ]

  YearOfMake: string[] = [
    '1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'
  ]

  FuelType: string[] = [
    'Diesel','Petrol', 'Electric'
  ]


  constructor() { }
}

