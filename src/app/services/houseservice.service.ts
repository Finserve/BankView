import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HouseserviceService {

  BHK: string[] = [
    '1-BHK','2-BHK', '3-BHK','4-BHK'
  ]

  Facing: string[] = [
    'North','East','South','West'
  ]

  FlatType: string[] = [
    'Furnished', 'Semi-furnished','None'
  ]

  Age: string[] = [
    '0-1','1-2','2-3','3-4','4-5'
  ]

  propertystatus: string[] = [
    'Ready', 'Under-Construction'
  ]

  constructor() { }
}
