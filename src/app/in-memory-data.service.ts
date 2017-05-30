import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let carparts = [
      {id: 1, name: 'Honeywell'},
      {id: 2, name: 'Holset'},
      {id: 3, name: 'IHI'},
      {id: 4, name: 'Celeritas'},
      {id: 5, name: 'BorgWarner'},
      {id: 6, name: 'Garrett'},
      {id: 7, name: 'Cummins'},
    ];
        let engines = [
      {id: 11, name: '2JZ-GTE'},
      {id: 12, name: 'K20A2'},
      {id: 13, name: 'K16B6'},
      {id: 14, name: '1.4 TS'},
      {id: 15, name: '1.9 TDI'},
      {id: 16, name: 'N45'},
      {id: 17, name: 'S54'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: '4.2 FSI quattro'},
      {id: 20, name: 'V8 4.0 TwinTurbo'}
    ];
    return {carparts,engines};
  }
}