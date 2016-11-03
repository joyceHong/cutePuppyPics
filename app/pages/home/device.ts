import {Page, NavController, NavParams} from "ionic-angular";
import {BLE} from "ionic-native";
import {Component} from '@angular/core';
@Component({
    templateUrl: "build/pages/home/device.html"
})

export class Device {
    static get parameters() {
        return [[NavParams], [NavController]];
    }
    private nav;
    private navParams;
    private device;
    private connecting;
    private characteristics;
    constructor(navParams, nav) {
        this.nav = nav;
        this.navParams = navParams;
        this.device = this.navParams.get("device");
        this.connecting = true;
        this.connect(this.device.id);
    }

    connect(deviceID) {
        this.characteristics = [];
        BLE.connect(deviceID).subscribe(peripheralData => {
            console.log(peripheralData.characteristics);
            this.characteristics = peripheralData.characteristics;
            this.connecting = false;
        },
            peripheralData => {
                console.log("disconnected");
            });
    }

    stringToBytes(string) {
        var array = new Uint8Array(string.length);
        for (var i = 0, l = string.length; i < l; i++) {
            array[i] = string.charCodeAt(i);
        }
        return array.buffer;
    }

    bytesToString(buffer) {
        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    }

    connectToCharacteristic(deviceID, characteristic) {
        alert(deviceID + "_" + characteristic);
        console.log("Connect To Characteristic");
        console.log(deviceID);
        console.log(characteristic);
        //you can write or read message 
    }
}