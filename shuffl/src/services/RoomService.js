    
import rooms from './rooms.json';

export default class RoomService {
    static getRooms() {
        return rooms ? rooms : [];
    }
}