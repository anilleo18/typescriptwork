interface mobile {
    ios: string;
    android: string
    verison: number
    mobile_colors(): string;
    mobile_hmda(): boolean
}
class Mobiledevice implements mobile {

    ios: string;
    android: string
    verison: number

    constructor(ios: string, android: string, version: number) {
        this.ios = ios;
        this.android = android;
        this.verison = version
    }

    mobile_colors(): string {

        return "consular colors are red,black white"
    }

    mobile_hmda(): boolean {
        return true;
    }



}











