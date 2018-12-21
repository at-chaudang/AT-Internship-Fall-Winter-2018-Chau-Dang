export class BookShedule {
    fullName: string;
    addess: string;
    phoneNumber: string;
    time: string;

    constructor(fullName: string, addess?, phoneNumber?, time?) {
        this.fullName = fullName || "Đặng Văn Châu";
        this.addess = addess || "Đà Nẵng";
        this.phoneNumber = phoneNumber || "110";
        this.time = time || "chưa xác định";
    }
}
