import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndustrialWithoutshedService {

  Area: string[] = [
    '<2000','2000-5000','5000-10000','10000-15000','15000-22000','22000+'
  ]

  Ownership: string[] = [
    'Open/Lease-Hold','Private','Government'
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
