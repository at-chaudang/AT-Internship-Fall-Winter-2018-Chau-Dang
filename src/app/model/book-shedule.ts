export class BookShedule {
    id: number;
    fullName: string;
    addess: string;
    phoneNumber: string;
    time: string;

    constructor(id:number, fullName: string, addess?, phoneNumber?, time?) {
        this.id = id;
        this.fullName = fullName || "Đặng Văn Châu";
        this.addess = addess || "Đà Nẵng";
        this.phoneNumber = phoneNumber || "110";
        this.time = time || "chưa xác định";
    }
}
