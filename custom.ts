
/**
* Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
* Weitere Informationen unter https://makecode.calliope.cc/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * RGB-Funk blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {

    /**
     * RGB-Werte per Funk senden
     * @param r Rotwert, eg: 255
     * @param g Grünwert, eg: 255
     * @param b Blauwert, eg: 255
     */
    //% block
    export function sendRGB(r: number, g: number, b: number) {
        radio.sendValue("r", r)
        radio.sendValue("g", g)
        radio.sendValue("b", b)
    }
    /**
     * RGB-Werte per Funk Empfangen
     * @param value describe value here, eg: 5
     */
    //% block
    export function recieveRGB() {
        let r;
        let g;
        let b;
        radio.onReceivedValue(function (name: "r", value: number) {
            r = value
        })
        radio.onReceivedValue(function (name: "g", value: number) {
            g = value
        })
        radio.onReceivedValue(function (name: "b", value: number) {
            b = value
        })
        return (basic.rgb(r, g, b))
    }
}
