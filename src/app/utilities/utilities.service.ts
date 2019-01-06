export class UtilitiesService {
    getUtilities() {

        return [
            { id:'mesure',icon: 'donut_small', desc: 'Citire Contoare', lastData: '3 mc' },
            {id:'pay', icon: 'monetization_on', desc: 'Plati', lastData: '15 lei' },
            {id:'event', icon: 'event', desc: 'Evenimente', lastData: 'Curatare curte 20/12' },
            //    {id:'contor',icon:'flash_on', desc:'Lumina', lastData:'-'},
            {id:'building', icon: 'location_city', desc: 'Bloc', lastData: '-' },
        ];
    }
}