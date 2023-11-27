navigator.bluetooth
  .requestDevice({
    acceptAllDevices: true,
    optionalServices: ["battery_service"],
  })
  .then((device) => device.gatt.connect())
  .then((server) => {
    return server.getPrimaryService("battery_service");
  })
  .then((service) => {
    // Getting Battery Level Characteristic…
    return service.getCharacteristic("battery_level");
  })
  .then((characteristic) => {
    // Reading Battery Level…
    return characteristic.readValue();
  })
  .then((characteristic) => {
    // Reading Battery Level…
    return characteristic.readValue();
  })
  .catch((error) => {
    console.error(error);
  });
