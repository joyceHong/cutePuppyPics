import {Component} from '@angular/core';
import {Page, NavController} from 'ionic-angular';
import {Device} from './device';
import {BLE} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
    private devices;
    private isScanning = false;
    constructor(public navController: NavController) {
        this.navController = navController;
        this.devices = [];
    }

    startScanning() {
        console.log("Scanning Started");
        this.devices = [];
        this.isScanning = true;
        BLE.enable();
        BLE.startScan([]).subscribe(device => {
            this.devices.push(device);
        });

        setTimeout(() => {
            BLE.stopScan().then(() => {
                console.log("Scanning has stopped");
                console.log(JSON.stringify(this.devices))
                this.isScanning = false;
            });
        }, 3000);
    }

    connectToDevice(device) {
        console.log("Connect To Device");
        console.log(JSON.stringify(device))
        this.navController.push(Device, {
            device: device
        });
    }   
}





