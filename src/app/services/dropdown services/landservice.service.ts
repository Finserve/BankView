import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandserviceService {

  Area: string[] = [
    '0-500', '500-1000','1000-2000','2000-5000','5000-10000','10000-15000','15000-22000','22000+'
  ]

  Ownership: string[] = [
    'Free-Hold','Lease-Hold','Co-operative Society','Power of Attorney'
  ]

  boundarywall: string[] = [
    'Yes','No'
  ]

  Security: string[] = [
    'Yes','No'
  ]

  ElectricityandWater: string[] = [
    'Available', 'Not-Available'
  ]

  constructor() { }
}
